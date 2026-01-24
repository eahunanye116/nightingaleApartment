import { Logo } from './logo';
import Link from 'next/link';
import { Home, Info, Phone, Image as ImageIcon } from 'lucide-react';

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const links = [
    { href: '/', text: 'Home', icon: Home },
    { href: '/gallery', text: 'Gallery', icon: ImageIcon },
    { href: '/about', text: 'About', icon: Info },
    { href: '/#contact', text: 'Contact', icon: Phone },
  ];

  const baseLinkClass = 'text-sm font-medium text-white transition-colors hover:text-white/80';

  if (mobile) {
    return (
      <>
        {links.map(({ href, text, icon: Icon }) => (
          <Link key={text} href={href} className={baseLinkClass}>
            <Icon className="h-6 w-6" />
            <span className="sr-only">{text}</span>
          </Link>
        ))}
      </>
    );
  }

  return (
    <>
      {links.map(({ href, text, icon: Icon }) => (
        <Link key={text} href={href} className={`${baseLinkClass} flex items-center gap-2`}>
          <Icon className="h-4 w-4" />
          <span>{text}</span>
        </Link>
      ))}
    </>
  );
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

        <nav className="flex items-center gap-6 text-sm font-medium md:hidden">
          <NavLinks mobile />
        </nav>
      </div>
    </header>
  );
}
