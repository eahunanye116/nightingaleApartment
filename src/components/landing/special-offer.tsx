import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function SpecialOffer() {
  const offers = [
    {
      title: 'One Bedroom Suite',
      originalPrice: '110,000',
      discountedPrice: '90,000',
      imageId: 'gallery-full-4',
      imageAlt: 'Cozy and modern one bedroom suite',
      imageHint: 'apartment room',
    },
    {
      title: 'Two Bedroom Apartment',
      originalPrice: '150,000',
      discountedPrice: '130,000',
      imageId: 'gallery-full-5',
      imageAlt: 'Spacious living area of a two bedroom apartment',
      imageHint: 'apartment living room',
    },
    {
      title: 'Three Bedroom Penthouse',
      originalPrice: '200,000',
      discountedPrice: '180,000',
      imageId: 'gallery-full-6',
      imageAlt: 'Luxurious three bedroom penthouse with city views',
      imageHint: 'apartment interior',
    },
  ];

  const getImageUrl = (id: string) => {
    return PlaceHolderImages.find(img => img.id === id)?.imageUrl || 'https://picsum.photos/seed/offer/600/400';
  };
   const getImageHint = (id: string) => {
    return PlaceHolderImages.find(img => img.id === id)?.imageHint || 'apartment';
  };

  return (
    <section className="bg-muted py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">Special Offers</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Limited Time Offer! Book now to enjoy special discounted rates for early bookings - and make your city stay even more affordable.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <Card key={offer.title} className="flex flex-col overflow-hidden transition-shadow hover:shadow-xl">
              <CardHeader className="relative p-0">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={getImageUrl(offer.imageId)}
                    alt={offer.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={getImageHint(offer.imageId)}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col p-6">
                <CardTitle className="font-headline text-2xl">{offer.title}</CardTitle>
                <div className="mt-4 flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-primary">₦{offer.discountedPrice}</p>
                  <p className="text-lg text-muted-foreground">
                    <s className="font-normal">₦{offer.originalPrice}</s>
                  </p>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">per night</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild size="lg" className="w-full">
                  <Link href="/#booking">BOOK NOW</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
