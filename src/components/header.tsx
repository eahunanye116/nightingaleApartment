import { Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function AppHeader() {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto flex max-w-screen-xl items-center justify-between p-4 sm:p-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-md border p-2">
            <Building2 className="h-6 w-6 text-foreground" />
          </div>
          <h1 className="font-headline text-2xl font-bold uppercase tracking-wider text-foreground sm:text-3xl">
            Geminge
          </h1>
        </Link>
        <Button variant="outline" className="hidden sm:flex">
          CHANGE CURRENCY
        </Button>
      </div>
    </header>
  );
}
