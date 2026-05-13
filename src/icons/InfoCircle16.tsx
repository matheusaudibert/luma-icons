import React from 'react';
import type { LumaIconProps } from '../types';

export const InfoCircle16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="currentColor" fillRule="evenodd"><path d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0m1.5 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"></path><path d="M6.4 7.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 .75.75v3.25h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2.5h-.25a.75.75 0 0 1-.75-.75m1.575-1.6a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25"></path></g>
  </svg>
);
