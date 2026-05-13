import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyLap24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M22 11c0 3.87-3.128 7-6.996 7v-2a5 5 0 0 0 0-10H9.007a5 5 0 0 0 0 10h.59l-1.59-1.59L9.417 13l3.997 4-3.998 4-1.409-1.41 1.58-1.58h-.59a6.993 6.993 0 0 1-6.997-7A7.01 7.01 0 0 1 9.007 4h5.997A6.993 6.993 0 0 1 22 11"></path>
  </svg>
);
