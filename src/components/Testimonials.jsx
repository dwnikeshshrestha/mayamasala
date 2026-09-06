import Reveal from './Reveal'
import { Container } from './Primitives'
import { testimonials } from '../content/site'

export default function Testimonials() {
  return (
    <section
      className="grain relative overflow-hidden bg-clove py-24 text-paper sm:py-32"
      aria-label="What customers say"
    >
      <Container className="relative">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-paper/50!">
            <span className="h-px w-6 bg-paper/25" aria-hidden="true" />
            In their kitchens
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={i} delay={i * 100}>
              <figure className="flex h-full flex-col">
                <blockquote className="font-display text-[1.375rem] leading-[1.45] text-paper/95 text-pretty">
                  <span aria-hidden="true" className="text-saffron">
                    “
                  </span>
                  {t.quote}
                  <span aria-hidden="true" className="text-saffron">
                    ”
                  </span>
                </blockquote>
                <figcaption className="mt-6 border-t border-paper/15 pt-4 text-[0.8125rem] text-paper/55">
                  <span className="text-paper/80">{t.name}</span>
                  {t.meta && <span> · {t.meta}</span>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
