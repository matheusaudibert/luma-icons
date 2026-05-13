import React from 'react';
import type { LumaIconProps } from '../types';

export const Lock16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12.04 4.63c0-2.16-1.795-3.88-3.967-3.88C5.9.742 4.098 2.452 4.089 4.613v1.006c-1.351.46-2.339 1.703-2.339 3.199v3.041c0 1.9 1.592 3.391 3.498 3.391h5.633c1.906 0 3.498-1.492 3.498-3.39V8.817c0-1.496-.988-2.739-2.339-3.2zm-1.403.797V4.63c0-1.35-1.13-2.477-2.566-2.477h-.003c-1.434-.006-2.57 1.115-2.576 2.464v.81zM3.153 8.818c0-1.072.912-1.987 2.095-1.987h5.633c1.183 0 2.095.915 2.095 1.987v3.041c0 1.073-.912 1.988-2.095 1.988H5.248c-1.183 0-2.095-.915-2.095-1.988z"></path>
  </svg>
);
