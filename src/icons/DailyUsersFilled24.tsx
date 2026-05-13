import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyUsersFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M12.495 7.5c0 2.49-2.01 4.5-4.498 4.5a4.493 4.493 0 0 1-4.498-4.5A4.495 4.495 0 0 1 7.997 3a4.493 4.493 0 0 1 4.498 4.5m4.528 7.5c-.96 0-1.76.25-2.43.64.71 1.16 1.18 2.57 1.34 4.16.04.41 0 .81-.13 1.2h5.278c.54 0 .97-.47.91-1-.31-2.63-1.88-5-4.968-5m-3.978 6a.9.9 0 0 0 .9-.99c-.32-3.14-2.2-6.01-5.968-6.01S2.33 16.87 2 20.01c-.05.53.37.99.9.99zm3.948-15a3.503 3.503 0 0 0-3.499 3.5c0 1.93 1.57 3.5 3.499 3.5a3.503 3.503 0 0 0 3.498-3.5c0-1.93-1.57-3.5-3.498-3.5"></path>
  </svg>
);
