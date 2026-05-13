import React from 'react';
import type { LumaIconProps } from '../types';

export const CalendarFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M5.188.438a1 1 0 0 1 1 1v.469h3.068A1 1 0 0 0 9.25 2v.938a.75.75 0 0 0 1.031.695V1.438a1 1 0 0 1 2 0v.526c1.097.085 1.815.296 2.34.821.879.88.879 2.293.879 5.122V9.5c0 2.828 0 4.242-.879 5.12-.878.88-2.293.88-5.121.88h-3c-2.828 0-4.243 0-5.121-.88C.5 13.744.5 12.33.5 9.502V7.907c0-2.829 0-4.243.879-5.122.407-.407.928-.625 1.652-.742v.801a.75.75 0 0 0 1.156.63V1.439a1 1 0 0 1 1-1M4.25 6.313a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z"></path>
  </svg>
);
