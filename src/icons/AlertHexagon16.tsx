import React from 'react';
import type { LumaIconProps } from '../types';

export const AlertHexagon16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M6.625 15.072c.85.492 1.9.492 2.75 0l4.062-2.345a2.75 2.75 0 0 0 1.375-2.382v-4.69a2.75 2.75 0 0 0-1.375-2.382L9.375.928a2.75 2.75 0 0 0-2.75 0L2.563 3.273a2.75 2.75 0 0 0-1.375 2.382v4.69c0 .983.524 1.89 1.375 2.382zm2-1.299a1.25 1.25 0 0 1-1.25 0l-4.062-2.345a1.25 1.25 0 0 1-.625-1.083v-4.69c0-.447.238-.86.625-1.083l4.062-2.345a1.25 1.25 0 0 1 1.25 0l4.062 2.345c.387.224.625.636.625 1.083v4.69c0 .447-.238.86-.625 1.083zM8.755 5a.75.75 0 1 0-1.5 0v4a.75.75 0 0 0 1.5 0zm0 6.526a.75.75 0 0 0-1.5 0v.038a.75.75 0 0 0 1.5 0z" clipRule="evenodd"></path>
  </svg>
);
