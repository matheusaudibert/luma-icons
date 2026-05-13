import React from 'react';
import type { LumaIconProps } from '../types';

export const ClockDotted16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M4.259 13.965a.75.75 0 0 1 1.003-.345A6.25 6.25 0 1 0 8 1.75a.75.75 0 0 1 0-1.5 7.75 7.75 0 1 1-3.396 14.718.75.75 0 0 1-.345-1.003m-.982-1.6a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0M1.175 8.807a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m.75-2.366a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m.602-3.556a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m3.186-1.193a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m1.306 6.1c0 .331.131.65.366.884L8.47 9.762a.75.75 0 1 0 1.06-1.06L8.52 7.688V4.5a.75.75 0 0 0-1.5 0z"></path>
  </svg>
);
