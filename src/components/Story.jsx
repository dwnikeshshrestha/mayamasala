import Reveal from './Reveal'
import { Container, SectionHead, SpiceSwatch } from './Primitives'
import { story, products } from '../content/site'

export default function Story() {
  return (
    <section id="story" className="scroll-mt-20 py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionHead eyebrow={story.eyebrow} heading={story.heading} max="max-w-xl" />
          </Reveal>

          <div className="mt-8 max-w-xl space-y-5">
            {story.body.map((para, i) => (
              <Reveal key={i} delay={60 * i}>
                <p className="text-[1.0625rem] leading-[1.75] text-ink-70 text-pretty">{para}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {story.stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block font-display text-[2rem] leading-none text-ink">
                      {s.value}
                    </span>
                    <span className="mt-2 block text-[0.8125rem] leading-snug text-ink-45">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-6">
          <figure className="relative">
            {story.image ? (
              <img
                src={story.image}
                alt="A bowl of homemade dry fruit mix"
                className="aspect-4/5 w-full rounded-[2px] border border-line object-cover"
                loading="lazy"
              />
            ) : (
              <div className="grid aspect-4/5 grid-cols-2 gap-px overflow-hidden rounded-[2px] border border-line bg-line">
                {products.slice(0, 4).map((p) => (
                  <div key={p.name} className="relative">
                    <SpiceSwatch tone={p.tone} className="absolute inset-0" />
                  </div>
                ))}
              </div>
            )}

            <figcaption className="mt-4 flex items-baseline gap-3 text-[0.8125rem] text-ink-45">
              <span className="h-px w-6 bg-line-strong" aria-hidden="true" />
              {story.image
                ? 'Roasted nuts and dried fruit, mixed by hand.'
                : 'A few of the recipes we make every week.'}
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  )
}
