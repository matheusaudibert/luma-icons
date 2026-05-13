import React from 'react';
import type { LumaIconProps } from '../types';

export const InsightsFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M8 15.5C.5 15.5.5 13.625.5 8S.5.5 8 .5s7.5 1.875 7.5 7.5 0 7.5-7.5 7.5M9 5a1 1 0 0 0-2 0v6.333a1 1 0 1 0 2 0zm3.333 2.144a1 1 0 1 0-2 0v4.189a1 1 0 1 0 2 0zM5.667 9.111a1 1 0 0 0-2 0v2.223a1 1 0 1 0 2 0V9.11"></path>
  </svg>
);
