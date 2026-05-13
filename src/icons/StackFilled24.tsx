import React from 'react';
import type { LumaIconProps } from '../types';

export const StackFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M9.9 13.365a4.46 4.46 0 0 0 4.504 0l6.712-3.935a2.51 2.51 0 0 0 1.258-2.192 2.52 2.52 0 0 0-1.256-2.193L14.404 1.11a4.47 4.47 0 0 0-4.503 0L3.188 5.045A2.52 2.52 0 0 0 1.93 7.238c.001.912.47 1.732 1.257 2.192zm8.913-.499-3.524 2.066a6.21 6.21 0 0 1-6.275 0l-3.572-2.094-2.56 1.703a2.53 2.53 0 0 0-1.13 2.189 2.52 2.52 0 0 0 1.253 2.117L9.9 22.89a4.44 4.44 0 0 0 4.502 0l6.871-4.027a2.52 2.52 0 0 0 1.255-2.13 2.53 2.53 0 0 0-1.147-2.189z"></path>
  </svg>
);
