import React from 'react';
import type { LumaIconNoColorProps } from '../types';

export const FeatherArrowLeft = ({ size = 2, ...props }: LumaIconNoColorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M19 12H5M12 19l-7-7 7-7"></path>
  </svg>
);
