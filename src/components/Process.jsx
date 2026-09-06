import Reveal from './Reveal'
import { Container, SectionHead } from './Primitives'
import { process } from '../content/site'

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHead eyebrow={process.eyebrow} heading={process.heading} />
        </Reveal>

        <ol className="mt-16 grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90} className="bg-paper">
              <div className="flex h-full flex-col px-0 py-8 sm:px-7">
                <span className="font-display text-[0.875rem] tracking-[0.1em] text-saffron">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 text-[1.25rem] leading-snug">{step.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-70 text-pretty">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
