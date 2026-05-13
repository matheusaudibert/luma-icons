import React from 'react';
import type { LumaIconProps } from '../types';

export const PaymentVenmoDark = ({ size = 36, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 36 24"
    style={{ color, ...style }}
    {...props}
  >
    <rect width="36" height="24" fill="currentColor" rx="6"></rect><path fill="currentColor" d="M23.275 8.46c0 3.064-2.557 7.045-4.633 9.84h-4.74L12 6.67l4.151-.402 1.005 8.275c.94-1.566 2.099-4.025 2.099-5.702 0-.918-.154-1.543-.394-2.058L22.641 6c.437.738.634 1.499.634 2.46"></path>
  </svg>
);
