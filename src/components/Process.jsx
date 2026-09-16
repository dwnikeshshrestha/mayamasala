import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { Container, SectionHead } from './Primitives'
import { process } from '../content/site'

export default function Process() {
  const [active, setActive] = useState(0)
  const refs = useRef([])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = refs.current.indexOf(entry.target)
            if (i !== -1) setActive(i)
          }
        })
      },
      { rootMargin: '-42% 0px -42% 0px', threshold: 0 },
    )

    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="process" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHead eyebrow={process.eyebrow} heading={process.heading} />
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <ol className="lg:col-span-6">
            {process.steps.map((step, i) => (
              <li
                key={step.title}
                ref={(el) => (refs.current[i] = el)}
                className="border-t border-line py-10 first:border-t-0 lg:py-14"
              >
                <span
                  className={`font-display text-[0.875rem] tracking-[0.1em] transition-colors duration-300 ${
                    active === i ? 'text-saffron' : 'text-ink-45'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className={`mt-4 text-[clamp(1.5rem,3vw,2.25rem)] leading-tight transition-colors duration-300 ${
                    active === i ? 'text-ink' : 'text-ink-45'
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`mt-3 max-w-md text-[0.9375rem] leading-relaxed text-pretty transition-colors duration-300 ${
                    active === i ? 'text-ink-70' : 'text-ink-45'
                  }`}
                >
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="lg:col-span-6">
            <div className="sticky top-24">
              <div className="aspect-4/5 overflow-hidden rounded-[2px] border border-line">
                <img
                  src={process.image}
                  alt="Lapsi Amilopiro Achar, freshly mixed"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
