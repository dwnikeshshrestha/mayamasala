import { useEffect, useState } from 'react'
import Logo from './Logo'
import { Container, Button, WhatsAppIcon, waHref } from './Primitives'
import { nav, brand } from '../content/site'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock the page behind the mobile sheet, and let Esc close it.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-line bg-paper/85 backdrop-blur-md'
            : 'border-b border-transparent'
        }`}
      >
        <Container className="flex h-[72px] items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3" aria-label={`${brand.name} — home`}>
            <Logo height={30} />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm text-ink-70 transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-saffron after:transition-all after:duration-300 hover:text-ink hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden px-5! py-2.5! text-[0.8125rem]! sm:inline-flex"
            >
              <WhatsAppIcon className="h-[15px] w-[15px]" />
              Order
            </Button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="-mr-2 flex h-10 w-10 items-center justify-center md:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 block h-px w-5 bg-ink transition-all duration-300 ${
                    open ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-5 bg-ink transition-all duration-300 ${
                    open ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </span>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 bg-paper md:hidden"
      >
        <Container className="flex h-full flex-col justify-center gap-1 pb-16">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-5 font-display text-3xl text-ink"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </a>
          ))}
          <Button
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="accent"
            className="mt-8 self-start"
          >
            <WhatsAppIcon />
            Order on WhatsApp
          </Button>
        </Container>
      </div>
    </>
  )
}
