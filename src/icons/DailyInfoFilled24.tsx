import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyInfoFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 6c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1m-2 3h2v6h-2z"></path>
  </svg>
);
