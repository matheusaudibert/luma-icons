import React from 'react';
import type { LumaIconProps } from '../types';

export const PlusCircleThick16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0m2 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H9v2a1 1 0 1 1-2 0V9H5a1 1 0 1 1 0-2h2V5a1 1 0 0 1 1-1"></path>
  </svg>
);
