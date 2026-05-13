import React from 'react';
import type { LumaIconProps } from '../types';

export const ChatFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M8 15a7 7 0 1 0-5.98-3.36c.132.217.187.479.086.711-.265.607-.743 1.16-.974 1.407-.07.075-.064.194.03.236.471.21 1.462.161 2.472-.1.26-.068.539-.026.77.113A6.97 6.97 0 0 0 8 15"></path>
  </svg>
);
