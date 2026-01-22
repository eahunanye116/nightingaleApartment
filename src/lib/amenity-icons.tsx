import React from 'react';
import { Wifi, ParkingCircle, Soup, Tv, Wind } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

const amenityIcons: Record<string, React.FC<LucideProps>> = {
  Wifi,
  ParkingCircle,
  Soup,
  Tv,
  Wind,
};

export function AmenityIcon({ name, ...props }: { name: string } & LucideProps) {
  const IconComponent = amenityIcons[name];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
}
