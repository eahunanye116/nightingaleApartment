import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function AppFooter() {
  return (
    <footer id="contact" className="bg-muted text-muted-foreground scroll-mt-20">
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div className="lg:col-span-1">
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
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>Number 30 Iwowari avenue, Trans amadi, off peter odili road, Port-Harcourt</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <Link href="mailto:reservation@nightingaleapartment.com.ng" className="hover:text-foreground">
                  reservation@nightingaleapartment.com.ng
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <Link href="tel:+2349159394751" className="hover:text-foreground">
                  +234 915 939 4751
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Follow Us</h3>
            <div className="mt-4 flex gap-4">
              <Link href="https://www.instagram.com/nightingale.apartments/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://tiktok.com/@nightingale.apartments" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13 1.83-.12 3.67-.12 5.5 0 2.15-.31 4.39-1.63 6.13-1.4 1.9-3.76 3.06-6.14 3.06-2.58 0-5.11-1.31-6.49-3.5-1.54-2.4-1.39-5.74.36-7.98 1.34-1.74 3.48-2.65 5.66-2.65.17 0 .33.01.5.02v4.03c-1.32-.23-2.77.16-3.66 1.18-.94 1.05-1.01 2.74-.23 3.88.74 1.09 2.16 1.53 3.4 1.05 1.13-.42 1.84-1.57 1.84-2.77V1.1c0-.36-.01-.72-.03-1.08h.1zm7.41 6.03l-.01.01z"/>
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
              <Link href="https://wa.me/2349159394751" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                <Phone className="h-6 w-6" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-6">
          <div className="text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Nightingale Apartments. All rights reserved.</p>
            <div className="mt-2 flex items-center justify-center gap-2">
                <span>Built by Esan Studios</span>
                <Link href="https://wa.me/2349167241442" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border bg-muted px-3 py-1 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-card">
                    <Phone className="h-3 w-3" />
                    Contact
                </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
