import { Suspense } from 'react';
import { ApartmentSearch } from '@/components/apartment-search';
import { apartments as allApartmentsData } from '@/lib/apartments';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Apartment } from '@/lib/types';
import Link from 'next/link';

function ApartmentsPageContent() {
    const apartmentsWithImages: Apartment[] = allApartmentsData.map(apt => ({
        ...apt,
        images: apt.imageIds.map(
          id => PlaceHolderImages.find(img => img.id === id)?.imageUrl || ''
        ),
        host: {
          ...apt.host,
          avatar: PlaceHolderImages.find(img => img.id === apt.host.avatarId)?.imageUrl || '',
        }
      }));

    return <ApartmentSearch initialApartments={apartmentsWithImages} />;
}


export default function ApartmentsPage() {
  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between p-4 sm:p-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-headline text-2xl font-bold text-foreground">
              Nightingale<span className="hidden sm:inline"> Apartment</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/apartments" className="text-sm font-medium text-primary transition-colors hover:text-primary">
              Apartments
            </Link>
            <Link href="/gallery" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Gallery
            </Link>
            <Link href="/#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <div className="container mx-auto max-w-screen-xl p-4 py-8 sm:p-6 lg:p-8">
        <Suspense fallback={<div>Loading apartments...</div>}>
            <ApartmentsPageContent />
        </Suspense>
      </div>
    </>
  );
}
