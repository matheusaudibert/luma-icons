import React from 'react';
import type { LumaIconProps } from '../types';

export const NotificationsArrow16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M8 1.333a6.667 6.667 0 1 1 0 13.334A6.667 6.667 0 0 1 8 1.333M8 4.5a.84.84 0 0 0-.59.244L4.743 7.41a.834.834 0 0 0 1.18 1.18l1.243-1.245v3.321a.834.834 0 0 0 1.667 0V7.345l1.244 1.244a.833.833 0 0 0 1.178-1.179L8.59 4.743A.84.84 0 0 0 8 4.5"></path>
  </svg>
);
