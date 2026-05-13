import React from 'react';
import type { LumaIconNoColorProps } from '../types';

export const PaymentEthereumDark = ({ size = 36, ...props }: LumaIconNoColorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 36 24"
    {...props}
  >
    <rect width="36" height="24" fill="#6481E7" rx="6"></rect><circle cx="18" cy="11.935" r="9.5" fill="#6481E7"></circle><path fill="#C1CCF5" fillRule="evenodd" d="M18.111 5.25v9.59l4.262-2.519z" clipRule="evenodd"></path><path fill="#fff" fillRule="evenodd" d="m13.85 12.321 4.26 2.52V5.25z" clipRule="evenodd"></path><path fill="#8299EC" fillRule="evenodd" d="m18.111 10.385-4.262 1.937 4.262 2.519 4.261-2.52z" clipRule="evenodd"></path><path fill="#C1CCF5" fillRule="evenodd" d="m18.111 10.385-4.262 1.937 4.262 2.519zm0 5.263v3.487l4.264-6.005z" clipRule="evenodd"></path><path fill="#fff" fillRule="evenodd" d="m13.85 13.13 4.26 6.005v-3.487z" clipRule="evenodd"></path>
  </svg>
);
