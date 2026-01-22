import { ApartmentSearch } from '@/components/apartment-search';
import { apartments as allApartments } from '@/lib/apartments';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Apartment } from '@/lib/types';

export default function Home() {
  const apartments: Apartment[] = allApartments.map(apt => ({
    ...apt,
    images: apt.imageIds.map(
      id => PlaceHolderImages.find(img => img.id === id)?.imageUrl || ''
    ),
    host: {
      ...apt.host,
      avatar: PlaceHolderImages.find(img => img.id === apt.host.avatarId)?.imageUrl || '',
    }
  }));

  return (
    <div className="container mx-auto max-w-screen-xl p-4 sm:p-6 lg:p-8">
      <ApartmentSearch initialApartments={apartments} />
    </div>
  );
}
