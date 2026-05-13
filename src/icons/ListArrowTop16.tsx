import React from 'react';
import type { LumaIconProps } from '../types';

export const ListArrowTop16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M1 14.25a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 0 1.5zM7 3.252a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 0 1.5zM.25 8.002c0 .414.336.75.75.75h12a.75.75 0 0 0 0-1.5H1a.75.75 0 0 0-.75.75m3.11-5.02L1.6 4.302a1 1 0 0 1-1.6-.8v-2a1 1 0 0 1 1.6-.8l1.76 1.32a.6.6 0 0 1 0 .96" clipRule="evenodd"></path>
  </svg>
);
