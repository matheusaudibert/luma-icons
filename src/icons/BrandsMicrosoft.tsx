import React from 'react';
import type { LumaIconProps } from '../types';

export const BrandsMicrosoft = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 512 512"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M32 32h214.6v214.6H32zm233.4 0H480v214.6H265.4zM32 265.4h214.6V480H32zm233.4 0H480V480H265.4z"></path>
  </svg>
);
