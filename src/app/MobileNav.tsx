"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const LINKS = [
  { label: "La Carte", href: "#carte" },
  { label: "Avis", href: "#avis" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Nous Trouver", href: "#trouver" },
  { label: "Contact", href: "/contact" },
];

function Overlay({ onClose }: { onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        backgroundColor: "#1a1a1a",
      }}
    >
      {/* Header: logo + close */}
      <div className="flex items-center justify-between px-8 pt-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-zuzulua-clean.png" alt="Zuzulua" className="h-16" style={{ filter: "invert(1)" }} />
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-gold"
          aria-label="Fermer le menu"
        >
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex h-full flex-col items-center justify-center gap-8">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-serif text-2xl font-light tracking-wide text-white/80 transition-colors hover:text-gold"
          >
            {link.label}
          </a>
        ))}
        {/* CTA buttons */}
        <div className="mt-4 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <a
              href="/emporter"
              onClick={onClose}
              className="inline-flex items-center gap-2 border border-gold/50 px-6 py-3 text-sm font-semibold tracking-widest text-gold uppercase transition-all hover:bg-gold/10"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              Emporter
            </a>
            <a
              href="/pizza-24"
              onClick={onClose}
              className="relative inline-flex items-center gap-2 border border-gold/50 px-6 py-3 text-sm font-semibold tracking-widest text-gold uppercase transition-all hover:bg-gold/10"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Pizza 24/7
              <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-gold" />
              </span>
            </a>
          </div>
          <a
            href="tel:0559439472"
            onClick={onClose}
            className="inline-flex items-center gap-3 bg-gold px-10 py-4 text-sm font-semibold tracking-widest text-white uppercase"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            05 59 43 94 72
          </a>
          <p className="text-xs text-white/30">Appelez pour r&eacute;server</p>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="relative z-[10000] flex h-10 w-10 items-center justify-center text-white"
        aria-label="Menu"
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        )}
      </button>
      {open && <Overlay onClose={() => setOpen(false)} />}
    </div>
  );
}
