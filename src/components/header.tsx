import { Logo } from './logo';
import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

const NavLinks = ({ inSheet = false }: { inSheet?: boolean }) => {
  const linkClass = inSheet 
    ? "text-lg font-medium transition-colors hover:text-primary" 
    : "text-sm font-medium text-white transition-colors hover:text-white/80";
  return (
    <>
      <Link href="/#booking" className={linkClass}>
        Apartments
      </Link>
      <Link href="/gallery" className={linkClass}>
        Gallery
      </Link>
      <Link href="/#about" className={linkClass}>
        About
      </Link>
      <Link href="/#contact" className={linkClass}>
        Contact
      </Link>
    </>
  )
};

export function AppHeader() {
  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container mx-auto flex max-w-screen-xl items-center justify-between p-4 sm:p-6">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
        </Link>
        
        <nav className="hidden items-center gap-6 md:flex">
          <NavLinks />
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-white/50 text-white hover:bg-white/10 hover:text-white">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                 <Link href="/" className="mb-4 flex items-center gap-3">
                  <Logo />
                </Link>
                <nav className="flex flex-col gap-4">
                  <NavLinks inSheet={true} />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
