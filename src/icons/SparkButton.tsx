import React from 'react';
import type { LumaIconProps } from '../types';

export const SparkButton = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M15 7.1v-.7c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C12.72 1.6 11.88 1.6 10.2 1.6H5.5c-1.398 0-2.097 0-2.648.228a3 3 0 0 0-1.624 1.624C1 4.003 1 4.702 1 6.1v1c0 .464 0 .697.026.892a3 3 0 0 0 2.582 2.582c.195.026.428.026.892.026v0H5"></path><path fill="none" stroke="currentColor" strokeWidth="1.6" d="m8.088 7.071.476 7.93a.2.2 0 0 0 .367.098l2.078-3.148a.2.2 0 0 1 .155-.089l3.765-.226a.2.2 0 0 0 .099-.367l-6.63-4.377a.2.2 0 0 0-.31.18Z"></path>
  </svg>
);
