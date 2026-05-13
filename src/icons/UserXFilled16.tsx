import React from 'react';
import type { LumaIconProps } from '../types';

export const UserXFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M5.678 8.518v.003c0 .614-.776.979-1.664 1.396-1.19.56-2.58 1.213-2.58 2.685 0 2.902 4.473 2.9 6.447 2.898h.115c.806 0 .937-.469 0-2.812-.71-1.772.278-2.528 1.331-3.334.34-.26.687-.526.986-.833l.025-.026a3 3 0 0 0 .14-.144c.674-.692.295-.304.028-.03.429-.474 1.427-1.783 1.427-3.696C11.933 2.363 10.185.5 7.996.5S4.057 2.363 4.057 4.625c0 1.49.605 2.244 1.076 2.83.299.374.544.68.544 1.063m4.16 1.325a.75.75 0 0 1 1.061 0l1.18 1.18 1.181-1.18a.75.75 0 0 1 1.06 1.06l-1.18 1.181 1.18 1.18a.75.75 0 0 1-1.06 1.061l-1.18-1.18-1.181 1.18a.75.75 0 0 1-1.06-1.06l1.18-1.181-1.18-1.18a.75.75 0 0 1 0-1.061" clipRule="evenodd"></path>
  </svg>
);
