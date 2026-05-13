import React from 'react';
import type { LumaIconProps } from '../types';

export const ClockThick16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m0 2A8 8 0 1 0 8 0a8 8 0 0 0 0 16m-.876-7.518A1 1 0 0 1 7 8V4a1 1 0 1 1 2 0v3.586l1.121 1.121a1 1 0 0 1-1.414 1.414L7.301 8.715a1 1 0 0 1-.177-.233"></path>
  </svg>
);
