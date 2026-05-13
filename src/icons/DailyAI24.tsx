import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyAI24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M11 4a10.365 10.365 0 0 0 9 9 10.365 10.365 0 0 0-9 9 10.365 10.365 0 0 0-9-9 10.365 10.365 0 0 0 9-9"></path><path fill="currentColor" d="M17.5 2A5.18 5.18 0 0 0 22 6.5a5.18 5.18 0 0 0-4.5 4.5A5.18 5.18 0 0 0 13 6.5 5.18 5.18 0 0 0 17.5 2"></path>
  </svg>
);
