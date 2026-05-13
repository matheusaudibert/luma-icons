import React from 'react';
import type { LumaIconProps } from '../types';

export const BrandsGoogleMeet = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="currentColor" fillRule="evenodd"><path fillRule="nonzero" d="M21.553 5.218A.88.88 0 0 1 23 5.892v12.217a.88.88 0 0 1-1.447.673L18.5 16.21V7.79l-5 4.21z"></path><path d="M13.5 3H6v5h7.5v4h5V4.5A1.5 1.5 0 0 0 17 3z"></path><path fillRule="nonzero" d="M1 8h5v8H1z"></path><path d="M18.5 12h-5v4H6v5h11a1.5 1.5 0 0 0 1.5-1.5zM6 8H1l5-5zm-5 8v3.5A1.5 1.5 0 0 0 2.5 21H6v-5z"></path></g>
  </svg>
);
