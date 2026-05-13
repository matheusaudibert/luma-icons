import React from 'react';
import type { LumaIconProps } from '../types';

export const ArrowTurnLeft16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M9.47.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6A3.25 3.25 0 0 0 2.75 9v5a.75.75 0 0 1-1.5 0V9A4.75 4.75 0 0 1 6 4.25h6.19L9.47 1.53a.75.75 0 0 1 0-1.06" clipRule="evenodd"></path>
  </svg>
);
