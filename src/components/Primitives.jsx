import { contact, whatsappMessage } from '../content/site'

export const waHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`

/* ---------- Buttons ---------- */

export function Button({ href, variant = 'solid', className = '', children, ...rest }) {
  const base =
    'group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 ease-out'

  const variants = {
    solid: 'bg-ink text-paper hover:bg-clove hover:-translate-y-0.5',
    accent: 'bg-saffron text-white hover:brightness-110 hover:-translate-y-0.5',
    ghost: 'border border-line-strong text-ink hover:border-ink hover:-translate-y-0.5',
  }

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  )
}

/* ---------- Section shell ---------- */

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-7xl px-6 sm:px-8 ${className}`}>{children}</div>
}

export function SectionHead({ eyebrow, heading, lead, align = 'left', max = 'max-w-2xl' }) {
  return (
    <div className={align === 'center' ? `${max} mx-auto text-center` : max}>
      {eyebrow && (
        <p className="eyebrow flex items-center gap-3">
          {align !== 'center' && <span className="h-px w-6 bg-line-strong" aria-hidden="true" />}
          {eyebrow}
        </p>
      )}
      <h2 className="mt-5 text-[clamp(1.9rem,4.4vw,3.25rem)] leading-[1.08] text-balance">
        {heading}
      </h2>
      {lead && <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-70 text-pretty">{lead}</p>}
    </div>
  )
}

/* ---------- Icons (inline, so there is no icon dependency) ---------- */

export function WhatsAppIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.24 8.21z" />
    </svg>
  )
}

export function ArrowIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} transition-transform duration-300 group-hover:translate-x-1`}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function FacebookIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  )
}

export function InstagramIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TikTokIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 2h-3.2v13.5a3.1 3.1 0 1 1-2.2-2.97V9.2a6.3 6.3 0 1 0 5.4 6.24V8.9a7.6 7.6 0 0 0 4.4 1.4V7.1a4.4 4.4 0 0 1-4.4-4.4V2z" />
    </svg>
  )
}

export function YouTubeIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.6 7.2a2.9 2.9 0 0 0-2.05-2.05C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.55.45A2.9 2.9 0 0 0 2.4 7.2 30.3 30.3 0 0 0 2 12a30.3 30.3 0 0 0 .4 4.8 2.9 2.9 0 0 0 2.05 2.05C6.2 19.3 12 19.3 12 19.3s5.8 0 7.55-.45a2.9 2.9 0 0 0 2.05-2.05A30.3 30.3 0 0 0 22 12a30.3 30.3 0 0 0-.4-4.8zM9.9 15.1V8.9l5.3 3.1z" />
    </svg>
  )
}

/* ---------- Social links (single source of truth for footer + rail) ---------- */

export const socialLinks = [
  { key: 'facebook', url: contact.facebook, label: 'Facebook', Icon: FacebookIcon },
  { key: 'instagram', url: contact.instagram, label: 'Instagram', Icon: InstagramIcon },
  { key: 'tiktok', url: contact.tiktok, label: 'TikTok', Icon: TikTokIcon },
  { key: 'youtube', url: contact.youtube, label: 'YouTube', Icon: YouTubeIcon },
].filter((s) => s.url)

/* ---------- Spice swatch ---------- */

/**
 * Stands in for product photography. Layered radial gradients tinted with
 * the spice's own colour read as an intentional abstract tile rather than
 * an empty placeholder box — and swap out the moment a photo is supplied.
 */
export function SpiceSwatch({ tone, className = '' }) {
  return (
    <div
      className={`grain relative overflow-hidden ${className}`}
      style={{ backgroundColor: tone }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(60% 55% at 30% 26%, rgba(255,255,255,.30), transparent 62%),
            radial-gradient(46% 44% at 76% 74%, rgba(0,0,0,.34), transparent 64%),
            radial-gradient(90% 90% at 50% 120%, rgba(0,0,0,.22), transparent 70%)`,
        }}
      />
    </div>
  )
}
