import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyBellActiveFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M19 9.01C19 5.13 15.87 2 12 2S5 5.13 5 9c0 2.71-.53 5.39-1.55 7.89L3 18h5c0 2.21 1.79 4 4 4s4-1.79 4-4h5l-.41-1A20.8 20.8 0 0 1 19 9.02zM12 20c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2M2 9c0-2.68.96-5.07 2.7-6.72l1.38 1.45C4.74 5 4.01 6.88 4.01 9.01H2zm17.3-6.72C21.04 3.94 22 6.32 22 9h-2c0-2.13-.74-4-2.08-5.28l1.38-1.45z"></path>
  </svg>
);
