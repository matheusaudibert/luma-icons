import React from 'react';
import type { LumaIconProps } from '../types';

export const Collapse16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M7.505 9.455a.7.7 0 0 1 .99 0l2.8 2.8a.7.7 0 0 1-.99.99L8.7 11.64v3.41a.7.7 0 0 1-1.4 0v-3.41l-1.605 1.605a.7.7 0 0 1-.99-.99zM.5 8c0-.414.325-.75.726-.75h13.548c.401 0 .726.336.726.75s-.325.75-.726.75H1.226A.74.74 0 0 1 .5 8M8 .25a.7.7 0 0 1 .7.7v3.41l1.605-1.605a.7.7 0 1 1 .99.99l-2.8 2.8a.7.7 0 0 1-.99 0l-2.8-2.8a.7.7 0 1 1 .99-.99L7.3 4.36V.95a.7.7 0 0 1 .7-.7"></path>
  </svg>
);
