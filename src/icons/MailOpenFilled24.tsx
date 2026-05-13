import React from 'react';
import type { LumaIconProps } from '../types';

export const MailOpenFilled24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M2 14.8v-4.06c0-.294.3-.472.563-.34l6.307 3.153.183.092c1.135.569 1.998 1 2.947 1s1.812-.431 2.947-1l.184-.092 6.306-3.153a.382.382 0 0 1 .563.34v4.06c0 3.394 0 5.091-1.054 6.146S18.194 22 14.8 22H9.2c-3.394 0-5.091 0-6.146-1.054S2 18.194 2 14.8m16.844-5.34a.54.54 0 0 0 .299-.486v-1.26c0-2.693 0-4.04-.837-4.877S16.122 2 13.429 2H10.57c-2.693 0-4.04 0-4.877.837s-.837 2.184-.837 4.877v1.26c0 .205.115.394.299.486l4.608 2.304c1.406.703 1.82.882 2.236.882s.83-.179 2.236-.882zM9 4.5a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zM11 8a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"></path>
  </svg>
);
