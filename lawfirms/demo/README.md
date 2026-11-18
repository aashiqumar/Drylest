# Law Firm Template — "The Case File"

No third-party template *code* — fully custom HTML/CSS/JS. Two stock
photos (`images/`) under the free Unsplash License (no attribution
required, free for commercial use) — see "Image credits" below.
Built to be re-skinned for a new client in minutes.

## To launch a new client's site

1. Copy this whole `template/` folder to a new folder for that client.
2. Open `js/content.js` and edit it top to bottom — firm name, tagline,
   phone/WhatsApp/email/address, hero copy, practice areas, about text,
   attorneys, testimonials, footer. **This one file is the whole content
   of the site.** Nothing else needs touching for a standard launch.
3. Swap the two photos in `images/` for the client's own if they have
   usable ones. Keep the filenames and nothing else needs changing.
4. Update `robots.txt` and `sitemap.xml` with the real domain.
5. Deploy the folder as-is to Netlify/Vercel/any static host.

## Structure

- `index.html` — the page shell: semantic markup, empty containers
  (`#practice-list`, `#counsel-list`, etc.) that `render.js` fills in.
- `js/content.js` — **edit this per client.** The single content object.
- `js/render.js` — reads `content.js` and builds the page. Only touch
  this if you're changing the site's *structure*, not its content.
- `js/animations.js` — GSAP/ScrollTrigger: the hero load sequence, a
  scroll parallax on the hero photo, scroll reveals, and the register
  counters. Respects `prefers-reduced-motion`; the counters also run
  without GSAP so the numbers never sit at zero.
- `css/styles.css` — design tokens at the top (`:root`), then layout and
  components. Change the palette for a client by editing `:root` once.

## The design

Studied against how world-class firms actually present themselves
(Cravath, Wachtell, Paul Weiss, Kirkland & Ellis). What they share:
serif display type, severe restraint, architectural photography, hairline
rules, and leading with proof rather than adjectives. What they skip —
and a small firm can't — is conversion, so this template adds a
persistent tap-to-call, a free-consultation CTA repeated three times, and
trust figures above the fold.

**Concept: a bound legal brief.** Black covers (ink bands) alternate with
paper leaves (parchment bands), bound by hairline rules, indexed with
typed reference labels, and marked with the oxblood of the red tape that
ties a brief shut. The palette is drawn from the artefacts of the
practice — robe black, deed parchment, red tape — rather than the
navy-and-gold every other law firm template reaches for.

**Signature element:** the parchment "brief panel" laid across the bottom
edge of the hero photograph, like a brief set down on a desk.

**Type:** Libre Caslon Display + Text (Caslon is the historic face of
English law printing, which is the tradition Sri Lankan practice
inherits), Archivo for UI and body, and Courier Prime for the reference
labels — the typewriter face of legal documents.

**Practice areas are a docket, not a card grid.** A firm's practice is a
record of what it is instructed on, so it's set as a numbered record with
the courts listed under each entry.

Attorney cards use initials, not headshots — and deliberately no
AI-generated faces, which would present invented people as real staff.
Swap in real client photos when they have them.

## Image credits

Both photos are from Unsplash, used under the Unsplash License (free for
commercial use, no attribution legally required — credited here anyway):

- `images/hero-colonnade.jpg` — Adrien Delforge, "Stone columns in
  Brussels Palace of Justice."
- `images/about-lawbooks.jpg` — Abhishek Tiwari, "A row of very old,
  worn-out books on a shelf" (antique Chancery Division law reports).

Generic/stock, not a specific client's real chambers — swap for a real
client's own photos before launch where possible.

## SEO scaffolding already in place

- `<title>` and meta description driven by `content.js`, per client.
- `Attorney`/`LocalBusiness`-style JSON-LD schema, auto-generated from
  `content.js` (`renderMeta()` in `render.js`).
- Semantic heading structure (one `<h1>`, `<h2>` per section).
- `robots.txt` + `sitemap.xml` stubs — fill in the real domain.

What this template does NOT do (no template can): rank a site on its own.
Actual ranking depends on the domain's age/authority, real content volume,
Google Business Profile setup, backlinks, and page speed in production.
Treat the above as the technical foundation, not a ranking guarantee.
