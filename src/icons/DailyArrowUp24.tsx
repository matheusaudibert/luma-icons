import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyArrowUp24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M11.002 22V5.412l-5.594 5.59-1.41-1.41 7.294-7.3a.997.997 0 0 1 1.411 0l7.295 7.29-1.411 1.41-5.594-5.59V21.99h-2.001z"></path>
  </svg>
);
