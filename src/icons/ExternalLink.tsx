import React from 'react';
import type { LumaIconProps } from '../types';

export const ExternalLink = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M4 6a2 2 0 0 1 2-2h1a1 1 0 0 0 0-2H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-1a1 1 0 1 0-2 0v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8-4a1 1 0 1 0 0 2h2.657l-6.364 6.364a1 1 0 0 0 1.414 1.414L16 5.485V8a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
  </svg>
);
