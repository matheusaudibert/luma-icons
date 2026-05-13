import React from 'react';
import type { LumaIconProps } from '../types';

export const SparkItalic = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M10.028 2H12a.8.8 0 0 1 0 1.6h-1.44L7.142 13H9a.8.8 0 0 1 0 1.6H4A.8.8 0 0 1 4 13h1.44l3.418-9.4H7A.8.8 0 0 1 7 2z" clipRule="evenodd"></path>
  </svg>
);
