import React from 'react';
import type { LumaIconProps } from '../types';

export const LockFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12.5 4.397C12.5 1.944 10.463.001 8.01 0 5.555-.01 3.51 1.924 3.5 4.378v.765A3.51 3.51 0 0 0 1 8.513v3.974C1 14.427 2.561 16 4.487 16h7.026C13.44 16 15 14.428 15 12.487V8.513a3.51 3.51 0 0 0-2.5-3.37zM10.5 5v-.603C10.5 3.1 9.41 2 8.007 2h-.004C6.601 1.994 5.507 3.087 5.5 4.385V5z"></path>
  </svg>
);
