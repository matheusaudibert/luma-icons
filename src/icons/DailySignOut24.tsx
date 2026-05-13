import React from 'react';
import type { LumaIconProps } from '../types';

export const DailySignOut24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M8 13h9.59L14 16.59 15.41 18l5.29-5.29a.996.996 0 0 0 0-1.41l-5.29-5.29L14 7.42l3.59 3.59H8v2zM4 3h6v2H5v14h5v2H4c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1"></path>
  </svg>
);
