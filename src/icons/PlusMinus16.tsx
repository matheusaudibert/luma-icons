import React from 'react';
import type { LumaIconProps } from '../types';

export const PlusMinus16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .75.75v3H12A.75.75 0 0 1 12 7H8.75v3a.75.75 0 0 1-1.5 0V7H4a.75.75 0 0 1 0-1.5h3.25v-3A.75.75 0 0 1 8 1.75M3.25 14a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"></path>
  </svg>
);
