import React from 'react';
import type { LumaIconProps } from '../types';

export const NotificationsRibbon16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M8 1.481a4.49 4.49 0 0 1 4.49 4.49 4.47 4.47 0 0 1-1.266 3.12l.613 4.135a1.165 1.165 0 0 1-1.617 1.238L8 13.499l-2.219.965a1.165 1.165 0 0 1-1.618-1.239l.611-4.133A4.49 4.49 0 0 1 8 1.482m1.374 8.764a4.5 4.5 0 0 1-2.748 0l-.264 1.785.976-.425a1.66 1.66 0 0 1 1.325 0l.975.425z"></path>
  </svg>
);
