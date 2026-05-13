import React from 'react';
import type { LumaIconProps } from '../types';

export const SlidersFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M2.17 3a3.001 3.001 0 0 1 5.66 0H15a1 1 0 1 1 0 2H7.83a3.001 3.001 0 0 1-5.66 0H1a1 1 0 0 1 0-2zM6 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7.83 9H15a1 1 0 1 0 0-2h-1.17a3.001 3.001 0 0 0-5.66 0H1a1 1 0 1 0 0 2h7.17a3.001 3.001 0 0 0 5.66 0M12 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
  </svg>
);
