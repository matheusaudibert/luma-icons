import React from 'react';
import type { LumaIconProps } from '../types';

export const ModalGem = ({ size = 2, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="none" fillRule="evenodd"><path fill="currentColor" fillOpacity="0.133" fillRule="nonzero" d="m19.11 3.5 2.126 8.015c.309 1.16.266 2.712-.103 3.75L16.715 27.69c-.383 1.08-1.047 1.08-1.43 0l-4.418-12.424c-.37-1.04-.412-2.592-.101-3.751L12.898 3.5"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.013 13.216h27.973M19.11 3.5l2.127 8.015c.309 1.16.266 2.712-.103 3.75L16.715 27.69c-.383 1.08-1.047 1.08-1.43 0l-4.418-12.424c-.37-1.04-.412-2.592-.101-3.751L12.898 3.5M2.794 15.266 14.16 27.69a2.496 2.496 0 0 0 3.68 0l11.367-12.425a3.02 3.02 0 0 0 .265-3.75l-4.577-6.69a3.06 3.06 0 0 0-2.52-1.325H9.64a3.05 3.05 0 0 0-2.519 1.324l-4.59 6.69a3.02 3.02 0 0 0 .263 3.752"></path></g>
  </svg>
);
