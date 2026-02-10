import type { Metadata } from "next";
import NavBar from "../NavBar";
import RevealOnScroll from "../RevealOnScroll";

export const metadata: Metadata = {
  title: "À Emporter & Livraison — Zuzulua | Saint-Pée-sur-Nivelle",
  description:
    "Commandez nos pizzas artisanales, tapas et grillades à emporter ou en livraison. Livraison à Sare, Saint-Pée-sur-Nivelle et Ainhoa.",
};

const PIZZAS = [
  { name: "Margherita", price: "10 \u20ac" },
  { name: "Regina", price: "12 \u20ac" },
  { name: "Saumon", price: "13 \u20ac" },
  { name: "Primavera", price: "11 \u20ac" },
  { name: "Burger", price: "13 \u20ac" },
  { name: "Ch\u00e8vre-Miel", price: "12 \u20ac" },
  { name: "Spicy Italian", price: "13 \u20ac" },
  { name: "L\u2019Italienne", price: "12 \u20ac" },
  { name: "C\u00e9sar", price: "13 \u20ac" },
  { name: "4 Fromages", price: "12 \u20ac" },
  { name: "Carbonara", price: "13 \u20ac" },
  { name: "Truffe", price: "16 \u20ac" },
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

const ORDER_STEPS = [
  {
    step: "01",
    title: "Appelez-nous",
    desc: "Passez votre commande par t\u00e9l\u00e9phone au 05 59 43 94 72, du mardi au dimanche de 18h30 \u00e0 22h.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Pr\u00e9paration",
    desc: "Nos pizza\u00efols pr\u00e9parent votre commande avec des produits frais et locaux, cuite au feu de bois.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "R\u00e9cup\u00e9rez ou livraison",
    desc: "Retirez au restaurant ou faites-vous livrer \u00e0 Sare, Saint-P\u00e9e-sur-Nivelle ou Ainhoa.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h17.25" />
      </svg>
    ),
  },
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
      <section className="relative overflow-hidden bg-charcoal pt-40 pb-28 md:pb-36">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(/terrasse-guirlandes.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.85) 50%, rgba(26,26,26,0.98) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(201,169,110,0.06) 0%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-4xl px-8 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            Vente &agrave; emporter &amp; livraison
          </p>
          <h1 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            Savourez Zuzulua chez vous
          </h1>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-white/50">
            Nos pizzas sont cr&eacute;&eacute;es et &eacute;labor&eacute;es par Julie, &eacute;l&egrave;ve dipl&ocirc;m&eacute;e
            de l&apos;association des pizza&iuml;ols de France.
          </p>

          <a
            href="tel:0559439472"
            className="mt-10 inline-flex items-center gap-3 bg-gold px-12 py-5 text-base font-semibold tracking-widest text-white uppercase transition-all hover:bg-gold-dark"
          >
            <PhoneIcon className="h-5 w-5" />
            Commander : 05 59 43 94 72
          </a>

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
          <RevealOnScroll variant="fade-up">
            <div className="mb-16 text-center">
              <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">La carte</p>
              <h2 className="font-serif text-3xl font-semibold text-charcoal md:text-4xl lg:text-5xl">
                Nos Pizzas Artisanales
              </h2>
              <div className="mx-auto mt-4 h-px w-16 bg-gold" />
              <p className="mx-auto mt-6 max-w-md text-sm font-light text-charcoal/50">
                P&acirc;te fra&icirc;che maison &middot; Cuites au feu de bois &middot; De 10 &agrave; 16 &euro;
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PIZZAS.map((pizza, idx) => (
              <RevealOnScroll key={pizza.name} variant="fade-scale" delay={idx * 50}>
                <div className="group relative overflow-hidden border border-warm-200 bg-white transition-all duration-300 hover:border-gold/40 hover:shadow-lg">
                  <div className="h-1 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                  <div className="flex items-center justify-between p-5">
                    <span className="font-serif text-sm font-semibold text-charcoal">{pizza.name}</span>
                    <span className="font-serif text-base font-semibold text-gold">{pizza.price}</span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TAPAS & SUPPLÉMENTS ─── */}
      <section className="relative overflow-hidden bg-charcoal py-24 md:py-32">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(/braises.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,169,110,0.04) 0%, transparent 60%)" }} />

        <div className="relative z-10 mx-auto max-w-5xl px-8">
          <div className="grid gap-16 md:grid-cols-2">
            {/* Tapas */}
            <RevealOnScroll variant="fade-left">
              <div>
                <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
                  &Agrave; partager
                </p>
                <h2 className="font-serif text-2xl font-semibold text-white md:text-3xl">
                  Tapas &amp; Planches
                </h2>
                <div className="mt-4 h-px w-16 bg-gold" />
                <div className="mt-8">
                  {TAPAS.map((item, idx) => (
                    <div key={item.name} className="group flex items-center justify-between border-b border-white/[0.06] py-4 transition-all hover:border-gold/20">
                      <span className="text-sm font-light text-white/70 transition-colors group-hover:text-white">{item.name}</span>
                      <div className="flex items-center gap-3">
                        <div className="hidden h-px w-6 bg-gold/20 sm:block" />
                        <span className="font-serif text-sm font-semibold text-gold">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Suppléments */}
            <RevealOnScroll variant="fade-right">
              <div>
                <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
                  Personnalisez
                </p>
                <h2 className="font-serif text-2xl font-semibold text-white md:text-3xl">
                  Suppl&eacute;ments
                </h2>
                <div className="mt-4 h-px w-16 bg-gold" />
                <div className="mt-8">
                  {SUPPLEMENTS.map((item) => (
                    <div key={item.name} className="group flex items-center justify-between border-b border-white/[0.06] py-4 transition-all hover:border-gold/20">
                      <span className="text-sm font-light text-white/70 transition-colors group-hover:text-white">{item.name}</span>
                      <div className="flex items-center gap-3">
                        <div className="hidden h-px w-6 bg-gold/20 sm:block" />
                        <span className="font-serif text-sm font-semibold text-gold">+ {item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-8">
          <RevealOnScroll variant="fade-up">
            <div className="mb-16 text-center">
              <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
                Comment commander
              </p>
              <h2 className="font-serif text-3xl font-semibold text-charcoal md:text-4xl lg:text-5xl">
                Simple et rapide
              </h2>
              <div className="mx-auto mt-4 h-px w-16 bg-gold" />
            </div>
          </RevealOnScroll>

          <div className="grid gap-8 sm:grid-cols-3">
            {ORDER_STEPS.map((item, idx) => (
              <RevealOnScroll key={item.step} variant="fade-scale" delay={idx * 150}>
                <div className="group text-center">
                  <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center bg-charcoal text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                    {item.icon}
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center bg-gold text-[10px] font-bold text-white group-hover:bg-charcoal group-hover:text-gold">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-charcoal">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll variant="fade-up" delay={500}>
            <div className="mt-16 text-center">
              <a
                href="tel:0559439472"
                className="inline-flex items-center gap-3 bg-gold px-10 py-4 text-sm font-semibold tracking-widest text-white uppercase transition-all hover:bg-gold-dark"
              >
                <PhoneIcon className="h-4 w-4" />
                Commander maintenant
              </a>
            </div>
          </RevealOnScroll>
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
