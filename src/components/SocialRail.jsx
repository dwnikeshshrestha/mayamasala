import { socialLinks } from './Primitives'
import { brand } from '../content/site'

/**
 * A minimal vertical stack of social icons pinned to the edge of the
 * viewport, visible while scrolling. Desktop only (lg+) — on smaller
 * screens the icons live in the footer instead, where thumb reach and
 * screen width make a fixed rail more clutter than convenience.
 */
export default function SocialRail() {
  if (socialLinks.length === 0) return null

  return (
    <div
      className="fixed bottom-8 left-6 z-40 hidden flex-col items-center gap-1 rounded-full border border-line bg-paper/85 py-3 shadow-[0_4px_24px_rgba(26,21,18,0.08)] backdrop-blur-md lg:flex"
      aria-label="Social media"
    >
      {socialLinks.map(({ key, url, label, Icon }) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${brand.name} on ${label}`}
          className="group flex h-9 w-9 items-center justify-center text-ink-45 transition-colors duration-200 hover:text-saffron"
        >
          <Icon className="h-[17px] w-[17px] transition-transform duration-200 group-hover:scale-110" />
        </a>
      ))}
    </div>
  )
}
