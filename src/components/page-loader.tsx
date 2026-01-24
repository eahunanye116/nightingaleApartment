'use client';

import { useState, useEffect } from 'react';
import { Loader } from '@/components/loader';
import { cn } from '@/lib/utils';

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Use a timeout to ensure the transition is smooth
      // and doesn't feel jarring.
      setTimeout(() => {
        setLoading(false);
      }, 300);
    };

    // Check if the document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Otherwise, wait for the window to load
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[200] flex items-center justify-center bg-black transition-opacity duration-700 ease-out",
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <Loader />
    </div>
  );
}
