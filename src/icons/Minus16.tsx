import React from 'react';
import type { LumaIconProps } from '../types';

export const Minus16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M14.75 8a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75"></path>
  </svg>
);
