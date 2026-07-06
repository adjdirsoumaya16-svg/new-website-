import { Mail, MessageCircle, Camera } from 'lucide-react'

const columns = [
  {
    heading: 'Services',
    links: ['Paid Social', 'Creative Studio', 'Media Buying', 'CRO & Landing Pages'],
  },
  {
    heading: 'Company',
    links: ['About', 'Case Studies', 'Careers', 'Contact'],
  },
  {
    heading: 'Resources',
    links: ['Blog', 'Free Audit', 'Meta Playbook', 'FAQ'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2" aria-label="Fortis home">
              <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
                  <path
                    d="M12 2 3 6v6c0 5 3.8 8.4 9 10 5.2-1.6 9-5 9-10V6l-9-4Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="text-base font-semibold tracking-tight">Fortis</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The performance Meta Ads agency for brands that want to scale profitably.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="mailto:yasminekhadir477@gmail.com"
                aria-label="Email Fortis"
                className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="size-4" />
              </a>
              <a
                href="https://wa.me/213791391384"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Fortis"
                className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <MessageCircle className="size-4" />
              </a>
              <a
                href="https://instagram.com/workwithfortis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fortis on Instagram"
                className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Camera className="size-4" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-medium">{col.heading}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Fortis Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
