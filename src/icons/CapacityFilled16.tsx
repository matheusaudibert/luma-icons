import React from 'react';
import type { LumaIconProps } from '../types';

export const CapacityFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M8 15.875c-.69 0-1.25-.56-1.25-1.25v-4.254c-1.98-.017-3.013-.126-3.323-.838-.366-.84.57-1.848 2.442-3.865l.08-.085c.96-1.035 1.44-1.552 2.05-1.552.611 0 1.092.517 2.053 1.552l.079.085c1.872 2.017 2.808 3.025 2.442 3.865-.31.712-1.344.82-3.323.838v4.254c0 .69-.56 1.25-1.25 1.25m6-13.25a1.25 1.25 0 1 0 0-2.5H2a1.25 1.25 0 0 0 0 2.5z"></path>
  </svg>
);
