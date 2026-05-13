import React from 'react';
import type { LumaIconProps } from '../types';

export const ModalSolana = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="currentColor" fillRule="evenodd"><path fillOpacity="0.133" d="M3 13.334h22.256l3.59 5.743H6.59z"></path><path d="M6.59 3a1 1 0 0 0-.798.397L2.202 8.14A1 1 0 0 0 3 9.744h22.256a1 1 0 0 0 .798-.397l3.59-4.744A1 1 0 0 0 28.846 3zM5.01 7.744 7.088 5h19.748L24.76 7.744zm-2.885 5.105A1 1 0 0 1 3 12.333h22.256a1 1 0 0 1 .848.47l3.59 5.744a1 1 0 0 1-.848 1.53H6.59a1 1 0 0 1-.848-.47l-3.59-5.744a1 1 0 0 1-.027-1.014m2.68 1.484 2.339 3.744h19.898l-2.34-3.744zm.987 8.73a1 1 0 0 1 .798-.396h22.256a1 1 0 0 1 .798 1.603l-3.59 4.744a1 1 0 0 1-.798.396H3a1 1 0 0 1-.797-1.603zm1.295 1.604L5.011 27.41h19.748l2.076-2.743z"></path></g>
  </svg>
);
