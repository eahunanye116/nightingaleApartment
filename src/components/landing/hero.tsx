'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

function HeroBookingForm() {
  return (
    <Card className="w-full max-w-md shadow-2xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Quick Booking</CardTitle>
        <p className="text-muted-foreground">Ready to book? Enter your details and let us handle the rest.</p>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <Input placeholder="Name" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your Apartment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="villa">Geminge Villa</SelectItem>
              <SelectItem value="loft">Sunny Downtown Loft</SelectItem>
              <SelectItem value="studio">Charming Garden Studio</SelectItem>
            </SelectContent>
          </Select>
          <div className="grid grid-cols-2 gap-4">
            <Input type="text" placeholder="Check in" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'}/>
            <Input type="text" placeholder="Check out" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'}/>
          </div>
          <Input type="number" placeholder="Number of guests" min="1" />
          <Button type="submit" className="w-full bg-primary py-6 text-lg font-bold text-primary-foreground">Book Now</Button>
        </form>
      </CardContent>
    </Card>
  );
}


export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10 mx-auto flex h-full max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg space-y-4">
          <p className="font-bold uppercase tracking-widest text-primary">ENJOY THE FINEST STAYS</p>
          <h1 className="font-headline text-5xl font-bold leading-tight md:text-7xl">
            Discover Your Home Away From Home
          </h1>
          <p className="text-lg text-gray-200">
            Relax in beautifully furnished homes, enjoy modern comforts, and wake up refreshed in a space designed for comfort and convenience.
          </p>
        </div>
        <div className="hidden lg:block">
          <HeroBookingForm />
        </div>
      </div>
    </section>
  );
}
