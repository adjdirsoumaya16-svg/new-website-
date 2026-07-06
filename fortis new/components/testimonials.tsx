import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Fortis rebuilt our entire funnel and doubled our ROAS in the first quarter. They feel like an extension of our own team.',
    name: 'Sarah Mitchell',
    role: 'CMO, Northwind Apparel',
    initials: 'SM',
  },
  {
    quote:
      'The creative velocity is unmatched. Fresh winning ads every week meant we finally broke past our spend ceiling.',
    name: 'David Chen',
    role: 'Founder, Lumen Skincare',
    initials: 'DC',
  },
  {
    quote:
      'Transparent, sharp, and relentlessly focused on profit. Our CPA dropped 24% while we scaled spend 2.5x.',
    name: 'Amara Okafor',
    role: 'Head of Growth, Cascade',
    initials: 'AO',
  },
  {
    quote:
      'We switched from a big-name agency and never looked back. Fortis actually understands our margins.',
    name: 'James Whitfield',
    role: 'CEO, Vertex Home',
    initials: 'JW',
  },
  {
    quote:
      'Reporting is crystal clear and the strategy calls are gold. I always know exactly where our money is going.',
    name: 'Priya Raman',
    role: 'Marketing Director, Aurora',
    initials: 'PR',
  },
  {
    quote:
      'Profitable scaling that actually held up. Our best quarter ever came right after onboarding with Fortis.',
    name: 'Marco Rossi',
    role: 'Founder, Fjord Goods',
    initials: 'MR',
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-20 border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-primary">Client results</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Loved by founders and marketing teams
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Don&apos;t take our word for it — here&apos;s what the brands we scale have to say.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-sm font-medium text-primary">
                  {t.initials}
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-medium">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
