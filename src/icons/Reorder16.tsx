import React from 'react';
import type { LumaIconProps } from '../types';

export const Reorder16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M1 2a.75.75 0 0 0 0 1.5h12A.75.75 0 0 0 13 2zm6 5.5A.75.75 0 0 0 7 9h8a.75.75 0 0 0 0-1.5zM.25 13.75A.75.75 0 0 1 1 13h12a.75.75 0 0 1 0 1.5H1a.75.75 0 0 1-.75-.75m3.11-5.978L1.6 6.452a1 1 0 0 0-1.6.8v2a1 1 0 0 0 1.6.8l1.76-1.32a.6.6 0 0 0 0-.96"></path>
  </svg>
);
