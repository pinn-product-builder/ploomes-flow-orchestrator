import { ExecutiveSummary } from "@/components/ExecutiveSummary";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { GoldenRulesSection } from "@/components/GoldenRulesSection";
import { ExecutiveTableSection } from "@/components/ExecutiveTableSection";
import { JourneySection } from "@/components/JourneySection";
import { WorkflowModulesSection } from "@/components/WorkflowModulesSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { AcceptanceSection } from "@/components/AcceptanceSection";
import { RisksSection } from "@/components/RisksSection";
import { Footer } from "@/components/Footer";

export const TechnicalProposal = () => {
  return (
    <div className="space-y-10">
      <ExecutiveSummary />
      <ArchitectureSection />
      <GoldenRulesSection />
      <ExecutiveTableSection />
      <JourneySection />
      <WorkflowModulesSection />
      <RoadmapSection />
      <AcceptanceSection />
      <RisksSection />
      <Footer />
    </div>
  );
};
