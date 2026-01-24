
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

export function Gallery() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-full-')).slice(0, 5);

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animationClass="animate-fade-in-left">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-4xl font-bold md:text-5xl">Our Gallery</h2>
            <Button asChild variant="outline">
              <Link href="/gallery">View All</Link>
            </Button>
          </div>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Take a closer look at our villas, apartments, and shared spaces. From modern interiors to stylish hangouts, see the style and comfort that await you.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll animationClass="animate-fade-in-up" delay="200ms">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mt-12 w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => image && (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="group relative h-[450px] w-full overflow-hidden rounded-lg">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-16" />
            <CarouselNext className="mr-16" />
          </Carousel>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
