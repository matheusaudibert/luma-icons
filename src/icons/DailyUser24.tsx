import React from 'react';
import type { LumaIconProps } from '../types';

export const DailyUser24 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M12.006 12a4.495 4.495 0 0 0 4.502-4.5c0-2.49-2.011-4.5-4.502-4.5a4.495 4.495 0 0 0-4.503 4.5c0 2.49 2.011 4.5 4.502 4.5m0-7c1.38 0 2.501 1.12 2.501 2.5a2.502 2.502 0 0 1-5.003 0c0-1.38 1.12-2.5 2.502-2.5m8.975 14.74c-.77-3.27-4.493-5.74-8.976-5.74-4.482 0-8.205 2.48-8.975 5.74-.15.64.32 1.26.98 1.26h15.98c.66 0 1.141-.62.981-1.26zM5.491 19c1.131-1.77 3.683-3 6.515-3s5.383 1.23 6.514 3z"></path>
  </svg>
);
