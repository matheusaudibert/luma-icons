/**
 * Extrai todos os ícones SVG do Luma Style Guide usando Playwright.
 *
 * Estratégia dupla:
 *   1. Intercepta TODAS as respostas de rede com SVG antes de carregar a página
 *   2. Extrai SVGs inline do DOM depois da renderização (fallback)
 *
 * Como rodar:
 *   npm install
 *   npx playwright install chromium
 *   node scripts/extract-icons.js
 *
 * Os arquivos são salvos em: ./public/icons/<categoria>/NomeDoIcone.svg
 */

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_DIR = path.join(__dirname, '..', 'public', 'icons');
const URL     = 'https://luma.com/style-guide/icons';

// ─── helpers ──────────────────────────────────────────────────────────────────

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function sanitize(name) {
  return name.replace(/[<>:"/\\|?*]/g, '_').trim();
}

function saveSvg(relativePath, content) {
  // relativePath example: "brands/Discord" or "Alarm16"
  const parts   = relativePath.split('/');
  const fileName = sanitize(parts.pop()) + '.svg';
  const dir     = path.join(OUT_DIR, ...parts.map(sanitize));
  ensureDir(dir);
  const dest = path.join(dir, fileName);
  fs.writeFileSync(dest, content, 'utf8');
  return dest;
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise(resolve => {
      let pos = 0;
      const step = 600;
      const delay = 80;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        pos += step;
        if (pos >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, delay);
    });
  });
  await page.waitForTimeout(1500);
}

// ─── main ─────────────────────────────────────────────────────────────────────

(async () => {
  ensureDir(OUT_DIR);

  const captured = new Map(); // relativePath → svgContent

  // ── 1. Launch browser ──────────────────────────────────────────────────────
  const browser = await chromium.launch({
    headless: false,   // visível para não acionar bot-detection do Cloudflare
    slowMo: 0,
  });

  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    viewport: { width: 1440, height: 900 },
    locale: 'en-US',
  });

  const page = await context.newPage();

  // ── 2. Interceptar respostas SVG da rede ───────────────────────────────────
  page.on('response', async (response) => {
    const url = response.url();
    const ct  = response.headers()['content-type'] || '';

    const isSvg =
      ct.includes('image/svg') ||
      (url.includes('.svg') && !url.includes('_next/static/chunks'));

    if (!isSvg) return;

    try {
      const body = await response.text();
      if (!body.includes('<svg') && !body.includes('<?xml')) return;

      // Deriva nome relativo a partir da URL
      // Ex: cdn.lu.ma/icons/brands/Discord.svg → brands/Discord
      const urlObj   = new URL(url);
      const filePath = urlObj.pathname; // /icons/brands/Discord.svg
      const match    = filePath.match(/\/icons\/(.+?)(?:\.svg)?$/i);
      const relPath  = match ? match[1] : path.basename(filePath, '.svg');

      if (!captured.has(relPath)) {
        captured.set(relPath, body);
        console.log(`[net]  ${relPath}`);
      }
    } catch (_) {}
  });

  // ── 3. Navegar e aguardar renderização ────────────────────────────────────
  console.log('Abrindo', URL, '…');
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60_000 });

  // Scroll completo para forçar lazy-load
  await autoScroll(page);

  // ── 4. Extração DOM (fallback para SVGs inline) ───────────────────────────
  const domIcons = await page.evaluate(() => {
    const results = [];

    document.querySelectorAll('svg').forEach((svg) => {
      if (!svg.innerHTML.trim()) return;

      // Ignora ícones de UI do próprio site (nav, header, buttons)
      if (svg.closest('header, nav, button, [role="button"]')) return;

      // Tenta extrair o nome do ícone a partir de texto próximo
      let name = null;

      // data-* ou aria-label
      name = svg.dataset.icon || svg.getAttribute('aria-label') || null;

      // Texto no mesmo card (pai > pai)
      if (!name) {
        let el = svg.parentElement;
        for (let i = 0; i < 4; i++) {
          if (!el) break;
          el.childNodes.forEach(child => {
            if (child.nodeType === Node.TEXT_NODE) {
              const t = child.textContent.trim();
              if (t && t.length > 1 && t.length < 60) name = name || t;
            } else if (
              child.nodeType === Node.ELEMENT_NODE &&
              child.tagName !== 'SVG' &&
              child.tagName !== 'BUTTON'
            ) {
              const t = child.textContent.trim();
              if (t && t.length > 1 && t.length < 60) name = name || t;
            }
          });
          el = el.parentElement;
        }
      }

      if (name) {
        const clone = svg.cloneNode(true);
        clone.removeAttribute('class');
        results.push({ name, svg: clone.outerHTML });
      }
    });

    return results;
  });

  domIcons.forEach(({ name, svg }) => {
    // Só usa DOM se a rede não capturou esse ícone
    if (!captured.has(name)) {
      captured.set(name, svg);
      console.log(`[dom]  ${name}`);
    }
  });

  // ── 5. Salvar arquivos ────────────────────────────────────────────────────
  console.log(`\nSalvando ${captured.size} ícones em ${OUT_DIR} …`);

  let saved = 0;
  for (const [relPath, content] of captured.entries()) {
    saveSvg(relPath, content);
    saved++;
  }

  console.log(`\n✓ ${saved} ícones salvos em ./public/icons/`);

  // Gera manifest JSON com a lista de todos os ícones
  const manifest = Array.from(captured.keys()).sort();
  fs.writeFileSync(
    path.join(OUT_DIR, '..', 'icons-manifest.json'),
    JSON.stringify(manifest, null, 2),
    'utf8'
  );
  console.log('✓ icons-manifest.json gerado');

  await browser.close();
})();
