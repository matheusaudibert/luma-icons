import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyBell24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M20.59 17A20.8 20.8 0 0 1 19 9.02c0-3.88-3.13-7.01-7-7.01S5 5.13 5 9c0 2.71-.53 5.39-1.55 7.89L3 18h5c0 2.21 1.79 4 4 4s4-1.79 4-4h5zM12 20c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2m3.45-4H5.9C6.63 13.74 7 11.39 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5.01c0 2.39.37 4.73 1.09 6.99h-2.65z"></path>
  </svg>
);
