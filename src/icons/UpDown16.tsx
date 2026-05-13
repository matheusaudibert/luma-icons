import React from 'react';
import type { LumaIconProps } from '../types';

export const UpDown16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M4.164 10.253a1 1 0 1 0-1.328 1.494l4.5 4a1 1 0 0 0 1.328 0l4.5-4a1 1 0 0 0-1.328-1.494L8 13.662zm7.672-4.506a1 1 0 0 0 1.328-1.494l-4.5-4a1 1 0 0 0-1.328 0l-4.5 4a1 1 0 1 0 1.328 1.494L8 2.338z"></path>
  </svg>
);
