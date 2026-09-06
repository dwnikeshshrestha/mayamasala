import { values } from '../content/site'

export default function Marquee() {
  // Rendered twice so the -50% keyframe loops seamlessly.
  const track = [...values, ...values]

  return (
    <section
      className="overflow-hidden border-y border-line bg-sand py-4"
      aria-label="What we promise"
    >
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap sm:gap-14">
        {track.map((value, i) => (
          <span key={i} className="flex items-center gap-10 sm:gap-14" aria-hidden={i >= values.length}>
            <span className="text-[0.8125rem] tracking-[0.02em] text-ink-70">{value}</span>
            <span className="h-1 w-1 shrink-0 rounded-full bg-saffron" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  )
}
