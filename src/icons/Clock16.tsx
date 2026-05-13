import React from 'react';
import type { LumaIconProps } from '../types';

export const Clock16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m0 1.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m-.523-6.963A.75.75 0 0 1 7.25 8V4a.75.75 0 0 1 1.5 0v3.69l1.195 1.194a.75.75 0 0 1-1.061 1.06z"></path>
  </svg>
);
