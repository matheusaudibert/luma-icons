import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyPhoneFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M7.24 3c-.5 0-.99.19-1.37.57L4.14 5.301a3.89 3.89 0 0 0-.91 4.073A19.05 19.05 0 0 0 14.62 20.77c.43.16.88.23 1.33.23a3.9 3.9 0 0 0 2.75-1.14l1.73-1.732c.76-.76.76-1.99 0-2.751l-2.11-2.111a1.94 1.94 0 0 0-1.37-.57c-.49 0-.99.19-1.37.57l-1.44 1.44a17.5 17.5 0 0 1-4.85-4.852l1.44-1.441c.76-.76.76-1.991 0-2.752l-2.11-2.09A1.94 1.94 0 0 0 7.25 3z"></path>
  </svg>
);
