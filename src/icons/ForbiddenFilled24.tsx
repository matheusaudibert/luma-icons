import React from 'react';
import type { LumaIconProps } from '../types';

export const ForbiddenFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11M7 10a2 2 0 1 0 0 4h10a2 2 0 1 0 0-4z"></path>
  </svg>
);
