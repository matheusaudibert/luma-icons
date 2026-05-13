import React from 'react';
import type { LumaIconProps } from '../types';

export const Download16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M1.226 8.936a.75.75 0 0 1 .75.75v1.935c0 1.19.964 2.153 2.153 2.153h7.742c1.19 0 2.153-.963 2.153-2.153v-1.79a.75.75 0 1 1 1.5 0v1.79a3.653 3.653 0 0 1-3.653 3.653H4.13a3.653 3.653 0 0 1-3.653-3.653V9.686a.75.75 0 0 1 .75-.75zM8 1a.75.75 0 0 1 .75.75v6.9l2.59-2.592a.75.75 0 0 1 1.061 1.06L8.54 10.981a.747.747 0 0 1-1.079 0L3.599 7.119a.75.75 0 0 1 1.06-1.06l2.591 2.59V1.751a.75.75 0 0 1 .75-.75z"></path>
  </svg>
);
