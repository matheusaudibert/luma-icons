import React from 'react';
import type { LumaIconProps } from '../types';

export const Gauge16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M8.066 15.632c4.138 0 7.566-3.42 7.566-7.566C15.632 3.928 12.204.5 8.059.5 3.92.5.5 3.928.5 8.066c0 4.145 3.428 7.566 7.566 7.566m0-1.487a6.06 6.06 0 0 1-6.072-6.08 6.045 6.045 0 0 1 6.065-6.07 6.064 6.064 0 0 1 6.086 6.07c0 3.37-2.71 6.08-6.08 6.08m1.18-4.958c.6-.63.475-1.495-.243-1.985L5.268 4.63c-.432-.293-.857.139-.564.564l2.57 3.735c.492.718 1.349.857 1.971.257"></path>
  </svg>
);
