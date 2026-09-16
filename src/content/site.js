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
  tagline: 'Homemade. Nothing added.',
  // One line under the hero headline.
  promise:
    'Small-batch Nepali achar, pickles and roasted snacks — homemade with pure ingredients, no preservatives.',
  established: '2019', // TODO: real founding year
}

/* The slim strip above the header — one short line, no punctuation clutter. */
export const announcement = 'Homemade to order · Ships across Nepal in 48 hours'

/* Hero carousel — autoplays, three slides pairing a product shot with a
   short claim. Keep headline/accent short; they are set at display size. */
export const heroSlides = [
  {
    eyebrow: 'Homemade in small batches',
    headline: 'Real taste.',
    headlineAccent: 'Nothing added.',
    body: 'Pure ingredients, made the traditional way — no colour, no preservatives.',
    image: '/products/maya-achar.jpg',
  },
  {
    eyebrow: 'Traditional Nepali taste',
    headline: 'Spicy, tangy,',
    headlineAccent: 'irresistible.',
    body: 'Akhabare Aachar — whole akabare chillies, pickled the traditional way.',
    image: '/products/akhabare-achar.jpg',
  },
  {
    eyebrow: 'A Nepali favourite',
    headline: 'Sweet, sour,',
    headlineAccent: 'and spiced.',
    body: 'Lapsi Amilopiro Achar — hog plum pickle, made the way grandmothers make it.',
    image: '/products/lapsi-amilopiro-achar.jpg',
  },
]

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

/* Three tiles under the hero, each pointing at one shelf of the range. */
export const categories = [
  {
    eyebrow: 'Discover',
    heading: 'Achar & Pickles',
    body: 'Akhabare, lapsi and the original Maya Achar — pickled the traditional way.',
    image: '/products/akhabare-achar.jpg',
    href: '#masalas',
  },
  {
    eyebrow: 'Our Signature',
    heading: 'Dry Fruit Mix',
    body: 'Almonds, cashews and raisins, roasted and hand-mixed — no added sugar.',
    image: '/products/dry-fruit-mix.jpg',
    href: '#masalas',
  },
  {
    eyebrow: 'For Giving',
    heading: 'Gift & Bulk Orders',
    body: 'Festive boxes and bulk packs of any item, made to request.',
    image: '/products/chana-satu.jpg',
    href: '#order',
  },
]

/* The scrolling strip under the hero. Keep these short — 2–4 words. */
export const values = [
  'Homemade in small batches',
  'No artificial colour',
  'No preservatives',
  'Traditional recipes',
  'Hand-mixed, hand-packed',
  'Packed the week it ships',
]

export const story = {
  eyebrow: 'Our story',
  heading: 'An achar should taste like someone made it, not a factory.',
  // Each string is one paragraph.
  // TODO: this origin story is a placeholder — replace with your real one.
  body: [
    'Maya Masala began in a home kitchen, with a simple frustration — shop-bought achar tasted of vinegar and shortcuts, never of the fruit or chilli it was supposed to be made from.',
    'So we started making our own. Whole akabare chillies, ripe lapsi, roasted nuts and grain, mixed by hand with traditional spice the way it has always been done — in small batches, packed the same week it reaches you.',
    'That is the entire recipe. There is no second ingredient list.',
  ],
  // Small stat row beside the text.
  stats: [
    { value: '100%', label: 'Natural ingredients' },
    { value: '0', label: 'Preservatives' },
    { value: '48 hrs', label: 'Made to pack' },
  ],
  image: '/products/dry-fruit-mix.jpg',
}

/* ------------------------------------------------------------------
   PRODUCTS
   `tone` is a fallback swatch colour, used only if `image` is missing.
   `image` is a square photo in /public/products.
------------------------------------------------------------------ */
export const productTabs = [
  { key: 'all', label: 'All' },
  { key: 'achar', label: 'Achar & Pickles' },
  { key: 'more', label: 'Dry Fruit & Flour' },
]

export const products = [
  {
    name: 'Maya Achar',
    note: 'Roasted nuts, sesame and whole spices, hand-mixed the traditional way.',
    detail: 'Real taste, pure ingredients — the achar that started it all.',
    tone: '#7A3418',
    sizes: 'TODO — pack size',
    category: 'achar',
    image: '/products/maya-achar.jpg',
  },
  {
    name: 'Dry Fruit Mix',
    note: 'Almonds, cashews, raisins and roasted rice flakes.',
    detail: 'A crunchy, naturally sweet mix — no added sugar, no preservatives.',
    tone: '#C9A227',
    sizes: 'TODO — pack size',
    category: 'more',
    image: '/products/dry-fruit-mix.jpg',
  },
  {
    name: 'Akhabare Aachar',
    note: 'Whole akabare chillies, pickled in mustard oil and spice.',
    detail: "Spicy, tangy, irresistible — Nepal's favourite fiery pickle.",
    tone: '#B3241C',
    sizes: '1 kg',
    category: 'achar',
    image: '/products/akhabare-achar.jpg',
  },
  {
    name: 'Chana Satu',
    local: 'चना सातु',
    note: 'Roasted chana, stone-ground to a fine, nutty flour.',
    detail: 'Pure, nutritious, 100% natural — rich in protein.',
    tone: '#D8B978',
    sizes: '1 kg',
    category: 'more',
    image: '/products/chana-satu.jpg',
  },
  {
    name: 'Lapsi Amilopiro Achar',
    note: 'Nepali hog plum, pickled sweet, sour and spiced.',
    detail: 'Traditional Nepali taste — spicy, tangy, irresistible.',
    tone: '#6B3418',
    sizes: '1 kg',
    category: 'achar',
    image: '/products/lapsi-amilopiro-achar.jpg',
  },
]

/* Full-bleed banner between the product grid and the process section. */
export const promo = {
  eyebrow: 'No shortcuts',
  heading: 'Homemade. Small-batch. Nothing added.',
  body: 'The same care for every jar — real ingredients, traditional recipes, packed the week it ships.',
  cta: 'See how it is made',
  image: '/products/akhabare-achar.jpg',
}

export const process = {
  eyebrow: 'How it is made',
  heading: 'Four steps. No shortcuts between them.',
  image: '/products/lapsi-amilopiro-achar.jpg',
  // TODO: these steps are a placeholder for a typical achar/pickle process —
  // replace with the real steps once confirmed.
  steps: [
    {
      title: 'Sourced fresh',
      body: 'Chillies, lapsi and nuts picked for ripeness and quality, not the lowest price.',
    },
    {
      title: 'Washed & prepped by hand',
      body: 'Cleaned, sorted and cut by hand — nothing goes in bruised, stemmed poorly, or unwashed.',
    },
    {
      title: 'Spiced the traditional way',
      body: 'Mixed with whole spice and mustard oil in small batches, the way it has always been made at home.',
    },
    {
      title: 'Packed fresh, not stored',
      body: 'Jarred the same week it is made, so nothing sits on a shelf losing its bite before it reaches you.',
    },
  ],
}

/* TODO: replace with real customer reviews from the Facebook page.
   `product` names must match an entry in `products` above — it pairs the
   review with that item's photo and name, the way a shop review shows
   the product bought. */
export const testimonials = [
  {
    quote:
      "I opened the jar and it smelled exactly like my grandmother's achar. Nothing store-bought comes close.",
    name: 'TODO — customer name',
    meta: 'TODO — city',
    product: 'Lapsi Amilopiro Achar',
  },
  {
    quote:
      'The akhabare is properly spicy, not the mild version most shops sell. One jar lasts my family a week, not a month.',
    name: 'TODO — customer name',
    meta: 'TODO — city',
    product: 'Akhabare Aachar',
  },
  {
    quote:
      "Ordered the chana satu for my kids' tiffin. Simple, clean ingredients and it actually tastes roasted, not stale.",
    name: 'TODO — customer name',
    meta: 'TODO — city',
    product: 'Chana Satu',
  },
]

/* The four-icon reassurance row above the closing WhatsApp band. */
export const badges = [
  {
    title: 'Made Fresh Weekly',
    body: 'Packed within 48 hours of preparing',
  },
  {
    title: 'Small-Batch Guarantee',
    body: 'Handmade, never mass-produced',
  },
  {
    title: 'Pay on Delivery',
    body: 'Available across Nepal',
  },
  {
    title: 'Real Human Support',
    body: 'Message us on WhatsApp, any time',
  },
]

export const order = {
  eyebrow: 'Order',
  heading: 'Message us and we will pack it fresh.',
  body: 'Tell us what you need and the quantity. We confirm the price, pack your order, and ship within two days. Wholesale and gifting enquiries are welcome.',
}
