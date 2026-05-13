import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyEditFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="m13.47 4.53.29-.29c.83-.83 1.91-1.24 3-1.24s2.17.41 3 1.24a4.237 4.237 0 0 1 0 6l-.29.29zm-1.41 1.41L4 14l-1 7 7-1 8.06-8.06z"></path>
  </svg>
);
