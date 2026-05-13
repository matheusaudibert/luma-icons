import React from 'react';
import type { LumaIconProps } from '../types';

export const Refresh16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M13.194 5.823a.75.75 0 0 0 .53-.919L12.626.806a.75.75 0 0 0-1.449.388l.591 2.206A6.75 6.75 0 1 0 14.75 9a.75.75 0 0 0-1.5 0 5.25 5.25 0 1 1-2.164-4.247q.044.031.092.057l-2.47.662a.75.75 0 1 0 .388 1.449z"></path>
  </svg>
);
