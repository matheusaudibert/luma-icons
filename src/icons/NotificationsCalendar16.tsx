import React from 'react';
import type { LumaIconProps } from '../types';

export const NotificationsCalendar16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M10.46 2.31c.461 0 .834.373.834.833v.404c.776.068 1.291.226 1.672.607.659.659.659 1.72.659 3.84V9.19c0 2.121 0 3.183-.66 3.842-.658.658-1.719.658-3.84.658h-2.25c-2.121 0-3.182 0-3.84-.658-.66-.66-.66-1.72-.66-3.842V7.994c0-2.12 0-3.181.66-3.84.16-.162.347-.284.567-.375.198-.083.4.078.4.294v.125a.84.84 0 0 0 1.056.8V3.142a.833.833 0 0 1 1.666 0v.351H8.31a.36.36 0 0 1 .351.363c0 .137.005.275.005.41 0 .51.466.898.96.821V3.143a.835.835 0 0 1 .834-.833M5 6.75a.75.75 0 1 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></path>
  </svg>
);
