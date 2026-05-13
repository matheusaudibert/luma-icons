import React from 'react';
import type { LumaIconNoColorProps } from '../types';

export const BrandsColorDaily = ({ size = 24, ...props }: LumaIconNoColorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    {...props}
  >
    <path fill="#fc3400" d="M9.15 6.377V2.5C4.697 6.52.35 6.879.35 6.879V13.5s3.017-.25 6.6-2.658V13.5s4.347-.359 8.8-4.379V2.5c-2.476 2.234-4.918 3.338-6.6 3.877"></path>
  </svg>
);
