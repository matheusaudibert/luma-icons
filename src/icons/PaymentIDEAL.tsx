import React from 'react';
import type { LumaIconProps } from '../types';

export const PaymentIDEAL = ({ size = 36, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 36 24"
    style={{ color, ...style }}
    {...props}
  >
    <rect width="36" height="24" fill="currentColor" rx="6"></rect><rect width="35.5" height="23.5" x="0.25" y="0.25" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.5" rx="5.75"></rect><path fill="currentColor" fillRule="evenodd" d="M10.5 4.593h8.76c5.952 0 8.24 3.253 8.24 7.365 0 4.918-3.197 7.39-8.24 7.39H10.5zm.832.884v13.039h7.928c4.783 0 7.382-2.238 7.382-6.532 0-4.425-2.807-6.507-7.382-6.507zm2.34 6.74a1.587 1.587 0 1 0-.003-3.172 1.587 1.587 0 0 0 .002 3.173m-1.274.678h2.547v4.528h-2.547z" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M23.757 9.173h.728v2.186h1.065c-.286-3.982-3.43-4.867-6.29-4.867h-3.042v2.681h.442c.832 0 1.326.547 1.326 1.457 0 .911-.494 1.458-1.3 1.458h-.468v5.335h3.042c4.653 0 6.238-2.16 6.316-5.335h-1.82zm-3.51 2.186v.729h-1.82V9.173h1.768v.729h-1.04v.338h.988v.729h-.961v.39zm.312.729.884-2.915h1.04l.884 2.915h-.754l-.156-.547h-.962l-.156.547zm1.152-1.301h-.008v.026zm0 0h.512l-.234-.807h-.026zm-5.492.572V9.902h.441c.286 0 .598.078.598.729 0 .65-.286.728-.598.728z" clipRule="evenodd"></path><defs><linearGradient id="iDEAL_svg__a" x1="36" x2="0.655" y1="24" y2="-0.929" gradientUnits="userSpaceOnUse"><stop stopColor="#949497" stopOpacity="0.12"></stop><stop offset="1" stopColor="#949497" stopOpacity="0.04"></stop></linearGradient></defs>
  </svg>
);
