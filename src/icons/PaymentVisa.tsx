import React from 'react';
import type { LumaIconNoColorProps } from '../types';

export const PaymentVisa = ({ size = 36, ...props }: LumaIconNoColorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 36 24"
    {...props}
  >
    <rect width="36" height="24" fill="url(#Visa_svg__a)" rx="6"></rect><path fill="#fff" fillRule="evenodd" d="M12.125 16.258h-2.12l-1.59-6.066c-.076-.279-.236-.525-.471-.642A6.9 6.9 0 0 0 6 8.908v-.233h3.416a.89.89 0 0 1 .884.758l.824 4.376 2.12-5.134h2.061zm4.359 0H14.48l1.65-7.583h2.002zm4.24-5.482c.058-.409.412-.642.824-.642a3.73 3.73 0 0 1 1.944.35l.353-1.633A5.1 5.1 0 0 0 22.02 8.5c-1.944 0-3.358 1.05-3.358 2.508 0 1.11 1.002 1.692 1.709 2.042.765.35 1.06.584 1 .933 0 .525-.589.759-1.177.759a5.05 5.05 0 0 1-2.061-.467l-.354 1.633a5.8 5.8 0 0 0 2.18.409c2.179.058 3.533-.992 3.533-2.567 0-1.983-2.769-2.1-2.769-2.974m9.776 5.482-1.59-7.583h-1.708a.89.89 0 0 0-.825.583l-2.944 7h2.061l.412-1.108h2.533l.235 1.108zm-3.003-5.54.588 2.857h-1.649z" clipRule="evenodd"></path><defs><linearGradient id="Visa_svg__a" x1="36" x2="0" y1="12" y2="12" gradientUnits="userSpaceOnUse"><stop stopColor="#172B85"></stop><stop offset="1" stopColor="#3549A3"></stop></linearGradient></defs>
  </svg>
);
