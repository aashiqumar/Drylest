# Law Firm Template — ours, built from scratch

No third-party template *code* — fully custom HTML/CSS/JS. Two stock
photos (`images/`) now live here under the free Unsplash License (no
attribution required, free for commercial use) — see "Image credits"
below. Built to be re-skinned for a new client in minutes.

## To launch a new client's site

1. Copy this whole `template/` folder to a new folder for that client.
2. Open `js/content.js` and edit it top to bottom — firm name, tagline,
   phone/WhatsApp/email/address, hero copy, practice areas, about text,
   attorneys, testimonials, footer. **This one file is the whole content
   of the site.** Nothing else needs touching for a standard launch.
3. Update `<title>`/description defaults if needed — they're also driven
   by `content.js` (`SITE.meta`), so step 2 usually covers this too.
4. Update `robots.txt` and `sitemap.xml` with the real domain once one
   exists.
5. Deploy the folder as-is to Netlify/Vercel/any static host, or point the
   client's domain at it.

## Structure

- `index.html` — the page shell: semantic markup, empty containers
  (`#services-grid`, `#attorneys-grid`, etc.) that `render.js` fills in.
- `js/content.js` — **edit this per client.** The single content object.
- `js/render.js` — reads `content.js` and builds the page. Only touch this
  if you're changing the site's *structure* (e.g. adding a new section
  type), not its content.
- `js/animations.js` — GSAP/ScrollTrigger: hero entrance, scroll reveals,
  animated counters, the 3D hero scale, card tilt. Respects
  `prefers-reduced-motion` and disables mouse-tilt on touch devices.
- `css/styles.css` — design tokens at the top (`:root`), then layout and
  components. Colors, fonts and spacing are all tokens — change the
  palette for a client by editing the `:root` block once.

## Design notes

- Fonts: Fraunces (display, serif) + Inter (body, sans) — loaded from
  Google Fonts with `display=swap` so text never blocks render. Good
  typography and fast load both help search ranking; neither replaces
  actual SEO work (see below).
- Hero is a full-bleed photographic backdrop (`images/hero-chambers.jpg`)
  under a navy scrim, with a subtle cursor-parallax drift on desktop
  (disabled on touch / `prefers-reduced-motion`). The about section pairs
  a photo (`images/about-lawbooks.jpg`) with a floating brass-trimmed
  stat card — swap either image per client for a more premium, editorial
  feel than the previous CSS-only hero.
- Attorney cards still use initials instead of headshots (no AI-generated
  "fake person" photos — avoids any deceptive-imagery question). Swap in
  real client photos if they have them (add an `<img>` in `render.js`'s
  `renderAttorneys()`, keyed off a `photo` field you add to `content.js`).

## Image credits

Both photos are from Unsplash, used under the Unsplash License (free for
commercial use, no attribution legally required — credited here anyway):

- `images/hero-chambers.jpg` — Mathew Schwartz, "Brown building with
  lighted chandeliers" (University of Michigan Law Library reading room).
- `images/about-lawbooks.jpg` — Abhishek Tiwari, "A row of very old,
  worn-out books on a shelf" (antique Chancery Division law reports).

Generic/stock, not a specific client's real chambers — swap for a real
client's own photos before launch, same as any other placeholder here.

## SEO scaffolding already in place

- `<title>` and meta description driven by `content.js`, per client.
- `Attorney`/`LocalBusiness`-style JSON-LD schema, auto-generated from
  `content.js` (`renderMeta()` in `render.js`) — helps Google understand
  this is a real local law firm.
- Semantic heading structure (one `<h1>`, `<h2>` per section).
- `robots.txt` + `sitemap.xml` stubs — fill in the real domain before launch.

What this template does NOT do (no template can): rank a site on its own.
Actual ranking depends on the domain's age/authority, real content volume,
Google Business Profile setup, backlinks, and page speed in production.
Treat the above as the technical foundation, not a ranking guarantee.
