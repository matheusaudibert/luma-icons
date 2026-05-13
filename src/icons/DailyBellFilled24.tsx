import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyBellFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M20.59 16.998A20.8 20.8 0 0 1 19 9.013 7 7 0 0 0 12 2C8.13 2 5 5.122 5 8.993c0 2.712-.53 5.393-1.55 7.894L3 17.998h5a4 4 0 1 0 8 0h5zM12 19.999c-1.1 0-2-.9-2-2.001h4c0 1.1-.9 2.001-2 2.001"></path>
  </svg>
);
