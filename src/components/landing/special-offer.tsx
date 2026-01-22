import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { apartments } from '@/lib/apartments';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AmenityIcon } from '@/lib/amenity-icons';
import Link from 'next/link';
import { Star } from 'lucide-react';

export function SpecialOffer() {
  const specialOfferApartment = apartments.find(apt => apt.name === 'Nightingale Villa');
  const mainImage = PlaceHolderImages.find(img => img.id === 'special-offer-main');
  const thumb1 = PlaceHolderImages.find(img => img.id === 'special-offer-thumb-1');
  const thumb2 = PlaceHolderImages.find(img => img.id === 'special-offer-thumb-2');

  if (!specialOfferApartment) return null;

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">Special Offer</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Limited Time Offer! Book now to enjoy special discounted rates for early bookings - and make your city stay even more affordable.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
                {mainImage && (
                    <Image src={mainImage.imageUrl} alt={mainImage.description} fill className="object-cover" data-ai-hint={mainImage.imageHint} />
                )}
            </div>
            <Card className="border-none shadow-none">
                <CardContent className="p-0">
                    <p className="text-sm text-muted-foreground">4 GUESTS - 2 BEDROOMS - 2 BATHS</p>
                    <h3 className="mt-2 font-headline text-3xl font-bold">
                        <Link href={`/apartments/${specialOfferApartment.id}`}>{specialOfferApartment.name}</Link>
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-sm">
                        <div className="flex text-primary">
                            {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                        </div>
                        <span className="text-muted-foreground">{specialOfferApartment.rating} RATING - {specialOfferApartment.reviews} REVIEWS</span>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                        Stunning 2-bedroom mountain villa with full sea view, 5-star living, and many luxurious surroundings - First Class!
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                        {thumb1 && (
                            <div className="relative h-40 w-full overflow-hidden rounded-lg">
                                <Image src={thumb1.imageUrl} alt={thumb1.description} fill className="object-cover" data-ai-hint={thumb1.imageHint}/>
                            </div>
                        )}
                        {thumb2 && (
                            <div className="relative h-40 w-full overflow-hidden rounded-lg">
                                <Image src={thumb2.imageUrl} alt={thumb2.description} fill className="object-cover" data-ai-hint={thumb2.imageHint}/>
                            </div>
                        )}
                    </div>
                     <div className="mt-6">
                        <p className="text-sm text-muted-foreground">STARTING FROM</p>
                        <p className="text-2xl font-bold text-primary">₦{specialOfferApartment.pricePerNight}</p>
                    </div>
                    <Button asChild size="lg" className="mt-4 w-full sm:w-auto">
                        <Link href={`/apartments/${specialOfferApartment.id}`}>BOOK NOW</Link>
                    </Button>
                    <div className="mt-6">
                        <p className="font-semibold">AMENITIES:</p>
                        <div className="mt-2 flex flex-wrap gap-4">
                           {specialOfferApartment.amenities.slice(0, 5).map(amenity => (
                                <AmenityIcon key={amenity.name} name={amenity.iconName} className="h-6 w-6 text-muted-foreground" title={amenity.name} />
                           ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
