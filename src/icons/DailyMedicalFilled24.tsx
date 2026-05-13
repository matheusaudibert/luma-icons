import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyMedicalFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M20 9h-5V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5v5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-5h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1"></path>
  </svg>
);
