import React from 'react';
import type { LumaIconProps } from '../types';

export const NotificationsUserClock16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M11.486 8.64a2.75 2.75 0 1 1 0 5.501 2.75 2.75 0 0 1 0-5.5M7.985 1.816c1.806 0 3.248 1.537 3.248 3.403 0 2.192-3.7 2.105-4.09 5.532-.259 2.26.841 3.603-1.378 3.35-1.57-.179-3.194-.712-3.194-2.3 0-2.123 3.502-2.184 3.502-3.368V8.43c0-.814-1.337-1.201-1.337-3.212 0-1.866 1.442-3.403 3.249-3.403M11.38 9.41a.606.606 0 0 0-.605.606v1.375a.6.6 0 0 0 .101.334.6.6 0 0 0 .076.094l.688.686a.605.605 0 1 0 .856-.855l-.51-.51v-1.124a.607.607 0 0 0-.606-.606"></path>
  </svg>
);
