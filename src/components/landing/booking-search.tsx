'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

export function BookingSearch() {
  const [selectedBedrooms, setSelectedBedrooms] = useState<string | undefined>();
  const [name, setName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [numGuests, setNumGuests] = useState('');

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsAppNumber = '2349159394751';
    const message = `Hello, I'd like to book an apartment.
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
    <section id="booking" className="bg-muted py-16 sm:py-24 scroll-mt-20">
        <div className="mx-auto max-w-screen-md px-4">
            <Card className="shadow-2xl">
                <CardHeader className="text-center">
                    <CardTitle className="font-headline text-3xl font-bold sm:text-4xl md:text-5xl">Book Your Stay</CardTitle>
                    <CardDescription className="text-base sm:text-lg">
                        Ready to book? Pick your dates, and let us handle the rest.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleBookNow} className="space-y-3">
                    <Input value={name} onChange={(e) => setName(e.target.value)} className="py-5 text-sm sm:py-6 sm:text-base" type="text" placeholder="Your Name" />
                    <Select onValueChange={setSelectedBedrooms} value={selectedBedrooms}>
                        <SelectTrigger className="py-5 text-sm sm:py-6 sm:text-base">
                            <SelectValue placeholder="Select number of bedrooms" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1" className="text-sm sm:text-base">1 Bedroom</SelectItem>
                            <SelectItem value="2" className="text-sm sm:text-base">2 Bedrooms</SelectItem>
                            <SelectItem value="3" className="text-sm sm:text-base">3 Bedrooms</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <Input value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="py-5 text-sm sm:py-6 sm:text-base" type="text" placeholder="Check in" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'}/>
                        <Input value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="py-5 text-sm sm:py-6 sm:text-base" type="text" placeholder="Check out" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'}/>
                    </div>
                    <Input value={numGuests} onChange={(e) => setNumGuests(e.target.value)} className="py-5 text-sm sm:py-6 sm:text-base" type="number" placeholder="Number of guests" min="1" />
                    <Button type="submit" disabled={!selectedBedrooms || !name} className="w-full bg-primary py-5 text-base font-bold uppercase text-primary-foreground hover:bg-primary/90 sm:py-7 sm:text-lg">
                        Submit
                    </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    </section>
  );
}
