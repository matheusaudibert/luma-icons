import React from 'react';
import type { LumaIconProps } from '../types';

export const BrandsColorStripe = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="none" fillRule="evenodd"><path fill="currentColor" d="M3.705.5h8.59c1.115 0 1.519.116 1.926.334s.727.538.945.945.334.811.334 1.926v8.59c0 1.115-.116 1.519-.334 1.926a2.27 2.27 0 0 1-.945.945c-.407.218-.811.334-1.926.334h-8.59c-1.115 0-1.519-.116-1.926-.334a2.27 2.27 0 0 1-.945-.945C.616 13.814.5 13.41.5 12.295v-8.59c0-1.115.116-1.519.334-1.926s.538-.727.945-.945S2.59.5 3.705.5"></path><path fill="currentColor" d="m3.75 12.25 8.5-1.803V3.75l-8.5 1.824z"></path></g>
  </svg>
);
