import React from 'react';
import type { LumaIconProps } from '../types';

export const ModalBell = ({ size = 2, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="none" fillRule="evenodd"><path fill="currentColor" fillOpacity="0.133" d="M6.776 16.49a9.485 9.485 0 0 1 18.322-4.91l.495 1.84a7.65 7.65 0 0 0 1.546 2.959l1.02 1.207c1.56 1.846.67 4.687-1.664 5.313l-15.27 4.091c-2.334.626-4.526-1.39-4.098-3.768l.28-1.556c.2-1.11.152-2.249-.14-3.336z"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.482 4.874C8.423 6.23 5.42 11.431 6.776 16.49l.492 1.84a7.7 7.7 0 0 1 .14 3.336l-.28 1.556c-.429 2.378 1.763 4.394 4.097 3.768l15.27-4.091c2.333-.626 3.225-3.467 1.665-5.313l-1.021-1.207a7.65 7.65 0 0 1-1.546-2.96l-.495-1.838a9.485 9.485 0 0 0-11.616-6.707m0 0-.518-1.933M25.73 5.127C24.65 3.823 23.188 2.722 21.485 2M3 11.218c.284-1.67.999-3.354 2.113-4.831m9.614 20.435a4.477 4.477 0 0 0 8.647-2.317"></path></g>
  </svg>
);
