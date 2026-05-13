import React from 'react';
import type { LumaIconProps } from '../types';

export const ExploreFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m-4.365-3.135c.193.193.27.473.204.737l-.884 3.536a1.81 1.81 0 0 1-1.317 1.317l-3.536.884a.776.776 0 0 1-.94-.941l.883-3.536a1.81 1.81 0 0 1 1.317-1.317l3.536-.884a.78.78 0 0 1 .737.204"></path>
  </svg>
);
