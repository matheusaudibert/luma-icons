import React from 'react';
import type { LumaIconProps } from '../types';

export const FeatherChevronRight = ({ size = 2, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path d="m9 18 6-6-6-6"></path>
  </svg>
);
