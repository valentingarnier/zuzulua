# Zuzulua Restaurant — Website Redesign

## Project
Website redesign for **Zuzulua**, a restaurant in Saint-Pée-sur-Nivelle, Pays Basque.

## Tech Stack
- Next.js 16 (App Router, Server Components by default)
- Tailwind CSS v4 (colors defined in `@theme inline` in globals.css)
- TypeScript

## Key Info — Zuzulua
- **Type:** Restaurant · Bar · Tapas · Pizzas
- **Location:** Lieu-dit Cherchebruit, Route de Dancharia, 64310 Saint-Pée-sur-Nivelle
- **Phone:** 05 59 43 94 72 — **this is the primary CTA everywhere** (reservations are done by phone)
- **Email:** restaurantzuzulua@gmail.com
- **Instagram:** @restaurantzuzulua
- **Google Rating:** 4.7/5 — 2,000+ reviews
- **Specialties:** Grillades au feu de bois (côte de bœuf signature), pizzas artisanales, tapas, cuisine régionale basque
- **Award:** 1er prix au concours du meilleur Axoa de Veau 2018 et 2019
- **Features:** À emporter / livraison, Pizza 24/7 vending machine on parking
- **Partners:** BASKpêche (fishing), Rando Quad Pays Basque (quad adventures)
- **Hours (winter):** Closed Monday. Tue/Thu/Fri/Sat 12h–14h15 + 18h–21h15. Wed 12h–14h15. Sun 12h–14h30.
- **Name origin:** The "zuzulu" is a traditional Basque wooden bench (banc coffre) placed beside the fireplace in farmhouse dining rooms.

## Design System
- **Fonts:** Playfair Display (serif, headings) + Inter (body)
- **Colors:** Cream (#faf7f2) background, Charcoal (#1a1a1a) dark sections, Gold (#c9a96e) accents
- **Tone:** Warm, traditional Basque, convivial — elegant but not stuffy
- **Language:** French
- **Copy source:** All text content matches the original website at zuzulua.fr

## Images
- `public/logo-zuzulua-clean.png` — Clean PNG logo (dark text + gold lines, transparent bg). Use `style={{ filter: "invert(1)" }}` on dark backgrounds.
- `public/logo-zuzulua.svg` — Legacy SVG logo. Replaced by clean PNG.
- `public/logo-zuzulua.png` — Legacy PNG logo. Replaced by clean PNG.
- `public/zuzulua-meat.jpg` — Sliced grilled meat on cutting board.
- `public/terrasse-riviere.jpg` — Aerial view of terrace by the Nivelle river (carousel).
- `public/cote-de-boeuf.jpg` — Sliced côte de bœuf close-up (carousel).
- `public/salle-tonneau.jpg` — Interior with Ambar barrel (carousel).
- `public/salle-interieure.jpg` — Dining room with wine glasses (contact page form).
- `public/fruits-de-mer.jpg` — Seafood platter (carousel).
- `public/terrasse-guirlandes.jpg` — Terrace with string lights (hero background + carousel).
- `public/terrasse-transat.jpg` — Red deck chairs by the river (carousel).
- `public/tapas.jpg` — Croquettes and tapas (carousel).
- `public/ambiance-conviviale.jpg` — Diners enjoying atmosphere (carousel).
- `public/desserts.jpg` — Desserts with cream piping (carousel).
- `public/zuzulu-banc.jpg` — The zuzulu bench (Notre Histoire section).
- `public/braises.jpg` — Glowing embers (signature divider parallax bg).
- `public/facade.jpg` — Restaurant facade (carousel).
- `public/danse-basque.jpg` — Basque dancers event (carousel).
- `public/partner-baskpeche.png` — BASKpêche partner logo (dark text, transparent bg).
- `public/partner-randoquad.png` — Rando Quad partner logo (dark text, transparent bg).
- `public/partner-pizza24.jpeg` — Pizza 24/7 distributor logo.

## Tailwind v4 Notes
- Colors must be defined in `@theme inline {}` block in globals.css to support opacity modifiers (e.g. `bg-charcoal/95`)
- Do NOT use `bg-[var(--color-name)]/opacity` syntax — it doesn't work in v4
- Use theme color names directly: `bg-charcoal`, `text-gold`, `border-warm-200`
- The `* { margin: 0; padding: 0 }` reset conflicts with Tailwind preflight — don't use it

## Architecture
- `src/app/page.tsx` — Main landing page (Server Component, uses NavBar + ImageCarousel)
- `src/app/contact/page.tsx` — Contact page with form (Server Component, uses NavBar)
- `src/app/NavBar.tsx` — Shared fixed nav with scroll-spy (Client Component, uses `usePathname` + `IntersectionObserver`)
- `src/app/MobileNav.tsx` — Burger menu (Client Component, uses `createPortal` for overlay)
- `src/app/ImageCarousel.tsx` — Postcard-style auto-scrolling photo gallery (Client Component, marquee animation, pause on hover)
- `src/app/layout.tsx` — Root layout with fonts + metadata
- `src/app/globals.css` — Tailwind imports + theme colors + marquee animation

## Routes
- `/` — Main landing page (hero, histoire, carte, emporter, avis, map, horaires)
- `/contact` — Contact page (phone CTA prominent, simple form: nom, téléphone, message)

## Page Sections — `/` (in order)
1. NavBar (fixed, dark, blur backdrop, scroll-spy active highlighting) + MobileNav burger
2. Hero (charcoal bg with atmospheric photo at low opacity, logo, phone CTA, postcard carousel strip, partners bar)
3. Notre Histoire (brand story from zuzulua.fr + zuzulu bench photo + "ZUZULUA : le banc coffre" card)
4. Signature divider (parallax braises quote)
5. La Carte (4 menu category cards — Tapas, Viandes et Poissons, Plats Régionaux, Pizzas + phone CTA)
6. À Emporter / Livraison + Pizza 24/7 (two cards)
7. Avis Google (4 review cards on dark bg)
8. Où Nous Trouver (Google Maps embed + info card with phone prominent)
9. Horaires d'hiver (schedule table + phone CTA)
10. Footer (logo, phone number in gold, Instagram)

## NavBar — Scroll Spy
- `NavBar.tsx` is a shared Client Component used on both `/` and `/contact`
- Uses `IntersectionObserver` with `rootMargin: "-40% 0px -55% 0px"` to detect which section is in view
- On home page: anchor links (#carte, #emporter, etc.) highlight as you scroll
- On contact page: "Contact" link highlighted, anchor links resolve to `/#carte` etc.
- Logo links to `#` on home, `/` on other pages
- Uses `usePathname()` from `next/navigation`

## Phone-First Design
- This business operates by phone — the phone number is the most important element
- Every "Réserver" button is a `tel:0559439472` link (not a form)
- Phone number appears: hero CTA, nav button, after menu, after hours, footer, mobile overlay, À Emporter card, map info card
- The contact form (on `/contact`) is a secondary option — phone CTA is above it with an "ou" divider

## ImageCarousel — Postcard Style
- 11 slides with `caption` (serif title) and `sub` (gold uppercase subtitle)
- Tripled array (33 cards) → CSS `translateX(-33.333%)` for seamless loop on wide screens
- Each card has: gradient vignette overlay, gold corner accent borders (grow on hover), caption at bottom
- Animation: `marquee-cards 80s linear infinite` in globals.css
- Pauses on hover

## Important Gotchas
- No `onSubmit` handlers in Server Components — use `action="#"` for forms
- Mobile overlay MUST use `createPortal(…, document.body)` to escape the nav's `backdropFilter` stacking context.
- The overlay component needs `useEffect` + `mounted` state to avoid SSR hydration mismatch with `createPortal`.
- Lock body scroll when overlay is open: `document.body.style.overflow = "hidden"` (cleanup on unmount).
- Give the burger button `relative z-[10000]` so it stays clickable above the portal overlay (z-index 9999).
- For opaque overlays, always use inline `style={{ backgroundColor: "#1a1a1a" }}` — Tailwind theme colors may not apply in client components.
- Logo (`logo-zuzulua-clean.png`) is dark text on transparent bg. Use `style={{ filter: "invert(1)" }}` on dark backgrounds.
- Google Maps embed with pin: use `https://maps.google.com/maps?q=Zuzulua+Restaurant+Saint-P%C3%A9e-sur-Nivelle&t=&z=14&ie=UTF8&iwloc=&output=embed`
- Partner logos are dark on transparent — use `invert(1) grayscale(1)` filter + opacity with hover to restore.
