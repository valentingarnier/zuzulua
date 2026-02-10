import type { Metadata } from "next";
import NavBar from "../NavBar";

export const metadata: Metadata = {
  title: "À Emporter & Livraison — Zuzulua | Saint-Pée-sur-Nivelle",
  description:
    "Commandez nos pizzas artisanales, tapas et grillades à emporter ou en livraison. Livraison à Sare, Saint-Pée-sur-Nivelle et Ainhoa.",
};

const PIZZAS = [
  { name: "Margherita", price: "10 €" },
  { name: "Regina", price: "12 €" },
  { name: "Saumon", price: "13 €" },
  { name: "Primavera", price: "11 €" },
  { name: "Burger", price: "13 €" },
  { name: "Ch\u00e8vre-Miel", price: "12 €" },
  { name: "Spicy Italian", price: "13 €" },
  { name: "L\u2019Italienne", price: "12 €" },
  { name: "C\u00e9sar", price: "13 €" },
  { name: "4 Fromages", price: "12 €" },
  { name: "Carbonara", price: "13 €" },
  { name: "Truffe", price: "16 €" },
];

const TAPAS = [
  { name: "P\u00e2t\u00e9 Basque", price: "8 \u20ac" },
  { name: "Piments de Padron", price: "8 \u20ac" },
  { name: "Sangria maison (1L)", price: "10 \u20ac" },
  { name: "Saumon fum\u00e9 maison", price: "13 \u20ac" },
  { name: "Croquettes Serrano", price: "10 \u20ac" },
];

const SUPPLEMENTS = [
  { name: "\u0152uf", price: "1 \u20ac" },
  { name: "Champignons", price: "1,50 \u20ac" },
  { name: "Viande", price: "2 \u20ac" },
  { name: "Fromage", price: "1,50 \u20ac" },
  { name: "L\u00e9gumes", price: "1,50 \u20ac" },
  { name: "Truffe", price: "2,50 \u20ac" },
];

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

export default function Emporter() {
  return (
    <>
      <NavBar />

      {/* ─── HERO ─── */}
      <section className="relative bg-charcoal pt-40 pb-24 md:pb-32">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(/terrasse-guirlandes.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.9) 100%)" }} />
        <div className="relative z-10 mx-auto max-w-4xl px-8 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            Vente &agrave; emporter &amp; livraison
          </p>
          <h1 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            Savourez Zuzulua chez vous
          </h1>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          <p className="mx-auto mt-6 max-w-xl text-base font-light text-white/50">
            Nos pizzas sont cr&eacute;&eacute;es et &eacute;labor&eacute;es par Julie, &eacute;l&egrave;ve dipl&ocirc;m&eacute;e
            de l&apos;association des pizzaïols de France.
          </p>

          {/* Phone CTA */}
          <a
            href="tel:0559439472"
            className="mt-10 inline-flex items-center gap-3 bg-gold px-12 py-5 text-base font-semibold tracking-widest text-white uppercase transition-all hover:bg-gold-dark"
          >
            <PhoneIcon className="h-5 w-5" />
            Commander : 05 59 43 94 72
          </a>

          {/* Service info */}
          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-white/50">Mar &agrave; Dim &middot; 18h30&ndash;22h</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h17.25" />
              </svg>
              <span className="text-sm text-white/50">Livraison : Sare, Saint-P&eacute;e, Ainhoa</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PIZZAS ─── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">La carte</p>
            <h2 className="font-serif text-3xl font-semibold text-charcoal md:text-4xl">
              Nos Pizzas Artisanales
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" />
            <p className="mt-4 text-sm text-charcoal/50">
              P&acirc;te fra&icirc;che maison &middot; Cuites au feu de bois &middot; De 10&nbsp;&agrave;&nbsp;16&nbsp;&euro;
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PIZZAS.map((pizza) => (
              <div key={pizza.name} className="flex items-center justify-between border border-warm-200 bg-white px-6 py-4 transition-all hover:border-gold/30 hover:shadow-sm">
                <span className="text-sm font-medium text-charcoal">{pizza.name}</span>
                <span className="text-sm font-semibold text-gold">{pizza.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TAPAS & PARTAGER ─── */}
      <section className="bg-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-8">
          <div className="grid gap-16 md:grid-cols-2">
            {/* Tapas & Partager */}
            <div>
              <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
                &Agrave; partager
              </p>
              <h2 className="font-serif text-2xl font-semibold text-white md:text-3xl">
                Tapas &amp; Planches
              </h2>
              <div className="mt-4 h-px w-16 bg-gold" />
              <div className="mt-8 space-y-0">
                {TAPAS.map((item) => (
                  <div key={item.name} className="flex items-center justify-between border-b border-white/5 py-4">
                    <span className="text-sm font-light text-white/70">{item.name}</span>
                    <span className="text-sm font-semibold text-gold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Suppléments */}
            <div>
              <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
                Personnalisez
              </p>
              <h2 className="font-serif text-2xl font-semibold text-white md:text-3xl">
                Suppl&eacute;ments
              </h2>
              <div className="mt-4 h-px w-16 bg-gold" />
              <div className="mt-8 space-y-0">
                {SUPPLEMENTS.map((item) => (
                  <div key={item.name} className="flex items-center justify-between border-b border-white/5 py-4">
                    <span className="text-sm font-light text-white/70">{item.name}</span>
                    <span className="text-sm font-semibold text-gold">+ {item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
              Comment commander
            </p>
            <h2 className="font-serif text-3xl font-semibold text-charcoal md:text-4xl">
              Simple et rapide
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Appelez-nous",
                desc: "Passez votre commande par t\u00e9l\u00e9phone au 05 59 43 94 72, du mardi au dimanche de 18h30 \u00e0 22h.",
              },
              {
                step: "02",
                title: "Pr\u00e9paration",
                desc: "Nos pizzaïols pr\u00e9parent votre commande avec des produits frais et locaux, cuite au feu de bois.",
              },
              {
                step: "03",
                title: "R\u00e9cup\u00e9rez ou livraison",
                desc: "Retirez au restaurant ou faites-vous livrer \u00e0 Sare, Saint-P\u00e9e-sur-Nivelle ou Ainhoa.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center bg-charcoal">
                  <span className="font-serif text-lg font-semibold text-gold">{item.step}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href="tel:0559439472"
              className="inline-flex items-center gap-3 bg-gold px-10 py-4 text-sm font-semibold tracking-widest text-white uppercase transition-all hover:bg-gold-dark"
            >
              <PhoneIcon className="h-4 w-4" />
              Commander maintenant
            </a>
          </div>
        </div>
      </section>

      {/* ─── ALSO: PIZZA 24/7 ─── */}
      <section className="bg-charcoal py-16">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <p className="text-sm text-white/50">
            Envie d&apos;une pizza en dehors des heures d&apos;ouverture ?
          </p>
          <a
            href="/pizza-24"
            className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-gold transition-colors hover:text-gold-dark"
          >
            D&eacute;couvrir notre distributeur Pizza 24/7
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/5 bg-charcoal-light py-10">
        <div className="mx-auto max-w-6xl px-8">
          <div className="flex flex-col items-center gap-4 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-zuzulua-clean.png" alt="Zuzulua" className="h-32" style={{ filter: "invert(1)" }} />
            <p className="text-xs font-light tracking-wider text-white/30">
              Restaurant &middot; Bar &middot; Tapas &middot; Pizzas &mdash; Saint-P&eacute;e-sur-Nivelle, Pays Basque
            </p>
            <a href="tel:0559439472" className="inline-flex items-center gap-2 text-lg font-semibold text-gold transition-colors hover:text-gold-dark">
              <PhoneIcon className="h-5 w-5" />
              05 59 43 94 72
            </a>
            <div className="flex items-center gap-6">
              <a href="https://www.instagram.com/restaurantzuzulua/" target="_blank" rel="noopener noreferrer" className="text-white/30 transition-colors hover:text-gold" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-white/15">&copy; {new Date().getFullYear()} Zuzulua. Tous droits r&eacute;serv&eacute;s.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
