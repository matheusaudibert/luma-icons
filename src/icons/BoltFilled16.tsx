import React from 'react';
import type { LumaIconProps } from '../types';

export const BoltFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M5.627 9.186H2.801a.8.8 0 0 1-.646-1.272L7.581.48c.456-.625 1.446-.303 1.446.472V6.01a.8.8 0 0 0 .8.8h2.826a.8.8 0 0 1 .646 1.271l-5.426 7.435c-.456.625-1.446.302-1.446-.472v-5.06a.8.8 0 0 0-.8-.8"></path>
  </svg>
);
