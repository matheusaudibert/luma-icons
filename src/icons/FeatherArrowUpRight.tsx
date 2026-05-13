import React from 'react';
import type { LumaIconProps } from '../types';

export const FeatherArrowUpRight = ({ size = 2, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path d="M7 17 17 7M7 7h10v10"></path>
  </svg>
);
