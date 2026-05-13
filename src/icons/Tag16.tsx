import React from 'react';
import type { LumaIconProps } from '../types';

export const Tag16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m3.525 7.768 4.243-4.243a3.5 3.5 0 0 1 4.95 4.95l-4.243 4.242a3.5 3.5 0 1 1-4.95-4.95m-1.06 6.01a5 5 0 0 1 0-7.07l4.242-4.244a5 5 0 1 1 7.071 7.072l-4.242 4.242a5 5 0 0 1-7.072 0m8.485-7.07a1 1 0 1 0-1.415-1.415 1 1 0 0 0 1.415 1.414"></path>
  </svg>
);
