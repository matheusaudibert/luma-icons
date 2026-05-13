import React from 'react';
import type { LumaIconProps } from '../types';

export const More16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M1.695 6.934a1.5 1.5 0 0 1 2.11 0l.006.005.005.006a1.5 1.5 0 0 1 0 2.11l-.005.006-.006.005a1.5 1.5 0 0 1-2.11 0l-.006-.005-.005-.006a1.5 1.5 0 0 1 0-2.11l.005-.006zm5.25 0a1.5 1.5 0 0 1 2.11 0l.006.005.005.006a1.5 1.5 0 0 1 0 2.11l-.005.006-.006.005a1.5 1.5 0 0 1-2.11 0l-.006-.005-.005-.006a1.5 1.5 0 0 1 0-2.11l.005-.006zM13.25 6.5a1.5 1.5 0 0 0-1.055.434l-.006.005-.005.006a1.5 1.5 0 0 0 0 2.11l.005.006.006.005a1.5 1.5 0 0 0 2.11 0l.006-.005.005-.006a1.5 1.5 0 0 0 0-2.11l-.005-.006-.006-.005A1.5 1.5 0 0 0 13.25 6.5"></path>
  </svg>
);
