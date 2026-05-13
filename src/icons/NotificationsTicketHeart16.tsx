import React from 'react';
import type { LumaIconProps } from '../types';

export const NotificationsTicketHeart16 = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3.654 3.078c-1.602-.01-2.147 1.23-2.15 2.46l-.003.229c-.006.632-.007.815.353 1.097.401.314.658.65.658 1.133 0 .482-.257.819-.658 1.132-.359.28-.356.582-.352 1.13l.001.202c0 1.23.549 2.471 2.151 2.461h8.693c1.602.01 2.151-1.23 2.151-2.46l.001-.203c.005-.548.007-.85-.352-1.13-.401-.313-.658-.65-.658-1.132s.257-.82.658-1.133c.359-.28.357-.576.352-1.123l-.001-.202c0-1.23-.549-2.471-2.151-2.461zM8 6.672c-.332-2.005-2.917-1.619-2.917.465 0 1.666 1.945 3.055 2.917 3.541.972-.486 2.917-1.875 2.917-3.541 0-2.084-2.582-2.47-2.917-.465" clipRule="evenodd"></path>
  </svg>
);
