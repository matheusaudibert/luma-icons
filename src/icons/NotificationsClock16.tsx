import React from 'react';
import type { LumaIconProps } from '../types';

export const NotificationsClock16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13m-.246 2.415a.835.835 0 0 0-.835.835V8q0 .043.004.085l.01.075a.84.84 0 0 0 .23.43l1.625 1.626a.835.835 0 0 0 1.18-1.182l-1.38-1.38V4.75a.835.835 0 0 0-.834-.835"></path>
  </svg>
);
