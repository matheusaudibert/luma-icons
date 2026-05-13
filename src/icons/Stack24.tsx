import React from 'react';
import type { LumaIconProps } from '../types';

export const Stack24 = ({ size = 2, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8.3 11.709-4.952 3.226a1.845 1.845 0 0 0 .093 3.161l6.781 3.895a3.85 3.85 0 0 0 3.828 0l6.758-3.881a1.846 1.846 0 0 0 .081-3.17l-4.985-3.192M14.052 2.01l6.604 3.793a1.846 1.846 0 0 1 0 3.219l-6.604 3.793a3.85 3.85 0 0 1-3.828 0L3.62 9.02a1.847 1.847 0 0 1 0-3.22l6.604-3.792a3.85 3.85 0 0 1 3.828 0"></path>
  </svg>
);
