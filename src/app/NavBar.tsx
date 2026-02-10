"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

const NAV_LINKS = [
  { label: "La Carte", href: "#carte" },
  { label: "Avis", href: "#avis" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Nous Trouver", href: "#trouver" },
  { label: "Contact", href: "/contact" },
];

const SECTION_IDS = ["carte", "avis", "partenaires", "trouver"];

export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "rgba(26,26,26,0.95)", backdropFilter: "blur(12px)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <a href={isHome ? "#" : "/"}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-zuzulua-clean.png"
            alt="Zuzulua"
            className="h-20"
            style={{ filter: "invert(1)" }}
          />
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => {
            const isAnchor = link.href.startsWith("#");
            const sectionId = link.href.replace("#", "");
            const isLinkActive = isAnchor
              ? isHome && active === sectionId
              : pathname === link.href;
            const resolvedHref = isAnchor && !isHome ? `/${link.href}` : link.href;

            return (
              <a
                key={link.href}
                href={resolvedHref}
                className={`text-sm tracking-wide transition-colors ${
                  isLinkActive
                    ? "font-medium text-gold"
                    : "font-light text-white/70 hover:text-gold"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          {/* Separator */}
          <div className="ml-1 h-6 w-px bg-white/10" />
          {/* CTA: À Emporter */}
          <a
            href="/emporter"
            className={`inline-flex items-center gap-1.5 border px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all ${
              pathname === "/emporter"
                ? "border-gold bg-gold/10 text-gold"
                : "border-white/20 text-white/70 hover:border-gold hover:text-gold"
            }`}
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            Emporter
          </a>
          {/* CTA: Pizza 24/7 */}
          <a
            href="/pizza-24"
            className={`group relative inline-flex items-center gap-1.5 border px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all ${
              pathname === "/pizza-24"
                ? "border-gold bg-gold/10 text-gold"
                : "border-white/20 text-white/70 hover:border-gold hover:text-gold"
            }`}
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Pizza 24/7
            <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-gold" />
            </span>
          </a>
          {/* CTA: Réserver */}
          <a
            href="tel:0559439472"
            className="inline-flex items-center gap-2 bg-gold px-6 py-2.5 text-sm font-semibold tracking-wider text-white uppercase transition-all hover:bg-gold-dark"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            05 59 43 94 72
          </a>
        </div>
        <MobileNav />
      </div>
    </nav>
  );
}
