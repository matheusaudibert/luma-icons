import React from 'react';
import type { LumaIconProps } from '../types';

export const SnakeArrow16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M9.827 3.376c.258 0 .467.21.467.468v.71c0 .568.64.9 1.104.575l2.751-1.926a.7.7 0 0 0 0-1.15L11.398.129a.701.701 0 0 0-1.104.575v.71a.47.47 0 0 1-.467.468H4.829a3.231 3.231 0 0 0-.4 6.437l6.87.859a1.735 1.735 0 0 1-.215 3.457h-4.01a.53.53 0 0 1-.47-.326 2.618 2.618 0 1 0 0 2.148.53.53 0 0 1 .47-.326h4.01a3.231 3.231 0 0 0 .4-6.437l-6.87-.86a1.735 1.735 0 0 1 .215-3.457zm-5.61 8.884a1.122 1.122 0 1 0 0 2.244 1.122 1.122 0 0 0 0-2.244" clipRule="evenodd"></path>
  </svg>
);
