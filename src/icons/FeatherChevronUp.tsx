import React from 'react';
import type { LumaIconNoColorProps } from '../types';

export const FeatherChevronUp = ({ size = 2, ...props }: LumaIconNoColorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m18 15-6-6-6 6"></path>
  </svg>
);
