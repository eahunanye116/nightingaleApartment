'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AppHeader } from '@/components/header';
import { AnimateOnScroll } from '../animate-on-scroll';

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
    <section className="relative flex w-full items-center justify-center overflow-hidden pt-28 pb-5 sm:pt-40 sm:pb-7 md:pt-44 md:pb-8">
      <AppHeader />
       <Image
        src="https://i.postimg.cc/rs9yX2Gj/balcony-breeze-at-lofi-night-vertical-animation-background-urban-nighttime-apartment-balconies-hangi.jpg"
        alt="Apartment balcony at night"
        fill
        className="object-cover animate-slow-zoom md:hidden"
        priority
        data-ai-hint="apartment balcony night"
      />
      <Image
        src="https://i.postimg.cc/4NFF40dX/Whats-App-Image-2026-01-22-at-11-53-55-PM.jpg"
        alt="Luxury apartment interior"
        fill
        className="hidden object-cover animate-slow-zoom md:block"
        priority
        data-ai-hint="living room interior"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
      
      <div className="container relative z-10 mx-auto flex flex-col items-start gap-1 px-4 lg:flex-row lg:items-center lg:justify-start lg:gap-2 lg:px-[12.5%]">
        <div className="w-full space-y-1 text-left lg:max-w-xl">
          <AnimateOnScroll animationClass="animate-fade-in-up">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">ENJOY THE FINEST STAYS</p>
          </AnimateOnScroll>
          <AnimateOnScroll animationClass="animate-fade-in-up" delay="200ms">
            <h1 className="font-headline text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Discover Your Home Away From Home
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animationClass="animate-fade-in-up" delay="400ms">
            <p className="pb-2 text-base text-gray-200 sm:text-lg">
              Relax in beautifully furnished homes, enjoy modern comforts, and wake up refreshed in a space designed for comfort and convenience.
            </p>
          </AnimateOnScroll>
        </div>
        
        {mounted && (
            <AnimateOnScroll animationClass="animate-fade-in-up" delay="600ms" className="w-full max-w-md">
              <div className="border-white/20 bg-white/20 p-4 backdrop-blur-sm sm:p-6">
                      <div className="mb-4 text-white sm:mb-6">
                          <h2 className="font-headline text-2xl font-bold sm:text-3xl">Quick Booking</h2>
                          <p className="mt-2 text-sm sm:text-base">
                              Ready to book? Pick your dates, and let us handle the rest.
                          </p>
                      </div>
                      <form onSubmit={handleBookNow} className="space-y-3">
                          <Input value={name} onChange={(e) => setName(e.target.value)} className="py-5 text-xs bg-white/90 text-black placeholder:text-gray-600 border-transparent focus:bg-white sm:py-6 sm:text-sm" type="text" placeholder="Your Name" />
                          <Select onValueChange={setSelectedBedrooms} value={selectedBedrooms}>
                              <SelectTrigger className="py-5 text-xs bg-white/90 text-black border-transparent focus:bg-white sm:py-6 sm:text-sm">
                                  <SelectValue placeholder="Select number of bedrooms" />
                              </SelectTrigger>
                              <SelectContent>
                                  <SelectItem value="1" className="text-xs sm:text-sm">1 Bedroom</SelectItem>
                                  <SelectItem value="2" className="text-xs sm:text-sm">2 Bedrooms</SelectItem>
                                  <SelectItem value="3" className="text-xs sm:text-sm">3 Bedrooms</SelectItem>
                              </SelectContent>
                          </Select>
                          <div className="grid grid-cols-2 gap-3 sm:gap-4">
                              <Input value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="py-5 text-xs sm:py-6 bg-white/90 text-black placeholder:text-gray-600 border-transparent focus:bg-white sm:text-sm" type="text" placeholder="Check in" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'}/>
                              <Input value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="py-5 text-xs sm:py-6 bg-white/90 text-black placeholder:text-gray-600 border-transparent focus:bg-white sm:text-sm" type="text" placeholder="Check out" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'}/>
                          </div>
                          <Input value={numGuests} onChange={(e) => setNumGuests(e.target.value)} className="py-5 text-xs bg-white/90 text-black placeholder:text-gray-600 border-transparent focus:bg-white sm:py-6 sm:text-sm" type="number" placeholder="Number of guests" min="1" />
                          <Button type="submit" disabled={!selectedBedrooms || !name} className="w-full bg-primary py-5 text-sm font-bold uppercase text-primary-foreground transition-transform hover:scale-105 active:scale-100 hover:bg-primary/90 sm:py-6 sm:text-base">
                              Submit
                          </Button>
                      </form>
                  </div>
            </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
