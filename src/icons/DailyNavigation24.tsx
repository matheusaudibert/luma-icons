import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyNavigation24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="m17.49 6.51-3.46 8.89-1.19-3.15-.32-.85-.86-.32-3.03-1.12 8.85-3.44M21 3 3 10l7.97 2.95L14 21z"></path>
  </svg>
);
