import React from 'react';
import type { LumaIconProps } from '../types';

export const ModalRefundPolicy = ({ size = 2, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="none" fillRule="evenodd" transform="translate(1.98 2.893)"><path fill="currentColor" fillOpacity="0.133" fillRule="nonzero" d="M.02 12.307c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874c.428-.218.988-.218 2.108-.218h1.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v11.134c0 .62 0 .93-.068 1.184a2 2 0 0 1-1.414 1.414c-.254.068-.564.068-1.184.068-1.24 0-1.86 0-2.369-.136a4 4 0 0 1-2.828-2.828C.02 22.634.02 22.014.02 20.774z"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.116 9.348v-6.7c0-1.278 1.235-2.13 2.307-1.58l1.016.535c.603.317 1.304.33 1.937.055L16.246.38a4.5 4.5 0 0 1 3.625 0l2.87 1.278a2.23 2.23 0 0 0 1.937-.055l1.015-.536C26.765.518 28 1.357 28 2.647l-.014 17.854c0 3.528-1.798 5.712-5.04 5.712H4.064M8.116 9.348v12.813a4.05 4.05 0 0 1-4.051 4.052M8.116 9.348c-.384-.205-.77-.385-.919-.315l-1.937.864a2.22 2.22 0 0 1-1.936-.054l-1.016-.536C1.237 8.757 0 9.595 0 10.886V22.16c0 1.113.454 2.13 1.196 2.872a4.04 4.04 0 0 0 2.869 1.18m8.955-12.105h10m-10 5h8"></path><circle cx="13.52" cy="8.607" r="1.5" fill="currentColor" fillRule="nonzero"></circle></g>
  </svg>
);
