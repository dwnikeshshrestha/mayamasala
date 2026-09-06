import Reveal from './Reveal'
import {
  Container,
  SectionHead,
  Button,
  WhatsAppIcon,
  ArrowIcon,
  waHref,
} from './Primitives'
import { order, contact } from '../content/site'

function Detail({ label, children }) {
  return (
    <div className="border-t border-line py-5">
      <dt className="eyebrow">{label}</dt>
      <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink">{children}</dd>
    </div>
  )
}

export default function Order() {
  return (
    <section id="order" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionHead
              eyebrow={order.eyebrow}
              heading={order.heading}
              lead={order.body}
              max="max-w-xl"
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href={waHref} target="_blank" rel="noopener noreferrer" variant="accent">
                <WhatsAppIcon />
                Message on WhatsApp
              </Button>
              <Button href={`tel:${contact.phone.replace(/\s/g, '')}`} variant="ghost">
                Call {contact.phone}
                <ArrowIcon />
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="lg:col-span-5">
          <dl className="border-b border-line">
            <Detail label="Write to us">
              <a
                href={`mailto:${contact.email}`}
                className="underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-saffron"
              >
                {contact.email}
              </a>
            </Detail>

            <Detail label="Find us">
              {contact.address.line1}
              <br />
              {contact.address.line2}
              {contact.mapsUrl && (
                <>
                  <br />
                  <a
                    href={contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-[0.8125rem] text-saffron underline underline-offset-4"
                  >
                    Get directions
                  </a>
                </>
              )}
            </Detail>

            <Detail label="Open">{contact.hours}</Detail>
          </dl>
        </Reveal>
      </Container>
    </section>
  )
}
