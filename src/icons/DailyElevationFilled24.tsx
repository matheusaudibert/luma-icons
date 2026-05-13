import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyElevationFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M14.117 10.882 13 12l-2.12-3.535a1 1 0 0 0-1.726.018L2 21h20l-6.332-9.948a1 1 0 0 0-1.55-.17ZM17 6.414V11h2V6.414L20.585 8 22 6.585l-3.292-3.292a1 1 0 0 0-1.414 0l-3.292 3.292L15.415 8z"></path>
  </svg>
);
