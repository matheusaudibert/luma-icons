import React from 'react';
import type { LumaIconProps } from '../types';

export const Webhook16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M7.625 4.32a.75.75 0 0 1 1.024.274l1.662 2.879a3.75 3.75 0 1 1-.687 6.806.75.75 0 0 1 .75-1.3 2.25 2.25 0 0 0 3.074-3.073 2.25 2.25 0 0 0-3.074-.824.75.75 0 0 1-1.024-.274l-2-3.464a.75.75 0 0 1 .275-1.025Zm-5 3.462a.75.75 0 0 1 .75 1.3A2.25 2.25 0 1 0 6.75 11.03a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H8.173a3.75 3.75 0 1 1-5.55-3.998ZM4.75 3.095a3.75 3.75 0 0 1 7 1.875.75.75 0 0 1-1.5 0 2.25 2.25 0 1 0-3.376 1.948.75.75 0 0 1 .274 1.024l-2 3.464a.75.75 0 0 1-1.299-.75l1.662-2.88a3.75 3.75 0 0 1-.76-4.681Z"></path>
  </svg>
);
