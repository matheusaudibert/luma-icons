import React from 'react';
import type { LumaIconProps } from '../types';

export const BrandsStrava = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 512 512"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M224.886 16 83 289.75h83.595l58.291-108.844L282.71 289.75h82.939zm140.762 273.75-41.141 82.688-41.798-82.688h-63.352L324.507 496 429 289.75z"></path>
  </svg>
);
