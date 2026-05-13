import React from 'react';
import type { LumaIconProps } from '../types';

export const HeartFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M.794 7.644c-.848-2.622.143-5.618 2.92-6.505C5.174.672 7 1.418 8 2.859c.999-1.441 2.82-2.184 4.28-1.72 2.777.887 3.773 3.883 2.927 6.505C13.889 11.799 8 15 8 15S2.156 11.848.794 7.644"></path>
  </svg>
);
