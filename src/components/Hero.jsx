import Reveal from './Reveal'
import { Container, Button, SpiceSwatch, WhatsAppIcon, ArrowIcon, waHref } from './Primitives'
import { hero, brand, products } from '../content/site'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      {/* A very soft warm wash behind the headline, so the paper is not flat */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh]"
        style={{
          background:
            'radial-gradient(70% 60% at 18% 0%, rgba(200,120,28,.10), transparent 62%), radial-gradient(50% 50% at 92% 12%, rgba(155,44,30,.07), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
              Est. {brand.established} · {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 text-[clamp(2.75rem,7.5vw,5.5rem)] leading-[0.98] tracking-[-0.03em]">
              {hero.headline}
              <br />
              <em className="font-display italic text-saffron">
                {hero.headlineAccent}
              </em>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-lg text-[1.0625rem] leading-relaxed text-ink-70 text-pretty">
              {brand.promise}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href={waHref} target="_blank" rel="noopener noreferrer" variant="accent">
                <WhatsAppIcon />
                {hero.primaryCta}
              </Button>
              <Button href="#masalas" variant="ghost">
                {hero.secondaryCta}
                <ArrowIcon />
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Spice shelf — three tones stacked, labelled like a specimen card */}
        <Reveal delay={200} className="lg:col-span-5">
          <div className="relative">
            <div className="overflow-hidden rounded-[2px] border border-line">
              {products.slice(0, 3).map((p, i) => (
                <div
                  key={p.name}
                  className="group relative flex items-end overflow-hidden"
                  style={{ height: i === 0 ? 248 : 136 }}
                >
                  {p.image ? (
                    <img
                      src={p.image}
                      alt=""
                      className="absolute inset-0 h-full w-full scale-100 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                  ) : (
                    <SpiceSwatch
                      tone={p.tone}
                      className="absolute inset-0 scale-100 transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  )}
                  {/* Scrim so the label stays legible over a photo of any brightness */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,.55) 100%)',
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative flex w-full items-baseline justify-between px-6 py-5 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                    <span className="font-display text-xl text-white/95">{p.name}</span>
                    <span className="text-[0.6875rem] tracking-[0.14em] text-white/60">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[0.8125rem] leading-relaxed text-ink-45">
              Ground the week it ships — never blended from pre-ground stock.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
