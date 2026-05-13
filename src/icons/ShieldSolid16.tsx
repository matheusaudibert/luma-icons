import React from 'react';
import type { LumaIconProps } from '../types';

export const ShieldSolid16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M8.573 15.791c-.37.148-.776.148-1.146 0-1.579-.632-5.874-2.76-5.874-7.196 0-1.632-.021-2.812-.037-3.678-.036-2.02-.042-2.338.32-2.704C2.354 1.69 7.156 0 8 0s5.647 1.69 6.164 2.213c.362.366.356.683.32 2.701-.016.867-.037 2.048-.037 3.68 0 4.436-4.295 6.565-5.874 7.197m3.032-10.267a.8.8 0 1 0-1.21-1.048L7.126 8.25l-1-1.25a.8.8 0 0 0-1.25 1l1.6 2a.8.8 0 0 0 1.23.024z"></path>
  </svg>
);
