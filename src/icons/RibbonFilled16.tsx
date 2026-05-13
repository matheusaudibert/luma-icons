import React from 'react';
import type { LumaIconProps } from '../types';

export const RibbonFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M11.787 10.327a5.75 5.75 0 1 0-7.573 0l-.43 4.3a.95.95 0 0 0 1.218 1.005l2.984-.896a.05.05 0 0 1 .028 0l2.984.896a.95.95 0 0 0 1.219-1.004zm-1.417.913a5.7 5.7 0 0 1-2.37.51 5.7 5.7 0 0 1-2.37-.51l-.272 2.72 2.196-.66a1.55 1.55 0 0 1 .892 0l2.196.66z" clipRule="evenodd"></path>
  </svg>
);
