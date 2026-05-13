import React from 'react';
import type { LumaIconProps } from '../types';

export const Stack16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5.367 7.806-3.301 2.15a1.23 1.23 0 0 0 .061 2.108l4.521 2.597a2.57 2.57 0 0 0 2.552 0l4.505-2.588a1.23 1.23 0 0 0 .054-2.114l-3.323-2.127M9.2 1.34l4.403 2.529a1.23 1.23 0 0 1 0 2.146L9.2 8.542a2.57 2.57 0 0 1-2.552 0L2.247 6.014a1.231 1.231 0 0 1 0-2.146l4.402-2.529a2.57 2.57 0 0 1 2.552 0"></path>
  </svg>
);
