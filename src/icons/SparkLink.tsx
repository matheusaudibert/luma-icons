import React from 'react';
import type { LumaIconProps } from '../types';

export const SparkLink = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M9.118 3.25a2.393 2.393 0 0 1 3.385 3.383.8.8 0 1 0 1.13 1.132A3.993 3.993 0 0 0 7.987 2.12L6.182 3.924a3.99 3.99 0 0 0-.467 5.085.8.8 0 0 0 1.317-.908 2.39 2.39 0 0 1 .281-3.046zm.922 3.49a.8.8 0 0 0-1.317.908 2.39 2.39 0 0 1-.282 3.045L6.635 12.5a2.393 2.393 0 0 1-3.384-3.383.8.8 0 0 0-1.131-1.131 3.993 3.993 0 0 0 5.647 5.645l1.805-1.805a3.99 3.99 0 0 0 .468-5.084Z" clipRule="evenodd"></path>
  </svg>
);
