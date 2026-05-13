import React from 'react';
import type { LumaIconProps } from '../types';

export const DetailsFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M1.674 1.778C1 2.787 1 4.19 1 7v2c0 2.809 0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C3.787 16 5.19 16 8 16s4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C15 13.213 15 11.81 15 9V7c0-2.809 0-4.213-.674-5.222A4 4 0 0 0 13.222.674C12.213 0 10.81 0 8 0S3.787 0 2.778.674a4 4 0 0 0-1.104 1.104M4.5 7.5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"></path>
  </svg>
);
