# Website Rebuild — Agent Template

> **Goal:** Given any existing website URL, an agent should be able to rebuild it from scratch with a modern stack. This file is both the template and the filled-in spec for the current project.

---

## 0. Agent Workflow

When starting a new website rebuild, follow these steps in order:

### Phase 1 — Discovery
1. **Crawl the source website** (URL provided in §1). Visit every page, note all routes, sections, and content.
2. **Extract business info** → fill in §2 (name, type, location, phone, email, socials, hours, specialties, awards, partners, unique selling points).
3. **Inventory all text content** — copy every heading, paragraph, CTA, label, review, and footer text verbatim. The rebuilt site must use the **exact same copy** as the original unless the client specifies changes.
4. **Inventory all images** — download or screenshot every image, logo, and icon. Describe each one and note where it's used. Fill in §5.
5. **Map the site structure** — list every page and every section within each page, in order. Fill in §6.
6. **Identify the primary CTA** — what action does the business want visitors to take? (phone call, booking form, order, etc.) Fill in §7.

### Phase 2 — Design System
7. **Extract or define the design system** — fonts, colors, spacing, tone. Match the original site's feel or improve it per client direction. Fill in §4.
8. **Note component patterns** — cards, carousels, navbars, footers, forms, maps, review sections, etc. Fill in §8.

### Phase 3 — Build
9. **Scaffold the project** using the tech stack in §3.
10. **Build page by page, section by section**, referencing §6 for structure and §5 for images.
11. **Wire up all CTAs** per §7 — every button/link for the primary action must work.
12. **Ensure mobile-first responsive design** — test all breakpoints.
13. **Document gotchas** as you go in §9 so future agents don't repeat mistakes.

### Phase 4 — QA
14. **Content parity check** — compare every section against the source site. All text, images, links, and contact info must match.
15. **Functional check** — all links work, forms submit (or use `action="#"` for static), maps load, phone links dial.
16. **Performance check** — images optimized, no layout shift, fast load.

---

## 1. Source Website

- **URL:** https://zuzulua.fr
- **Language:** French
- **Goal:** Full redesign with modern stack, same content and feel, improved UX/performance.

> *For a new project: replace the URL above and re-run Phase 1.*

---

## 2. Business Info

| Field | Value |
|---|---|
| **Name** | Zuzulua |
| **Type** | Restaurant · Bar · Tapas · Pizzas |
| **Location** | Lieu-dit Cherchebruit, Route de Dancharia, 64310 Saint-Pée-sur-Nivelle |
| **Phone** | 05 59 43 94 72 |
| **Email** | restaurantzuzulua@gmail.com |
| **Instagram** | @restaurantzuzulua |
| **Google Rating** | 4.7/5 — 2,000+ reviews |
| **Specialties** | Grillades au feu de bois (côte de bœuf signature), pizzas artisanales, tapas, cuisine régionale basque |
| **Awards** | 1er prix au concours du meilleur Axoa de Veau 2018 et 2019 |
| **Features** | À emporter / livraison, Pizza 24/7 vending machine on parking |
| **Partners** | BASKpêche (fishing), Rando Quad Pays Basque (quad adventures) |
| **Hours (winter)** | Closed Monday. Tue/Thu/Fri/Sat 12h–14h15 + 18h–21h15. Wed 12h–14h15. Sun 12h–14h30. |
| **Name origin** | The "zuzulu" is a traditional Basque wooden bench (banc coffre) placed beside the fireplace in farmhouse dining rooms. |

---

## 3. Tech Stack

- **Framework:** Next.js 16 (App Router, Server Components by default)
- **Styling:** Tailwind CSS v4 (colors defined in `@theme inline` in globals.css)
- **Language:** TypeScript

> *This stack is the default for all projects in this repo. Adjust only if the client requires something different.*

---

## 4. Design System

| Token | Value |
|---|---|
| **Heading font** | Playfair Display (serif) |
| **Body font** | Inter (sans-serif) |
| **Background** | Cream `#faf7f2` |
| **Dark sections** | Charcoal `#1a1a1a` |
| **Accent** | Gold `#c9a96e` |
| **Tone** | Warm, traditional Basque, convivial — elegant but not stuffy |

### Tailwind v4 Rules (apply to ALL projects)
- Colors **must** be defined in the `@theme inline {}` block in `globals.css` to support opacity modifiers (e.g. `bg-charcoal/95`).
- Do **NOT** use `bg-[var(--color-name)]/opacity` syntax — it doesn't work in v4.
- Use theme color names directly: `bg-charcoal`, `text-gold`, `border-warm-200`.
- The `* { margin: 0; padding: 0 }` reset conflicts with Tailwind preflight — never use it.

---

## 5. Image Inventory

List every image with: file path, description, and where it's used.

| File | Description | Used in |
|---|---|---|
| `public/logo-zuzulua-clean.png` | Clean PNG logo (dark text + gold lines, transparent bg) | NavBar, Hero, Footer. Use `filter: invert(1)` on dark bg. |
| `public/zuzulua-meat.jpg` | Sliced grilled meat on cutting board | — |
| `public/terrasse-riviere.jpg` | Aerial view of terrace by the Nivelle river | Carousel |
| `public/cote-de-boeuf.jpg` | Sliced côte de bœuf close-up | Carousel |
| `public/salle-tonneau.jpg` | Interior with Ambar barrel | Carousel |
| `public/salle-interieure.jpg` | Dining room with wine glasses | Contact page background |
| `public/fruits-de-mer.jpg` | Seafood platter | Carousel |
| `public/terrasse-guirlandes.jpg` | Terrace with string lights | Hero background + Carousel |
| `public/terrasse-transat.jpg` | Red deck chairs by the river | Carousel |
| `public/tapas.jpg` | Croquettes and tapas | Carousel |
| `public/ambiance-conviviale.jpg` | Diners enjoying atmosphere | Carousel |
| `public/desserts.jpg` | Desserts with cream piping | Carousel |
| `public/zuzulu-banc.jpg` | The zuzulu bench | Notre Histoire section |
| `public/braises.jpg` | Glowing embers | Signature divider parallax bg |
| `public/facade.jpg` | Restaurant facade | Carousel |
| `public/danse-basque.jpg` | Basque dancers event | Carousel |
| `public/partner-baskpeche.png` | BASKpêche partner logo (dark text, transparent bg) | Partners bar. Use `invert(1) grayscale(1)` + opacity hover. |
| `public/partner-randoquad.png` | Rando Quad partner logo (dark text, transparent bg) | Partners bar. Use `invert(1) grayscale(1)` + opacity hover. |
| `public/partner-pizza24.jpeg` | Pizza 24/7 distributor logo | Partners bar |

---

## 6. Site Map & Page Sections

### Routes
| Route | Purpose |
|---|---|
| `/` | Main landing page (hero, histoire, carte, emporter, avis, map, horaires) |
| `/contact` | Contact page (phone CTA prominent, simple form: nom, téléphone, message) |

### Home Page `/` — Sections (in order)
1. **NavBar** — Fixed, dark, blur backdrop, scroll-spy active highlighting + MobileNav burger
2. **Hero** — Charcoal bg with atmospheric photo at low opacity, logo, phone CTA, postcard carousel strip, partners bar
3. **Notre Histoire** — Brand story from source site + zuzulu bench photo + "ZUZULUA : le banc coffre" card
4. **Signature Divider** — Parallax braises quote
5. **La Carte** — 4 menu category cards (Tapas, Viandes et Poissons, Plats Régionaux, Pizzas) + phone CTA
6. **À Emporter / Livraison** — Two cards: takeaway + Pizza 24/7
7. **Avis Google** — 4 review cards on dark bg
8. **Où Nous Trouver** — Google Maps embed + info card with phone prominent
9. **Horaires d'hiver** — Schedule table + phone CTA
10. **Footer** — Logo, phone number in gold, Instagram

### Contact Page `/contact`
- NavBar (shared)
- Phone CTA (primary)
- "ou" divider
- Simple form: nom, téléphone, message
- Background image: `salle-interieure.jpg`

---

## 7. Primary CTA Strategy

> *Define what action the business wants visitors to take, and how it's surfaced.*

- **Primary CTA:** Phone call — `tel:0559439472`
- **Every "Réserver" button** is a `tel:` link (not a form).
- **Phone number appears in:** Hero CTA, NavBar button, after menu, after hours, Footer, mobile overlay, À Emporter card, map info card.
- **Secondary CTA:** Contact form on `/contact` — phone CTA is displayed above the form with an "ou" divider.

> *For a new project: identify the business's #1 desired action (call, book online, order, visit, etc.) and surface it everywhere.*

---

## 8. Component Architecture

### File Map
| File | Role | Type |
|---|---|---|
| `src/app/layout.tsx` | Root layout with fonts + metadata | Server Component |
| `src/app/globals.css` | Tailwind imports + theme colors + animations | CSS |
| `src/app/page.tsx` | Main landing page | Server Component |
| `src/app/contact/page.tsx` | Contact page with form | Server Component |
| `src/app/NavBar.tsx` | Shared fixed nav with scroll-spy | Client Component |
| `src/app/MobileNav.tsx` | Burger menu with portal overlay | Client Component |
| `src/app/ImageCarousel.tsx` | Postcard-style auto-scrolling photo gallery | Client Component |

### Reusable Patterns (apply to any project)

**NavBar with Scroll Spy:**
- Uses `IntersectionObserver` with `rootMargin: "-40% 0px -55% 0px"` to detect which section is in view.
- On home page: anchor links highlight as you scroll.
- On sub-pages: anchor links resolve to `/#section` and the current page link is highlighted.
- Uses `usePathname()` from `next/navigation`.

**Mobile Nav Overlay:**
- Uses `createPortal(…, document.body)` to escape parent stacking contexts.
- Needs `useEffect` + `mounted` state to avoid SSR hydration mismatch.
- Lock body scroll when open: `document.body.style.overflow = "hidden"`.
- Burger button: `relative z-[10000]` to stay above overlay (z-9999).
- Use inline `style={{ backgroundColor: "#1a1a1a" }}` for opaque overlays.

**Image Carousel (Marquee):**
- Array tripled (3x) → CSS `translateX(-33.333%)` for seamless loop.
- Each card: gradient vignette overlay, accent corner borders (grow on hover), caption at bottom.
- Animation: `marquee-cards 80s linear infinite` defined in globals.css.
- Pauses on hover.

**Google Maps Embed:**
- Use `https://maps.google.com/maps?q={BUSINESS_NAME_ENCODED}&t=&z=14&ie=UTF8&iwloc=&output=embed`

---

## 9. Technical Gotchas

> *Append to this list as you discover new issues. These save hours for future agents.*

### Next.js App Router
- No `onSubmit` handlers in Server Components — use `action="#"` for static forms or extract to a Client Component.
- `usePathname()`, `useState`, `useEffect` etc. require `"use client"` directive.

### Tailwind v4
- See §4 for color definition rules.
- Theme colors may not apply in dynamically rendered client components — use inline `style` for critical colors (overlays, backgrounds).

### Portals & Stacking
- `createPortal` is required when a child component needs to escape a parent's `backdrop-filter` or `overflow: hidden`.
- Always pair with `useEffect` + `mounted` guard for SSR safety.

### Images & Logos
- Logos with dark text on transparent bg: use `filter: invert(1)` on dark backgrounds.
- Partner/sponsor logos: use `invert(1) grayscale(1)` + reduced opacity, hover to restore.

### Google Maps
- Embed URL format: `https://maps.google.com/maps?q={ENCODED_QUERY}&t=&z=14&ie=UTF8&iwloc=&output=embed`

---

## 10. New Project Checklist

When starting a **new website rebuild**, copy this template and:

- [ ] Set the source URL in §1
- [ ] Crawl the site and fill in §2 (business info)
- [ ] Define or extract the design system in §4 (fonts, colors, tone)
- [ ] Download all images and fill in §5 (image inventory)
- [ ] Map every page and section in §6 (site map)
- [ ] Identify the primary CTA and where it appears in §7
- [ ] List all components in §8 (architecture)
- [ ] Run Phase 4 QA — content parity, functional, performance
- [ ] Document any new gotchas in §9

---

## 11. Quality Gates

Before marking the project complete, verify:

1. **Content parity** — Every piece of text from the source site exists in the rebuild (headings, body, CTAs, footer, legal).
2. **Image parity** — Every photo/logo from the source site is present and in the correct section.
3. **Link parity** — All external links (social, maps, phone, email) work and match the source.
4. **Responsive** — Looks correct on mobile (375px), tablet (768px), and desktop (1440px+).
5. **Performance** — Images are optimized (WebP/AVIF where possible), no layout shift, Lighthouse score > 90.
6. **SEO basics** — Title, meta description, Open Graph tags, structured data if applicable.
7. **Accessibility** — Alt text on images, semantic HTML, keyboard navigation, sufficient contrast.
