import { Container } from "@/components/ui/Container";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-warm-200/80 bg-white">
      <Container className="section-padding !py-12 sm:!py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#top"
              className="font-display text-xl font-semibold tracking-tight text-ink"
            >
              Web<span className="text-primary logo-glow">Glow</span>
            </a>
            <p className="mt-3 text-sm text-warm-600 leading-relaxed max-w-xs">
              Websites that glow with results — for real estate agents and local
              service businesses.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink mb-3">Navigate</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-warm-600 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink mb-3">Get in touch</p>
            <a
              href="mailto:hello@webglow.studio"
              className="text-sm text-warm-600 hover:text-primary transition-colors"
            >
              hello@webglow.studio
            </a>
            <p className="mt-3 text-sm text-warm-500">
              webglow.studio
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink mb-3">Ready to start?</p>
            <a
              href="#cta"
              className="inline-flex text-sm font-medium text-primary hover:text-primary-600 transition-colors"
            >
              Book a free strategy call →
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-warm-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-warm-500">
            © {year} WebGlow Studio. All rights reserved.
          </p>
          <p className="text-xs text-warm-400">
            Built for agents & local businesses who want results.
          </p>
        </div>
      </Container>
    </footer>
  );
}
