import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyCalendarPlus24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M19 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3zM8 2v2h8V2h2v2h2a1 1 0 0 1 1 1v7h-2v-2H5v9h7v2H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2V2zm11 4H5v2h14z"></path>
  </svg>
);
