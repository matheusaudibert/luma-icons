import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyMedalFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M19.84 2.45c-.19-.28-.5-.45-.83-.45h-4c-.4 0-.76.24-.92.61l-2.08 4.863L9.92 2.61C9.76 2.24 9.4 2 9 2H5c-.34 0-.65.17-.83.45-.19.28-.22.63-.09.94l2.89 6.744A6.96 6.96 0 0 0 5 14.996 6.997 6.997 0 0 0 12 22c3.87 0 7-3.132 7-7.004 0-1.89-.75-3.601-1.97-4.862l2.89-6.743c.13-.31.1-.66-.08-.94M6.52 4.001h1.82l1.82 4.252q-.825.225-1.56.63zm8.87 4.882q-.735-.405-1.56-.63l1.82-4.252h1.82l-2.09 4.882z"></path>
  </svg>
);
