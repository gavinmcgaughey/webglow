import { Container } from "@/components/ui/Container";
import { TESTIMONIALS } from "@/lib/constants";

const LOGO_PLACEHOLDERS = [
  "Summit Realty",
  "Northline Homes",
  "Apex HVAC",
  "Brightside Care",
  "Harbor Law",
];

export function SocialProof() {
  return (
    <section
      className="border-y border-warm-200/80 bg-white py-10 sm:py-12"
      aria-label="Social proof"
    >
      <Container>
        <p className="text-center text-sm sm:text-base text-warm-600 font-medium max-w-2xl mx-auto text-balance">
          Trusted by growing real estate agents and local service businesses
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {LOGO_PLACEHOLDERS.map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              role="img"
              aria-label={`${name} logo placeholder`}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-warm-100 text-[10px] font-bold text-warm-500">
                {name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </span>
              <span className="text-sm font-semibold tracking-tight text-warm-500">
                {name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-xl border border-warm-100 bg-cream/60 px-4 py-4 sm:px-5"
            >
              <p className="text-sm text-warm-700 leading-relaxed">
                “{t.quote}”
              </p>
              <footer className="mt-3 text-xs text-warm-500">
                <span className="font-semibold text-ink">{t.name}</span>
                {" · "}
                {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
