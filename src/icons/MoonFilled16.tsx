import React from 'react';
import type { LumaIconProps } from '../types';

export const MoonFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M14.416 10.393c.13-.296.194-.443.167-.57a.4.4 0 0 0-.19-.262c-.112-.064-.306-.045-.694-.007q-.345.035-.699.035a7 7 0 0 1-6.966-7.7c.039-.387.058-.58-.007-.693a.4.4 0 0 0-.261-.19c-.127-.027-.275.038-.57.167a7.002 7.002 0 1 0 9.22 9.22"></path>
  </svg>
);
