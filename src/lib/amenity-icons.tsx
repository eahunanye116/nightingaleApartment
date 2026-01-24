import React from 'react';
import { Wifi, ParkingCircle, WashingMachine, Shield, Sparkles, UtensilsCrossed, Waves } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

const amenityIcons: Record<string, React.FC<LucideProps>> = {
  Wifi,
  ParkingCircle,
  WashingMachine,
  Shield,
  Sparkles,
  UtensilsCrossed,
  Waves,
};

export function AmenityIcon({ name, ...props }: { name: string } & LucideProps) {
  const IconComponent = amenityIcons[name];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
}
