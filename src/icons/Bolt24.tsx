import React from 'react';
import type { LumaIconProps } from '../types';

export const Bolt24 = ({ size = 2, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="none" stroke="currentColor" strokeWidth="2" d="M9.678 13.551H4.45a.45.45 0 0 1-.355-.727l8.527-10.9a.45.45 0 0 1 .805.277v8.088c0 .249.201.45.45.45h5.226a.45.45 0 0 1 .355.727l-8.527 10.9a.45.45 0 0 1-.804-.276V14a.45.45 0 0 0-.45-.45Z"></path>
  </svg>
);
