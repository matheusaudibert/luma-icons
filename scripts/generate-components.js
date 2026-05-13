/**
 * Generates React TSX components from the extracted SVG files.
 *
 * Run after extract-icons.js:
 *   node scripts/generate-components.js
 *
 * Output:
 *   src/icons/<ComponentName>.tsx  — one file per icon
 *   src/index.ts                   — barrel with all exports
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICONS_DIR = path.join(__dirname, '..', 'public', 'icons');
const MANIFEST = path.join(__dirname, '..', 'public', 'icons-manifest.json');
const NO_COLOR_FILE = path.join(__dirname, '..', 'icons-to-no-color.txt');
const OUT_DIR = path.join(__dirname, '..', 'src', 'icons');
const INDEX_FILE = path.join(__dirname, '..', 'src', 'index.ts');

// ── Load config ───────────────────────────────────────────────────────────────

const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));

const noColorSet = new Set(
  fs.existsSync(NO_COLOR_FILE)
    ? fs.readFileSync(NO_COLOR_FILE, 'utf8').split('\n').map(l => l.trim()).filter(Boolean)
    : []
);

fs.mkdirSync(OUT_DIR, { recursive: true });

// ── Helpers ───────────────────────────────────────────────────────────────────

function toComponentName(iconPath) {
  return iconPath
    .split('/')
    .map(segment =>
      segment
        .split('-')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join('')
    )
    .join('');
}

function getViewBox(raw) {
  const m = raw.match(/viewBox="([^"]*)"/);
  return m ? m[1] : '0 0 24 24';
}

function getNaturalSize(raw) {
  const m = raw.match(/\bwidth="(\d+)"/);
  return m ? parseInt(m[1], 10) : 24;
}

function getSvgInner(raw) {
  const m = raw.match(/<svg[^>]*>([\s\S]*?)<\/svg>\s*$/i);
  return m ? m[1].trim() : '';
}

function sanitize(raw) {
  return raw
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/\n{2,}/g, '\n')
    .replace(/\s+(<\/svg>)/gi, '$1')
    .trim();
}

function makeColorable(inner) {
  return inner
    .replace(/\bfill="(?!none(?:"|$))[^"]*"/g, 'fill="currentColor"')
    .replace(/\bstroke="(?!none(?:"|$))[^"]*"/g, 'stroke="currentColor"');
}

function cssStringToJsxObject(css) {
  return css
    .split(';')
    .filter(s => s.trim())
    .map(rule => {
      const colon = rule.indexOf(':');
      if (colon === -1) return null;
      const prop = rule.slice(0, colon).trim()
        .replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      const val = rule.slice(colon + 1).trim().replace(/'/g, "\\'");
      return `${prop}: '${val}'`;
    })
    .filter(Boolean)
    .join(', ');
}

function toJsx(inner) {
  // Wrap <style> CSS content in JSX template literal to avoid {} parsing issues
  let result = inner.replace(/<style([^>]*)>([\s\S]*?)<\/style>/gi, (_, attrs, css) => {
    const escaped = css.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
    return `<style${attrs}>{\`${escaped}\`}</style>`;
  });

  // Convert inline style strings to JSX objects: style="a:b" → style={{ a: 'b' }}
  result = result.replace(/\bstyle="([^"]*)"/g, (_, css) => {
    return `style={{ ${cssStringToJsxObject(css)} }}`;
  });

  const attrMap = [
    [/\s+xmlns(:[^\s=]*)?\s*=\s*"[^"]*"/g, ''],
    [/\bxlink:href=/g, 'href='],
    [/\bxml:space=/g, 'xmlSpace='],
    [/\bclass=/g, 'className='],
    [/\bfill-rule=/g, 'fillRule='],
    [/\bclip-rule=/g, 'clipRule='],
    [/\bclip-path=/g, 'clipPath='],
    [/\bstroke-width=/g, 'strokeWidth='],
    [/\bstroke-linecap=/g, 'strokeLinecap='],
    [/\bstroke-linejoin=/g, 'strokeLinejoin='],
    [/\bstroke-dasharray=/g, 'strokeDasharray='],
    [/\bstroke-dashoffset=/g, 'strokeDashoffset='],
    [/\bstroke-miterlimit=/g, 'strokeMiterlimit='],
    [/\bstroke-opacity=/g, 'strokeOpacity='],
    [/\bfill-opacity=/g, 'fillOpacity='],
    [/\bstop-color=/g, 'stopColor='],
    [/\bstop-opacity=/g, 'stopOpacity='],
    [/\bflood-color=/g, 'floodColor='],
    [/\bflood-opacity=/g, 'floodOpacity='],
    [/\blighting-color=/g, 'lightingColor='],
    [/\bcolor-interpolation-filters=/g, 'colorInterpolationFilters='],
    [/\bcolor-interpolation=/g, 'colorInterpolation='],
    [/\bmarker-end=/g, 'markerEnd='],
    [/\bmarker-start=/g, 'markerStart='],
    [/\bmarker-mid=/g, 'markerMid='],
    [/\bpaint-order=/g, 'paintOrder='],
    [/\bshape-rendering=/g, 'shapeRendering='],
    [/\btext-rendering=/g, 'textRendering='],
    [/\bimage-rendering=/g, 'imageRendering='],
    [/\bvector-effect=/g, 'vectorEffect='],
    [/\bpointer-events=/g, 'pointerEvents='],
  ];

  for (const [pattern, replacement] of attrMap) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

function indentLines(str, spaces) {
  const pad = ' '.repeat(spaces);
  return str
    .split('\n')
    .map(line => (line.trim() ? pad + line.trim() : ''))
    .join('\n');
}

// ── Component templates ───────────────────────────────────────────────────────

function colorableComponent(name, viewBox, size, inner) {
  return `import React from 'react';
import type { LumaIconProps } from '../types';

export const ${name} = ({ size = ${size}, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="${viewBox}"
    style={{ color, ...style }}
    {...props}
  >
${inner}
  </svg>
);
`;
}

function noColorComponent(name, viewBox, size, inner) {
  return `import React from 'react';
import type { LumaIconNoColorProps } from '../types';

export const ${name} = ({ size = ${size}, ...props }: LumaIconNoColorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="${viewBox}"
    {...props}
  >
${inner}
  </svg>
);
`;
}

// ── Main ──────────────────────────────────────────────────────────────────────

const exports = [];
let generated = 0;
let skipped = 0;

for (const iconPath of manifest) {
  const svgFile = path.join(ICONS_DIR, ...iconPath.split('/')) + '.svg';

  if (!fs.existsSync(svgFile)) {
    skipped++;
    continue;
  }

  const raw = sanitize(fs.readFileSync(svgFile, 'utf8'));
  const viewBox = getViewBox(raw);
  const naturalSize = getNaturalSize(raw);
  const inner = getSvgInner(raw);

  if (!inner) {
    skipped++;
    continue;
  }

  const isNoColor = noColorSet.has(iconPath);
  const processedInner = isNoColor ? inner : makeColorable(inner);
  const jsxInner = indentLines(toJsx(processedInner), 4);
  const name = toComponentName(iconPath);

  const content = isNoColor
    ? noColorComponent(name, viewBox, naturalSize, jsxInner)
    : colorableComponent(name, viewBox, naturalSize, jsxInner);

  fs.writeFileSync(path.join(OUT_DIR, `${name}.tsx`), content, 'utf8');
  exports.push(name);
  generated++;
}

// ── Barrel ────────────────────────────────────────────────────────────────────

const indexLines = exports
  .map(name => `export { ${name} } from './icons/${name}';`)
  .join('\n');

const indexContent =
  indexLines +
  "\nexport type { LumaIconProps, LumaIconNoColorProps } from './types';\n";

fs.writeFileSync(INDEX_FILE, indexContent, 'utf8');

console.log(`✓ ${generated} components generated in src/icons/`);
if (skipped > 0) console.log(`⚠  ${skipped} icons skipped (file missing or empty)`);
console.log('✓ src/index.ts written');
