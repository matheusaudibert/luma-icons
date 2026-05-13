import React from 'react';
import type { LumaIconProps } from '../types';

export const ShareFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m22.665 10.315-7.394-7.47c-.728-.735-1.982-.22-1.982.816v3.7c-5.34.912-9.956 4.243-12.246 11.412-.27.842.791 1.416 1.448.826 3.568-3.205 7.342-4.817 10.798-3.963v3.868c0 1.067 1.321 1.567 2.028.767l7.393-8.375a1.16 1.16 0 0 0-.045-1.581"></path>
  </svg>
);
