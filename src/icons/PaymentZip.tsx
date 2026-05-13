import React from 'react';
import type { LumaIconNoColorProps } from '../types';

export const PaymentZip = ({ size = 36, ...props }: LumaIconNoColorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 36 24"
    {...props}
  >
    <rect width="36" height="24" fill="url(#Zip_svg__a)" rx="6"></rect><rect width="35.5" height="23.5" x="0.25" y="0.25" stroke="#949497" strokeOpacity="0.5" strokeWidth="0.5" rx="5.75"></rect><mask id="Zip_svg__b" width="24" height="9" x="6" y="7" maskUnits="userSpaceOnUse" style={{ maskType: 'luminance' }}><path fill="#fff" d="M29.5 7.371h-23v8.535h23z"></path></mask><g mask="url(#Zip_svg__b)"><path fill="#000" d="m7.085 14.177.2 1.625h6.983l-.229-1.86h-3.255l-.03-.231 3-2.096-.2-1.628H6.57l.228 1.86h3.262l.028.234z"></path><path fill="#AA8FFF" d="m14.364 9.987.715 5.815h6.987l-.714-5.815z"></path><path fill="#000" d="M29.394 12.08c-.16-1.306-1.187-2.098-2.583-2.093h-4.648l.714 5.816h2.09l-.142-1.163h2.213c1.741 0 2.538-1.086 2.356-2.56m-2.582.93-2.187.002-.171-1.396 2.198.002c.517.006.782.297.825.696.026.256-.091.695-.666.695m-10.36-3.795c.368-.395.303-1.052-.143-1.469-.447-.416-1.108-.433-1.475-.039-.368.395-.304 1.053.143 1.47.447.415 1.107.433 1.475.038"></path></g><defs><linearGradient id="Zip_svg__a" x1="36" x2="0.655" y1="24" y2="-0.929" gradientUnits="userSpaceOnUse"><stop stopColor="#949497" stopOpacity="0.12"></stop><stop offset="1" stopColor="#949497" stopOpacity="0.04"></stop></linearGradient></defs>
  </svg>
);
