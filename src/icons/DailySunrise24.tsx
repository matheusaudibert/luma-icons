import React from 'react';
import type { LumaIconProps } from '../types';

export const DailySunrise24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M9.41 8.003 8 6.593l3.29-3.3a.996.996 0 0 1 1.41 0l3.29 3.29-1.41 1.41-1.59-1.59v3.59h-2v-3.59L9.4 7.993zm-3.41 7H2v2h4zm12 0v2h4v-2zm-9.54-3.95-2.83-2.83-1.41 1.41 2.83 2.83zm8.49 1.41 2.83-2.83-1.41-1.41-2.83 2.83zm-1.09 4.54c.08-.32.14-.65.14-1 0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .35.06.68.14 1h2.14c-.17-.3-.28-.63-.28-1 0-1.1.9-2 2-2s2 .9 2 2c0 .37-.11.7-.28 1zm-6.48 2H2v2h20v-2z"></path>
  </svg>
);
