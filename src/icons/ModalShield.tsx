import React from 'react';
import type { LumaIconProps } from '../types';

export const ModalShield = ({ size = 2, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="none" fillRule="evenodd"><path fill="currentColor" fillOpacity="0.133" fillRule="nonzero" d="m15.476 3 11 4.5v12l-5 7-6 3.5z"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m11.667 15.865 2.216 2.54 5.403-5.715m6.582 4.801c0 7.211-6.588 10.764-9.273 11.912a2.82 2.82 0 0 1-2.238 0c-2.685-1.148-9.272-4.7-9.272-11.912 0-9.058-.377-9.765.458-10.636.833-.871 8.57-3.688 9.933-3.688s9.1 2.817 9.935 3.688c.833.871.457 1.578.457 10.636"></path></g>
  </svg>
);
