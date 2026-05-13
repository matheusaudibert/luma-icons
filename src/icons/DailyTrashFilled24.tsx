import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyTrashFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M19.99 4h-4.997V3c0-.55-.45-1-1-1H9.997c-.55 0-1 .45-1 1v1H3v2h1.11l.839 15.06c.03.53.47.94 1 .94h12.103c.53 0 .97-.41 1-.94L19.89 6H21V4zm-8.994 13h-2V8h2zm3.997 0h-1.999V8h2z" clipRule="evenodd"></path>
  </svg>
);
