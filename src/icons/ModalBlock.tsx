import React from 'react';
import type { LumaIconProps } from '../types';

export const ModalBlock = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillOpacity="0.133" d="M25.9 25.9A14 14 0 0 1 6.1 6.1L16 16z"></path><path fill="currentColor" fillRule="evenodd" d="M24.572 25.774A12.95 12.95 0 0 1 16 29C8.82 29 3 23.18 3 16a12.95 12.95 0 0 1 3.226-8.572zm1.398-1.43L7.657 6.03A12.95 12.95 0 0 1 16 3c7.18 0 13 5.82 13 13 0 3.176-1.139 6.086-3.03 8.343M31 16c0 8.284-6.716 15-15 15S1 24.284 1 16 7.716 1 16 1s15 6.716 15 15" clipRule="evenodd"></path>
  </svg>
);
