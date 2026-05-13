import React from 'react';
import type { LumaIconProps } from '../types';

export const SendFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M7.998 10.142a.79.79 0 0 1 .209-.756l.939-.939a1 1 0 0 0-1.414-1.414l-.834.833a.79.79 0 0 1-.75.21C3.417 7.39-2.003 5.752.767 4.153 3.464 2.596 11.968.053 14.977 0c.596-.01 1.033.426 1.022 1.022-.052 3.009-2.595 11.513-4.152 14.21-1.544 2.675-3.124-2.288-3.85-5.09" clipRule="evenodd"></path>
  </svg>
);
