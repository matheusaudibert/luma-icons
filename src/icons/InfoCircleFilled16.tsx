import React from 'react';
import type { LumaIconProps } from '../types';

export const InfoCircleFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M0 8c0-4.415 3.585-8 8-8s8 3.585 8 8-3.585 8-8 8-8-3.585-8-8m6.25-.375c0-.483.392-.875.875-.875h1c.483 0 .875.392.875.875v3.125h.125a.875.875 0 0 1 0 1.75h-2a.875.875 0 0 1 0-1.75h.125V8.5h-.125a.875.875 0 0 1-.875-.875M7.875 5.75a1.376 1.376 0 1 0-.001-2.751 1.376 1.376 0 0 0 .001 2.751"></path>
  </svg>
);
