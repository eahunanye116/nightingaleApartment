"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animationClass?: string;
  delay?: string;
  style?: React.CSSProperties;
}

export function AnimateOnScroll({
  children,
  className,
  animationClass = "animate-fade-in-up",
  delay = "0ms",
  style,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity duration-1000 ease-out",
        isVisible ? animationClass : "opacity-0",
        className
      )}
      style={{
        ...style,
        animationDelay: delay,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
}
