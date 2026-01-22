export function AppFooter() {
  return (
    <footer className="mt-auto border-t bg-card">
      <div className="container mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Nightingale. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
