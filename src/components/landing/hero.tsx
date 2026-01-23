'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AppHeader } from '@/components/header';

export function Hero() {
  const [selectedBedrooms, setSelectedBedrooms] = useState<string | undefined>();
  const [name, setName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [numGuests, setNumGuests] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsAppNumber = '2349159394751';
    const message = `Hello, I'd like to make a reservation.
Name: ${name}
Bedrooms: ${selectedBedrooms}
Check-in: ${checkIn}
Check-out: ${checkOut}
Guests: ${numGuests}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
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
      
      <div className="container relative z-10 mx-auto flex flex-col items-center gap-12 px-4 lg:px-[12.5%] lg:flex-row lg:justify-center">
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
            <div className="border-white/20 bg-white/20 p-6 backdrop-blur-sm sm:p-8">
                    <div className="mb-6 text-white">
                        <h2 className="font-headline text-3xl font-bold">Quick Booking</h2>
                        <p className="mt-2">
                            Ready to book? Pick your dates, and let us handle the rest.
                        </p>
                    </div>
                    <form onSubmit={handleBookNow} className="space-y-4">
                        <Input value={name} onChange={(e) => setName(e.target.value)} className="py-6 text-base bg-white/90 text-black placeholder:text-gray-600 border-transparent focus:bg-white" type="text" placeholder="Your Name" />
                        <Select onValueChange={setSelectedBedrooms} value={selectedBedrooms}>
                            <SelectTrigger className="py-6 text-base bg-white/90 text-black border-transparent focus:bg-white">
                                <SelectValue placeholder="Select number of bedrooms" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1" className="text-base">1 Bedroom</SelectItem>
                                <SelectItem value="2" className="text-base">2 Bedrooms</SelectItem>
                                <SelectItem value="3" className="text-base">3 Bedrooms</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <Input value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="py-6 text-base bg-white/90 text-black placeholder:text-gray-600 border-transparent focus:bg-white" type="text" placeholder="Check in" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'}/>
                            <Input value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="py-6 text-base bg-white/90 text-black placeholder:text-gray-600 border-transparent focus:bg-white" type="text" placeholder="Check out" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'}/>
                        </div>
                        <Input value={numGuests} onChange={(e) => setNumGuests(e.target.value)} className="py-6 text-base bg-white/90 text-black placeholder:text-gray-600 border-transparent focus:bg-white" type="number" placeholder="Number of guests" min="1" />
                        <Button type="submit" disabled={!selectedBedrooms || !name} className="w-full bg-primary py-7 text-lg font-bold uppercase text-primary-foreground hover:bg-primary/90">
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
