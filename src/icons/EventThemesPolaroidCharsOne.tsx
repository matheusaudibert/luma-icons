import React from 'react';
import type { LumaIconProps } from '../types';

export const EventThemesPolaroidCharsOne = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 5 30"
    style={{ color, ...style }}
    {...props}
  >
    <path d="M1.168 6.435q.192-.8 1.152-.8t.96 4.096l.096 1.728-.288 10.08q-.224.992-.992.992-.928-.353-.928-.992l.32-9.888z"></path>
  </svg>
);
