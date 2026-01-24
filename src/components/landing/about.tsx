import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export function About() {
  return (
    <section id="about" className="bg-background py-16 sm:py-24 scroll-mt-20 overflow-x-hidden">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll animationClass="animate-fade-in-left">
            <div className="relative h-[320px] w-full overflow-hidden rounded-lg shadow-xl lg:h-[400px]">
              <Image
                src="https://i.postimg.cc/zfjS2V6K/Whats-App-Image-2026-01-24-at-10-28-05-AM-(1).jpg"
                alt="Comfortable apartment living area"
                fill
                className="object-cover"
                data-ai-hint="apartment living room"
              />
            </div>
          </AnimateOnScroll>
          <div>
            <AnimateOnScroll animationClass="animate-fade-in-right">
              <h2 className="font-headline text-4xl font-bold md:text-5xl pb-4 text-foreground">About Nightingale Apartments</h2>
            </AnimateOnScroll>
            <AnimateOnScroll animationClass="animate-fade-in-right" delay="150ms">
              <p className="text-lg text-muted-foreground">
                Experience the Nightingale Difference. Discover a stay that blends modern technology with personalized luxury. Whether you are visiting Port Harcourt for business or leisure, our facilities are designed to cater to your every need, with thoughtfully designed 1, 2, and 3-bedroom apartments.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animationClass="animate-fade-in-right" delay="300ms">
              <div className="mt-8">
                  <Button asChild size="lg">
                      <Link href="/about">Read More</Link>
                  </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
