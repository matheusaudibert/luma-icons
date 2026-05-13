import React from 'react';
import type { LumaIconProps } from '../types';

export const BrandsStripe2 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m1.75 13.75 12-2.545V1.75l-12 2.575z"></path>
  </svg>
);
