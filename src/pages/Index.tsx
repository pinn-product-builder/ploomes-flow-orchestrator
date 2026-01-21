import { Header } from "@/components/Header";
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

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/3 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-6 md:py-10">
        <Header />

        <main className="mt-8 space-y-10">
          <ExecutiveSummary />
          <ArchitectureSection />
          <GoldenRulesSection />
          <ExecutiveTableSection />
          <JourneySection />
          <WorkflowModulesSection />
          <RoadmapSection />
          <AcceptanceSection />
          <RisksSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
