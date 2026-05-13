import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyBag24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M16 4.1V2h-2v2h-4V2H8v2.1A5 5 0 0 0 4 9v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V9a5 5 0 0 0-4-4.9M18 20H6V9c0-1.65 1.35-3 3-3h6c1.65 0 3 1.35 3 3zm-3-8H9c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m-1 4h-4v-2h4zm0-6h-4V8h4z"></path>
  </svg>
);
