import React from 'react';
import type { LumaIconProps } from '../types';

export const PaymentDinersClub = ({ size = 36, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 36 24"
    style={{ color, ...style }}
    {...props}
  >
    <rect width="36" height="24" fill="currentColor" rx="6"></rect><rect width="35.5" height="23.5" x="0.25" y="0.25" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.5" rx="5.75"></rect><path fill="currentColor" d="M19.545 19.5c3.897.019 7.455-3.208 7.455-7.133 0-4.292-3.558-7.26-7.455-7.258h-3.354C12.247 5.108 9 8.076 9 12.367c0 3.926 3.247 7.152 7.19 7.133z"></path><path fill="currentColor" d="M16.207 5.704c-3.605.001-6.525 2.95-6.526 6.587.001 3.639 2.921 6.586 6.526 6.588 3.604-.002 6.526-2.95 6.526-6.588s-2.921-6.586-6.526-6.587m-4.137 6.587a4.18 4.18 0 0 1 2.656-3.896v7.792a4.18 4.18 0 0 1-2.656-3.896m5.617 3.898V8.395a4.18 4.18 0 0 1 2.657 3.897 4.18 4.18 0 0 1-2.657 3.897"></path><path fill="currentColor" d="M19.545 19.5c3.897.019 7.455-3.208 7.455-7.133 0-4.292-3.558-7.26-7.455-7.258h-3.354C12.247 5.108 9 8.076 9 12.367c0 3.926 3.247 7.152 7.19 7.133z"></path><path fill="currentColor" d="M16.207 5.704c-3.605.001-6.525 2.95-6.526 6.587.001 3.639 2.921 6.586 6.526 6.588 3.604-.002 6.526-2.95 6.526-6.588s-2.921-6.586-6.526-6.587m-4.137 6.587a4.18 4.18 0 0 1 2.656-3.896v7.792a4.18 4.18 0 0 1-2.656-3.896m5.617 3.898V8.395a4.18 4.18 0 0 1 2.657 3.897 4.18 4.18 0 0 1-2.657 3.897"></path><defs><linearGradient id="DinersClub_svg__a" x1="36" x2="0.655" y1="24" y2="-0.929" gradientUnits="userSpaceOnUse"><stop stopColor="#949497" stopOpacity="0.12"></stop><stop offset="1" stopColor="#949497" stopOpacity="0.04"></stop></linearGradient></defs>
  </svg>
);
