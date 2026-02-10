import NavBar from "../NavBar";

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

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

export default function Contact() {
  return (
    <>
      {/* ─── NAV ─── */}
      <NavBar />

      {/* ─── CONTACT & RESERVATION ─── */}
      <section className="bg-charcoal pt-40 pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-8">
          {/* Phone CTA — most prominent */}
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">Contact</p>
            <h1 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
              R&eacute;servez votre table
            </h1>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" />
            <p className="mx-auto mt-6 max-w-lg text-base font-light text-white/50">
              Le moyen le plus rapide de r&eacute;server : appelez-nous directement !
            </p>
            <a
              href="tel:0559439472"
              className="mt-8 inline-flex items-center gap-3 bg-gold px-14 py-5 text-lg font-semibold tracking-widest text-white uppercase transition-all hover:bg-gold-dark"
            >
              <PhoneIcon className="h-6 w-6" />
              05 59 43 94 72
            </a>
            <div className="mt-4 flex items-center justify-center gap-3">
              <Stars />
              <span className="text-sm font-light text-white/40">4.7/5 &mdash; 2 000+ avis Google</span>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-auto mb-16 flex max-w-md items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs font-semibold tracking-[0.3em] text-white/20 uppercase">ou</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Form */}
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-0 overflow-hidden lg:grid-cols-5">
              {/* Left — Atmosphere */}
              <div className="relative hidden overflow-hidden lg:col-span-2 lg:block">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url(/salle-interieure.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-charcoal/60" />
                <div className="relative flex h-full flex-col justify-between p-10">
                  <div>
                    <p className="font-serif text-2xl font-semibold leading-tight text-white">
                      &Eacute;crivez-nous
                    </p>
                    <div className="mt-4 h-px w-12 bg-gold" />
                    <p className="mt-6 text-sm leading-relaxed text-white/60">
                      Au bord de la Nivelle, sous les platanes ou dans notre salle chaleureuse &mdash;
                      une exp&eacute;rience basque authentique vous attend.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <a href="mailto:restaurantzuzulua@gmail.com" className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-gold">
                      <svg className="h-4 w-4 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      restaurantzuzulua@gmail.com
                    </a>
                    <p className="text-xs text-white/30">
                      Lieu-dit Cherchebruit, Route de Dancharia<br />
                      64310 Saint-P&eacute;e-sur-Nivelle
                    </p>
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              <div className="bg-white p-8 sm:p-10 lg:col-span-3 lg:p-12">
                <h2 className="font-serif text-2xl font-semibold text-charcoal lg:hidden">
                  &Eacute;crivez-nous
                </h2>
                <h2 className="hidden font-serif text-2xl font-semibold text-charcoal lg:block">
                  Formulaire de contact
                </h2>
                <p className="mt-2 text-sm text-charcoal/50">
                  Nous vous r&eacute;pondrons dans les plus brefs d&eacute;lais.
                </p>
                <form className="mt-8 space-y-5" action="#">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold tracking-wider text-charcoal/60 uppercase">
                      Nom
                    </label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full border border-warm-200 bg-cream px-4 py-3 text-sm text-charcoal transition-colors placeholder:text-charcoal/30 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold tracking-wider text-charcoal/60 uppercase">
                      T&eacute;l&eacute;phone
                    </label>
                    <input
                      type="tel"
                      placeholder="06 00 00 00 00"
                      className="w-full border border-warm-200 bg-cream px-4 py-3 text-sm text-charcoal transition-colors placeholder:text-charcoal/30 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold tracking-wider text-charcoal/60 uppercase">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Votre message..."
                      className="w-full resize-none border border-warm-200 bg-cream px-4 py-3 text-sm text-charcoal transition-colors placeholder:text-charcoal/30 focus:border-gold"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gold py-4 text-sm font-semibold tracking-widest text-white uppercase transition-all hover:bg-gold-dark"
                  >
                    Envoyer
                  </button>
                  <p className="text-center text-xs text-charcoal/30">
                    Pour une r&eacute;ponse imm&eacute;diate, appelez le{" "}
                    <a href="tel:0559439472" className="font-medium text-gold hover:underline">
                      05 59 43 94 72
                    </a>
                  </p>
                </form>
              </div>
            </div>
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
