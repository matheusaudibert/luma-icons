import React from 'react';
import type { LumaIconProps } from '../types';

export const ShareFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M15.46 6.896 10.355 1.74a.8.8 0 0 0-1.369.563v2.554c-3.688.63-6.875 2.93-8.456 7.881-.186.581.546.978 1 .57C3.993 11.094 6.6 9.98 8.986 10.57v2.67c0 .737.912 1.082 1.4.53l5.105-5.783a.8.8 0 0 0-.031-1.092"></path>
  </svg>
);
