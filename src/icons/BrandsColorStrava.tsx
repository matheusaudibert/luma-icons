import React from 'react';
import type { LumaIconProps } from '../types';

export const BrandsColorStrava = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 512 512"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="none"><path fill="currentColor" d="M224.886 16 83 289.75h83.595l58.291-108.844 57.823 108.844h82.939z"></path><path fill="currentColor" d="m365.648 289.75-41.141 82.688-41.798-82.688h-63.352L324.507 496 429 289.75z"></path></g>
  </svg>
);
