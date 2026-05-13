import React from 'react';
import type { LumaIconProps } from '../types';

export const ModalGemLock = ({ size = 2, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    style={{ color, ...style }}
    {...props}
  >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M29.206 15.365a3.02 3.02 0 0 0 .265-3.75l-4.577-6.69a3.06 3.06 0 0 0-2.52-1.325H9.64a3.05 3.05 0 0 0-2.519 1.324l-4.59 6.69a3.02 3.02 0 0 0 .263 3.752l10.77 11.774a2 2 0 0 0 1.476.65h.245l-4.418-12.424c-.37-1.04-.412-2.592-.101-3.751L12.898 3.6M2.013 13.316h27.973M19.11 3.6 22 13.316"></path><rect width="9" height="6" x="19.5" y="22.5" fill="currentColor" fillOpacity="0.133" stroke="currentColor" rx="1.5"></rect><path fill="currentColor" fillOpacity="0.133" fillRule="evenodd" d="M26.3 28.5h-4.6c-1.261 0-2.283-.977-2.283-2.182v-2.466c0-1.205 1.022-2.182 2.283-2.182h4.6c1.259 0 2.283.977 2.283 2.182v2.466c0 1.205-1.024 2.182-2.283 2.182" clipRule="evenodd"></path><path fill="currentColor" fillOpacity="0.133" d="M26.749 21.714v-1.623c-.02-1.448-1.264-2.61-2.78-2.59-1.487.016-2.686 1.159-2.712 2.578v1.635"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M26.749 21.714v-1.623c-.02-1.448-1.264-2.61-2.78-2.59-1.487.016-2.686 1.159-2.712 2.578v1.635M26.3 28.5h-4.6c-1.261 0-2.283-.977-2.283-2.182v-2.466c0-1.205 1.022-2.182 2.283-2.182h4.6c1.259 0 2.283.977 2.283 2.182v2.466c0 1.205-1.024 2.182-2.283 2.182"></path>
  </svg>
);
