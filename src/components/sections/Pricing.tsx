import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CARE_PLAN, PACKAGES } from "@/lib/constants";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="section-padding bg-white border-y border-warm-200/60"
      aria-labelledby="pricing-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Pricing"
            title="Investment that pays for itself in leads"
            description="Straightforward packages. Choose your scope, book a call, and we’ll confirm the best fit before anything starts."
          />
        </FadeIn>

        <Stagger className="mt-12 lg:mt-14 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <StaggerItem key={pkg.id}>
              <article
                className={`relative flex h-full flex-col rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                  pkg.popular
                    ? "bg-ink text-white shadow-glow border border-ink"
                    : "bg-cream/60 border border-warm-200/80 shadow-card hover:shadow-card-hover"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-white shadow-glow-sm">
                    Best value
                  </span>
                )}
                <h3
                  className={`font-display text-xl font-semibold ${
                    pkg.popular ? "text-white" : "text-ink"
                  }`}
                  {...(pkg.popular ? { id: "pricing-heading" } : {})}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    pkg.popular ? "text-warm-300" : "text-warm-600"
                  }`}
                >
                  {pkg.description}
                </p>
                <p
                  className={`mt-6 font-display text-4xl font-semibold tracking-tight ${
                    pkg.popular ? "text-white" : "text-ink"
                  }`}
                >
                  {pkg.price}
                </p>
                <ul className="mt-6 space-y-2.5 flex-1">
                  {pkg.features.slice(0, 6).map((f) => (
                    <li
                      key={f}
                      className={`flex gap-2.5 text-sm ${
                        pkg.popular ? "text-warm-200" : "text-warm-700"
                      }`}
                    >
                      <svg
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          pkg.popular ? "text-primary-300" : "text-primary"
                        }`}
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
                  className={`w-full mt-8 ${
                    pkg.popular ? "shadow-glow-sm" : ""
                  }`}
                >
                  {pkg.cta}
                </Button>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.1} className="mt-8 text-center">
          <p className="text-sm sm:text-base text-warm-600">
            Add the{" "}
            <span className="font-semibold text-ink">
              {CARE_PLAN.name} ({CARE_PLAN.price}
              {CARE_PLAN.period})
            </span>{" "}
            anytime after launch for updates, monitoring, and peace of mind.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
