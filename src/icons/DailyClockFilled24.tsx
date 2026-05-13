import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyClockFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m2.29 13.71-3-3A1 1 0 0 1 11 12V6h2v5.59l2.71 2.71-1.41 1.41z"></path>
  </svg>
);
