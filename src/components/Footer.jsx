import Logo from './Logo'
import { Container, socialLinks } from './Primitives'
import { brand, nav, products, contact } from '../content/site'

function Column({ title, children }) {
  return (
    <div>
      <p className="text-[0.75rem] tracking-[0.16em] text-paper/45 uppercase">{title}</p>
      <div className="mt-5 space-y-3 text-[0.9375rem] leading-relaxed text-paper/75">{children}</div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      {/* The palette bar — the six spice tones, used as a signature rule */}
      <div className="flex h-1.5 w-full" aria-hidden="true">
        {products.map((p) => (
          <span key={p.name} className="flex-1" style={{ backgroundColor: p.tone }} />
        ))}
      </div>

      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo light height={30} />
          <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed text-paper/65">
            {brand.promise}
          </p>
          {socialLinks.length > 0 && (
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ key, url, label, Icon }) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${brand.name} on ${label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper/70 transition-colors hover:border-paper hover:text-paper"
                >
                  <Icon />
                </a>
              ))}
            </div>
          )}
        </div>

        <Column title="Explore">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="block transition-colors hover:text-paper">
              {item.label}
            </a>
          ))}
        </Column>

        <Column title="Get in touch">
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="block transition-colors hover:text-paper">
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="block transition-colors hover:text-paper">
            {contact.email}
          </a>
          <p>
            {contact.address.line1}
            <br />
            {contact.address.line2}
          </p>
          <p className="text-paper/45">{contact.hours}</p>
        </Column>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-paper/10 py-6 text-[0.75rem] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
        <p>Est. {brand.established} · Made in small batches.</p>
      </Container>
    </footer>
  )
}
