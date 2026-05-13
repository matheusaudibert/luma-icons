import React from 'react';
import type { LumaIconProps } from '../types';

export const ExpandDiagonal16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M14.37 8.022a.75.75 0 0 1-1.5 0V4.185l-8.778 8.778h3.88a.706.706 0 0 1 0 1.412H2.325a.706.706 0 0 1-.706-.706V8.022a.706.706 0 0 1 1.412 0v3.88l8.778-8.777H7.973a.75.75 0 0 1 0-1.5h5.647a.75.75 0 0 1 .75.75z" clipRule="evenodd"></path>
  </svg>
);
