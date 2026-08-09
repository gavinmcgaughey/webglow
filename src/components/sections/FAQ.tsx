import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq" className="section-padding" aria-labelledby="faq-heading">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <FadeIn className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Questions, answered"
              description="Straight answers so you can decide with confidence. Still unsure? Book a free call — we’ll talk it through."
              className="lg:sticky lg:top-28"
            />
            <h2 id="faq-heading" className="sr-only">
              Frequently asked questions
            </h2>
          </FadeIn>
          <FadeIn delay={0.08} className="lg:col-span-7">
            <Accordion items={FAQ_ITEMS} />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
