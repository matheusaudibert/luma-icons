import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyPlus24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7z"></path>
  </svg>
);
