import React from 'react';
import type { LumaIconProps } from '../types';

export const Search16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0m-.965 5.096a6.5 6.5 0 1 1 1.06-1.06l2.935 2.934a.75.75 0 1 1-1.06 1.06z"></path>
  </svg>
);
