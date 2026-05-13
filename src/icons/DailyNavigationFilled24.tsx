import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyNavigationFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M21 3 3 10l7.97 2.95L14 21z"></path>
  </svg>
);
