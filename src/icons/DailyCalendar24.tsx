import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyCalendar24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M21 5h-3V3h-2v2H8V3H6v2H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1m-1 14H4v-8h16zM4 9V7h16v2z"></path>
  </svg>
);
