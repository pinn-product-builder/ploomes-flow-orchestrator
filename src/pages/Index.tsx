import { Header } from "@/components/Header";
import { TechnicalProposal } from "@/components/TechnicalProposal";
import { CommercialProposal } from "@/components/commercial/CommercialProposal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Briefcase } from "lucide-react";

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

        {/* Tabs for switching between proposals */}
        <Tabs defaultValue="commercial" className="mt-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-dark-panel border border-dark-border h-12">
            <TabsTrigger 
              value="commercial" 
              className="flex items-center gap-2 data-[state=active]:bg-gold/20 data-[state=active]:text-gold"
            >
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">Proposta Comercial</span>
              <span className="sm:hidden">Comercial</span>
            </TabsTrigger>
            <TabsTrigger 
              value="technical"
              className="flex items-center gap-2 data-[state=active]:bg-gold/20 data-[state=active]:text-gold"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Proposta Técnica</span>
              <span className="sm:hidden">Técnica</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="commercial" className="mt-8">
            <CommercialProposal />
          </TabsContent>

          <TabsContent value="technical" className="mt-8">
            <TechnicalProposal />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
