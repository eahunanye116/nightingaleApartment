import React from 'react';
import { Wifi, ParkingCircle, WashingMachine, Shield, Sparkles } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

const amenityIcons: Record<string, React.FC<LucideProps>> = {
  Wifi,
  ParkingCircle,
  WashingMachine,
  Shield,
  Sparkles,
};

export function AmenityIcon({ name, ...props }: { name: string } & LucideProps) {
  const IconComponent = amenityIcons[name];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
}
