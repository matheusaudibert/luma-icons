import React from 'react';
import type { LumaIconProps } from '../types';

export const DashCircleFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m3.5-6.75a.75.75 0 0 0 0-1.5h-7a.75.75 0 0 0 0 1.5z"></path>
  </svg>
);
