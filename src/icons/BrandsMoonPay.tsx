import React from 'react';
import type { LumaIconProps } from '../types';

export const BrandsMoonPay = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M13.076 5.358A1.926 1.926 0 0 0 15 3.429 1.926 1.926 0 0 0 13.077 1.5a1.926 1.926 0 0 0-1.923 1.929c0 1.065.861 1.929 1.923 1.929M6.385 14.77c2.973 0 5.384-2.418 5.384-5.4 0-2.984-2.41-5.402-5.384-5.402S1 6.387 1 9.37s2.41 5.401 5.385 5.401" clipRule="evenodd"></path>
  </svg>
);
