'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { apartments } from '@/lib/apartments';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AppHeader } from '@/components/header';

export function Hero() {
  const router = useRouter();
  const [selectedApartmentId, setSelectedApartmentId] = useState<string | undefined>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedApartmentId) {
      router.push(`/apartments/${selectedApartmentId}`);
    }
  };

  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden py-20 sm:py-28 md:py-32">
      <AppHeader />
      <Image
        src="https://i.postimg.cc/4NFF40dX/Whats-App-Image-2026-01-22-at-11-53-55-PM.jpg"
        alt="Luxury apartment interior"
        fill
        className="object-cover"
        priority
        data-ai-hint="living room interior"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
      
      <div className="container relative z-10 mx-auto flex flex-col items-center gap-12 px-4 lg:px-[25%] lg:flex-row lg:justify-center">
        <div className="space-y-6 text-center lg:text-left">
          <p className="font-bold uppercase tracking-widest text-primary">ENJOY THE FINEST STAYS</p>
          <h1 className="font-headline text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Discover Your Home Away From Home
          </h1>
          <p className="text-base text-gray-200 sm:text-lg">
            Relax in beautifully furnished homes, enjoy modern comforts, and wake up refreshed in a space designed for comfort and convenience.
          </p>
        </div>
        
        {mounted && (
            <div className="w-full max-w-md">
            <div className="border border-white/20 bg-white/20 p-6 backdrop-blur-sm sm:p-8">
                    <div className="mb-6">
                        <h2 className="font-headline text-3xl font-bold text-white">Quick Booking</h2>
                        <p className="mt-2 text-white">
                            Ready to book? Pick your dates, and let us handle the rest.
                        </p>
                    </div>
                    <form onSubmit={handleBookNow} className="space-y-4">
                        <Input className="py-6 text-base bg-white/90 text-black placeholder:text-gray-600 border-transparent focus:bg-white" type="email" placeholder="Email" required />
                        <Select onValueChange={setSelectedApartmentId}>
                            <SelectTrigger className="py-6 text-base bg-white/90 text-black border-transparent focus:bg-white">
                                <SelectValue placeholder="Select your Apartment" />
                            </SelectTrigger>
                            <SelectContent>
                                {apartments.map((apt) => (
                                    <SelectItem key={apt.id} value={apt.id} className="text-base">
                                        {apt.name} - ₦{apt.pricePerNight}/night
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <Input className="py-6 text-base bg-white/90 text-black placeholder:text-gray-600 border-transparent focus:bg-white" type="text" placeholder="Check in" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'}/>
                            <Input className="py-6 text-base bg-white/90 text-black placeholder:text-gray-600 border-transparent focus:bg-white" type="text" placeholder="Check out" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'}/>
                        </div>
                        <Input className="py-6 text-base bg-white/90 text-black placeholder:text-gray-600 border-transparent focus:bg-white" type="number" placeholder="Number of guests" min="1" />
                        <Button type="submit" disabled={!selectedApartmentId} className="w-full bg-primary py-7 text-lg font-bold uppercase text-primary-foreground hover:bg-primary/90">
                            Check Availability
                        </Button>
                    </form>
                </div>
            </div>
        )}
      </div>
    </section>
  );
}
