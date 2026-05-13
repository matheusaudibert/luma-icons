import React from 'react';
import type { LumaIconProps } from '../types';

export const BrandsEthereum = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 80 80"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M63.984 40.75 40 55.25l-24-14.5L40 0zM40 59.906l-24-14.5L40 80l24-34.594z"></path>
  </svg>
);
