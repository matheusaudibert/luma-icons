import React from 'react';
import type { LumaIconProps } from '../types';

export const PaymentMastercard = ({ size = 36, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 36 24"
    style={{ color, ...style }}
    {...props}
  >
    <rect width="36" height="24" fill="currentColor" rx="6"></rect><rect width="35.5" height="23.5" x="0.25" y="0.25" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.5" rx="5.75"></rect><path fill="currentColor" fillRule="evenodd" d="M18.25 17.157a6.75 6.75 0 0 1-4.426 1.649c-3.769 0-6.824-3.09-6.824-6.903S10.055 5 13.824 5a6.75 6.75 0 0 1 4.426 1.649A6.75 6.75 0 0 1 22.676 5c3.769 0 6.824 3.09 6.824 6.903s-3.055 6.903-6.824 6.903a6.75 6.75 0 0 1-4.426-1.65" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M18.25 17.157a6.92 6.92 0 0 0 2.398-5.254 6.92 6.92 0 0 0-2.398-5.254A6.75 6.75 0 0 1 22.676 5c3.769 0 6.824 3.09 6.824 6.903s-3.055 6.903-6.824 6.903a6.75 6.75 0 0 1-4.426-1.65" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M18.25 6.65a6.92 6.92 0 0 1 2.398 5.253 6.92 6.92 0 0 1-2.398 5.254 6.92 6.92 0 0 1-2.398-5.254A6.92 6.92 0 0 1 18.25 6.65" clipRule="evenodd"></path><defs><linearGradient id="Mastercard_svg__a" x1="36" x2="0.655" y1="24" y2="-0.929" gradientUnits="userSpaceOnUse"><stop stopColor="#949497" stopOpacity="0.12"></stop><stop offset="1" stopColor="#949497" stopOpacity="0.04"></stop></linearGradient></defs>
  </svg>
);
