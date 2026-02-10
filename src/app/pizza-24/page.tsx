import type { Metadata } from "next";
import NavBar from "../NavBar";

export const metadata: Metadata = {
  title: "Distributeur Pizza 24/7 — Zuzulua | Saint-Pée-sur-Nivelle",
  description:
    "Pizzas et tacos artisanaux disponibles 24h/24 et 7j/7 au distributeur automatique Zuzulua, sur le parking du restaurant à Saint-Pée-sur-Nivelle.",
};

const PIZZAS = [
  { name: "Margherita", desc: "Sauce tomate, mozzarella, basilic", price: "9,50 \u20ac" },
  { name: "Reine", desc: "Jambon, champignons, mozzarella, olives", price: "11,50 \u20ac" },
  { name: "4 Fromages", desc: "M\u00e9lange de quatre fromages", price: "12 \u20ac" },
  { name: "Xistora Brebis", desc: "Xistora, poivrons grill\u00e9s, fromage de brebis", price: "13 \u20ac" },
  { name: "Burger Pizza", desc: "Viande hach\u00e9e, cheddar, sauce sp\u00e9ciale", price: "13,50 \u20ac" },
  { name: "Kebab Pizza", desc: "Viande kebab, sauce, l\u00e9gumes frais", price: "13 \u20ac" },
];

const AUTRES = [
  { name: "Tacos", desc: "Viande hach\u00e9e, tomates fra\u00eeches, frites, sauce fromag\u00e8re", price: "8 \u20ac" },
  { name: "Chicken Burger", desc: "Poulet pané, salade, sauce maison", price: "7,50 \u20ac" },
  { name: "Cordon Bleu", desc: "Cordon bleu artisanal", price: "12,50 \u20ac" },
];

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

export default function Pizza24() {
  return (
    <>
      <NavBar />

      {/* ─── HERO ─── */}
      <section className="relative bg-charcoal pt-40 pb-24 md:pb-32">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(/braises.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.9) 100%)" }} />
        <div className="relative z-10 mx-auto max-w-4xl px-8 text-center">
          <div className="mx-auto mb-6 inline-block bg-gold/10 px-4 py-2">
            <span className="text-xs font-semibold tracking-wider text-gold uppercase">
              Disponible 24h/24 &middot; 7j/7
            </span>
          </div>
          <h1 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            Distributeur de Pizzas
          </h1>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          <p className="mx-auto mt-6 max-w-xl text-base font-light text-white/50">
            Nos pizzas et tacos artisanaux disponibles &agrave; toute heure
            au distributeur automatique, directement sur le parking du restaurant.
          </p>

          {/* Location */}
          <a
            href="https://www.google.com/maps/dir//Zuzulua+Saint-P%C3%A9e-sur-Nivelle"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 border border-gold/50 px-8 py-4 text-sm font-semibold tracking-widest text-gold uppercase transition-all hover:bg-gold/10"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
            </svg>
            Itin&eacute;raire &middot; Parking du restaurant
          </a>
        </div>
      </section>

      {/* ─── PIZZAS ─── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">Au distributeur</p>
            <h2 className="font-serif text-3xl font-semibold text-charcoal md:text-4xl">
              Nos Pizzas
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {PIZZAS.map((pizza) => (
              <div key={pizza.name} className="flex items-start justify-between border border-warm-200 bg-white p-6 transition-all hover:border-gold/30 hover:shadow-sm">
                <div>
                  <h3 className="text-sm font-semibold text-charcoal">{pizza.name}</h3>
                  <p className="mt-1 text-xs text-charcoal/50">{pizza.desc}</p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-gold">{pizza.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TACOS & AUTRES ─── */}
      <section className="bg-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">&Eacute;galement disponibles</p>
            <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">
              Tacos &amp; Burgers
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          </div>
          <div className="mx-auto max-w-lg space-y-0">
            {AUTRES.map((item) => (
              <div key={item.name} className="flex items-start justify-between border-b border-white/5 py-5">
                <div>
                  <h3 className="text-sm font-medium text-white">{item.name}</h3>
                  <p className="mt-1 text-xs text-white/40">{item.desc}</p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-gold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">Mode d&apos;emploi</p>
            <h2 className="font-serif text-3xl font-semibold text-charcoal md:text-4xl">
              Comment &ccedil;a marche ?
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Choisissez",
                desc: "S\u00e9lectionnez votre pizza ou tacos sur l\u2019\u00e9cran tactile du distributeur.",
              },
              {
                step: "02",
                title: "Payez",
                desc: "R\u00e9glez par carte bancaire ou en esp\u00e8ces, directement au distributeur.",
              },
              {
                step: "03",
                title: "D\u00e9gustez",
                desc: "Votre commande est pr\u00eate en quelques minutes. Chaude et croustillante, \u00e0 toute heure !",
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

          {/* Map CTA */}
          <div className="mt-16 text-center">
            <a
              href="https://www.google.com/maps/dir//Zuzulua+Saint-P%C3%A9e-sur-Nivelle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold px-10 py-4 text-sm font-semibold tracking-widest text-white uppercase transition-all hover:bg-gold-dark"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
              </svg>
              Itin&eacute;raire
            </a>
          </div>
        </div>
      </section>

      {/* ─── ALSO: À EMPORTER ─── */}
      <section className="bg-charcoal py-16">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <p className="text-sm text-white/50">
            Envie de notre carte compl&egrave;te ?
          </p>
          <a
            href="/emporter"
            className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-gold transition-colors hover:text-gold-dark"
          >
            D&eacute;couvrir la carte &agrave; emporter &amp; livraison
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
