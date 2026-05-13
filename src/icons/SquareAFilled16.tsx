import React from 'react';
import type { LumaIconProps } from '../types';

export const SquareAFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M8 .5c2.33 0 3.494 0 4.413.38a5 5 0 0 1 2.706 2.707c.38.919.381 2.083.381 4.413s0 3.494-.38 4.413a5 5 0 0 1-2.707 2.706c-.919.38-2.084.381-4.413.381s-3.494 0-4.413-.38A5 5 0 0 1 .88 12.412C.5 11.494.5 10.33.5 8s0-3.494.38-4.413A5 5 0 0 1 3.588.88C4.506.5 5.67.5 8 .5m1.192 4.342c-.458-1.076-2.043-1.04-2.425.107L5.226 9.571l-.516 1.547a.75.75 0 0 0 1.424.475l.345-1.034H9.52l.345 1.034a.75.75 0 0 0 1.424-.475l-.516-1.547-1.54-4.622zm-.17 4.217H6.978L8 5.992 9.021 9.06Z"></path>
  </svg>
);
