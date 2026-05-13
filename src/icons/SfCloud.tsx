import React from 'react';
import type { LumaIconProps } from '../types';

export const SfCloud = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <g clipPath="url(#Cloud_svg__a)"><path fill="currentColor" d="M3.886 11.986h7.525c1.969 0 3.5-1.446 3.5-3.317 0-1.878-1.554-3.302-3.692-3.302C10.442 3.892 9.006 3 7.319 3 5.055 3 3.124 4.683 2.917 6.942 1.755 7.273 1 8.245 1 9.432c0 1.417 1.05 2.554 2.886 2.554M3.87 10.95c-1.125 0-1.805-.569-1.805-1.482 0-.77.495-1.31 1.398-1.547.355-.086.488-.245.518-.619.148-1.885 1.561-3.266 3.337-3.266 1.317 0 2.376.712 3.02 2 .147.302.332.403.717.403 1.828 0 2.782 1.036 2.782 2.259 0 1.266-1.028 2.252-2.345 2.252z"></path></g><defs><clipPath id="Cloud_svg__a"><path fill="currentColor" d="M1 3h14v9H1z"></path></clipPath></defs>
  </svg>
);
