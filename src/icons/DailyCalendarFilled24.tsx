import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyCalendarFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M2 11h20v9c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1zm19-6h-3V3h-2v2H8V3H6v2H3c-.55 0-1 .45-1 1v3h20V6c0-.55-.45-1-1-1"></path>
  </svg>
);
