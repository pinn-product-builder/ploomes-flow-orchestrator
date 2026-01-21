import { CommercialHeader } from "./CommercialHeader";
import { ChallengesSection } from "./ChallengesSection";
import { SolutionSection } from "./SolutionSection";
import { JourneyStepsSection } from "./JourneyStepsSection";
import { DeliverablesSection } from "./DeliverablesSection";
import { MetricsSection } from "./MetricsSection";
import { Footer } from "@/components/Footer";

export const CommercialProposal = () => {
  return (
    <div className="space-y-12">
      <CommercialHeader />
      <ChallengesSection />
      <SolutionSection />
      <JourneyStepsSection />
      <DeliverablesSection />
      <MetricsSection />
      <Footer />
    </div>
  );
};
