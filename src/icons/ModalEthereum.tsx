import React from 'react';
import type { LumaIconProps } from '../types';

export const ModalEthereum = ({ size = 2, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="none" fillRule="evenodd"><path fill="currentColor" fillOpacity="0.133" d="M16 3.018v8l10 4.5-10-14.5zm0 26.5v-9.5l-10-4.5z"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 15.518 9.5 14.251a.6.6 0 0 0 1 0L26 15.52m-20 0 9.5-14.252a.6.6 0 0 1 1 0l9.5 14.25m-20 0 9.732 4.866a.6.6 0 0 0 .536 0L26 15.518m-20 0 9.732-4.866a.6.6 0 0 1 .536 0L26 15.518"></path></g>
  </svg>
);
