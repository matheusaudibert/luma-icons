import React from 'react';
import type { LumaIconProps } from '../types';

export const XCircleThickFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M5.374 3.96A1 1 0 1 0 3.96 5.374L6.586 8 3.96 10.626a1 1 0 1 0 1.414 1.415L8 9.414l2.627 2.627a1 1 0 1 0 1.414-1.415L9.415 8l2.626-2.626a1 1 0 0 0-1.414-1.414L8 6.586z"></path>
  </svg>
);
