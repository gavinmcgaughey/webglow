import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <section
      id="process"
      className="section-padding bg-white border-y border-warm-200/60"
      aria-labelledby="process-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="How it works"
            title="From first call to live site — without the chaos"
            description="A simple, transparent process so you always know what’s next."
          />
        </FadeIn>

        <Stagger className="mt-12 lg:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <StaggerItem key={step.step}>
              <div className="relative h-full rounded-2xl border border-warm-200/80 bg-cream/50 p-6 shadow-soft hover:shadow-card-hover hover:border-primary/20 transition-all duration-300">
                {i < PROCESS_STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-[calc(100%+0.25rem)] w-[calc(100%-2rem)] h-px bg-gradient-to-r from-primary/30 to-transparent -z-0"
                    aria-hidden
                  />
                )}
                <span className="font-display text-sm font-semibold text-primary tracking-wider">
                  {step.step}
                </span>
                <h3
                  className="mt-3 font-display text-lg font-semibold text-ink"
                  {...(i === 0 ? { id: "process-heading" } : {})}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-warm-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
