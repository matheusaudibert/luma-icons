import React from 'react';
import type { LumaIconProps } from '../types';

export const GaugeRight16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M8.066 15.632C3.928 15.632.5 12.212.5 8.066.5 3.928 3.928.5 8.073.5c4.139 0 7.559 3.428 7.559 7.566 0 4.145-3.428 7.566-7.566 7.566m0-1.487c3.37 0 6.072-2.71 6.072-6.08a6.045 6.045 0 0 0-6.065-6.07 6.064 6.064 0 0 0-6.086 6.07c0 3.37 2.71 6.08 6.08 6.08m-1.18-4.958c-.6-.63-.475-1.495.243-1.985l3.735-2.571c.432-.293.857.139.564.564L8.858 8.93c-.492.718-1.349.857-1.971.257"></path>
  </svg>
);
