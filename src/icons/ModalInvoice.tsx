import React from 'react';
import type { LumaIconProps } from '../types';

export const ModalInvoice = ({ size = 2, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="none" fillRule="evenodd" transform="translate(5 1.5)"><path fill="currentColor" fillOpacity="0.133" fillRule="nonzero" d="M0 1.5h5.5l5.5-1 6 1h5v15H0z"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M0 26.392V2.777C0 1.437 1.367.543 2.552 1.12l1.124.562a2.58 2.58 0 0 0 2.143.057L8.994.399a5.24 5.24 0 0 1 4.011 0l3.175 1.34c.7.289 1.474.275 2.144-.057l1.124-.562C20.633.543 22 1.423 22 2.777v23.614m-22-.168c0 1.354 1.367 2.234 2.552 1.657l1.124-.562a2.58 2.58 0 0 1 2.143-.057l3.176 1.34a5.24 5.24 0 0 0 4.01 0l3.176-1.34a2.58 2.58 0 0 1 2.143.057l1.124.562c1.186.577 2.552-.317 2.552-1.657M5 16.5h12m-12 5h8"></path><circle cx="6.5" cy="10" r="1.5" stroke="currentColor" strokeWidth="2"></circle></g>
  </svg>
);
