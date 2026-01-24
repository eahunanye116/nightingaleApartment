import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background">
        <div className="relative h-48 w-full sm:h-64 md:h-80">
            <Image 
                src="https://i.postimg.cc/4NFF40dX/Whats-App-Image-2026-01-22-at-11-53-55-PM.jpg"
                alt="Interior of a luxury apartment"
                fill
                className="object-cover"
                priority
                data-ai-hint="apartment interior"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                 <h1 className="font-headline text-4xl font-bold text-white sm:text-5xl md:text-6xl text-center px-4">About Maas Central Nightingale</h1>
            </div>
        </div>

      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        
        <div className="mb-12 flex justify-end">
            <Link href="/" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
            </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
                <div className="space-y-8 text-lg text-muted-foreground">
                    <div>
                        <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl mb-4">Experience the Nightingale Difference</h2>
                        <p>
                            Discover a stay that blends modern technology with personalized luxury. Whether you are visiting Port Harcourt for business or leisure, our facilities are designed to cater to your every need.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-headline text-2xl font-bold text-foreground md:text-3xl mb-4">Contemporary Accommodations</h3>
                        <p className="mb-4">
                            Our property features thoughtfully designed 1, 2, and 3-bedroom apartments, perfect for solo travelers, families, or corporate groups.
                        </p>
                        <ul className="list-disc space-y-2 pl-5">
                            <li><strong className="font-semibold text-foreground">Entertainment:</strong> Each of our 13 units is equipped with Smart Televisions featuring Netflix integration, allowing you to stream your favorite shows and movies seamlessly.</li>
                            <li><strong className="font-semibold text-foreground">Space & Comfort:</strong> Enjoy spacious living areas, private balconies with city views, and dedicated "mini office" workspaces in every apartment.</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="font-headline text-2xl font-bold text-foreground md:text-3xl mb-4">World-Class Facilities</h3>
                        <p className="mb-4">
                            We offer a curated selection of amenities to ensure you never have to leave the comfort of the premises:
                        </p>
                        <ul className="list-disc space-y-2 pl-5">
                            <li><strong className="font-semibold text-foreground">Dining & Relaxation:</strong> Visit our In-House Restaurant and Bar for gourmet meals and refreshing cocktails in a sophisticated setting.</li>
                            <li><strong className="font-semibold text-foreground">Recreation:</strong> Take a dip in our pristine Swimming Pool, the perfect spot to unwind after a busy day in the city.</li>
                            <li><strong className="font-semibold text-foreground">Connectivity:</strong> High-speed Wi-Fi is accessible throughout all apartments and public areas.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-headline text-2xl font-bold text-foreground md:text-3xl mb-4">Unmatched Security & Service</h3>
                        <p className="mb-4">
                            Your peace of mind is our top priority. We maintain a high standard of safety and hospitality around the clock:
                        </p>
                        <ul className="list-disc space-y-2 pl-5">
                            <li><strong className="font-semibold text-foreground">Tight Security:</strong> Our premises are protected by 24/7 CCTV monitoring, professional security personnel, and secure key card access for every unit.</li>
                            <li><strong className="font-semibold text-foreground">24/7 Concierge Service:</strong> Our dedicated front desk is available at any hour to assist with bookings, local recommendations, or any special requests to make your stay effortless.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-1">
                <div className="sticky top-24">
                     <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-xl">
                        <Image
                            src="https://i.postimg.cc/zfjS2V6K/Whats-App-Image-2026-01-24-at-10-28-05-AM-(1).jpg"
                            alt="Comfortable apartment living area"
                            fill
                            className="object-cover"
                            data-ai-hint="apartment living room"
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
