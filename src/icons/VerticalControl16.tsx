import React from 'react';
import type { LumaIconProps } from '../types';

export const VerticalControl16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M11.25 10a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 1.372a2.251 2.251 0 0 0 0-4.244V2.25a.75.75 0 0 0-1.5 0v4.878a2.25 2.25 0 0 0 0 4.244V13.5c0 .414.375.75.75.75s.75-.336.75-.75zM5.75 2.25c0-.414-.375-.75-.75-.75s-.75.336-.75.75v2.128a2.25 2.25 0 0 0 0 4.244V13.5a.75.75 0 0 0 1.5 0V8.622a2.25 2.25 0 0 0 0-4.244zm0 4.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0"></path>
  </svg>
);
