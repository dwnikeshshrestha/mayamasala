import Reveal from './Reveal'
import { Container, Button, ArrowIcon } from './Primitives'
import { promo, values } from '../content/site'

export default function Promo() {
  const track = [...values, ...values]

  return (
    <section className="relative overflow-hidden bg-clove text-paper" aria-label="How it is made">
      {/* Diagonal ribbon ticker */}
      <div
        className="absolute -left-1/4 top-6 w-[150%] -rotate-2 overflow-hidden border-y border-paper/15 bg-ink/40 py-2"
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
          {[...track, ...track].map((v, i) => (
            <span key={i} className="flex items-center gap-8 text-[0.75rem] tracking-[0.14em] text-paper/50 uppercase">
              {v}
              <span className="h-1 w-1 shrink-0 rounded-full bg-saffron" />
            </span>
          ))}
        </div>
      </div>

      <Container className="relative grid items-center gap-14 pb-20 pt-36 sm:pb-24 sm:pt-40 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-paper/55!">
              <span className="h-px w-6 bg-paper/25" aria-hidden="true" />
              {promo.eyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(2rem,4.6vw,3.25rem)] leading-[1.06] text-paper text-balance">
              {promo.heading}
            </h2>
            <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-paper/70 text-pretty">
              {promo.body}
            </p>
            <Button href="#process" variant="ghost" className="mt-9 border-paper/35! text-paper! hover:border-paper!">
              {promo.cta}
              <ArrowIcon />
            </Button>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-6">
          <div className="aspect-4/5 overflow-hidden rounded-[2px] border border-paper/15">
            <img src={promo.image} alt="" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
