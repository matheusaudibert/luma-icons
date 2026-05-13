import React from 'react';
import type { LumaIconProps } from '../types';

export const ArrowRight16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M9.469 12.47a.75.75 0 1 0 1.06 1.06l4.98-4.98a.75.75 0 0 0 .241-.551.75.75 0 0 0-.23-.54l-4.99-4.992a.75.75 0 1 0-1.061 1.06l3.72 3.722H1a.75.75 0 0 0 0 1.5h12.19z"></path>
  </svg>
);
