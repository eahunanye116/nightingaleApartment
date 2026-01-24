import type { Metadata } from 'next';
import './globals.css';
import { AppFooter } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { PageLoader } from '@/components/page-loader';

export const metadata: Metadata = {
  title: 'Nightingale Apartments',
  description: 'Discover Your Home Away From Home.',
  icons: null,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Tinos:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <PageLoader />
        <div className="flex min-h-screen flex-col">
          <main className="flex-grow">{children}</main>
          <AppFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
