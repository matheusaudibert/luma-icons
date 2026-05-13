import React from 'react';
import type { LumaIconProps } from '../types';

export const SparkDivider = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M14.8 2.4a.8.8 0 0 1-.8.8h-1.5a.8.8 0 0 1 0-1.6H14a.8.8 0 0 1 .8.8m-4.5 0a.8.8 0 0 1-.8.8h-3a.8.8 0 0 1 0-1.6h3a.8.8 0 0 1 .8.8m-6 0a.8.8 0 0 1-.8.8H2a.8.8 0 0 1 0-1.6h1.5a.8.8 0 0 1 .8.8M14.8 8a.8.8 0 0 1-.8.8H2a.8.8 0 1 1 0-1.6h12a.8.8 0 0 1 .8.8m-.8 6.4a.8.8 0 0 0 0-1.6h-1.5a.8.8 0 0 0 0 1.6zm-4.5 0a.8.8 0 0 0 0-1.6h-3a.8.8 0 0 0 0 1.6zm-6 0a.8.8 0 0 0 0-1.6H2a.8.8 0 0 0 0 1.6z" clipRule="evenodd"></path>
  </svg>
);
