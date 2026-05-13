import React from 'react';
import type { LumaIconProps } from '../types';

export const PaymentSolana = ({ size = 36, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 36 24"
    style={{ color, ...style }}
    {...props}
  >
    <rect width="36" height="24" fill="currentColor" rx="6"></rect><path fill="currentColor" fillRule="evenodd" d="M13.626 14.999a.43.43 0 0 1 .315-.138l9.72.008a.22.22 0 0 1 .196.126.21.21 0 0 1-.038.227l-2.07 2.251a.43.43 0 0 1-.315.138l-9.72-.008a.22.22 0 0 1-.196-.126.21.21 0 0 1 .038-.227zm10.193-1.874a.21.21 0 0 1-.157.353l-9.72.008a.43.43 0 0 1-.316-.138l-2.07-2.251a.21.21 0 0 1 .157-.353l9.721-.008a.43.43 0 0 1 .315.137zM13.626 6.749a.43.43 0 0 1 .315-.138l9.72.008a.22.22 0 0 1 .196.126.21.21 0 0 1-.038.227l-2.07 2.251a.43.43 0 0 1-.315.138l-9.72-.008a.22.22 0 0 1-.196-.126.21.21 0 0 1 .038-.227z" clipRule="evenodd"></path><defs><linearGradient id="Solana_svg__a" x1="41.143" x2="0.259" y1="-2" y2="12.718" gradientUnits="userSpaceOnUse"><stop stopColor="#14F195"></stop><stop offset="0.831" stopColor="#9945FF"></stop></linearGradient></defs>
  </svg>
);
