import React from 'react';
import type { LumaIconProps } from '../types';

export const BrandsColorCoinbasewallet = ({ size = 292, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 320 320"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="none" fillRule="evenodd" transform="translate(14 14)"><rect width="292" height="292" fill="currentColor" rx="60"></rect><circle cx="145.5" cy="145.5" r="105.5" fill="currentColor"></circle><rect width="75" height="75" x="108" y="109" fill="currentColor" rx="14"></rect></g>
  </svg>
);
