import React from 'react';
import type { LumaIconProps } from '../types';

export const SparkBlockquote = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="currentColor" fillRule="evenodd"><path d="M6.6 3.5a.9.9 0 1 0 1.8 0 .9.9 0 0 0-1.8 0M7.5 1a2.5 2.5 0 1 0 .209 4.991A3.8 3.8 0 0 1 5.912 7.38l-.19.071a.8.8 0 1 0 .557 1.5l.19-.071A5.42 5.42 0 0 0 10 3.799h-.018A2.5 2.5 0 0 0 7.5 1m5.1 2.5a.9.9 0 1 0 1.8 0 .9.9 0 0 0-1.8 0m.9-2.5a2.5 2.5 0 1 0 .21 4.991 3.8 3.8 0 0 1-1.798 1.388l-.19.071a.8.8 0 0 0 .557 1.5l.19-.071a5.42 5.42 0 0 0 3.532-5.08h-.019A2.5 2.5 0 0 0 13.5 1"></path><path fillRule="nonzero" d="M1.8 2A.8.8 0 1 0 .2 2zM.2 14a.8.8 0 0 0 1.6 0zm0-12v12h1.6V2z"></path></g>
  </svg>
);
