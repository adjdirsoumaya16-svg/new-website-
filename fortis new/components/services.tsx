import { Target, Palette, LineChart, Layers, Repeat, Users } from 'lucide-react'

const services = [
  {
    icon: Target,
    title: 'Paid Social Strategy',
    description:
      'Full-funnel Meta strategy mapped to your margins and growth goals — from prospecting to retention.',
  },
  {
    icon: Palette,
    title: 'Creative Production',
    description:
      'Fortis specializes exclusively in Meta Ads management and does not provide creative production or social media management as part of this service. If your business requires content creation, video editing, graphic design, or ongoing social media management, these services are available through Fortis Creative, our dedicated creative division. Creative services are optional, quoted separately, and managed independently from your Meta Ads service.',
  },
  {
    icon: LineChart,
    title: 'Media Buying',
    description:
      'Daily hands-on management of your ad account with disciplined testing and scaling frameworks.',
  },
  {
    icon: Layers,
    title: 'Landing Pages & CRO',
    description:
      'High-converting landing pages and funnels built to turn expensive clicks into paying customers.',
  },
  {
    icon: Repeat,
    title: 'Retargeting & Retention',
    description:
      'Segmented remarketing and lifecycle campaigns that maximize LTV and repeat purchase rate.',
  },
  {
    icon: Users,
    title: 'Reporting & Analytics',
    description:
      'Stay informed with clear weekly performance reports highlighting your campaign's key metrics, optimization updates, and overall progress. Rather than overwhelming you with dashboards and unnecessary data, we focus on the insights that matter most, keeping you informed about your campaign's performance and the actions we're taking to maximize results.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-primary">What we do</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Everything you need to scale on Meta
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A specialized Meta Ads team focused exclusively on strategy, media buying, optimization, and measurable growth.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card p-8 transition-colors hover:bg-secondary"
            >
              <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-background text-primary transition-colors group-hover:border-primary/40">
                <service.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-medium tracking-tight">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
