import { useState } from 'react'
import { brand } from '../content/site'

/**
 * Icon + wordmark lockup. The mascot mark is small and detailed, so it is
 * always paired with the type — legible at nav size, where the icon alone
 * would not read. Falls back to text-only if the image is missing, so the
 * page never shows a broken image.
 *
 * ➜ To use your own logo: replace  public/logo.jpg  (or change LOGO_SRC
 *   below for a different filename/format).
 */
const LOGO_SRC = '/logo.jpg'

export default function Logo({ className = '', height = 34, light = false }) {
  const [failed, setFailed] = useState(false)

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {!failed && (
        <img
          src={LOGO_SRC}
          alt=""
          height={height}
          width={height}
          style={{ height, width: height }}
          className={`shrink-0 rounded-full object-cover ring-1 ${
            light ? 'ring-paper/25' : 'ring-line-strong/60'
          }`}
          onError={() => setFailed(true)}
        />
      )}
      <span
        className={`font-display leading-none ${light ? 'text-paper' : 'text-ink'}`}
        style={{ fontSize: height * 0.5, letterSpacing: '-0.015em' }}
      >
        {brand.name.replace('Masala', '')}
        <span className="text-saffron">Masala</span>
      </span>
    </span>
  )
}
