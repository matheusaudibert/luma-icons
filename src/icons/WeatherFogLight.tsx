import React from 'react';
import type { LumaIconNoColorProps } from '../types';

export const WeatherFogLight = ({ size = 24, ...props }: LumaIconNoColorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none" fillRule="evenodd"><path fill="#000" fillOpacity="0.25" fillRule="nonzero" d="M17.735 20.602H6.393a.585.585 0 0 0-.6.59.59.59 0 0 0 .6.596h11.342a.59.59 0 0 0 .6-.596.585.585 0 0 0-.6-.59m0-2.98H6.393a.586.586 0 0 0-.6.59c0 .336.264.59.6.59h11.342c.334 0 .6-.254.6-.59a.586.586 0 0 0-.6-.59"></path><path fill="#fff" fillRule="nonzero" d="M6.059 15.569h10.95c2.941 0 5.141-2.236 5.141-5.02 0-2.865-2.306-4.99-5.326-4.99C15.744 3.435 13.738 2 11.074 2c-3.367 0-6.1 2.591-6.43 5.861-1.615.495-2.844 1.9-2.844 3.794 0 2.178 1.594 3.914 4.259 3.914"></path><path stroke="#000" strokeLinejoin="round" strokeOpacity="0.25" d="M11.075 2.5c2.305 0 4.069 1.155 5.106 2.924l.197.361a.5.5 0 0 0 .445.274c2.778 0 4.828 1.934 4.828 4.49 0 2.502-1.971 4.52-4.642 4.52H6.059c-1.221 0-2.156-.397-2.781-1-.627-.605-.978-1.45-.978-2.414 0-1.548.934-2.724 2.227-3.224l.262-.091a.5.5 0 0 0 .34-.355l.012-.073C5.447 4.888 7.973 2.5 11.075 2.5Z"></path></g>
  </svg>
);
