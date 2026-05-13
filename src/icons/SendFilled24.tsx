import React from 'react';
import type { LumaIconProps } from '../types';

export const SendFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M11.997 14.945a1.09 1.09 0 0 1 .288-1.04l1.291-1.29a1.375 1.375 0 1 0-1.945-1.945l-1.145 1.145a1.09 1.09 0 0 1-1.033.29C5.7 11.159-1.754 8.908 2.054 6.71 5.764 4.569 17.457 1.072 21.594 1c.82-.014 1.42.586 1.406 1.406-.072 4.137-3.569 15.83-5.71 19.54-2.123 3.678-4.295-3.147-5.293-7"></path>
  </svg>
);
