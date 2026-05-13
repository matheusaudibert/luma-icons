import React from 'react';
import type { LumaIconProps } from '../types';

export const UserFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <g clipPath="url(#UserFilled16_svg__a)"><path fill="currentColor" d="m5.529 8.556-.001-.003C5.528 7.5 3.8 7 3.8 4.4 3.8 1.987 5.664 0 8 0s4.2 1.987 4.2 4.4c0 2.6-1.728 3.1-1.728 4.153v.003c0 1.531 4.528 1.609 4.528 4.353C15 16.066 10.036 16 8 16s-7 .066-7-3.09c0-2.745 4.529-2.823 4.529-4.354"></path></g><defs><clipPath id="UserFilled16_svg__a"><path fill="currentColor" d="M0 0h16v16H0z"></path></clipPath></defs>
  </svg>
);
