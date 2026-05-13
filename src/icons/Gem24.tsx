import React from 'react';
import type { LumaIconProps } from '../types';

export const Gem24 = ({ size = 2, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1.51 9.687h20.98M14.332 2.4l1.595 6.011c.231.87.2 2.034-.077 2.812l-3.314 9.32c-.287.81-.785.81-1.072 0L8.15 11.225c-.277-.78-.309-1.944-.076-2.814l1.6-6.011m-7.578 8.825 8.523 9.318c.74.81 2.02.81 2.76 0l8.525-9.32a2.265 2.265 0 0 0 .199-2.812L18.67 3.394a2.29 2.29 0 0 0-1.89-.994H7.23a2.29 2.29 0 0 0-1.89.993L1.899 8.41a2.266 2.266 0 0 0 .198 2.814"></path>
  </svg>
);
