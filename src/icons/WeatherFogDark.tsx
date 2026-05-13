import React from 'react';
import type { LumaIconNoColorProps } from '../types';

export const WeatherFogDark = ({ size = 24, ...props }: LumaIconNoColorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="#fff"><path fillOpacity="0.5" d="M17.735 20.602H6.393a.585.585 0 0 0-.6.59.59.59 0 0 0 .6.596h11.342a.59.59 0 0 0 .6-.596.585.585 0 0 0-.6-.59m0-2.98H6.393a.586.586 0 0 0-.6.59c0 .336.264.59.6.59h11.342c.334 0 .6-.254.6-.59a.586.586 0 0 0-.6-.59"></path><path d="M6.059 15.569h10.95c2.941 0 5.141-2.236 5.141-5.02 0-2.865-2.306-4.99-5.326-4.99C15.744 3.435 13.738 2 11.074 2c-3.367 0-6.1 2.591-6.43 5.861-1.615.495-2.844 1.9-2.844 3.794 0 2.178 1.594 3.914 4.259 3.914"></path></g>
  </svg>
);
