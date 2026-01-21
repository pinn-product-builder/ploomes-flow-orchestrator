import { motion } from "framer-motion";
import { DELIVERABLES_PHASES } from "@/data/commercialProposalData";
import { SectionHeader } from "@/components/SectionHeader";
import { Package, CheckCircle2 } from "lucide-react";

export const DeliverablesSection = () => {
  return (
    <section id="entregaveis" className="space-y-8">
      <SectionHeader
        icon={<Package className="w-5 h-5" />}
        title="Entregáveis do Projeto"
        subtitle="O que será construído em cada fase"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {DELIVERABLES_PHASES.map((phase, index) => (
          <motion.div
            key={phase.phase}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-gold/30 transition-colors group"
          >
            {/* Phase Header */}
            <div className="bg-gradient-to-r from-gold/10 to-transparent p-4 border-b border-dark-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-gold">{phase.phase}</span>
                </div>
                <h3 className="font-semibold text-dark-text text-sm">{phase.title}</h3>
              </div>
            </div>

            {/* Items */}
            <div className="p-4 space-y-3">
              {phase.items.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold/50 mt-0.5 flex-shrink-0 group-hover:text-gold/70 transition-colors" />
                  <span className="text-sm text-dark-muted">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
