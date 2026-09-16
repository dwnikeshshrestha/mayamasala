import Reveal from './Reveal'
import { Container } from './Primitives'
import { categories } from '../content/site'

export default function Categories() {
  return (
    <section className="border-t border-line bg-paper py-20 sm:py-24" aria-label="Shop by category">
      <Container>
        <ul className="grid gap-8 sm:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal as="li" key={c.heading} delay={i * 90}>
              <a href={c.href} className="group block">
                <div className="aspect-[4/5] overflow-hidden rounded-[2px] border border-line">
                  <img
                    src={c.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <p className="eyebrow mt-5">{c.eyebrow}</p>
                <h3 className="mt-2 text-[1.5rem] leading-tight">{c.heading}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-70 text-pretty">
                  {c.body}
                </p>
                <span className="mt-4 inline-flex items-center border-b border-ink/30 pb-0.5 text-[0.8125rem] tracking-[0.04em] text-ink transition-colors group-hover:border-saffron group-hover:text-saffron">
                  Shop now
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
