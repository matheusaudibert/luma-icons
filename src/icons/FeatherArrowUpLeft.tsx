import React from 'react';
import type { LumaIconNoColorProps } from '../types';

export const FeatherArrowUpLeft = ({ size = 2, ...props }: LumaIconNoColorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M17 17 7 7M7 17V7h10"></path>
  </svg>
);
