import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyTimer24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="m18.464 7.436 1.739-1.742-1.41-1.411-1.929 1.932a8.3 8.3 0 0 0-3.368-1.152v-1.06h1.999V3c0-.55-.45-1.001-1-1.001h-3.998c-.55 0-1 .45-1 1.001v1.001h2v1.061a8.476 8.476 0 0 0-7.407 9.651c.53 3.774 3.628 6.798 7.407 7.228 5.137.59 9.506-3.424 9.506-8.45a8.5 8.5 0 0 0-2.53-6.056zM12.496 20C8.918 20 6 17.077 6 13.493s2.919-6.507 6.497-6.507c3.579 0 6.498 2.923 6.498 6.507S16.074 20 12.496 20m-1-11.012h2v5.005h-2z"></path>
  </svg>
);
