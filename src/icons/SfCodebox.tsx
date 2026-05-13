import React from 'react';
import type { LumaIconProps } from '../types';

export const SfCodebox = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M.23 33.36c0 3.876 2.174 6.01 6.07 6.01h35.028c3.896 0 6.07-2.134 6.07-6.01V15.026c0-3.876-2.174-5.988-6.07-5.988H6.3c-3.896 0-6.07 2.112-6.07 5.988zm12.817-5.865a3.3 3.3 0 0 1-3.301-3.302 3.3 3.3 0 0 1 3.301-3.301 3.3 3.3 0 0 1 3.302 3.301 3.3 3.3 0 0 1-3.302 3.302m10.787 0c-1.804 0-3.28-1.477-3.28-3.302s1.476-3.301 3.28-3.301a3.3 3.3 0 0 1 3.302 3.301 3.3 3.3 0 0 1-3.302 3.302m10.788 0c-1.805 0-3.282-1.477-3.282-3.302s1.477-3.301 3.282-3.301a3.3 3.3 0 0 1 3.301 3.301 3.3 3.3 0 0 1-3.301 3.302"></path>
  </svg>
);
