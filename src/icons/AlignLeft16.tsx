import React from 'react';
import type { LumaIconProps } from '../types';

export const AlignLeft16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M1.25 3A.75.75 0 0 1 2 2.25h12a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 3m0 5A.75.75 0 0 1 2 7.25h8a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 8M2 12.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clipRule="evenodd"></path>
  </svg>
);
