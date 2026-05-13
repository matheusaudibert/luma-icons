import React from 'react';
import type { LumaIconProps } from '../types';

export const Adaptive16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M2 8.024A6.024 6.024 0 0 1 8.024 2v12.048A6.024 6.024 0 0 1 2 8.024M8.024.5a7.524 7.524 0 1 0 0 15.048A7.524 7.524 0 0 0 8.024.5"></path>
  </svg>
);
