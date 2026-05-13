import React from 'react';
import type { LumaIconNoColorProps } from '../types';

export const FeatherArrowRight = ({ size = 2, ...props }: LumaIconNoColorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M5 12h14M12 5l7 7-7 7"></path>
  </svg>
);
