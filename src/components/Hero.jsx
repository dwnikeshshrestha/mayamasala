import { useEffect, useRef, useState } from 'react'
import { Container, Button, WhatsAppIcon, ArrowIcon, waHref } from './Primitives'
import { heroSlides, brand } from '../content/site'

const AUTOPLAY_MS = 5500

export default function Hero() {
  const [index, setIndex] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    timer.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(timer.current)
  }, [])

  function goTo(i) {
    window.clearInterval(timer.current)
    setIndex(i)
  }

  const slide = heroSlides[index]

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden"
      style={{
        background:
          'linear-gradient(115deg, #241811 0%, #3e2a20 34%, #6b4423 72%, #8a5a2e 100%)',
      }}
    >
      {/* A soft glow so the gradient does not sit flat */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(55% 55% at 88% 8%, rgba(200,120,28,.28), transparent 62%), radial-gradient(45% 45% at 8% 92%, rgba(0,0,0,.25), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:py-28">
        {/* Arch-framed product shot */}
        <div className="relative lg:col-span-5 lg:order-1">
          {/* Dot rail — slide indicators, GinTea-style vertical stack */}
          <div className="absolute -left-2 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-3 sm:flex lg:-left-8">
            {heroSlides.map((s, i) => (
              <button
                key={s.headline}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show slide ${i + 1}: ${s.headline}`}
                aria-current={i === index}
                className={`h-2 w-2 rounded-full border border-paper/70 transition-all duration-300 ${
                  i === index ? 'bg-paper' : 'bg-transparent hover:bg-paper/40'
                }`}
              />
            ))}
          </div>

          <div
            className="relative mx-auto aspect-[3/4] w-full max-w-[360px] overflow-hidden border border-paper/15 bg-clove/40"
            style={{ borderRadius: '220px 220px 4px 4px' }}
          >
            {heroSlides.map((s, i) => (
              <img
                key={s.image}
                src={s.image}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
                  i === index ? 'opacity-100' : 'opacity-0'
                }`}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,.4) 100%)' }}
              aria-hidden="true"
            />
          </div>

          {/* Mobile dots, centered under the image */}
          <div className="mt-5 flex justify-center gap-3 sm:hidden">
            {heroSlides.map((s, i) => (
              <button
                key={s.headline}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show slide ${i + 1}: ${s.headline}`}
                aria-current={i === index}
                className={`h-2 w-2 rounded-full border border-ink/50 transition-all duration-300 ${
                  i === index ? 'bg-ink' : 'bg-transparent'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 lg:order-2">
          <p className="eyebrow flex items-center gap-3 text-paper/60!">
            <span className="h-px w-8 bg-paper/30" aria-hidden="true" />
            Est. {brand.established} · {slide.eyebrow}
          </p>

          <h1 className="mt-7 min-h-[2.2em] text-[clamp(2.5rem,6.5vw,4.75rem)] leading-[0.98] tracking-[-0.03em] text-paper">
            {slide.headline}
            <br />
            <em className="font-display italic text-saffron">{slide.headlineAccent}</em>
          </h1>

          <p className="mt-8 max-w-lg text-[1.0625rem] leading-relaxed text-paper/75 text-pretty">
            {slide.body}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-paper! text-ink! hover:bg-white! hover:brightness-100!"
            >
              <WhatsAppIcon />
              Order on WhatsApp
            </Button>
            <Button href="#masalas" variant="ghost" className="border-paper/35! text-paper! hover:border-paper!">
              See the masalas
              <ArrowIcon />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
