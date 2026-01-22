import { HomeIcon, UserCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function AppHeader() {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto flex max-w-screen-xl items-center justify-between p-4 sm:p-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-lg bg-primary p-2">
            <HomeIcon className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="font-headline text-2xl font-bold text-foreground sm:text-3xl">
            Nightingale
          </h1>
        </Link>
        <Button variant="ghost" size="icon">
          <UserCircle2 className="h-8 w-8" />
          <span className="sr-only">User Profile</span>
        </Button>
      </div>
    </header>
  );
}
