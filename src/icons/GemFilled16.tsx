import React from 'react';
import type { LumaIconProps } from '../types';

export const GemFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M2.847 2.894A3.55 3.55 0 0 1 5.842 1.25h4.392a3.55 3.55 0 0 1 2.995 1.644l1.688 2.652a2.62 2.62 0 0 1-.245 3.136l-4.497 5.096a2.85 2.85 0 0 1-4.274 0L1.405 8.682a2.62 2.62 0 0 1-.246-3.136zm2.578.098a.75.75 0 0 1 .75.75v.871c0 .154.105.392.425.63.313.233.703.363 1.003.363a.75.75 0 0 1 0 1.5c-.3 0-.69.13-1.003.362-.32.238-.425.476-.425.63v.87a.75.75 0 1 1-1.5 0v-.87c0-.154-.106-.392-.426-.63-.312-.233-.703-.362-1.002-.362a.75.75 0 0 1 0-1.5c.3 0 .69-.13 1.002-.363.32-.238.426-.476.426-.63v-.87a.75.75 0 0 1 .75-.75"></path>
  </svg>
);
