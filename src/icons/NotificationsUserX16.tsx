import React from 'react';
import type { LumaIconProps } from '../types';

export const NotificationsUserX16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M7.966 1.815c1.806 0 3.248 1.537 3.248 3.404 0 2.3-3.245.572-3.448 4.948-.106 2.272.675 4.24-2.02 3.933-1.57-.178-3.194-.712-3.194-2.3 0-2.123 3.502-2.183 3.502-3.368V8.43c0-.814-1.337-1.2-1.337-3.211 0-1.867 1.442-3.404 3.249-3.404m1.8 6.913a.92.92 0 0 1 1.3 0l1 1 1-1a.919.919 0 0 1 1.3 1.3l-1.002 1 1.001 1a.918.918 0 1 1-1.299 1.299l-1-1.001-1 1a.918.918 0 0 1-1.3-1.298l1-1-1-1a.92.92 0 0 1 0-1.3"></path>
  </svg>
);
