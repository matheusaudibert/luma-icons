import React from 'react';
import type { LumaIconProps } from '../types';

export const User16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M11.5 4.5C11.5 2.5 10 1 8 1S4.5 2.5 4.5 4.5 6 7 6 8c0 2.5-4.5 1.5-4.5 4.5C1.5 14.5 5 15 8 15s6.5-.5 6.5-2.5c0-3-4.5-2-4.5-4.5 0-1 1.5-1.5 1.5-3.5Z"></path>
  </svg>
);
