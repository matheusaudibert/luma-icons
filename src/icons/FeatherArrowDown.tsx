import React from 'react';
import type { LumaIconNoColorProps } from '../types';

export const FeatherArrowDown = ({ size = 2, ...props }: LumaIconNoColorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 5v14M19 12l-7 7-7-7"></path>
  </svg>
);
