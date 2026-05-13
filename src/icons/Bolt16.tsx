import React from 'react';
import type { LumaIconProps } from '../types';

export const Bolt16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M6.785 8.868H3.301a.3.3 0 0 1-.237-.485L8.75 1.116a.3.3 0 0 1 .536.185v5.392a.3.3 0 0 0 .3.3h3.485a.3.3 0 0 1 .236.484L7.62 14.745a.3.3 0 0 1-.536-.185V9.168a.3.3 0 0 0-.3-.3Z"></path>
  </svg>
);
