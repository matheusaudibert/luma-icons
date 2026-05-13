import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyArrowLeft24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M21.998 11.004H5.41l5.589-5.593L9.589 4 2.29 11.295a.997.997 0 0 0 0 1.41L9.58 20l1.409-1.41-5.59-5.594h16.589v-2.002z"></path>
  </svg>
);
