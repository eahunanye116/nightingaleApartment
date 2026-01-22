import { Hero } from '@/components/landing/hero';
import { Gallery } from '@/components/landing/gallery';
import { About } from '@/components/landing/about';
import { OtherAmenities } from '@/components/landing/other-amenities';
import { SpecialOffer } from '@/components/landing/special-offer';
import { Testimonials } from '@/components/landing/testimonials';
import { CtaBanner } from '@/components/landing/cta-banner';
import { BookingSearch } from '@/components/landing/booking-search';

export default function Home() {
  return (
    <>
      <Hero />
      <BookingSearch />
      <Gallery />
      <About />
      <OtherAmenities />
      <SpecialOffer />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
