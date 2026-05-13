import React from 'react';
import type { LumaIconProps } from '../types';

export const Block16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M11.68 12.74a6 6 0 0 1-8.42-8.42zm1.06-1.06L4.32 3.26a6 6 0 0 1 8.42 8.42M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0" clipRule="evenodd"></path>
  </svg>
);
