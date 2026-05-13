import React from 'react';
import type { LumaIconProps } from '../types';

export const TicketPlusFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M13.482 15C14.873 15 16 13.594 16 11.858v-1.743c0-.17 0-.254-.038-.306-.038-.053-.144-.088-.355-.158-.612-.202-1.061-.865-1.061-1.651s.448-1.45 1.06-1.651c.212-.07.318-.105.356-.158C16 6.14 16 6.054 16 5.885V4.142C16 2.406 14.87 1 13.48 1H2.52C1.128 1 0 2.406 0 4.142v1.743c0 .17 0 .254.038.306.038.053.144.088.355.158.613.202 1.062.865 1.062 1.651S1.005 9.45.393 9.651c-.211.07-.317.105-.355.158C0 9.86 0 9.946 0 10.115v1.743C0 13.594 1.127 15 2.518 15zM8.75 6a.75.75 0 0 0-1.5 0v1.05a.2.2 0 0 1-.2.2H6a.75.75 0 0 0 0 1.5h1.05c.11 0 .2.09.2.2V10a.75.75 0 0 0 1.5 0V8.95c0-.11.09-.2.2-.2H10a.75.75 0 0 0 0-1.5H8.95a.2.2 0 0 1-.2-.2z" clipRule="evenodd"></path>
  </svg>
);
