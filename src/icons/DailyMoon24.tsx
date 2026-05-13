import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyMoon24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M6 6.34v.28c0 6.07 4.93 11 11 11h.28c-1.43 1.26-3.29 2-5.28 2-4.41 0-8-3.59-8-8 0-1.99.75-3.85 2-5.28M9.28 2A9.995 9.995 0 0 0 2 11.62c0 5.52 4.48 10 10 10 4.58 0 8.43-3.08 9.62-7.28A8.95 8.95 0 0 1 17 15.62a9 9 0 0 1-9-9C8 4.93 8.47 3.35 9.28 2"></path>
  </svg>
);
