import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyRunLong16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M1.33 8.003 4.663 2.67h2v2.667H9.33V2.67h2l3.333 5.333-3.333 5.334h-2V10.67H6.663v2.667h-2z"></path>
  </svg>
);
