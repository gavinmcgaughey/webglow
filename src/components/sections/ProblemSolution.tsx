import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PROBLEMS = [
  "Pretty templates that don’t ask for the lead",
  "Slow pages that lose mobile visitors",
  "No clear offer or next step",
  "DIY sites that look amateur next to competitors",
];

const SOLUTIONS = [
  "Conversion-first layouts and CTAs",
  "Fast, modern builds with strong Core Web Vitals",
  "Clear messaging for your niche",
  "Premium design delivered on a predictable timeline",
];

export function ProblemSolution() {
  return (
    <section className="section-padding" aria-labelledby="problem-heading">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="The gap"
            title="Most small business websites look fine. Almost none of them generate leads."
            description="Looking professional is table stakes. Getting found, trusted, and contacted — that’s the work. WebGlow closes the gap between “nice site” and “working growth asset.”"
          />
        </FadeIn>

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-2 gap-6 lg:gap-8">
          <FadeIn delay={0.05}>
            <div className="h-full rounded-2xl border border-warm-200/80 bg-white p-6 sm:p-8 shadow-card">
              <div className="inline-flex items-center gap-2 rounded-full bg-warm-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-warm-600 mb-5">
                The problem
              </div>
              <h3
                id="problem-heading"
                className="font-display text-xl sm:text-2xl font-semibold text-ink mb-4"
              >
                What we see every week
              </h3>
              <ul className="space-y-3">
                {PROBLEMS.map((item) => (
                  <li key={item} className="flex gap-3 text-warm-600">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-400"
                      aria-hidden
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="h-full rounded-2xl border border-primary/20 bg-gradient-to-br from-primary-50/80 to-white p-6 sm:p-8 shadow-card relative overflow-hidden">
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl"
                aria-hidden
              />
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary mb-5">
                The WebGlow fix
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-4">
                How we solve it
              </h3>
              <ul className="space-y-3">
                {SOLUTIONS.map((item) => (
                  <li key={item} className="flex gap-3 text-warm-700">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white"
                      aria-hidden
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2.5 6.5l2.5 2.5 4.5-5"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-warm-600 leading-relaxed border-t border-primary/10 pt-5">
                We combine modern design, conversion strategy, and AI-assisted
                development so you get a premium site — without the agency wait
                or the DIY risk.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
