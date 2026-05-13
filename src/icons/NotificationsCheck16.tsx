import React from 'react';
import type { LumaIconProps } from '../types';

export const NotificationsCheck16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M10.963 4.114a1.25 1.25 0 1 1 2.026 1.463l-5.26 7.287a1.25 1.25 0 0 1-1.942.104l-2.84-3.152a1.25 1.25 0 0 1 1.858-1.673l1.803 2.002z"></path>
  </svg>
);
