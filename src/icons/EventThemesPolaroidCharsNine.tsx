import React from 'react';
import type { LumaIconProps } from '../types';

export const EventThemesPolaroidCharsNine = ({ size = 24, color = 'currentColor', style, ...props }: LumaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 14 30"
    style={{ color, ...style }}
    {...props}
  >
    <path d="M12.182 4.155q.64 0 .8.928v.192q0 .544-1.312 4.672-1.088 5.153-1.088 10.017 0 2.304.288 4.384-.351.928-.992.928-1.216 0-1.216-4.928v-.576q0-2.464.416-6.208-.16 0-1.472 1.6-2.496 2.304-3.936 2.304-1.696 0-2.592-2.496v-.704q0-3.553 5.408-7.905 2.464-1.6 3.584-1.6l.512.128h.608q0-.607.992-.736m-9.184 9.793v.736q0 .51.48.8h.32q2.432 0 6.4-7.617.288-.543.288-.992v-.128h-.48q-2.464 0-6.208 5.12-.8 1.504-.8 2.08"></path>
  </svg>
);
