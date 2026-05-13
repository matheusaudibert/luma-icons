import React from 'react';
import type { LumaIconProps } from '../types';

export const ListCheck16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M15.546 3a.75.75 0 0 0-.75-.75h-6a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75m-9.01 1.458a.75.75 0 0 0-1.025.272L2.975 9.092l-1.25-1.026a.75.75 0 1 0-.952 1.158l1.933 1.586c.17.14.394.198.61.16a.75.75 0 0 0 .515-.362l2.977-5.125a.75.75 0 0 0-.271-1.025M14.797 7a.75.75 0 0 1 .75.75.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5zm.75 5.5a.75.75 0 0 0-.75-.75h-6a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75"></path>
  </svg>
);
