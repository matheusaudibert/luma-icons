import React from 'react';
import type { LumaIconProps } from '../types';

export const Sun16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 1.5v.99m0 11.02v.99M14.5 8h-.99M2.49 8H1.5m11.096-4.596-.7.7m-7.791 7.792-.701.7m9.192 0-.7-.7M4.105 4.105l-.701-.701M8 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6"></path>
  </svg>
);
