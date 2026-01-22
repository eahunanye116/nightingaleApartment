'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative flex h-[80vh] min-h-[500px] w-full items-center justify-center overflow-hidden text-white sm:h-screen sm:min-h-[700px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        src="https://ik.imagekit.io/er5hlmosw/copy%20nightingale.mp4.mp4"
        className="absolute left-1/2 top-1/2 z-0 min-h-full w-auto min-w-full max-w-none -translate-x-1/2 -translate-y-1/2"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      
      <div className="container relative z-10 mx-auto flex max-w-screen-xl flex-col items-center gap-8 px-4 pt-12 pb-24 text-center sm:px-6 sm:pt-0 sm:pb-12">
        <div className="max-w-3xl space-y-6">
          <p className="pt-12 font-bold uppercase tracking-widest text-primary sm:pt-0">ENJOY THE FINEST STAYS</p>
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
    </section>
  );
}
