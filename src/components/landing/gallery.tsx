import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Gallery() {
  const galleryImages = [
    PlaceHolderImages.find(img => img.id === 'gallery-1'),
    PlaceHolderImages.find(img => img.id === 'gallery-2'),
    PlaceHolderImages.find(img => img.id === 'gallery-3'),
  ].filter(Boolean);

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">Our Gallery</h2>
          <Button variant="outline">View All</Button>
        </div>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Take a closer look at our villas, apartments, and shared spaces. From modern interiors to stylish hangouts, see the style and comfort that await you.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => image && (
            <div key={index} className="group relative h-[450px] w-full overflow-hidden rounded-lg">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={image.imageHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
