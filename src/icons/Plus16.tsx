import React from 'react';
import type { LumaIconProps } from '../types';

export const Plus16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M8.722 2.222a.722.722 0 0 0-1.444 0v5.056H2.222a.722.722 0 0 0 0 1.444h5.056v5.056a.722.722 0 0 0 1.444 0V8.722h5.056a.722.722 0 0 0 0-1.444H8.722z"></path>
  </svg>
);
