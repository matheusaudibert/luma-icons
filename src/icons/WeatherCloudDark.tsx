import React from 'react';
import type { LumaIconNoColorProps } from '../types';

export const WeatherCloudDark = ({ size = 24, ...props }: LumaIconNoColorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#fff" d="M5.844 19.195H17.38c3.032 0 5.374-2.298 5.374-5.242 0-2.988-2.402-5.224-5.61-5.217C15.962 6.388 13.8 5 11.124 5 7.64 5 4.745 7.664 4.401 11.169c-1.8.533-3.002 2.062-3.002 3.952 0 2.386 1.788 4.074 4.444 4.074"></path>
  </svg>
);
