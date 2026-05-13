import React from 'react';
import type { LumaIconProps } from '../types';

export const SparkBold = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M4.8 7.2V2.8H8a2.2 2.2 0 0 1 0 4.4zM3.2 8V2.778c0-.872.707-1.578 1.578-1.578H8a3.8 3.8 0 0 1 2.748 6.425A3.8 3.8 0 0 1 9 14.8H5.263A2.063 2.063 0 0 1 3.2 12.737zm1.6 4.737V8.8H9a2.2 2.2 0 0 1 0 4.4H5.263a.463.463 0 0 1-.463-.463" clipRule="evenodd"></path>
  </svg>
);
