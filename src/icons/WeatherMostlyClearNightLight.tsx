import React from 'react';
import type { LumaIconNoColorProps } from '../types';

export const WeatherMostlyClearNightLight = ({ size = 24, ...props }: LumaIconNoColorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#5856d7" d="M16.412 14.675c-4.59 0-7.526-2.87-7.526-7.536 0-1.093.23-2.386.552-3.1.097-.225.13-.387.13-.5 0-.266-.198-.539-.57-.539a1.7 1.7 0 0 0-.565.112C5.181 4.416 3 7.804 3 11.377c0 4.998 4.054 9.05 9.048 9.05 3.744 0 6.917-2.256 8.084-5.164.093-.238.122-.463.122-.57a.57.57 0 0 0-.559-.59c-.141 0-.279.041-.486.11-.67.22-1.636.462-2.797.462"></path>
  </svg>
);
