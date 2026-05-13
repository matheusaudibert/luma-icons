import React from 'react';
import type { LumaIconProps } from '../types';

export const DailySignIn24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M21 4v16c0 .55-.45 1-1 1h-6v-2h5V5h-5V3h6c.55 0 1 .45 1 1M3 13h9.59L9 16.59 10.41 18l5.29-5.29a.996.996 0 0 0 0-1.41L10.41 6 9 7.41 12.59 11H3z"></path>
  </svg>
);
