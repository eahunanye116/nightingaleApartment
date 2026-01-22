'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex h-[80vh] min-h-[500px] w-full items-center justify-center overflow-hidden text-white sm:h-screen sm:min-h-[700px]">
      <video
        src="https://cdn-cf-east.streamable.com/video/mp4/kn4m8f.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      
      <div className="container relative z-10 mx-auto flex max-w-screen-xl flex-col items-center gap-8 px-4 pb-8 text-center sm:px-6 sm:pb-0">
        <div className="max-w-3xl space-y-6">
          <p className="font-bold uppercase tracking-widest text-primary">ENJOY THE FINEST STAYS</p>
          <h1 className="font-headline text-5xl font-bold leading-tight md:text-7xl">
            Discover Your Home Away From Home
          </h1>
          <p className="text-lg text-gray-200 md:text-xl">
            Relax in beautifully furnished homes, enjoy modern comforts, and wake up refreshed in a space designed for comfort and convenience.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="px-10 py-6 text-lg">
                <Link href="#booking">Book Your Stay</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/50 bg-black/20 px-10 py-6 text-lg text-white backdrop-blur-sm hover:border-white hover:bg-black/40">
                <Link href="/apartments/2">View The Villa</Link>
            </Button>
        </div>
      </div>
      <div className="absolute bottom-8 z-10 animate-bounce">
        <ArrowDown className="h-8 w-8" />
      </div>
    </section>
  );
}
