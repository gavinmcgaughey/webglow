import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="section-padding pt-8 sm:pt-10"
      aria-labelledby="cta-heading"
    >
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 sm:px-12 sm:py-16 lg:py-20 text-center shadow-card">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(59,130,246,0.35),transparent_60%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 h-40 w-[80%] rounded-full bg-primary/20 blur-3xl"
              aria-hidden
            />

            <div className="relative max-w-2xl mx-auto">
              <p className="text-sm font-medium text-primary-300 mb-4">
                Free 30-minute strategy call
              </p>
              <h2
                id="cta-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-balance leading-[1.12]"
              >
                Ready for a website that actually works?
              </h2>
              <p className="mt-4 sm:mt-5 text-base sm:text-lg text-warm-300 leading-relaxed max-w-lg mx-auto">
                Let’s map your goals, pick the right package, and see if WebGlow
                is the right partner — no pressure, no hard sell.
              </p>
              <div className="mt-8 sm:mt-10">
                <Button href="mailto:hello@webglow.studio" size="lg" className="shadow-glow">
                  Book Your Free Strategy Call
                </Button>
              </div>
              <p className="mt-5 text-sm text-warm-400">
                Or email{" "}
                <a
                  href="mailto:hello@webglow.studio"
                  className="text-warm-200 underline-offset-2 hover:underline"
                >
                  hello@webglow.studio
                </a>
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
