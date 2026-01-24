import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Adeola Adebayo",
    review: "From the moment I arrived, the service was exceptional. The apartment was pristine, and the staff went above and beyond to ensure my comfort. Nightingale truly feels like a home away from home.",
    rating: 5,
  },
  {
    name: "Chiamaka Nwosu",
    review: "I travel to Port Harcourt often for business, and I've finally found my go-to place. The high-speed WiFi is reliable for work, and the environment is serene enough to relax after a long day. Highly recommended.",
    rating: 5,
  },
  {
    name: "Emeka Okafor",
    review: "The attention to detail is what sets Nightingale apart. The amenities are top-notch, from the fully-equipped kitchen to the smart TV with Netflix. It's the little things that make a big difference.",
    rating: 5,
  },
  {
    name: "Fatima Bello",
    review: "My family and I had a wonderful stay. The swimming pool was a hit with the kids, and the location is perfectly central. We felt safe and well-cared for throughout our visit. We'll definitely be back!",
    rating: 5,
  },
   {
    name: "Tunde Bakare",
    review: "Booking was seamless, and the apartment exceeded my expectations. It’s stylish, clean, and incredibly comfortable. A fantastic experience all around.",
    rating: 5,
  },
  {
    name: "Aisha Ibrahim",
    review: "A truly luxurious experience. The staff are professional and friendly, and the facilities are second to none. I especially enjoyed the on-site restaurant.",
    rating: 5,
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-primary fill-primary' : 'text-muted-foreground/50'}`}
      />
    ))}
  </div>
);


export function Testimonials() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">What Our Guests Say</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Hear from our happy guests and see why they love staying with us.
          </p>
        </div>
        <div 
          className="relative w-full overflow-hidden"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <div className="flex animate-scroll-x">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="mx-4 w-80 shrink-0 p-6 md:w-96">
                <CardContent className="p-0 flex flex-col h-full">
                  <StarRating rating={testimonial.rating} />
                  <p className="mt-4 text-muted-foreground flex-grow">"{testimonial.review}"</p>
                  <p className="mt-6 font-bold text-foreground text-right">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
