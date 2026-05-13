import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyRunTempo16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M4.667 2 2 9.333h4L4.667 14h2L14 5.333h-4L11 2z"></path>
  </svg>
);
