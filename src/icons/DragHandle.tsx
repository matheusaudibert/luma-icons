import React from 'react';
import type { LumaIconProps } from '../types';

export const DragHandle = ({ size = 2, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path>
  </svg>
);
