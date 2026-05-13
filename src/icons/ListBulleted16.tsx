import React from 'react';
import type { LumaIconProps } from '../types';

export const ListBulleted16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M2.5 3.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-.25h8a.75.75 0 0 0 0-1.5h-8a.75.75 0 0 0 0 1.5m0 4a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 5.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zM3.5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clipRule="evenodd"></path>
  </svg>
);
