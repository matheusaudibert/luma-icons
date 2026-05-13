import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyDirection24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M6 22V9.994h10.588l-4.59 4.592 1.41 1.411 6.3-6.293a.997.997 0 0 0 0-1.41L13.418 2l-1.41 1.41 4.58 4.583H6c-1.1 0-2 .9-2 2.001V22z"></path>
  </svg>
);
