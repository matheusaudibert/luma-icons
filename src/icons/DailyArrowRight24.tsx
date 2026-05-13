import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyArrowRight24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M1.998 11.004h16.588l-5.59-5.593L14.406 4l7.3 7.295a1 1 0 0 1 0 1.41L14.415 20l-1.41-1.41 5.59-5.594H2.008v-2.002z"></path>
  </svg>
);
