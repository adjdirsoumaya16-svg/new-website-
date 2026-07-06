'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'How quickly will I see results?',
    a: 'Most clients see meaningful improvements within the first 30–60 days as we optimize existing campaigns and launch new creative. Sustainable, compounding growth typically builds over the first 90 days.',
  },
  {
    q: 'What ad spend do you work with?',
    a: 'We partner with brands spending anywhere from $700 to $1,150 per month on Meta ads. During your audit we\u2019ll confirm we\u2019re the right fit for your stage and goals.',
  },
  {
    q: 'Do you require long-term contracts?',
    a: 'No. We work on rolling monthly agreements. We earn your business every month through results, not lock-in clauses and you always retain full ownership of your ad account.',
  },
  {
    q: 'Who actually manages my account?',
    a: 'A dedicated senior strategist and a creative team, not junior account managers. You\u2019ll know exactly who is working on your account and speak with them directly on weekly calls.',
  },
  {
    q: 'Do you handle creative production too?',
    a: 'Our primary focus is Meta Ads management and performance marketing. Creative production and social media management are offered through a separate agency that specializes in those services. If needed, we\u2019re happy to connect you, and they\u2019ll provide a separate proposal based on your requirements.',
  },
  {
    q: 'How is your pricing structured?',
    a: 'We use a transparent monthly retainer scaled to your ad spend and scope. No hidden percentages or surprise fees — you\u2019ll get a clear proposal after your free audit.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="text-sm font-medium text-primary">FAQ</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Questions, answered
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Everything you need to know before working with us. Still curious?{' '}
            <a href="#contact" className="text-primary hover:underline">
              Reach out
            </a>
            .
          </p>
        </div>

        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium md:text-base">{faq.q}</span>
                  <Plus
                    className={cn(
                      'size-4 shrink-0 text-primary transition-transform duration-300',
                      isOpen && 'rotate-45',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-in-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
