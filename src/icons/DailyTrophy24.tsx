import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyTrophy24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M17 5V3H7v2H3v3.76c0 1.14.64 2.17 1.66 2.68l2.41 1.2c.28 2.12 1.86 3.83 3.93 4.25v2.1H7v2h10v-2h-4v-2.1a4.98 4.98 0 0 0 3.93-4.25l2.41-1.2A2.99 2.99 0 0 0 21 8.76V5zM5 8.76V7h2v3.38l-1.45-.72A.99.99 0 0 1 5 8.77zM12 15c-1.65 0-3-1.35-3-3V5h6v7c0 1.65-1.35 3-3 3m7-6.24c0 .38-.21.72-.55.89l-1.45.72V6.99h2z"></path>
  </svg>
);
