import Image from 'next/image';
import { notFound } from 'next/navigation';
import { apartments as allApartmentsData } from '@/lib/apartments';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Apartment } from '@/lib/types';
import { MapPin, Star, BedDouble, Bath, Users } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BookingCard } from '@/components/booking-card';
import { AmenityIcon } from '@/lib/amenity-icons';

export default function ApartmentPage({ params }: { params: { id: string } }) {
  const apartmentData = allApartmentsData.find(apt => apt.id === params.id);

  if (!apartmentData) {
    notFound();
  }

  const apartment: Apartment = {
    ...apartmentData,
    images: apartmentData.imageIds.map(
      id => PlaceHolderImages.find(img => img.id === id)?.imageUrl || ''
    ),
    host: {
      ...apartmentData.host,
      avatar: PlaceHolderImages.find(img => img.id === apartmentData.host.avatarId)?.imageUrl || '',
    }
  };


  return (
    <div className="container mx-auto max-w-screen-xl p-4 py-8 sm:p-6 lg:p-8">
      <div className="mb-4">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">{apartment.name}</h1>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-lg">
          <div className="flex items-center">
            <Star className="mr-1.5 h-5 w-5 fill-primary text-primary" />
            <span className="font-bold">{apartment.rating}</span>
            <span className="ml-1.5 text-muted-foreground">({apartment.reviews} reviews)</span>
          </div>
          <span className="text-muted-foreground">·</span>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="mr-1.5 h-5 w-5" />
            <span>{apartment.location}</span>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <Carousel className="w-full">
          <CarouselContent>
            {apartment.images?.map((img, index) => (
              <CarouselItem key={index}>
                <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
                  <Image
                    src={img}
                    alt={`${apartment.name} view ${index + 1}`}
                    width={1200}
                    height={675}
                    className="h-full w-full object-cover"
                    data-ai-hint="apartment interior"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-16" />
          <CarouselNext className="mr-16" />
        </Carousel>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
        <div className="col-span-1 space-y-8 lg:col-span-2">
          <div className="border-b pb-6">
            <h2 className="font-headline text-3xl font-semibold">Hosted by {apartment.host.name}</h2>
            <div className="mt-4 flex items-center gap-4 text-lg text-muted-foreground">
              <span className="flex items-center"><Users className="mr-2 h-5 w-5"/> {apartment.guests} guests</span>
              <span>·</span>
              <span className="flex items-center"><BedDouble className="mr-2 h-5 w-5"/> {apartment.bedrooms} bedroom(s)</span>
               <span>·</span>
              <span className="flex items-center"><Bath className="mr-2 h-5 w-5"/> {apartment.baths} bath(s)</span>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <p>{apartment.description}</p>
          </div>

          <Separator />
          
          <div>
            <h3 className="font-headline text-3xl font-semibold">What this place offers</h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {apartment.amenities.map(amenity => (
                <div key={amenity.name} className="flex items-center gap-3 text-lg">
                  <AmenityIcon name={amenity.iconName} className="h-6 w-6 text-primary" />
                  <span>{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <aside className="col-span-1">
          <div className="sticky top-8">
            <BookingCard apartment={apartment} />
          </div>
        </aside>
      </div>
    </div>
  );
}
