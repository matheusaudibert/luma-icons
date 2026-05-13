import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyPlusCircleFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m6 11h-5v5h-2v-5H6v-2h5V6h2v5h5z"></path>
  </svg>
);
