import React from 'react';
import type { LumaIconProps } from '../types';

export const JigsawFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M1.5 6q-.328.002-.623.099c-.475.155-.713.233-.796.17-.083-.061-.078-.26-.068-.656.042-1.622.208-2.578.865-3.234C1.757 1.5 3.17 1.5 5.999 1.5h1c2.829 0 4.243 0 5.122.879.58.58.777 1.394.844 2.696.01.214.016.32.075.376.06.055.18.053.419.05L13.5 5.5a2.5 2.5 0 1 1-.041 5c-.24-.004-.36-.006-.419.049s-.064.162-.075.377c-.067 1.3-.264 2.115-.844 2.695-.88.879-2.293.879-5.122.879H6c-2.828 0-4.242 0-5.121-.879-.657-.656-.823-1.612-.865-3.234-.01-.397-.015-.595.068-.657s.32.016.796.171Q1.172 10 1.5 10a2 2 0 1 0 0-4" clipRule="evenodd"></path>
  </svg>
);
