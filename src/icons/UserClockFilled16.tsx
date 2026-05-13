import React from 'react';
import type { LumaIconProps } from '../types';

export const UserClockFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M5.193 8.518v.003c0 .614-.776.979-1.664 1.396-1.19.56-2.58 1.213-2.58 2.685 0 2.902 4.474 2.9 6.447 2.898h.115c.806 0 .937-.469 0-2.813-.709-1.771.278-2.527 1.331-3.333.34-.26.687-.526.986-.833l.026-.026a3 3 0 0 0 .14-.144c.674-.692.294-.304.027-.03.429-.474 1.427-1.783 1.427-3.696C11.448 2.363 9.701.5 7.511.5S3.573 2.363 3.573 4.625c0 1.49.605 2.244 1.076 2.83.3.374.544.68.544 1.063m9.204 3.7a2.665 2.665 0 1 1-5.33 0 2.665 2.665 0 0 1 5.33 0m-3.026.338a.47.47 0 0 1-.144-.337v-1.041a.469.469 0 0 1 .938 0v.848l.326.33a.476.476 0 0 1 0 .667.46.46 0 0 1-.659 0z" clipRule="evenodd"></path>
  </svg>
);
