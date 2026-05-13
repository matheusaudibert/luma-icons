import React from 'react';
import type { LumaIconProps } from '../types';

export const NotificationsMegaphone16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M12.025 2.116c.928 0 1.68.752 1.68 1.68v7.143a1.68 1.68 0 0 1-1.68 1.68h-.191a5 5 0 0 1-2.047-.434l-1.66-.737a2.695 2.695 0 0 1-5.382-.211V9.835A2.1 2.1 0 0 1 1.1 7.788v-.84c0-1.075.812-1.976 1.881-2.09l1.45-.151a4.2 4.2 0 0 0 1.267-.34L9.787 2.55a5 5 0 0 1 2.047-.434zm-7.614 9.12a1.032 1.032 0 0 0 2.06 0v-.465l.002-.058-.775-.344a4.2 4.2 0 0 0-1.267-.34l-.02-.002zm6.924-7.404a.835.835 0 0 0-.835.835V10a.835.835 0 0 0 1.67 0V4.667a.835.835 0 0 0-.835-.835"></path>
  </svg>
);
