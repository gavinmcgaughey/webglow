import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroMockup } from "@/components/ui/HeroMockup";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-hero-glow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 xl:gap-16 items-center">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-warm-200 bg-white/80 px-3 py-1 text-xs sm:text-sm font-medium text-warm-600 shadow-soft mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow-sm" />
              AI-assisted web design studio
            </p>

            <h1
              id="hero-heading"
              className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-semibold tracking-tight text-ink leading-[1.08] text-balance"
            >
              Websites that{" "}
              <span className="text-primary text-glow">glow</span> with results
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-warm-600 leading-relaxed max-w-lg">
              We build high-converting websites for real estate agents and local
              businesses — delivered fast with AI-assisted precision.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button href="#pricing" size="lg">
                See Packages
              </Button>
              <Button href="#work" variant="secondary" size="lg">
                View Our Work
              </Button>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
              {[
                { value: "2–3 wks", label: "Typical delivery" },
                { value: "100%", label: "Mobile-first" },
                { value: "Free", label: "Strategy call" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-lg sm:text-xl font-semibold text-ink">
                    {stat.value}
                  </dd>
                  <p className="text-xs sm:text-sm text-warm-500 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:justify-self-end w-full max-w-lg mx-auto lg:max-w-none">
            <div
              className="pointer-events-none absolute inset-0 scale-110 bg-glow-radial"
              aria-hidden
            />
            <HeroMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}
