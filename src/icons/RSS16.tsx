import React from 'react';
import type { LumaIconProps } from '../types';

export const RSS16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M2 1.25a.75.75 0 1 0 0 1.5c6.213 0 11.25 5.037 11.25 11.25a.75.75 0 0 0 1.5 0C14.75 6.958 9.042 1.25 2 1.25M1.25 7.5A.75.75 0 0 1 2 6.75 7.25 7.25 0 0 1 9.25 14a.75.75 0 0 1-1.5 0A5.75 5.75 0 0 0 2 8.25a.75.75 0 0 1-.75-.75m2.5 6a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"></path>
  </svg>
);
