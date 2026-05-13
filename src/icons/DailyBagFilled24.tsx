import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyBagFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M16 4.1V2h-2v2h-4V2H8v2.1A5 5 0 0 0 4 9v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V9a5 5 0 0 0-4-4.9M10 8h4v2h-4zm6 9c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h6c.55 0 1 .45 1 1z"></path>
  </svg>
);
