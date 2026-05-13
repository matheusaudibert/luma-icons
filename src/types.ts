import type { SVGProps } from 'react';

export interface LumaIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export interface LumaIconNoColorProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
