import React from 'react';
import type { LumaIconProps } from '../types';

export const WandFilled16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <g fill="currentColor" fillRule="evenodd"><path d="M12.839 3.33a3.5 3.5 0 0 0-4.95 0L1.525 9.692a3.5 3.5 0 0 0 4.95 4.95l6.364-6.364a3.5 3.5 0 0 0 0-4.95m-1.414 1.414a1.5 1.5 0 0 0-2.122 0l-.353.353 2.121 2.121.354-.353a1.5 1.5 0 0 0 0-2.121"></path><path fillRule="nonzero" d="M1.436 2.97a.32.32 0 0 1 0-.573l.837-.418a1.6 1.6 0 0 0 .715-.716l.418-.836a.32.32 0 0 1 .573 0l.418.836c.154.31.406.56.715.716l.836.418a.32.32 0 0 1 0 .572l-.836.418a1.6 1.6 0 0 0-.715.716l-.418.836a.32.32 0 0 1-.573 0l-.418-.836a1.6 1.6 0 0 0-.715-.716zm10.236 9.428a.24.24 0 0 1 0-.43l.627-.313a1.2 1.2 0 0 0 .537-.537l.313-.627a.24.24 0 0 1 .43 0l.313.627a1.2 1.2 0 0 0 .537.537l.627.313a.24.24 0 0 1 0 .43l-.627.313a1.2 1.2 0 0 0-.537.537l-.313.627a.24.24 0 0 1-.43 0l-.313-.627a1.2 1.2 0 0 0-.537-.537z"></path></g>
  </svg>
);
