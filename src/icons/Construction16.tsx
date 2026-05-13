import React from 'react';
import type { LumaIconProps } from '../types';

export const Construction16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3 1a.75.75 0 0 1 .75.75v1h8.5v-1a.75.75 0 0 1 1.5 0v1h.85c.635 0 1.15.515 1.15 1.15v1.7a1.15 1.15 0 0 1-1.15 1.15h-.85v.75h.85c.635 0 1.15.515 1.15 1.15v1.7a1.15 1.15 0 0 1-1.15 1.15h-.85v3.25a.75.75 0 0 1-1.5 0V11.5h-8.5v3.25a.75.75 0 0 1-1.5 0V11.5H1.4a1.15 1.15 0 0 1-1.15-1.15v-1.7c0-.635.515-1.15 1.15-1.15h.85v-.75H1.4A1.15 1.15 0 0 1 .25 5.6V3.9c0-.635.515-1.15 1.15-1.15h.85v-1A.75.75 0 0 1 3 1m10 9h1.25V9h-1.979l-1.2 1zM9 6.75h3.25v.75h-8.5v-.75zm4-2.5h-.729l-1.2 1h3.179v-1zm-11.25 0h3.178l-1.2 1H1.75zm4.322 1 1.2-1h2.656l-1.2 1zM1.75 10V9h3.178l-1.2 1zm4.322 0 1.2-1h2.656l-1.2 1z" clipRule="evenodd"></path>
  </svg>
);
