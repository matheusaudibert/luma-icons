import React from 'react';
import type { LumaIconProps } from '../types';

export const SearchThick16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M11.5 6.672a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-.665 5.249a6.5 6.5 0 1 1 1.414-1.414l2.958 2.958a1 1 0 0 1-1.414 1.414z"></path>
  </svg>
);
