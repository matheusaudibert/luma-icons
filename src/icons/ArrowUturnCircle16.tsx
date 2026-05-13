import React from 'react';
import type { LumaIconProps } from '../types';

export const ArrowUturnCircle16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="1.5" transform="translate(1.25 1.25)"><circle cx="6.75" cy="6.75" r="6.75"></circle><path strokeLinecap="round" strokeLinejoin="round" d="m5.75 3.25-2 2.154 2 2.154m-1.5-2.154h3.5a2 2 0 0 1 2 2v.423h0a2.423 2.423 0 0 1-2.423 2.423H6.75"></path></g>
  </svg>
);
