import { Hero } from '@/components/landing/hero';
import { Gallery } from '@/components/landing/gallery';
import { About } from '@/components/landing/about';
import { OtherAmenities } from '@/components/landing/other-amenities';
import { SpecialOffer } from '@/components/landing/special-offer';
import { Testimonials } from '@/components/landing/testimonials';
import { CtaBanner } from '@/components/landing/cta-banner';
import { BookingSearch } from '@/components/landing/booking-search';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

export default function Home() {
  return (
    <>
      <Hero />
      <AnimateOnScroll>
        <BookingSearch />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Gallery />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <About />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <OtherAmenities />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <SpecialOffer />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Testimonials />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CtaBanner />
      </AnimateOnScroll>
    </>
  );
}
