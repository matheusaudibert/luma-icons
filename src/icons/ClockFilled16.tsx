import React from 'react';
import type { LumaIconProps } from '../types';

export const ClockFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16m-.75-8c0 .21.087.401.227.537l1.993 1.993a.75.75 0 0 0 1.06-1.06L9.75 8.69V5a.75.75 0 0 0-1.5 0z"></path>
  </svg>
);
