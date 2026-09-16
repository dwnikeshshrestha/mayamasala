import Reveal from './Reveal'
import { Container, Button, WhatsAppIcon, ArrowIcon, waHref } from './Primitives'
import { order, contact } from '../content/site'

export default function Order() {
  return (
    <section
      id="order"
      className="grain relative scroll-mt-20 overflow-hidden bg-saffron py-20 text-white sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 70% at 90% 0%, rgba(255,255,255,.14), transparent 60%), radial-gradient(50% 60% at 4% 100%, rgba(0,0,0,.16), transparent 60%)',
        }}
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <p className="eyebrow text-white/70!">{order.eyebrow}</p>
          <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4.6vw,3.25rem)] leading-[1.08] text-white text-balance">
            {order.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-white/85 text-pretty">
            {order.body}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink! text-white! hover:bg-clove!"
            >
              <WhatsAppIcon />
              Message on WhatsApp
            </Button>
            <Button
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              variant="ghost"
              className="border-white/40! text-white! hover:border-white!"
            >
              Call {contact.phone}
              <ArrowIcon />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
