import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyPinFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M12 1a8.8 8.8 0 0 0-8.8 8.8C3.2 16.4 12 23 12 23s8.8-6.6 8.8-13.2A8.8 8.8 0 0 0 12 1m0 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"></path>
  </svg>
);
