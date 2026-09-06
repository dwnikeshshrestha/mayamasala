# Mayara Masala — Landing Page

Minimalist, editorial one-page site for the Mayara Masala spice brand.
Vite + React 19 + Tailwind CSS v4. No UI library, no icon package — the
whole thing is ~68 kB gzipped.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve the production build locally
```

## Editing the site

**All copy, products and contact details live in one file:**
`src/content/site.js`

Nothing is hard-coded in the components — change a value there and it
updates everywhere it appears. Every placeholder is marked `TODO`.

### The three things you must replace before going live

1. **`contact.whatsapp`** — your number in digits only, with country
   code, no `+` or spaces (e.g. `919876543210`). This drives every
   "Order" button on the page, including the per-product ones.
2. **`contact.phone` / `contact.email` / `contact.address`** — the real
   details from the Facebook page.
3. **The testimonials** — swap in real reviews and real names.

## Adding your logo

Save your logo as **`public/logo.svg`** (transparent background).

That is the only step. If the file is missing the site falls back to a
typographic wordmark, so nothing ever renders broken. To use a PNG
instead, change `LOGO_SRC` at the top of `src/components/Logo.jsx`.

You may also want to replace `public/favicon.svg` with your own mark.

## Adding photography

The site ships with generated "spice swatch" tiles instead of stock
photos — layered gradients tinted with each spice's own colour. They are
deliberate, not placeholders, and the site looks finished without a
single photo. When you have real product shots:

- **Products** — drop square images in `public/products/` and set
  `image: '/products/garam-masala.jpg'` on that product in `site.js`.
- **Story section** — set `story.image` to e.g. `'/story.jpg'` (a 4:5
  portrait crop works best).
- **Social preview** — add `public/og.jpg` (1200×630) for the link
  preview when the page is shared.

## Design notes

- **Tokens** — the entire palette and type scale is defined in the
  `@theme` block at the top of `src/index.css`. Change a hex there and it
  propagates through every component.
- **Palette** — warm paper (`#FBF9F5`) and near-black warm ink, with a
  saffron accent and a clove-brown section. The colours are drawn from
  the spices themselves; the footer rule is literally the six product
  tones side by side.
- **Type** — Fraunces (display serif, optically sized) + Inter (body).
- **Motion** — one scroll-reveal primitive (`Reveal.jsx`) using
  IntersectionObserver, plus hover transitions. Everything is disabled
  under `prefers-reduced-motion`.
- **Accessibility** — semantic landmarks, a skip link, visible focus
  rings, `aria-label`s on icon-only controls, keyboard-dismissable
  mobile menu, and decorative elements hidden from assistive tech.

## Deploying

The build output is a static `dist/` folder — it will drop onto Netlify,
Vercel, Cloudflare Pages or GitHub Pages with no configuration.
