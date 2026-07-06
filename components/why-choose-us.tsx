import { Check } from 'lucide-react'

const reasons = [
  {
    title: 'Profit over vanity metrics',
    description:
      'We optimize for contribution margin and ROAS, not impressions. Every decision ladders up to your bottom line.',
  },
  {
    title: 'Senior team, no juniors',
    description:
      'Your account is run by strategists who have managed five-figure budgets — never handed off to interns.',
  },
    {
    title: 'Radical transparency',
    description:
      'Clear weekly performance reports, ongoing optimization, and no lock-in contracts. You own your ad account and your data. Always.',
    },
   ]

export function WhyChooseUs() {
  return (
    <section id="why" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm font-medium text-primary">Why Fortis</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Built like a growth partner, not a vendor
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Most agencies chase clicks. We treat your ad account like our own P&amp;L —
            obsessing over the numbers that actually move your business forward.
          </p>

          <dl className="mt-8 space-y-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex gap-4">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-3.5" />
                </span>
                <div>
                  <dt className="font-medium tracking-tight">{reason.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* results panel */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-2xl"
          />
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Client snapshot</span>
              <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary">
                Last 90 days
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { value: '2.3x', label: 'Return on ad spend' },
                { value: '+40%', label: 'Revenue growth' },
                { value: '-18%', label: 'Cost per acquisition' },
                { value: '70', label: 'New customers reached' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-border bg-background p-5">
                  <div className="text-2xl font-semibold tracking-tight text-primary">
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-border bg-background p-5">
              <div className="mb-3 flex items-end justify-between text-xs text-muted-foreground">
                <span>Monthly revenue from Meta</span>
                <span className="text-primary">Scaling</span>
              </div>
              <div className="flex h-24 items-end gap-2">
                {[28, 34, 30, 46, 52, 61, 74, 88].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-primary/70"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
