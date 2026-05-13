import React from 'react';
import type { LumaIconProps } from '../types';

export const UserCheckFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="none" fillRule="evenodd"><path fill="currentColor" fillRule="nonzero" d="m5.029 8.556-.001-.003C5.028 7.5 3.3 7 3.3 4.4 3.3 1.987 5.164 0 7.5 0s4.2 1.987 4.2 4.4c0 2.041-1.065 3.437-1.523 3.943.285-.292.69-.707-.028.031q-.104.111-.15.154l-.027.028C8.666 9.896 6.5 10.5 7.5 13s.86 3 0 3c-2.036 0-7 .066-7-3.09 0-2.745 4.529-2.823 4.529-4.354"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9.5 11.722 1.454 1.778 3.546-4"></path></g>
  </svg>
);
