import { Hero } from '@/components/landing/hero';
import { Gallery } from '@/components/landing/gallery';
import { About } from '@/components/landing/about';
import { OtherAmenities } from '@/components/landing/other-amenities';
import { SpecialOffer } from '@/components/landing/special-offer';
import { Testimonials } from '@/components/landing/testimonials';
import { CtaBanner } from '@/components/landing/cta-banner';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BookingSearch } from '@/components/landing/booking-search';

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <AnimateOnScroll animationClass="animate-fade-in-right">
        <About />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <OtherAmenities />
      </AnimateOnScroll>
      <AnimateOnScroll animationClass="animate-fade-in-left">
        <SpecialOffer />
      </AnimateOnScroll>
      <AnimateOnScroll animationClass="animate-fade-in-right">
        <Testimonials />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <BookingSearch />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CtaBanner />
      </AnimateOnScroll>
    </>
  );
}
