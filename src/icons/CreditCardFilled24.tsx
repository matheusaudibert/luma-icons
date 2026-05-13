import React from 'react';
import type { LumaIconProps } from '../types';

export const CreditCardFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M0 11.6q-.001-1.043.005-1.933c.005-.546.007-.82.183-.993C.363 8.5.639 8.5 1.192 8.5h21.616c.553 0 .829 0 1.004.174s.178.447.183.993q.006.89.005 1.933v.3c0 4.525 0 6.788-1.406 8.194S18.925 21.5 14.4 21.5H9.6c-4.525 0-6.788 0-8.194-1.406S0 16.425 0 11.9zm23.72-5.895c.115.57.173.854-.007 1.075S23.218 7 22.59 7H1.411C.78 7 .467 7 .287 6.78S.165 6.275.28 5.705c.2-.982.541-1.715 1.126-2.3C2.812 2 5.075 2 9.6 2h4.8c4.525 0 6.788 0 8.194 1.406.585.584.926 1.317 1.126 2.3M4.5 14a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4.5 14m0 3a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 4.5 17"></path>
  </svg>
);
