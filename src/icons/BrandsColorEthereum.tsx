import React from 'react';
import type { LumaIconProps } from '../types';

export const BrandsColorEthereum = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 405 405"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="none" transform="translate(4 4)"><circle cx="198.5" cy="198.5" r="198.5" fill="currentColor"></circle><path fill="currentColor" fillOpacity="0.602" d="M204.686 49.598v110.049l93.01 41.566z"></path><path fill="currentColor" d="m204.686 49.598-93.009 151.615 93.009-41.566z"></path><path fill="currentColor" fillOpacity="0.602" d="M204.686 272.517v74.777l93.064-128.77z"></path><path fill="currentColor" d="M204.686 347.294v-74.777l-93.009-53.993z"></path><path fill="currentColor" fillOpacity="0.2" d="m204.686 255.207 93.01-53.994-93.01-41.566z"></path><path fill="currentColor" fillOpacity="0.602" d="M112 200.758 205 255v-96z"></path></g>
  </svg>
);
