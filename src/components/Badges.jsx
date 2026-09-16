import Reveal from './Reveal'
import { Container } from './Primitives'
import { badges } from '../content/site'

const icons = [
  // Fresh
  <path key="a" d="M12 3v6M12 21v-6M5 8l3 2M19 8l-3 2M5 16l3-2M19 16l-3-2" />,
  // Small-batch
  <path key="b" d="M4 8h16M6 8l1.5 11a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1L18 8M9 8V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />,
  // Payment
  <path key="c" d="M3 8h18M3 8v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8M3 8V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2M7 15h4" />,
  // Support
  <path key="d" d="M12 3a7 7 0 0 0-7 7v3a3 3 0 0 0 3 3h1v-6H6v-0a6 6 0 0 1 12 0v0h-3v6h1a3 3 0 0 0 3-3v-3a7 7 0 0 0-7-7z" />,
]

export default function Badges() {
  return (
    <section className="border-t border-line py-14" aria-label="Why order from us">
      <Container>
        <ul className="grid gap-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {badges.map((b, i) => (
            <Reveal as="li" key={b.title} delay={i * 80} className="flex items-start gap-4 sm:flex-col sm:items-start sm:text-left">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 shrink-0 text-saffron" aria-hidden="true">
                {icons[i % icons.length]}
              </svg>
              <div>
                <h3 className="text-[0.9375rem] font-medium leading-snug text-ink">{b.title}</h3>
                <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink-45">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
