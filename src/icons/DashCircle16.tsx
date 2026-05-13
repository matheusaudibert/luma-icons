import React from 'react';
import type { LumaIconProps } from '../types';

export const DashCircle16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0m1.5 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m-4 .75a.75.75 0 0 0 0-1.5h-7a.75.75 0 0 0 0 1.5z"></path>
  </svg>
);
