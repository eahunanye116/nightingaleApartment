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
        src="https://static.vecteezy.com/system/resources/thumbnails/067/796/100/small_2x/balcony-breeze-at-lofi-night-vertical-animation-background-urban-nighttime-apartment-balconies-hanging-clothes-crescent-moon-lo-fi-2d-cartoon-animated-backdrop-wallpaper-4k-chill-aesthetic-video.jpg"
        alt="Apartment balcony at night"
        fill
        className="object-cover md:hidden"
        priority
        data-ai-hint="apartment balcony night"
      />
      <Image
        src="https://i.postimg.cc/4NFF40dX/Whats-App-Image-2026-01-22-at-11-53-55-PM.jpg"
        alt="Luxury apartment interior"
        fill
        className="hidden object-cover md:block"
        priority
        data-ai-hint="living room interior"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
      
      <div className="container relative z-10 mx-auto flex flex-col items-start gap-2 px-4 lg:flex-row lg:items-start lg:justify-start lg:gap-4 lg:px-[12.5%]">
        <div className="w-full space-y-1 text-left lg:max-w-xl">
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
            <div className="border-white/20 bg-white/20 p-4 backdrop-blur-sm sm:p-6">
                    <div className="mb-4 text-white sm:mb-6">
                        <h2 className="font-headline text-2xl font-bold sm:text-3xl">Quick Booking</h2>
                        <p className="mt-2 text-sm sm:text-base">
                            Ready to book? Pick your dates, and let us handle the rest.
                        </p>
                    </div>
                    <form onSubmit={handleBookNow} className="space-y-3">
                        <Input value={name} onChange={(e) => setName(e.target.value)} className="py-5 text-sm bg-white/90 text-black placeholder:text-gray-600 border-transparent focus:bg-white sm:py-6 sm:text-base" type="text" placeholder="Your Name" />
                        <Select onValueChange={setSelectedBedrooms} value={selectedBedrooms}>
                            <SelectTrigger className="py-5 text-sm bg-white/90 text-black border-transparent focus:bg-white sm:py-6 sm:text-base">
                                <SelectValue placeholder="Select number of bedrooms" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1" className="text-sm sm:text-base">1 Bedroom</SelectItem>
                                <SelectItem value="2" className="text-sm sm:text-base">2 Bedrooms</SelectItem>
                                <SelectItem value="3" className="text-sm sm:text-base">3 Bedrooms</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <Input value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="py-5 text-sm bg-white/90 text-black placeholder:text-gray-600 border-transparent focus:bg-white sm:py-6 sm:text-base" type="text" placeholder="Check in" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'}/>
                            <Input value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="py-5 text-sm bg-white/90 text-black placeholder:text-gray-600 border-transparent focus:bg-white sm:py-6 sm:text-base" type="text" placeholder="Check out" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'}/>
                        </div>
                        <Input value={numGuests} onChange={(e) => setNumGuests(e.target.value)} className="py-5 text-sm bg-white/90 text-black placeholder:text-gray-600 border-transparent focus:bg-white sm:py-6 sm:text-base" type="number" placeholder="Number of guests" min="1" />
                        <Button type="submit" disabled={!selectedBedrooms || !name} className="w-full bg-primary py-5 text-base font-bold uppercase text-primary-foreground hover:bg-primary/90 sm:py-6 sm:text-lg">
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        )}
      </div>
    </section>
  );
}
