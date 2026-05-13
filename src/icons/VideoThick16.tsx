import React from 'react';
import type { LumaIconProps } from '../types';

export const VideoThick16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h5a3 3 0 0 0 2.932-2.364l.714.652C13.314 13.813 16 12.63 16 10.37V5.631c0-2.26-2.686-3.445-4.354-1.92l-.714.653A3 3 0 0 0 8 2zm8 5.453v1.094a1 1 0 0 0 .325.738l1.67 1.527A.6.6 0 0 0 14 10.369V5.631a.6.6 0 0 0-1.005-.443l-1.67 1.527a1 1 0 0 0-.325.738m-2 0V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1z"></path>
  </svg>
);
