import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyUserFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M16.5 7.5c0 2.49-2.01 4.5-4.5 4.5S7.5 9.99 7.5 7.5 9.51 3 12 3s4.5 2.01 4.5 4.5M19.99 21c.66 0 1.14-.62.98-1.26C20.2 16.47 16.48 14 12 14s-8.2 2.48-8.97 5.74c-.15.64.32 1.26.98 1.26z"></path>
  </svg>
);
