import { announcement } from '../content/site'

export default function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-ink py-2.5 text-center text-[0.75rem] tracking-[0.03em] text-paper/85">
      {announcement}
    </div>
  )
}
