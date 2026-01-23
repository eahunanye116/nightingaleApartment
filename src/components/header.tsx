import { Logo } from './logo';
import Link from 'next/link';

const NavLinks = ({ inSheet = false }: { inSheet?: boolean }) => {
  const linkClass = inSheet 
    ? "text-lg font-medium transition-colors hover:text-primary" 
    : "text-sm font-medium text-white transition-colors hover:text-white/80";
  return (
    <>
      <Link href="/" className={linkClass}>
        Home
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
        <Link href="/" className="flex items-center gap-3 text-white">
          <Logo />
        </Link>
        
        <nav className="hidden items-center gap-6 md:flex">
          <NavLinks />
        </nav>

        <nav className="flex items-center gap-4 text-sm font-medium md:hidden">
          <Link href="/" className="text-white transition-colors hover:text-white/80">
            Home
          </Link>
          <Link href="/gallery" className="text-white transition-colors hover:text-white/80">
            Gallery
          </Link>
          <Link href="/#contact" className="text-white transition-colors hover:text-white/80">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
