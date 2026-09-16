import { useState } from 'react'
import Reveal from './Reveal'
import {
  Container,
  SectionHead,
  SpiceSwatch,
  Button,
  WhatsAppIcon,
  waHref,
} from './Primitives'
import { products, productTabs, contact } from '../content/site'

/** Deep-links WhatsApp with the product already named in the message. */
function productHref(name) {
  const text = `Hello Mayara Masala! I would like to order ${name}.`
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`
}

export default function Products() {
  const [tab, setTab] = useState('all')
  const shown = tab === 'all' ? products : products.filter((p) => p.category === tab)

  return (
    <section id="masalas" className="scroll-mt-20 border-t border-line bg-sand py-24 sm:py-32">
      <Container>
        <Reveal className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHead
            eyebrow="The range"
            heading="Five recipes. Each one made by hand."
            lead="No factory mix, no shortcuts. Every jar is prepared in its own small batch so nothing tastes like an afterthought."
          />

          <div className="flex shrink-0 gap-1 self-start rounded-full border border-line-strong/60 bg-paper p-1">
            {productTabs.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                aria-pressed={tab === t.key}
                className={`rounded-full px-4 py-2 text-[0.8125rem] tracking-[0.02em] transition-colors duration-200 ${
                  tab === t.key ? 'bg-ink text-paper' : 'text-ink-70 hover:text-ink'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal as="li" key={p.name} delay={(i % 3) * 90}>
              <article className="group">
                <a
                  href={productHref(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={`Order ${p.name} on WhatsApp`}
                >
                  <div className="relative overflow-hidden rounded-[2px] border border-line-strong/60">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    ) : (
                      <SpiceSwatch
                        tone={p.tone}
                        className="aspect-square w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    )}

                    <span className="absolute left-4 top-4 text-[0.6875rem] tracking-[0.16em] text-white/65">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Order affordance, revealed on hover / focus */}
                    <span className="pointer-events-none absolute inset-x-4 bottom-4 flex translate-y-2 items-center justify-center gap-2 rounded-full bg-paper/95 py-2.5 text-[0.8125rem] font-medium text-ink opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <WhatsAppIcon className="h-[15px] w-[15px]" />
                      Order this
                    </span>
                  </div>

                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="text-[1.375rem] leading-tight">{p.name}</h3>
                    <span className="shrink-0 font-display text-base text-ink-45">{p.local}</span>
                  </div>

                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-70 text-pretty">
                    {p.detail}
                  </p>
                  <p className="mt-3 text-[0.8125rem] leading-relaxed text-ink-45">{p.note}</p>

                  <p className="mt-4 border-t border-line-strong/50 pt-3 text-[0.75rem] tracking-[0.08em] text-ink-45">
                    {p.sizes}
                  </p>
                </a>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={100}>
          <div className="mt-16 flex flex-col items-start gap-4 border-t border-line-strong/50 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-[0.9375rem] leading-relaxed text-ink-70">
              Looking for something that is not listed, or a bulk order for an event? We make to
              request.
            </p>
            <Button href={waHref} target="_blank" rel="noopener noreferrer" variant="solid">
              <WhatsAppIcon />
              Ask us
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
