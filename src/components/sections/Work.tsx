import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/lib/constants";

function ProjectMock({
  accent,
  label,
  featured,
}: {
  accent: string;
  label: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-warm-200/80 bg-gradient-to-br ${accent} ${
        featured ? "aspect-[16/10]" : "aspect-[16/11]"
      }`}
      role="img"
      aria-label={`Website mockup placeholder for ${label}`}
    >
      <div className="absolute inset-3 sm:inset-4 rounded-lg bg-white/90 shadow-soft border border-white/80 overflow-hidden flex flex-col">
        <div className="flex items-center gap-1 border-b border-warm-100 px-2.5 py-1.5 bg-warm-50/80">
          <span className="h-1.5 w-1.5 rounded-full bg-warm-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-warm-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-warm-300" />
        </div>
        <div className="flex-1 p-2.5 sm:p-3 space-y-2">
          <div className="h-8 sm:h-10 rounded-md bg-gradient-to-r from-slate-600/90 to-primary/40" />
          <div className="grid grid-cols-3 gap-1.5">
            <div className="h-8 sm:h-10 rounded bg-warm-100" />
            <div className="h-8 sm:h-10 rounded bg-warm-100" />
            <div className="h-8 sm:h-10 rounded bg-warm-100" />
          </div>
          <div className="h-2 w-1/3 rounded bg-primary/30" />
        </div>
      </div>
      <span className="sr-only">{label} mockup</span>
    </div>
  );
}

export function Work() {
  const featured = PROJECTS.find((p) => p.featured)!;
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="work" className="section-padding" aria-labelledby="work-heading">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Selected work"
            title="Real results for real businesses"
            description="A sample of the kind of sites we build — premium, focused, and designed to generate inquiries."
          />
        </FadeIn>

        {/* Featured case study */}
        <FadeIn className="mt-12 lg:mt-14">
          <article className="card-base overflow-hidden group">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-2 sm:p-3 lg:p-4">
                <ProjectMock
                  accent={featured.accent}
                  label={featured.mockLabel}
                  featured
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 lg:pl-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                  Featured · {featured.category}
                </span>
                <h3
                  id="work-heading"
                  className="font-display text-2xl sm:text-3xl font-semibold text-ink"
                >
                  {featured.title}
                </h3>
                <p className="mt-3 text-warm-600 leading-relaxed">
                  {featured.description}
                </p>
                <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary-700 w-fit">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                  {featured.result}
                </p>
              </div>
            </div>
          </article>
        </FadeIn>

        <Stagger className="mt-6 grid gap-6 sm:grid-cols-2">
          {others.map((project) => (
            <StaggerItem key={project.id}>
              <article className="card-base overflow-hidden h-full group">
                <div className="p-2 sm:p-3">
                  <ProjectMock
                    accent={project.accent}
                    label={project.mockLabel}
                  />
                </div>
                <div className="px-5 sm:px-6 pb-6 pt-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-warm-500">
                    {project.category}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-semibold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-warm-600 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="mt-3 text-sm font-medium text-primary">
                    {project.result}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
