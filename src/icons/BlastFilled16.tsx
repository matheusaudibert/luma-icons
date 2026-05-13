import React from 'react';
import type { LumaIconProps } from '../types';

export const BlastFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M13.75 1.125a2 2 0 0 1 2 2v8.917a2 2 0 0 1-2 2h-.344a6 6 0 0 1-2.436-.518l-3.317-1.473a2.817 2.817 0 0 1-5.57-.592v-.878A2.5 2.5 0 0 1 .251 8.175V6.992a2.5 2.5 0 0 1 2.238-2.486l1.885-.198a5 5 0 0 0 1.507-.404l5.09-2.261a6 6 0 0 1 2.436-.518zM3.584 11.459a1.317 1.317 0 0 0 2.634 0v-.047l-.338-.15a5 5 0 0 0-1.507-.403l-.789-.084zm9.583-8.501a.75.75 0 0 0-.75.75v7.75a.75.75 0 0 0 1.5 0v-7.75a.75.75 0 0 0-.75-.75"></path>
  </svg>
);
