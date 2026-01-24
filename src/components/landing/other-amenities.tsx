import { AmenityIcon } from "@/lib/amenity-icons";
import { allAmenities } from "@/lib/apartments";
import { ArrowDown } from "lucide-react";
import { AnimateOnScroll } from "../animate-on-scroll";

export function OtherAmenities() {
  return (
    <section className="bg-muted py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animationClass="animate-magnetic-in">
          <div className="text-center">
            <h2 className="font-headline text-4xl font-bold md:text-5xl">Other Amenities</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We go beyond the basics - each amenity included to make your stay more comfortable and worry-free.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-12 grid grid-cols-2 justify-center gap-8 md:grid-cols-3 lg:grid-cols-5">
          {allAmenities.map((amenity, index) => (
            <AnimateOnScroll
              key={amenity.name}
              animationClass="animate-magnetic-in"
              delay={`${200 + index * 100}ms`}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-card shadow-md">
                  <AmenityIcon name={amenity.iconName} className="h-8 w-8 text-primary" />
                </div>
                <span className="font-semibold">{amenity.name}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll
          animationClass="animate-magnetic-in"
          delay={`${200 + allAmenities.length * 100}ms`}
        >
          <div className="mt-16 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-muted-foreground/30 text-muted-foreground">
                  <ArrowDown className="h-8 w-8" />
              </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
