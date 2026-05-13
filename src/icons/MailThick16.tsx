import React from 'react';
import type { LumaIconProps } from '../types';

export const MailThick16 = ({ size = 2, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="2" transform="translate(1 2)"><rect width="14" height="12" rx="3"></rect><path strokeLinecap="round" strokeLinejoin="round" d="M10 4 7.738 5.757a1.21 1.21 0 0 1-1.457 0L4 4"></path></g>
  </svg>
);
