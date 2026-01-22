import { Logo } from './logo';
import Link from 'next/link';
import { Button } from './ui/button';

export function AppHeader() {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto flex max-w-screen-xl items-center justify-between p-4 sm:p-6">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
        </Link>
        <Button variant="outline" className="hidden sm:flex">
          CHANGE CURRENCY
        </Button>
      </div>
    </header>
  );
}
