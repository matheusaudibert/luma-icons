import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyRunTrail16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="m14 12-2.727-3.333h2.06L8 2 2.667 8.667h2.06L2 12h4v2h4v-2z"></path>
  </svg>
);
