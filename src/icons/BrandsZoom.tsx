import React from 'react';
import type { LumaIconProps } from '../types';

export const BrandsZoom = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 50 50"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M48 13.208v22.704c0 1.504-.828 1.332-1.533.783L36.5 29.25v-9.38l9.967-7.446c.87-.725 1.533-.556 1.533.784M27.553 12c3.768-.017 6.837 3.071 6.856 6.9v16.936a1.25 1.25 0 0 1-1.246 1.255H8.856c-3.768.017-6.837-3.071-6.856-6.9V13.255A1.25 1.25 0 0 1 3.246 12Z"></path>
  </svg>
);
