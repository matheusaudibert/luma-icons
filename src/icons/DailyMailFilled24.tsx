import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyMailFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M2 6.46V5c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v1.46L12 10.9zm10 6.63L2 8.65V19c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V8.65z"></path>
  </svg>
);
