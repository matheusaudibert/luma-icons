import React from 'react';
import type { LumaIconProps } from '../types';

export const ShieldThick16 = ({ size = 2, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path strokeWidth="2" d="M7.413 14.774c.378.162.796.162 1.174 0 1.41-.603 4.868-2.468 4.868-6.254 0-4.755.198-5.126-.24-5.584C12.779 2.48 8.716 1 8 1S3.222 2.479 2.785 2.936c-.438.458-.24.829-.24 5.584 0 3.786 3.458 5.651 4.868 6.254"></path><path strokeWidth="1.75" d="M6 7.667 7.164 9 10 6"></path></g>
  </svg>
);
