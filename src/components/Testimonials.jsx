import { useRef } from 'react'
import Reveal from './Reveal'
import { Container, SpiceSwatch } from './Primitives'
import { testimonials, products } from '../content/site'

function ArrowButton({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous review' : 'Next review'}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-ink"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
        {direction === 'prev' ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
      </svg>
    </button>
  )
}

export default function Testimonials() {
  const trackRef = useRef(null)

  function scrollByCard(dir) {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const amount = card ? card.offsetWidth + 32 : 320
    el.scrollBy({ left: dir === 'prev' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className="border-t border-line bg-sand py-24 sm:py-32" aria-label="What customers say">
      <Container>
        <Reveal className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-6 bg-line-strong" aria-hidden="true" />
              Reviews
            </p>
            <h2 className="mt-5 text-[clamp(1.9rem,4.4vw,3.25rem)] leading-[1.08] text-balance">
              What our kitchens are saying
            </h2>
          </div>
          <div className="flex shrink-0 gap-3 self-start">
            <ArrowButton direction="prev" onClick={() => scrollByCard('prev')} />
            <ArrowButton direction="next" onClick={() => scrollByCard('next')} />
          </div>
        </Reveal>

        <div
          ref={trackRef}
          className="mt-14 flex snap-x snap-mandatory gap-8 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t, i) => {
            const product = products.find((p) => p.name === t.product)
            return (
              <Reveal
                as="figure"
                key={i}
                delay={i * 90}
                data-card
                className="flex w-[85%] shrink-0 snap-start flex-col rounded-[2px] border border-line-strong/50 bg-paper p-7 sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)]"
              >
                <blockquote className="text-[1.0625rem] leading-relaxed text-ink text-pretty">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-[0.8125rem] text-ink-45">
                  <span className="text-ink-70">{t.name}</span>
                  {t.meta && <span> · {t.meta}</span>}
                </figcaption>

                {product && (
                  <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full border border-line-strong/60">
                      {product.image ? (
                        <img src={product.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                      ) : (
                        <SpiceSwatch tone={product.tone} className="h-full w-full" />
                      )}
                    </div>
                    <div>
                      <p className="text-[0.875rem] leading-tight text-ink">{product.name}</p>
                      <p className="text-[0.75rem] leading-tight text-ink-45">{product.sizes.split(' · ')[0]}</p>
                    </div>
                  </div>
                )}
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
