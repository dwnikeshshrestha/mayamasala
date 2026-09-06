/* ==================================================================
   MAYARA MASALA — SITE CONTENT
   ------------------------------------------------------------------
   This is the only file you need to edit to change copy, products,
   or contact details. Nothing here is hard-coded in the components.

   ⚠️  Every value marked `TODO` is a placeholder I wrote because the
   Facebook page could not be read automatically. Replace them with
   the real details before going live.
================================================================== */

export const brand = {
  name: 'Mayara Masala',
  // Shown in the nav beside the logo, and in the footer.
  tagline: 'Ground fresh. Nothing added.',
  // One line under the hero headline.
  promise:
    'Small-batch Nepali masalas, stone-ground from whole spices — no colour, no filler, no preservatives.',
  established: '2019', // TODO: real founding year
}

export const hero = {
  eyebrow: 'Small-batch Nepali spice',
  // Rendered as two lines — the second is set in italic serif.
  headline: 'Ground fresh.',
  headlineAccent: 'Nothing added.',
  primaryCta: 'Order on WhatsApp',
  secondaryCta: 'See the masalas',
}

export const contact = {
  phone: '+91 97091 04068',
  // Digits only, with country code, no + or spaces — used for the wa.me link.
  whatsapp: '919709104068',
  email: 'hello@mayaramasala.com', // TODO
  address: {
    line1: 'TODO — street address',
    line2: 'TODO — city, state, PIN',
  },
  hours: 'Mon – Sat · 9:00 am – 7:00 pm', // TODO
  mapsUrl: '', // TODO: paste a Google Maps share link to enable the "Directions" link
  facebook: 'https://www.facebook.com/mayara.masala',
  // Leave any of these empty to hide that icon from the footer.
  instagram: 'https://www.instagram.com/mayaramasala',
  tiktok: '', // TODO: paste your TikTok profile URL
  youtube: 'https://www.youtube.com/@MayaraMasala',
}

/* Pre-filled WhatsApp message for the primary CTA. */
export const whatsappMessage =
  'Hello Mayara Masala! I would like to place an order.'

export const nav = [
  { label: 'Story', href: '#story' },
  { label: 'Masalas', href: '#masalas' },
  { label: 'Process', href: '#process' },
  { label: 'Order', href: '#order' },
]

/* The scrolling strip under the hero. Keep these short — 2–4 words. */
export const values = [
  'Stone-ground in small batches',
  'No artificial colour',
  'No preservatives',
  'Sun-dried whole spices',
  'Sourced direct from farms',
  'Packed the week it ships',
]

export const story = {
  eyebrow: 'Our story',
  heading: 'A masala should taste like the spice it came from.',
  // Each string is one paragraph.
  body: [
    'Mayara Masala began in a home kitchen, with a stone grinder and a simple frustration — supermarket masala tasted of everything except spice. Colour to make it look fresh. Starch to make it go further. Nothing left of the field it grew in.',
    'So we started grinding our own. Whole spices, sun-dried, bought direct from the growers we know by name. Roasted in small batches, ground slow so the heat never carries the oils away, and packed the same week it reaches you.',
    'That is the entire recipe. There is no second ingredient list.',
  ],
  // Small stat row beside the text.
  stats: [
    { value: '100%', label: 'Whole-spice ground' },
    { value: '0', label: 'Additives or fillers' },
    { value: '48 hrs', label: 'Grind to pack' },
  ],
  // TODO: temporary stock photo (Wikimedia Commons) — replace with a real shot.
  image: '/story.jpg',
}

/* ------------------------------------------------------------------
   PRODUCTS
   `tone` is the colour of the spice itself — it paints the swatch tile.
   `image` is optional; drop a square photo in /public and reference it
   (e.g. '/products/garam-masala.jpg') to replace the swatch.
------------------------------------------------------------------ */
export const products = [
  {
    name: 'Garam Masala',
    local: 'गरम मसाला',
    note: 'Cassia, green cardamom, clove, black pepper, bay.',
    detail: 'Warm and aromatic. Finish curries with it off the heat.',
    tone: '#6B4423',
    sizes: '50 g · 100 g · 200 g',
    image: '/products/garam-masala.jpg', // TODO: temporary stock photo — replace with real product shot
  },
  {
    name: 'Turmeric',
    local: 'हल्दी',
    note: 'Hill-grown root, sun-dried whole before grinding.',
    detail: 'Deep gold, high curcumin, earthy rather than bitter.',
    tone: '#D99A0B',
    sizes: '100 g · 250 g · 500 g',
    image: '/products/turmeric.jpg', // TODO: temporary stock photo — replace with real product shot
  },
  {
    name: 'Red Chilli',
    local: 'लाल मिर्च',
    note: 'Dried whole, stems removed by hand.',
    detail: 'Colour without cruelty — bright red, gentle heat.',
    tone: '#A32218',
    sizes: '100 g · 250 g · 500 g',
    image: '/products/red-chilli.jpg', // TODO: temporary stock photo — replace with real product shot
  },
  {
    name: 'Coriander',
    local: 'धनिया',
    note: 'Whole seed, roasted light before grinding.',
    detail: 'Citrus and sweetness. The backbone of a masala base.',
    tone: '#8A8449',
    sizes: '100 g · 250 g · 500 g',
    image: '/products/coriander.jpg', // TODO: temporary stock photo — replace with real product shot
  },
  {
    name: 'Kitchen King',
    local: 'किचन किंग',
    note: 'Eighteen spices, balanced for everyday cooking.',
    detail: 'One spoon carries a whole gravy. Our most-ordered blend.',
    tone: '#B5651D',
    sizes: '50 g · 100 g · 200 g',
    image: '/products/kitchen-king.jpg', // TODO: temporary stock photo — replace with real product shot
  },
  {
    name: 'Pav Bhaji Masala',
    local: 'पाव भाजी मसाला',
    note: 'Amchur, fennel, black salt, dry mango.',
    detail: 'Tangy and full. Street-cart flavour, kitchen-grade spice.',
    tone: '#8E3B1F',
    sizes: '50 g · 100 g',
    image: '/products/pav-bhaji.jpg', // TODO: temporary stock photo — replace with real product shot
  },
]

export const process = {
  eyebrow: 'How it is made',
  heading: 'Four steps. No shortcuts between them.',
  steps: [
    {
      title: 'Sourced direct',
      body: 'Bought from growers we visit, not from a commodity floor. Whole spice only — never pre-ground.',
    },
    {
      title: 'Sun-dried & cleaned',
      body: 'Dried in open air, then hand-sorted. Stems, stones and split seed are picked out before roasting.',
    },
    {
      title: 'Roasted in small batches',
      body: 'Ten kilos at a time, on low flame, by someone watching the colour rather than a clock.',
    },
    {
      title: 'Stone-ground slow',
      body: 'Slow grinding keeps the temperature down, so the essential oils stay in the powder instead of the air.',
    },
  ],
}

/* TODO: replace with real customer reviews from the Facebook page. */
export const testimonials = [
  {
    quote:
      'I opened the packet and the whole kitchen smelled of it. I had forgotten masala was supposed to do that.',
    name: 'TODO — customer name',
    meta: 'TODO — city',
  },
  {
    quote:
      'The turmeric stains the spoon. That is how I knew it was real. Ordering for my mother now as well.',
    name: 'TODO — customer name',
    meta: 'TODO — city',
  },
  {
    quote:
      'I use half of what I used to use with the store brand, and the food tastes like my grandmother made it.',
    name: 'TODO — customer name',
    meta: 'TODO — city',
  },
]

export const order = {
  eyebrow: 'Order',
  heading: 'Message us and we will grind it fresh.',
  body: 'Tell us what you need and the quantity. We confirm the price, grind the batch, and ship within two days. Wholesale and gifting enquiries are welcome.',
}
