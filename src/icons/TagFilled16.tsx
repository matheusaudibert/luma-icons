import React from 'react';
import type { LumaIconProps } from '../types';

export const TagFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M2.464 6.707a5 5 0 1 0 7.072 7.071l4.242-4.242a5 5 0 1 0-7.07-7.072zm9.546-.353a1.5 1.5 0 1 0-2.12-2.122 1.5 1.5 0 0 0 2.12 2.122"></path>
  </svg>
);
