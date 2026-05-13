import React from 'react';
import type { LumaIconNoColorProps } from '../types';

export const PaymentCartesBancaires = ({ size = 36, ...props }: LumaIconNoColorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 36 24"
    {...props}
  >
    <rect width="36" height="24" fill="#29ABE2" rx="6"></rect><rect width="36" height="24" fill="url(#CartesBancaires_svg__a)" rx="6"></rect><rect width="36" height="24" fill="url(#CartesBancaires_svg__b)" rx="6"></rect><path fill="#fff" d="M19.08 6.981h6.61a2.31 2.31 0 1 1 0 4.62h-6.61zm0 5.143h6.61a2.31 2.31 0 0 1 0 4.62h-6.61zm-5.76 0V11.6h5.32a5.15 5.15 0 0 0-5.32-4.619A5.115 5.115 0 0 0 8 11.862a5.115 5.115 0 0 0 5.32 4.881 5.15 5.15 0 0 0 5.32-4.619z"></path><defs><radialGradient id="CartesBancaires_svg__a" cx="0" cy="0" r="1" gradientTransform="matrix(3649.14 0 0 3648.96 133.292 2335.75)" gradientUnits="userSpaceOnUse"><stop offset="0.09" stopColor="#009245"></stop><stop offset="0.23" stopColor="#049552" stopOpacity="0.89"></stop><stop offset="0.52" stopColor="#0D9E74" stopOpacity="0.59"></stop><stop offset="0.91" stopColor="#1BACAB" stopOpacity="0.12"></stop><stop offset="1" stopColor="#1FB0B8" stopOpacity="0"></stop></radialGradient><radialGradient id="CartesBancaires_svg__b" cx="0" cy="0" r="1" gradientTransform="matrix(4681.46 0 0 4681.22 534.13 2541.41)" gradientUnits="userSpaceOnUse"><stop offset="0.15" stopColor="#1FB0B8" stopOpacity="0"></stop><stop offset="0.35" stopColor="#1C7491" stopOpacity="0.4"></stop><stop offset="0.56" stopColor="#1A4471" stopOpacity="0.73"></stop><stop offset="0.74" stopColor="#18265E" stopOpacity="0.93"></stop><stop offset="0.87" stopColor="#181B57"></stop></radialGradient></defs>
  </svg>
);
