import React from 'react';
import type { LumaIconNoColorProps } from '../types';

export const PaymentAmexDark = ({ size = 36, ...props }: LumaIconNoColorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 36 24"
    {...props}
  >
    <rect width="36" height="24" fill="#1F72CD" rx="6"></rect><path fill="#fff" d="M7.181 8.5 4 15.747h3.808l.472-1.156h1.08l.472 1.156h4.191v-.882l.374.882h2.168l.374-.9v.9h8.718l1.06-1.126.992 1.126 4.478.01-3.191-3.613 3.19-3.644H27.78l-1.032 1.105-.962-1.105h-9.483l-.815 1.87-.833-1.87h-3.8v.852L10.43 8.5zM20.2 9.529h5.006l1.532 1.703 1.58-1.703h1.531l-2.326 2.614 2.326 2.583h-1.6l-1.531-1.722-1.589 1.722H20.2zm1.237 2.026v-.95h3.123l1.363 1.518-1.423 1.526h-3.063v-1.036h2.73v-1.058zM7.918 9.529h1.856l2.11 4.914V9.53h2.034l1.63 3.523L17.05 9.53h2.023v5.2h-1.231l-.01-4.075-1.795 4.075h-1.101l-1.806-4.075v4.075h-2.532l-.48-1.166H7.523l-.479 1.165H5.687zm.048 2.957.855-2.077.854 2.077z" clipRule="evenodd"></path>
  </svg>
);
