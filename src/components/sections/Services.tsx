import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CARE_PLAN, PACKAGES } from "@/lib/constants";

export function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-white border-y border-warm-200/60"
      aria-labelledby="services-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title="Clear packages. No guesswork."
            description="Pick the level that matches where you are. Every package is built for real estate agents and local service businesses who need leads — not just a digital business card."
          />
        </FadeIn>

        <Stagger className="mt-12 lg:mt-14 grid gap-6 md:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <StaggerItem key={pkg.id}>
              <article
                className={`relative h-full flex flex-col rounded-2xl border p-6 sm:p-7 transition-all duration-300 ${
                  pkg.popular
                    ? "border-primary/30 bg-gradient-to-b from-primary-50/50 to-white shadow-card-hover ring-1 ring-primary/10"
                    : "border-warm-200/80 bg-cream/40 shadow-card hover:shadow-card-hover hover:border-primary/20"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-white shadow-glow-sm">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold text-ink">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-sm text-warm-600 leading-relaxed flex-grow">
                  {pkg.description}
                </p>
                <p className="mt-5 font-display text-3xl font-semibold text-ink tracking-tight">
                  {pkg.price}
                </p>
                <ul className="mt-5 space-y-2.5 mb-7">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-warm-700">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M3 8.5l3 3 7-7"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href="#cta"
                  variant={pkg.popular ? "primary" : "secondary"}
                  className="w-full mt-auto"
                >
                  {pkg.cta}
                </Button>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.15} className="mt-8">
          <div className="rounded-2xl border border-gold-soft/60 bg-gradient-to-r from-white via-amber-50/40 to-white p-6 sm:p-8 shadow-card flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-gold" aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-wide text-gold-muted">
                  Monthly option
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink">
                {CARE_PLAN.name}
              </h3>
              <p className="mt-2 text-warm-600 leading-relaxed max-w-xl">
                {CARE_PLAN.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {CARE_PLAN.features.map((f) => (
                  <li
                    key={f}
                    className="text-sm text-warm-700 flex items-center gap-1.5"
                  >
                    <span className="text-gold" aria-hidden>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0 text-left lg:text-right">
              <p className="font-display text-3xl font-semibold text-ink">
                {CARE_PLAN.price}
                <span className="text-base font-medium text-warm-500">
                  {CARE_PLAN.period}
                </span>
              </p>
              <Button href="#cta" variant="outline" className="mt-4 w-full sm:w-auto">
                Add Care Plan
              </Button>
            </div>
          </div>
        </FadeIn>

        <h2 id="services-heading" className="sr-only">
          Services and packages
        </h2>
      </Container>
    </section>
  );
}
