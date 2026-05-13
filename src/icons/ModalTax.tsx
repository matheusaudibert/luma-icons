import React from 'react';
import type { LumaIconProps } from '../types';

export const ModalTax = ({ size = 2, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    style={{ color, ...style }}
    {...props}
  >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 27.892V4.277c0-1.34 1.367-2.234 2.552-1.657l1.124.562a2.58 2.58 0 0 0 2.143.057l3.175-1.34a5.24 5.24 0 0 1 4.011 0l3.175 1.34c.7.289 1.474.275 2.144-.057l1.124-.562C25.633 2.043 27 2.923 27 4.277v23.614m-22-.168c0 1.354 1.367 2.234 2.552 1.657l1.124-.562a2.58 2.58 0 0 1 2.143-.057l3.176 1.34a5.24 5.24 0 0 0 4.01 0l3.176-1.34a2.58 2.58 0 0 1 2.143.057l1.124.562c1.186.577 2.552-.317 2.552-1.657"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m12.771 19.63 7.6-7.598m-7.579.088v.075m7.392 7.317v.074m-7.09-7.45a.304.304 0 1 1-.608 0 .304.304 0 0 1 .609 0m7.392 7.392a.304.304 0 1 1-.608 0 .304.304 0 0 1 .608 0"></path><path fill="currentColor" fillOpacity="0.133" d="M5 3h5.5L16 2l6 1h5v17s-4 5-11 5-11-5-11-5z"></path>
  </svg>
);
