'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function BookingSearch() {
  const router = useRouter();
  const [selectedBedrooms, setSelectedBedrooms] = useState<string | undefined>();

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedBedrooms) {
      router.push(`/apartments?bedrooms=${selectedBedrooms}`);
    }
  };

  return (
    <section id="booking" className="bg-muted py-16 sm:py-24 scroll-mt-20">
        <div className="mx-auto max-w-screen-md px-4">
            <Card className="shadow-2xl">
                <CardHeader className="text-center">
                    <CardTitle className="font-headline text-4xl font-bold md:text-5xl">Book Your Stay</CardTitle>
                    <CardDescription className="text-lg">
                        Ready to book? Pick your dates, and let us handle the rest.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleBookNow} className="space-y-4">
                    <Select onValueChange={setSelectedBedrooms}>
                        <SelectTrigger className="py-6 text-base">
                            <SelectValue placeholder="Select number of bedrooms" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1" className="text-base">1 Bedroom</SelectItem>
                            <SelectItem value="2" className="text-base">2 Bedrooms</SelectItem>
                            <SelectItem value="3" className="text-base">3 Bedrooms</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <Input className="py-6 text-base" type="text" placeholder="Check in" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'}/>
                        <Input className="py-6 text-base" type="text" placeholder="Check out" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'}/>
                    </div>
                    <Input className="py-6 text-base" type="number" placeholder="Number of guests" min="1" />
                    <Button type="submit" disabled={!selectedBedrooms} className="w-full bg-primary py-7 text-lg font-bold uppercase text-primary-foreground hover:bg-primary/90">
                        Check Availability
                    </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    </section>
  );
}
