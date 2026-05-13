import React from 'react';
import type { LumaIconProps } from '../types';

export const Chat16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 1C4.14 1 1 4.046 1 7.79c.022 1.666.616 3.243 1.636 4.38.182.203.297.46.297.733V15l2.441-.714c.197-.057.406-.051.603.006.662.193 1.34.29 2.023.288 3.86 0 7-3.046 7-6.79S11.86 1 8 1"></path>
  </svg>
);
