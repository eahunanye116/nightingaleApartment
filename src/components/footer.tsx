import { Instagram, Phone } from "lucide-react";
import Link from "next/link";

export function AppFooter() {
  return (
    <footer id="contact" className="bg-muted text-muted-foreground scroll-mt-20">
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-headline text-2xl font-bold text-foreground">Nightingale Apartments</h2>
            <p className="mt-4 text-sm">
              Discover your home away from home with Nightingale Apartments. We provide comfort, luxury, and convenience.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li><Link href="/#booking" className="hover:text-foreground">Booking</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground">Quick Menu</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
              <li><Link href="/#contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Follow Us</h3>
            <div className="mt-4 flex gap-4">
              <Link href="https://www.instagram.com/nightingale.apartments/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://wa.me/2349159394751" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                <Phone className="h-6 w-6" />
                <span className="sr-only">Phone</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-6">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Nightingale Apartments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
