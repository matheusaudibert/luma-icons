import React from 'react';
import type { LumaIconProps } from '../types';

export const FontPoster = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 88 88"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M35.6 68h8.184L27.416 20.81H21.08L4.976 68h7.26l3.3-10.296h16.698zm-5.544-17.094H17.78l6.138-18.876h.066zm44.276-2.31V61.07H55.654V27.74h18.678v7.062l7.524-1.518v-4.62c0-4.356-2.112-7.854-8.448-7.854H56.314c-6.336 0-8.448 3.498-8.448 7.854v31.482c0 4.356 2.112 7.854 8.448 7.854h17.094c6.336 0 8.448-3.498 8.448-7.854v-18.48H64.828v6.93z"></path>
  </svg>
);
