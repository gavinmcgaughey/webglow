import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { WhyWebGlow } from "@/components/sections/WhyWebGlow";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <Services />
      <Work />
      <Process />
      <WhyWebGlow />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
