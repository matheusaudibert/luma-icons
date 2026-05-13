import React from 'react';
import type { LumaIconProps } from '../types';

export const Moon16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.436 9.644c.033-.018.073.012.062.049a6.634 6.634 0 0 1-6.37 4.807A6.629 6.629 0 0 1 6.3 1.502c.036-.01.066.029.048.062A5.99 5.99 0 0 0 7.41 8.59a5.97 5.97 0 0 0 7.027 1.053"></path>
  </svg>
);
