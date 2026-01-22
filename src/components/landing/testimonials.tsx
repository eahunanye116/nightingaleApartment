import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const QuoteIcon = () => (
  <svg width="48" height="38" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary/20">
    <path d="M0 38V15.2H12.54V0H28.2V38H0ZM19.8 38V15.2H32.34V0H48V38H19.8Z" fill="currentColor"/>
  </svg>
);


export function Testimonials() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end mb-8">
            <Button variant="outline">View all</Button>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="p-8">
            <CardContent className="p-0">
                <QuoteIcon />
                <h3 className="mt-6 font-headline text-2xl font-bold">Awesome Services!</h3>
                <p className="mt-2 text-muted-foreground">
                    Amazing stay! The villa was spotless, the staff unbelievably welcoming, and the location couldn't be better. We will be back for sure.
                </p>
            </CardContent>
          </Card>
          <Card className="p-8">
            <CardContent className="p-0">
                <QuoteIcon />
                <h3 className="mt-6 font-headline text-2xl font-bold">Recommendations Of Everything!</h3>
                <p className="mt-2 text-muted-foreground">
                    From arrival to check-out, everything was smooth. The private chef service is worth it alone. Highly recommend for anyone visiting.
                </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
