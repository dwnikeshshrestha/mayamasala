import Logo from './Logo'
import { Container, socialLinks } from './Primitives'
import { brand, nav, products } from '../content/site'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-sand">
      {/* The palette bar — the six spice tones, used as a signature rule */}
      <div className="flex h-1.5 w-full" aria-hidden="true">
        {products.map((p) => (
          <span key={p.name} className="flex-1" style={{ backgroundColor: p.tone }} />
        ))}
      </div>

      <Container className="py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo height={30} />
            <p className="mt-4 max-w-xs text-[0.875rem] leading-relaxed text-ink-70">
              {brand.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.875rem] text-ink-70 transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ key, url, label, Icon }) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${brand.name} on ${label}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink-70 transition-colors hover:border-ink hover:text-ink"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-[0.75rem] text-ink-45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p>Est. {brand.established} · Made in small batches.</p>
        </div>
      </Container>
    </footer>
  )
}
