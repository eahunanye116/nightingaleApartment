import { Hero } from '@/components/landing/hero';
import { Gallery } from '@/components/landing/gallery';
import { About } from '@/components/landing/about';
import { OtherAmenities } from '@/components/landing/other-amenities';
import { SpecialOffer } from '@/components/landing/special-offer';
import { Testimonials } from '@/components/landing/testimonials';
import { CtaBanner } from '@/components/landing/cta-banner';

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <About />
      <OtherAmenities />
      <SpecialOffer />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
