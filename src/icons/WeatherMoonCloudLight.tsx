import React from 'react';
import type { LumaIconProps } from '../types';

export const WeatherMoonCloudLight = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="none" fillRule="evenodd"><path fill="currentColor" fillOpacity="0.25" fillRule="nonzero" d="M18.043 4.71c0 .484-.593 1.342-.593 2.535 0 1.989 1.286 3.234 3.435 3.234 1.254 0 1.91-.56 2.36-.56.287 0 .441.254.441.612 0 1.333-1.418 3.743-4.292 4.192-.164-2.778-2.3-4.878-5.146-5.19a7 7 0 0 0-.917-1.148c.515-2.44 2.634-4.084 4.171-4.135.353-.007.541.182.541.46"></path><path fill="currentColor" fillRule="nonzero" d="M3.996 19.474h9.75c2.513 0 4.45-1.914 4.45-4.394 0-2.49-1.991-4.36-4.667-4.37-1-1.909-2.81-3.134-5.077-3.134-2.93 0-5.385 2.25-5.654 5.187C1.277 13.206.3 14.495.3 16.08c0 2.013 1.503 3.394 3.697 3.394"></path><path stroke="currentColor" strokeLinejoin="round" strokeOpacity="0.25" d="M8.452 8.076c2.066 0 3.713 1.108 4.634 2.865a.5.5 0 0 0 .372.264l.07.005c2.432.009 4.168 1.687 4.168 3.87 0 2.199-1.708 3.894-3.95 3.894h-9.75c-.992 0-1.79-.31-2.333-.81C1.123 17.668.8 16.956.8 16.08c0-1.36.828-2.456 2.138-2.838a.5.5 0 0 0 .358-.433c.246-2.681 2.487-4.733 5.156-4.733Z"></path></g>
  </svg>
);
