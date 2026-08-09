import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BENEFITS } from "@/lib/constants";

const ICONS = [
  // Speed
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
  </svg>,
  // Convert
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4 19V5M4 19h16M8 15l3-4 3 2 4-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Niche
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>,
  // Transparent
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>,
];

export function WhyWebGlow() {
  return (
    <section className="section-padding" aria-labelledby="why-heading">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Why WebGlow"
            title="A studio that feels premium — and ships like a product team"
            description="Confident craft, clear communication, and websites built to earn trust the moment someone lands."
          />
        </FadeIn>

        <Stagger className="mt-12 lg:mt-14 grid gap-5 sm:grid-cols-2">
          {BENEFITS.map((benefit, i) => (
            <StaggerItem key={benefit.title}>
              <div className="h-full rounded-2xl border border-warm-200/80 bg-white p-6 sm:p-7 shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 group">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-glow-sm transition-all duration-300">
                  {ICONS[i]}
                </div>
                <h3
                  className="mt-4 font-display text-lg sm:text-xl font-semibold text-ink"
                  {...(i === 0 ? { id: "why-heading" } : {})}
                >
                  {benefit.title}
                </h3>
                <p className="mt-2 text-warm-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
