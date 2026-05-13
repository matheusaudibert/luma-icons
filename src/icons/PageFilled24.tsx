import React from 'react';
import type { LumaIconProps } from '../types';

export const PageFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M2.5 8.5c0-3.771 0-5.657 1.172-6.828S6.729.5 10.5.5h3c3.771 0 5.657 0 6.828 1.172S21.5 4.729 21.5 8.5v7c0 3.771 0 5.657-1.172 6.828S17.271 23.5 13.5 23.5h-3c-3.771 0-5.657 0-6.828-1.172S2.5 19.271 2.5 15.5zm4.469 4.781a1 1 0 0 0 0 2h2.875a1 1 0 0 0 0-2zm0 4a1 1 0 0 0 0 2h5.75a1 1 0 0 0 0-2zM5.732 3.732C5 4.464 5 5.643 5 8c0 .943 0 1.414.293 1.707S6.057 10 7 10h10c.943 0 1.414 0 1.707-.293S19 8.943 19 8c0-2.357 0-3.536-.732-4.268C17.535 3 16.357 3 14 3h-4c-2.357 0-3.536 0-4.268.732"></path>
  </svg>
);
