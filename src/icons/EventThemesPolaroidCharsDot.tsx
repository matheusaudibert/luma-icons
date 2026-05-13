import React from 'react';
import type { LumaIconProps } from '../types';

export const EventThemesPolaroidCharsDot = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 6 30"
    style={{ color, ...style }}
    {...props}
  >
    <path d="M3.296 20.028q.672 0 .8 1.088-.192 1.12-1.12 1.12-.64 0-.896-1.12.384-1.088 1.216-1.088"></path>
  </svg>
);
