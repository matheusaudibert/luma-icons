import React from 'react';
import type { LumaIconProps } from '../types';

export const Insights16 = ({ size = 2, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M3 14V9m5 5V2m5 12V6"></path>
  </svg>
);
