import NavBar from "./NavBar";
import ImageCarousel from "./ImageCarousel";
import RevealOnScroll from "./RevealOnScroll";

const MENU_SECTIONS = [
  {
    title: "Tapas",
    description: "À partir de 6,50 €",
    icon: "tapas",
    image: "/tapas.jpg",
    items: [
      "Pâté Basque maison",
      "Jambon Ibérico",
      "Croquettes, Xistora",
      "Planches combinées à partager",
      "Saumon fumé maison",
      "Tartare de Bœuf",
      "Saucisse confite (Porc Basque sans OGM)",
    ],
    note: "Selon saison et arrivage",
    signature: null,
  },
  {
    title: "Viandes et Poissons",
    description: "Au feu de bois",
    icon: "flame",
    image: "/cote-de-boeuf.jpg",
    items: [
      "Côte de Bœuf",
      "Pluma Bellota",
      "Entrecôte · Faux-filet",
      "Andouillette",
      "Daurade Royale",
      "Morue Grillée",
      "Merlu de Saint-Jean-de-Luz",
      "Gambas sauvages",
    ],
    note: "Selon saison et arrivage",
    signature: "Côte de Bœuf",
  },
  {
    title: "Plats Régionaux",
    description: "L\u2019âme du Pays Basque",
    icon: "region",
    image: "/ambiance-conviviale.jpg",
    items: [
      "Axoa de veau d\u2019Espelette",
      "Magret de canard",
      "Salade Navarraise",
      "Assiette Odolki",
      "Assiette Etxea",
    ],
    note: "1er prix au concours du meilleur Axoa de Veau 2018 et 2019",
    signature: "Axoa de veau d\u2019Espelette",
  },
  {
    title: "Pizzas Artisanales",
    description: "Cuites au feu de bois",
    icon: "pizza",
    image: "/braises.jpg",
    items: [
      "Pâte fraîche maison",
      "Produits frais et locaux",
      "Également disponibles à emporter",
    ],
    from: "À partir de 10 €",
    signature: null,
  },
];


const REVIEWS = [
  {
    name: "Marie L.",
    text: "Une côte de bœuf fondante à souhait, un cadre magnifique au bord de la Nivelle. Le service est irréprochable, on se sent comme à la maison.",
  },
  {
    name: "Pierre D.",
    text: "Les pizzas sont dignes des meilleures pizzerias napolitaines. La terrasse sous les platanes en été, c\u2019est un pur bonheur. Accueil chaleureux.",
  },
  {
    name: "Sophie & Jean M.",
    text: "L\u2019Axoa de veau est le meilleur de la région — primé et on comprend pourquoi. Les tapas pour l\u2019apéritif sont parfaits. Un incontournable.",
  },
  {
    name: "Thomas R.",
    text: "Bon accueil, bon repas, bon en tout. Les grillades au feu de bois sont exceptionnelles. Le personnel est souriant et professionnel.",
  },
];

const HOURS = [
  { day: "Lundi", hours: "Fermé" },
  { day: "Mardi", hours: "12h\u201314h15 · 18h\u201321h15" },
  { day: "Mercredi", hours: "12h\u201314h15" },
  { day: "Jeudi", hours: "12h\u201314h15 · 18h\u201321h15" },
  { day: "Vendredi", hours: "12h\u201314h15 · 18h\u201321h15" },
  { day: "Samedi", hours: "12h\u201314h15 · 18h\u201321h15" },
  { day: "Dimanche", hours: "12h\u201314h30" },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ─── NAV ─── */}
      <NavBar />

      {/* ─── HERO ─── */}
      <section className="relative flex min-h-screen flex-col bg-charcoal overflow-hidden">
        {/* Atmospheric background photo */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/terrasse-guirlandes.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
          }}
        />
        {/* Dark gradient to keep text readable */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.85) 50%, rgba(26,26,26,0.98) 100%)" }} />
        {/* Warm gold glow */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 35%, rgba(201,169,110,0.06) 0%, transparent 70%)" }} />

        {/* Decorative corner lines */}
        <div className="absolute top-24 left-8 hidden h-32 w-px bg-gold/15 md:block" />
        <div className="absolute top-24 left-8 hidden h-px w-32 bg-gold/15 md:block" />
        <div className="absolute bottom-48 right-8 hidden h-32 w-px bg-gold/15 md:block" />
        <div className="absolute right-8 hidden h-px w-32 bg-gold/15 md:block" style={{ bottom: "calc(12rem + 128px)" }} />

        {/* Main content */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 pt-28 pb-12 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-zuzulua-clean.png"
            alt="Zuzulua Restaurant"
            className="mb-8 w-[380px] max-w-[75vw]"
            style={{ filter: "invert(1)" }}
          />

          {/* Subtitle */}
          <p className="mb-6 text-xs font-semibold tracking-[0.4em] text-gold/70 uppercase">
            Restaurant &middot; Bar &middot; Tapas &middot; Pizzas
          </p>

          {/* Location divider */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-12 bg-gold/40" />
            <span className="text-[10px] font-semibold tracking-[0.4em] text-white/40 uppercase">
              Cherchebruit &middot; Pays Basque
            </span>
            <div className="h-px w-12 bg-gold/40" />
          </div>

          {/* Tagline */}
          <p className="mx-auto max-w-lg font-serif text-lg font-light leading-relaxed text-white/60 md:text-xl">
            Grillades au feu de bois &middot; Pizzas Artisanales<br />
            Cuisine R&eacute;gionale &middot; Terrasse d&apos;&eacute;t&eacute; sur la Nivelle
          </p>

          {/* Phone CTA — prominent */}
          <a
            href="tel:0559439472"
            className="mt-10 inline-flex items-center gap-3 bg-gold px-12 py-5 text-base font-semibold tracking-widest text-white uppercase transition-all hover:bg-gold-dark"
          >
            <PhoneIcon className="h-5 w-5" />
            05 59 43 94 72
          </a>
          <p className="mt-3 text-xs font-light text-white/30">
            Appelez pour r&eacute;server ou commander &agrave; emporter
          </p>

          {/* Secondary CTA */}
          <a href="#carte" className="mt-6 inline-flex items-center justify-center gap-3 border border-white/20 px-8 py-3 text-sm font-semibold tracking-widest text-white/70 uppercase transition-all hover:border-white hover:text-white hover:bg-white/5">
            D&eacute;couvrir la carte
          </a>

          {/* Google rating */}
          <div className="mt-8 flex items-center gap-3">
            <Stars />
            <span className="text-sm font-light text-white/40">4.7/5 &mdash; 2 000+ avis Google</span>
          </div>
        </div>

        {/* Compact gallery strip */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-charcoal to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-charcoal to-transparent" />
          <ImageCarousel />
        </div>
      </section>

      {/* ─── NOTRE HISTOIRE ─── */}
      <section id="histoire" className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-8">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
                Notre histoire
              </p>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-charcoal md:text-4xl lg:text-5xl">
                L&apos;esprit du<br />Pays Basque
              </h2>
              <div className="mt-4 h-px w-16 bg-gold" />
              <p className="mt-8 text-base leading-relaxed text-charcoal/70">
                Sur la route de Sare, au bord de la Nivelle, le restaurant Zuzulua se fend au c&oelig;ur
                d&apos;un Pays Basque typique. Dans un style &agrave; la fois traditionnel et moderne, on vient ici
                pour partager quelques tapas et vins, savourer des viandes et poissons au feu de bois
                ou d&eacute;guster des pizzas artisanales !
              </p>
              <p className="mt-4 text-base leading-relaxed text-charcoal/70">
                Les produits de qualit&eacute; mettent &agrave; l&apos;honneur la cuisine locale et l&apos;esprit
                &laquo; grillade &raquo;. Les carnivores appr&eacute;cieront la d&eacute;licieuse c&ocirc;te &agrave; l&apos;os !
                Dans une salle conviviale ou sous les platanes au bord de l&apos;eau, on se d&eacute;lecte
                de cette halte gourmande en toute simplicit&eacute;.
              </p>
            </div>
            <div className="overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/zuzulu-banc.jpg"
                alt="Le zuzulu — banc traditionnel basque au Zuzulua"
                className="mb-0 aspect-[4/3] w-full object-cover"
              />
              <div className="bg-warm-200 p-8 md:p-10">
                <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-warm-600 uppercase">
                  Le saviez-vous ?
                </p>
                <h3 className="font-serif text-2xl font-semibold text-charcoal">
                  ZUZULUA : le banc coffre
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
                  Traditionnellement plac&eacute; &agrave; c&ocirc;t&eacute; de la chemin&eacute;e, le <em>zuzulu</em> &eacute;tait
                  pr&eacute;sent dans la plupart des salles &agrave; manger des fermes du Pays Basque.
                  G&eacute;n&eacute;ralement &agrave; trois places, le zuzulu ou banc coffre basque a la particularit&eacute;
                  d&apos;avoir une tablette destin&eacute;e &agrave; servir les repas aupr&egrave;s du foyer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SIGNATURE DIVIDER ─── */}
      <section
        className="bg-fixed-cover relative py-28"
        style={{ backgroundImage: "url(/braises.jpg)" }}
      >
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="relative z-10 mx-auto max-w-3xl px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            Notre signature
          </p>
          <p className="mt-6 font-serif text-3xl leading-snug font-light text-white md:text-4xl">
            &laquo; La c&ocirc;te de b&oelig;uf grill&eacute;e au feu de bois,
            servie avec simplicit&eacute; et g&eacute;n&eacute;rosit&eacute; &raquo;
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
          <p className="mt-4 text-sm font-light text-white/40">
            Les carnivores appr&eacute;cieront la d&eacute;licieuse c&ocirc;te &agrave; l&apos;os
          </p>
        </div>
      </section>

      {/* ─── LA CARTE ─── */}
      <section id="carte" className="relative bg-charcoal py-24 md:py-32 overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(/braises.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,169,110,0.04) 0%, transparent 60%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-8">
          <RevealOnScroll variant="fade-up">
            <div className="mb-20 text-center">
              <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
                La Carte
              </p>
              <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                Selon saison et arrivage
              </h2>
              <div className="mx-auto mt-4 h-px w-16 bg-gold animate-line-grow" />
              <p className="mx-auto mt-6 max-w-md text-sm font-light text-white/40">
                Des produits de qualit&eacute; qui mettent &agrave; l&apos;honneur la cuisine locale et l&apos;esprit grillade
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid gap-6 sm:grid-cols-2">
            {MENU_SECTIONS.map((section, idx) => (
              <RevealOnScroll
                key={section.title}
                variant="fade-scale"
                delay={idx * 150}
              >
                <div className="group relative h-full overflow-hidden border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.05]">
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,169,110,0.06) 0%, transparent 70%)" }}
                  />
                  {/* Gold left accent bar */}
                  <div className="absolute top-0 left-0 z-20 h-full w-1 bg-gold/0 transition-all duration-500 group-hover:bg-gold/50" />

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col p-8 md:p-10">
                    {/* Price badge */}
                    {section.from && (
                      <div className="mb-auto">
                        <span
                          className="inline-block px-3 py-1 text-[10px] font-semibold tracking-wider text-gold uppercase"
                          style={{ backgroundColor: "rgba(201,169,110,0.12)" }}
                        >
                          {section.from}
                        </span>
                      </div>
                    )}

                    {/* Title */}
                    <div className={section.from ? "mt-6" : "mt-0"}>
                      <h3 className="font-serif text-2xl font-semibold text-white md:text-[1.7rem]">{section.title}</h3>
                      <p className="mt-1 text-sm font-light text-gold/70">{section.description}</p>
                      <div className="mt-4 h-px w-10 bg-gold/40 transition-all duration-500 group-hover:w-16" />
                    </div>

                    {/* Items */}
                    <ul className="mt-6 space-y-2.5">
                      {section.items.map((item) => {
                        const isSig = section.signature === item;
                        return (
                          <li key={item} className={`flex items-center gap-3 text-sm ${isSig ? "font-medium text-white" : "font-light text-white/55"}`}>
                            {isSig ? (
                              <svg className="h-3.5 w-3.5 shrink-0 text-gold" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ) : (
                              <span className="h-px w-3 shrink-0 bg-gold/30" />
                            )}
                            <span>{item}</span>
                            {isSig && (
                              <span className="ml-auto shrink-0 px-2 py-0.5 text-[9px] font-semibold tracking-wider text-gold uppercase" style={{ backgroundColor: "rgba(201,169,110,0.12)" }}>
                                Signature
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>

                    {/* Note */}
                    {section.note && (
                      <div className="mt-6 flex items-start gap-2">
                        <div className="mt-0.5 h-3 w-px shrink-0 bg-gold/50" />
                        <p className="text-xs font-medium tracking-wider text-gold/60 italic">{section.note}</p>
                      </div>
                    )}

                    {/* Card number watermark */}
                    <div className="absolute right-4 bottom-4 font-serif text-6xl font-bold leading-none text-white/[0.03] transition-colors duration-300 group-hover:text-gold/[0.06]">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Phone CTA after menu */}
          <RevealOnScroll variant="fade-up" delay={600}>
            <div className="mt-20 text-center">
              <div className="mx-auto mb-6 flex max-w-xs items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-[10px] font-semibold tracking-[0.3em] text-white/20 uppercase">R&eacute;servation</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <p className="mb-6 text-sm text-white/40">Pour r&eacute;server ou commander</p>
              <a
                href="tel:0559439472"
                className="inline-flex items-center gap-3 bg-gold px-12 py-5 text-base font-semibold tracking-widest text-white uppercase transition-all hover:bg-gold-dark"
              >
                <PhoneIcon className="h-5 w-5" />
                05 59 43 94 72
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── À EMPORTER & PIZZA 24/7 ─── */}
      <section id="emporter" className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-8">
          <RevealOnScroll variant="fade-up">
            <div className="mb-16 text-center">
              <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
                Vente &agrave; emporter
              </p>
              <h2 className="font-serif text-3xl font-semibold text-charcoal md:text-4xl lg:text-5xl">
                &Agrave; Emporter &amp; Livraison
              </h2>
              <div className="mx-auto mt-4 h-px w-16 bg-gold" />
            </div>
          </RevealOnScroll>

          {/* À Emporter — horizontal hero card */}
          <RevealOnScroll variant="fade-scale" delay={100}>
            <div className="group relative mb-6 grid overflow-hidden md:grid-cols-5">
              {/* Photo side */}
              <div className="relative h-64 md:col-span-2 md:h-auto">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: "url(/terrasse-riviere.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 50%, rgba(26,26,26,1) 100%)" }} />
                <div className="absolute inset-0 md:hidden" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(26,26,26,1) 100%)" }} />
              </div>
              {/* Content side */}
              <div className="relative md:col-span-3" style={{ backgroundColor: "#1a1a1a" }}>
                <div className="relative z-10 p-8 md:p-10 lg:p-12">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center bg-gold">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-white">&Agrave; Emporter</h3>
                  </div>
                  <p className="max-w-md text-sm leading-relaxed text-white/55">
                    Retrouvez toute notre carte en vente &agrave; emporter. Commandez par t&eacute;l&eacute;phone
                    et r&eacute;cup&eacute;rez directement au restaurant. Pizzas, grillades, tapas &mdash; tout le go&ucirc;t du Zuzulua chez vous.
                  </p>
                  <div className="mt-6 h-px w-full bg-white/10" />
                  <div className="mt-6 flex flex-wrap items-center gap-5">
                    <a href="tel:0559439472" className="inline-flex items-center gap-3 bg-gold px-8 py-3.5 text-sm font-semibold tracking-widest text-white uppercase transition-all hover:bg-gold-dark">
                      <PhoneIcon className="h-4 w-4" />
                      Commander
                    </a>
                    <a href="/emporter" className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-dark">
                      Voir la carte
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Pizza 24/7 — bold banner card */}
          <RevealOnScroll variant="fade-scale" delay={250}>
            <div className="group relative overflow-hidden" style={{ backgroundColor: "#1a1a1a" }}>
              {/* Subtle embers bg */}
              <div
                className="absolute inset-0 opacity-[0.12] transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url(/braises.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(201,169,110,0.08) 0%, transparent 60%)" }} />

              <div className="relative z-10 flex flex-col items-center gap-8 p-8 md:flex-row md:p-10 lg:p-12">
                {/* Left: big "24/7" typographic element */}
                <div className="flex shrink-0 items-center gap-5">
                  <div className="relative">
                    <span className="font-serif text-6xl font-bold text-gold md:text-7xl">24</span>
                    <span className="absolute -right-3 -top-1 font-serif text-2xl font-bold text-gold/50">/7</span>
                  </div>
                  <div className="hidden h-16 w-px bg-white/10 md:block" />
                </div>

                {/* Center: content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                    </span>
                    <span className="text-[10px] font-semibold tracking-[0.3em] text-gold uppercase">Ouvert en permanence</span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-white">Pizza 24/7</h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/50">
                    Envie d&apos;une pizza &agrave; toute heure ? Notre distributeur automatique de pizzas fra&icirc;ches
                    est disponible 24h/24, directement sur le parking du restaurant.
                  </p>
                </div>

                {/* Right: CTAs */}
                <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
                  <a
                    href="https://www.google.com/maps/dir//Zuzulua+Saint-P%C3%A9e-sur-Nivelle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-3 text-sm font-semibold tracking-widest text-white uppercase transition-all hover:bg-gold-dark"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                    </svg>
                    Itin&eacute;raire
                  </a>
                  <a href="/pizza-24" className="inline-flex items-center justify-center gap-2 border border-white/15 px-6 py-3 text-sm font-semibold tracking-widest text-white/70 uppercase transition-all hover:border-white/30 hover:text-white">
                    D&eacute;couvrir
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── AVIS GOOGLE ─── */}
      <section id="avis" className="bg-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">Avis clients</p>
            <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
              Ce qu&apos;ils en disent
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" />
            <div className="mt-6 flex items-center justify-center gap-3">
              <Stars />
              <span className="text-sm font-light text-white/50">4.7/5 sur Google &mdash; 2 000+ avis</span>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REVIEWS.map((review) => (
              <div key={review.name} className="flex flex-col border border-white/10 p-6 transition-all hover:border-gold/20">
                <div className="mb-4"><Stars /></div>
                <p className="flex-1 text-sm leading-relaxed text-white/60 italic">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center bg-gold font-serif text-sm font-semibold text-white">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{review.name}</p>
                    <p className="text-xs text-white/30">Google</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOS PARTENAIRES ─── */}
      <section id="partenaires" className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
              Nos partenaires
            </p>
            <h2 className="font-serif text-3xl font-semibold text-charcoal md:text-4xl lg:text-5xl">
              Ils font vivre le Pays Basque
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" />
            <p className="mx-auto mt-6 max-w-xl text-base font-light text-charcoal/50">
              D&eacute;couvrez nos partenaires locaux pour compl&eacute;ter votre exp&eacute;rience basque
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {/* BASKpêche */}
            <a
              href="https://www.guide-bask-peche.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center border border-warm-200 bg-white p-10 text-center transition-all hover:border-gold/40 hover:shadow-lg"
            >
              <div className="mb-6 flex h-20 w-40 items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/partner-baskpeche.png"
                  alt="BASKpêche"
                  className="h-full w-full object-contain transition-all group-hover:scale-105"
                />
              </div>
              <div className="my-4 h-px w-16 bg-gold/30" />
              <h3 className="font-serif text-xl font-semibold text-charcoal">BASK p&ecirc;che</h3>
              <p className="mt-1 text-xs font-semibold tracking-wider text-gold uppercase">Sare, Pyr&eacute;n&eacute;es-Atlantiques</p>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
                Moniteur guide de p&ecirc;che au Pays Basque. D&eacute;couvrez les rivi&egrave;res et lacs de la r&eacute;gion
                avec un professionnel passionn&eacute;, pour une exp&eacute;rience nature inoubliable.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-charcoal transition-colors group-hover:text-gold">
                Visiter le site
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
            {/* Rando Quad Pays Basque */}
            <a
              href="https://www.quad-paysbasque.com/fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center border border-warm-200 bg-white p-10 text-center transition-all hover:border-gold/40 hover:shadow-lg"
            >
              <div className="mb-6 flex h-20 w-40 items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/partner-randoquad.png"
                  alt="Rando Quad Pays Basque"
                  className="h-full w-full object-contain transition-all group-hover:scale-105"
                />
              </div>
              <div className="my-4 h-px w-16 bg-gold/30" />
              <h3 className="font-serif text-xl font-semibold text-charcoal">Rando Quad Pays Basque</h3>
              <p className="mt-1 text-xs font-semibold tracking-wider text-gold uppercase">Aventure &amp; D&eacute;couverte</p>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
                Sp&eacute;cialiste des randonn&eacute;es en quad au Pays Basque. S&eacute;minaires, groupes ou individuels &mdash;
                explorez les paysages basques de mani&egrave;re unique et sportive.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-charcoal transition-colors group-hover:text-gold">
                Visiter le site
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── NOUS TROUVER — MAP ─── */}
      <section id="trouver" className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">O&ugrave; nous trouver</p>
            <h2 className="font-serif text-3xl font-semibold text-charcoal md:text-4xl lg:text-5xl">Au bord de la Nivelle</h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" />
            <p className="mx-auto mt-6 max-w-xl text-base font-light text-charcoal/50">
              Sur la route de Sare, pr&egrave;s de Saint-P&eacute;e-sur-Nivelle
            </p>
          </div>
          <div className="grid gap-0 overflow-hidden border border-warm-200 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <iframe
                src="https://maps.google.com/maps?q=Zuzulua+Restaurant+Saint-P%C3%A9e-sur-Nivelle&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="480"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zuzulua Restaurant"
              />
            </div>
            <div className="flex flex-col justify-between bg-charcoal p-8 lg:p-10">
              <div>
                <p className="font-serif text-xl font-semibold text-white">Zuzulua</p>
                <p className="mt-1 text-xs tracking-wider text-gold uppercase">Restaurant &middot; Bar &middot; Tapas &middot; Pizzas</p>
                <div className="mt-6 h-px w-full bg-white/10" />
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 text-white">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                    </svg>
                    <div className="text-sm leading-relaxed text-white/90">
                      <p>Lieu-dit Cherchebruit</p>
                      <p>Route de Dancharia</p>
                      <p>64310 Saint-P&eacute;e-sur-Nivelle</p>
                    </div>
                  </div>
                  <a href="tel:0559439472" className="flex items-center gap-3 text-white transition-colors hover:text-gold">
                    <PhoneIcon className="h-5 w-5 shrink-0 text-gold" />
                    <span className="text-base font-semibold">05 59 43 94 72</span>
                  </a>
                  <a href="mailto:restaurantzuzulua@gmail.com" className="flex items-center gap-3 text-white/90 transition-colors hover:text-gold">
                    <svg className="h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span className="text-sm font-medium">restaurantzuzulua@gmail.com</span>
                  </a>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir//Zuzulua+Saint-P%C3%A9e-sur-Nivelle"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-gold px-6 py-4 text-sm font-semibold tracking-widest text-white uppercase transition-all hover:bg-gold-dark"
              >
                Itin&eacute;raire
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HORAIRES ─── */}
      <section className="bg-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-8">
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">Horaires d&apos;ouverture</p>
            <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">Horaires d&apos;hiver</h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" />
            <p className="mt-4 text-xs font-light text-white/40 uppercase tracking-wider">
              Susceptibles d&apos;&eacute;voluer en saison
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-lg">
            {HOURS.map((h) => (
              <div
                key={h.day}
                className={`flex items-center justify-between border-b border-white/5 py-4 ${
                  h.hours === "Fermé" ? "opacity-40" : ""
                }`}
              >
                <span className="text-sm font-light text-white/70">{h.day}</span>
                <span className={`text-sm ${h.hours === "Fermé" ? "font-light text-white/40 italic" : "font-medium text-white"}`}>
                  {h.hours}
                </span>
              </div>
            ))}
          </div>
          {/* Phone CTA */}
          <div className="mt-12 text-center">
            <a
              href="tel:0559439472"
              className="inline-flex items-center gap-3 bg-gold px-10 py-4 text-sm font-semibold tracking-widest text-white uppercase transition-all hover:bg-gold-dark"
            >
              <PhoneIcon className="h-4 w-4" />
              R&eacute;server par t&eacute;l&eacute;phone
            </a>
          </div>
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
            {/* Phone — prominent in footer too */}
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
