import React from 'react';
import type { LumaIconProps } from '../types';

export const FeatherArrowUpRightV2 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path d="M13.7 3.08a.75.75 0 0 0-.764-.778L5.878 2.3a.75.75 0 0 0 0 1.5h5.262l-8.62 8.62a.75.75 0 0 0 1.06 1.061l8.62-8.62v5.262a.75.75 0 0 0 1.5 0z"></path>
  </svg>
);
