'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Check, Mail, Clock, Shield, MessageCircle, Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'

const perks = [
  { icon: Mail, text: 'A free, no-obligation account audit' },
  { icon: Clock, text: 'A response within one business day' },
  { icon: Shield, text: 'No lock-in contracts, ever' },
]

const directContacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'yasminekhadir477@gmail.com',
    href: 'mailto:yasminekhadir477@gmail.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '079 139 1384',
    href: 'https://wa.me/213791391384',
  },
  {
    icon: Camera,
    label: 'Instagram',
    value: '@workwithfortis',
    href: 'https://instagram.com/workwithfortis',
  },
]

const inputClass =
  'w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2">
        <div>
          <span className="text-sm font-medium text-primary">Get started</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Let&apos;s scale your brand on Meta
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Tell us a bit about your business and goals. We&apos;ll audit your account and
            show you exactly where the growth is hiding.
          </p>

          <ul className="mt-8 space-y-4">
            {perks.map((perk) => (
              <li key={perk.text} className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-primary">
                  <perk.icon className="size-4" />
                </span>
                <span className="text-sm text-muted-foreground">{perk.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-border pt-8">
            <p className="text-sm font-medium">Or reach us directly</p>
            <ul className="mt-4 space-y-3">
              {directContacts.map((contact) => (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3"
                  >
                    <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-primary transition-colors group-hover:border-primary">
                      <contact.icon className="size-4" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs text-muted-foreground">{contact.label}</span>
                      <span className="text-sm text-foreground transition-colors group-hover:text-primary">
                        {contact.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                Thanks — we&apos;re on it
              </h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                Your request is in. A Fortis strategist will reach out within one business
                day to schedule your audit.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full name
                  </label>
                  <input id="name" name="name" required placeholder="Jane Doe" className={inputClass} />
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@brand.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company
                  </label>
                  <input id="company" name="company" placeholder="Brand Inc." className={inputClass} />
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="spend" className="text-sm font-medium">
                    Monthly ad spend
                  </label>
                  <select id="spend" name="spend" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Select a range
                    </option>
                    <option value="400-600">$400 – $600</option>
<option value="700-800">$700 – $800</option>
<option value="900-1000">$900 – $1,000</option>
<option value="1100-10000">$1,100 – $10,000+</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="message" className="text-sm font-medium">
                  What are your goals?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your brand and where you want to grow..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <Button type="submit" size="lg" className="group mt-2 w-full rounded-full">
                Request my free audit
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                We&apos;ll never share your information. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
