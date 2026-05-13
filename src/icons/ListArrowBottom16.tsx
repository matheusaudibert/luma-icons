import React from 'react';
import type { LumaIconProps } from '../types';

export const ListArrowBottom16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M2.125 1.125a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zm6 11a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm-6.75-4.75a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1-.75-.75m3.11 5.02-1.76-1.32a1 1 0 0 0-1.6.8v2a1 1 0 0 0 1.6.8l1.76-1.32a.6.6 0 0 0 0-.96"></path>
  </svg>
);
