import React from 'react';
import type { LumaIconProps } from '../types';

export const TableExpand16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M15.144 9.146a.75.75 0 0 1 .75.75v4.265a.75.75 0 0 1-.75.75.75.75 0 0 1-.75-.75v-2.455l-2.987 2.986a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l2.986-2.986h-2.456a.75.75 0 1 1 0-1.5zM13.043 1.2C14.4 1.2 15.5 2.3 15.5 3.657V8.16a2 2 0 0 0-.356-.034H14V6.699H8.5v2.5h.655a1.92 1.92 0 0 0-.084 1.5H8.5v2.499h.815a1.92 1.92 0 0 0-.319 1.5H2.457A2.457 2.457 0 0 1 0 12.24V3.657C0 2.3 1.1 1.2 2.457 1.2zM1.5 12.24c0 .53.429.958.957.958H7v-2.5H1.5zm0-3.042H7V6.7H1.5zM2.457 2.7a.96.96 0 0 0-.957.957v1.542H14V3.657a.96.96 0 0 0-.957-.957z"></path>
  </svg>
);
