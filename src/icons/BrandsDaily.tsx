import React from 'react';
import type { LumaIconProps } from '../types';

export const BrandsDaily = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M9.15 6.377V2.5C4.697 6.52.35 6.879.35 6.879V13.5s3.017-.25 6.6-2.658V13.5s4.347-.359 8.8-4.379V2.5c-2.476 2.234-4.918 3.338-6.6 3.877"></path>
  </svg>
);
