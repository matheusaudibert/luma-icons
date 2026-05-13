import React from 'react';
import type { LumaIconNoColorProps } from '../types';

export const FeatherChevronsRight = ({ size = 2, ...props }: LumaIconNoColorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m13 17 5-5-5-5M6 17l5-5-5-5"></path>
  </svg>
);
