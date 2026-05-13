import React from 'react';
import type { LumaIconProps } from '../types';

export const SparkHeading1 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <g clipPath="url(#Heading1_svg__a)"><path fill="currentColor" fillRule="evenodd" d="M1.6 3.3a.8.8 0 1 0-1.6 0v9.8a.8.8 0 0 0 1.6 0v-4h4.8v4a.8.8 0 0 0 1.6 0V3.3a.8.8 0 1 0-1.6 0v4.2H1.6zm8.4 2a.8.8 0 1 0 0 1.6h1.3c.22 0 .4.18.4.4v5H10a.8.8 0 0 0 0 1.6h5a.8.8 0 0 0 0-1.6h-1.7v-5a2 2 0 0 0-2-2z" clipRule="evenodd"></path></g><defs><clipPath id="Heading1_svg__a"><path fill="currentColor" d="M0 0h16v16H0z"></path></clipPath></defs>
  </svg>
);
