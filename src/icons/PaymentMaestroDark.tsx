import React from 'react';
import type { LumaIconProps } from '../types';

export const PaymentMaestroDark = ({ size = 36, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 36 24"
    style={{ color, ...style }}
    {...props}
  >
    <rect width="36" height="24" fill="currentColor" rx="6"></rect><rect width="35.5" height="23.5" x="0.25" y="0.25" stroke="currentColor" strokeOpacity="0.6" strokeWidth="0.5" rx="5.75"></rect><path fill="currentColor" d="M20.648 12.127c0 3.812-3.056 6.903-6.824 6.903C10.055 19.03 7 15.94 7 12.127s3.055-6.903 6.824-6.903 6.824 3.09 6.824 6.903"></path><path fill="currentColor" d="M29.5 12.127c0 3.812-3.055 6.903-6.824 6.903s-6.823-3.09-6.823-6.903 3.055-6.903 6.823-6.903 6.824 3.09 6.824 6.903"></path><path fill="currentColor" fillRule="evenodd" d="M18.25 6.873a6.92 6.92 0 0 1 2.398 5.254 6.92 6.92 0 0 1-2.398 5.254 6.92 6.92 0 0 1-2.398-5.254 6.92 6.92 0 0 1 2.398-5.254" clipRule="evenodd"></path><defs><linearGradient id="MaestroDark_svg__a" x1="36" x2="0.655" y1="24" y2="-0.929" gradientUnits="userSpaceOnUse"><stop stopColor="#949497" stopOpacity="0.12"></stop><stop offset="1" stopColor="#949497" stopOpacity="0.04"></stop></linearGradient></defs>
  </svg>
);
