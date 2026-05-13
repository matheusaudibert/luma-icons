import React from 'react';
import type { LumaIconProps } from '../types';

export const CheckSquareFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M8 .5c3.287 0 4.93 0 6.037.908q.305.25.555.555C15.5 3.069 15.5 4.713 15.5 8s0 4.93-.908 6.037a4 4 0 0 1-.555.555c-1.106.908-2.75.908-6.037.908s-4.93 0-6.037-.908a4 4 0 0 1-.555-.555C.5 12.931.5 11.287.5 8s0-4.93.908-6.037q.25-.305.555-.555C3.069.5 4.713.5 8 .5m4.474 4.455a.75.75 0 0 0-1.06.03l-4.64 4.903-2.113-2.385a.75.75 0 0 0-1.123.994l2.658 3a.75.75 0 0 0 1.107.019l5.2-5.5a.75.75 0 0 0-.03-1.06Z"></path>
  </svg>
);
