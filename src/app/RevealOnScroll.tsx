"use client";

import { useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Animation variant */
  variant?: "fade-up" | "fade-scale" | "fade-left" | "fade-right";
  /** How far into the viewport before triggering (0-1) */
  threshold?: number;
}

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
  threshold = 0.15,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const variantClass = `reveal-${variant}`;

  return (
    <div
      ref={ref}
      className={`${variantClass} ${isVisible ? "is-revealed" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
