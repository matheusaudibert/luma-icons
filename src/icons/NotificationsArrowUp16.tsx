import React from 'react';
import type { LumaIconProps } from '../types';

export const NotificationsArrowUp16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M7.37 5.058a1 1 0 0 1 1.337.069l4 4a1 1 0 0 1-1.414 1.414L9 8.248V14.5a1 1 0 0 1-2 0V8.248L4.707 10.54a1 1 0 0 1-1.414-1.414l4-4zm5.296-3.391a1 1 0 1 1 0 2H3.333a1 1 0 0 1 0-2z"></path>
  </svg>
);
