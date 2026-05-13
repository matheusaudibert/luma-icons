import React from 'react';
import type { LumaIconProps } from '../types';

export const ClockArrow16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M1.071 7H.643a.641.641 0 0 0-.501 1.042l1.23 1.539c.257.32.746.32 1.002 0l1.231-1.539A.641.641 0 0 0 3.105 7H2.59A5.502 5.502 0 0 1 13.5 8a5.5 5.5 0 0 1-9.196 4.074.75.75 0 0 0-1.008 1.111A7 7 0 1 0 1.071 7m6.167 1.53a.75.75 0 0 1-.22-.53V5a.75.75 0 0 1 1.5 0v2.69L9.53 8.7a.75.75 0 0 1-1.06 1.06z" clipRule="evenodd"></path>
  </svg>
);
