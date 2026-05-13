import React from 'react';
import type { LumaIconProps } from '../types';

export const ModalWebhook = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="currentColor"><path fillOpacity="0.133" d="M20 16.679a6 6 0 1 1-.003 10.393c3.835-4.217 3.855-6.517.003-10.393m-13.999-.002c1.734 5.43 3.716 6.596 8.999 5.198a6 6 0 1 1-8.999-5.198m4.803-9.926A6 6 0 0 1 22 9.752c-5.569-1.213-7.57-.079-9.001 5.195a6 6 0 0 1-2.195-8.196"></path><path fillRule="evenodd" d="M5.501 15.063a1.001 1.001 0 0 1 1.002 1.73A5 5 0 1 0 14 21.126a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-7.072a7.001 7.001 0 0 1-13.929-1A7 7 0 0 1 5.5 15.063Zm10-6.928a1 1 0 0 1 1.366.366l3.536 6.124a7.001 7.001 0 1 1-.903 12.562 1 1 0 1 1 .998-1.732 5 5 0 1 0 .003-8.66 1 1 0 0 1-1.366-.366l-4-6.928a1 1 0 0 1 .366-1.366M9.938 5.501a7.001 7.001 0 0 1 13.064 3.501 1 1 0 0 1-2 .001 5 5 0 1 0-7.501 4.328c.478.276.642.888.366 1.367l-4 6.927a1 1 0 0 1-1.732-1L11.67 14.5a7 7 0 0 1-1.733-8.999Z"></path></g>
  </svg>
);
