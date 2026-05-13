import React from 'react';
import type { LumaIconProps } from '../types';

export const BrandsYouTube = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M10.112 8.665 7.31 10.26a.74.74 0 0 1-.746-.011.73.73 0 0 1-.36-.633V6.424c0-.267.138-.508.37-.642a.73.73 0 0 1 .738-.001l2.801 1.595a.74.74 0 0 1 0 1.289Zm4.808-4.567a2.37 2.37 0 0 0-1.609-1.709c-1.349-.445-9.38-.42-10.611.027a2.33 2.33 0 0 0-1.61 1.68c-.452 1.32-.452 6.544-.007 7.851.221.798.841 1.43 1.592 1.638.66.24 3.018.358 5.363.358 2.329 0 4.646-.117 5.267-.35a2.35 2.35 0 0 0 1.605-1.676c.45-1.296.452-6.506.01-7.819" clipRule="evenodd"></path>
  </svg>
);
