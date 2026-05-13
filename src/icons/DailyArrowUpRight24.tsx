import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyArrowUpRight24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M20 3H8v2h9.59L3 19.59 4.41 21 19 6.41V16h2V4c0-.55-.45-1-1-1"></path>
  </svg>
);
