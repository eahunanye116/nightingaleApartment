import { Instagram, Phone } from "lucide-react";
import Link from "next/link";

export function AppFooter() {
  return (
    <footer className="bg-zinc-900 text-gray-300">
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-headline text-2xl font-bold text-white">GEMINGE</h2>
            <p className="mt-4 text-sm text-gray-400">
              Discover your home away from home with Geminge Apartments. We provide comfort, luxury, and convenience.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Apartments</Link></li>
              <li><Link href="#" className="hover:text-white">Booking</Link></li>
              <li><Link href="#" className="hover:text-white">Concierge</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white">Quick Menu</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
              <li><Link href="#" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Follow Us</h3>
            <div className="mt-4 flex gap-4">
              <Link href="#" className="hover:text-white">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Phone className="h-6 w-6" />
                <span className="sr-only">Phone</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-6">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Geminge Apartments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
