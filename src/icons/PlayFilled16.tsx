import React from 'react';
import type { LumaIconProps } from '../types';

export const PlayFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M4.414 1.61c.448-.046.869.097 1.26.277.394.182.872.459 1.45.792l4.491 2.594c.578.334 1.057.609 1.412.86.352.248.685.541.869.952a2.25 2.25 0 0 1 0 1.83c-.184.412-.517.705-.869.954-.354.25-.834.526-1.412.859l-4.491 2.594c-.578.333-1.056.61-1.45.792-.391.18-.812.323-1.26.276a2.25 2.25 0 0 1-1.585-.915c-.265-.364-.351-.8-.39-1.23-.04-.432-.04-.985-.04-1.652V5.408c0-.667 0-1.22.04-1.653.039-.428.126-.865.39-1.23a2.25 2.25 0 0 1 1.585-.914"></path>
  </svg>
);
