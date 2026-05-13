import React from 'react';
import type { LumaIconProps } from '../types';

export const CheckFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" d="m2.65 8.041 3.862 4.309 6.86-8.7"></path>
  </svg>
);
