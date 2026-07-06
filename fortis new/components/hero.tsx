import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const logos = ['Northwind', 'Lumen', 'Cascade', 'Vertex', 'Aurora']

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[520px] max-w-3xl rounded-full bg-primary/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_75%)]"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3 fill-current" />
              ))}
            </span>
            Trusted by 28+ scaling brands
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Meta Ads that turn ad spend into{' '}
            <span className="font-serif italic text-primary">predictable</span> revenue
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Fortis is a performance-driven Meta Ads agency. We combine scroll-stopping
            creative, precise targeting, and relentless optimization to scale brands
            profitably — not just cheaply.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              render={<a href="#contact" />}
              size="lg"
              className="group rounded-full px-6"
            >
              Get your free audit
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              render={<a href="#services" />}
              variant="outline"
              size="lg"
              className="rounded-full px-6"
            >
              Explore services
            </Button>
          </div>
        </div>

        {/* stat band */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {[
            { value: '$47K+', label: 'Ad spend managed' },
            { value: '2.1x', label: 'Average ROAS' },
            { value: '28+', label: 'Brands scaled' },
            { value: '18%', label: 'Avg. CPA reduction' },
          ].map((stat) => (
            <div key={stat.label} className="bg-card px-6 py-6 text-center">
              <div className="text-2xl font-semibold tracking-tight md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* logo row */}
        <div className="mt-14">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
            Powering growth for
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-lg font-semibold tracking-tight text-muted-foreground/60"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
