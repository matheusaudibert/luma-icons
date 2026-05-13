import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyWaterFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M12 19c-2.76 0-5-2.24-5-5 0-.55.45-1 1-1s1 .45 1 1c0 1.65 1.35 3 3 3 .55 0 1 .45 1 1s-.45 1-1 1m5.71.65C19.24 18.08 20 16.13 20 13.8c0-1.67-.66-3.48-1.99-5.44S14.68 4.28 12 2C9.32 4.28 7.31 6.4 5.99 8.36S4 12.13 4 13.8c0 2.33.76 4.28 2.29 5.85S9.72 22 12 22s4.19-.78 5.71-2.35"></path>
  </svg>
);
