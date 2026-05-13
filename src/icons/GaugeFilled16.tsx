import React from 'react';
import type { LumaIconProps } from '../types';

export const GaugeFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M8.066 15.632c4.138 0 7.566-3.42 7.566-7.566C15.632 3.928 12.204.5 8.059.5 3.92.5.5 3.928.5 8.066c0 4.145 3.428 7.566 7.566 7.566m1.201-6.424c-.644.623-1.545.491-2.05-.263L4.542 5.07c-.308-.454.146-.9.593-.6L9.01 7.143c.754.505.886 1.406.256 2.065"></path>
  </svg>
);
