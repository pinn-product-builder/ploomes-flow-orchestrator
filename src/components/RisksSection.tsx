import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { AlertTriangle, Shield } from "lucide-react";
import { RISKS } from "@/data/projectData";

export const RisksSection = () => (
  <section className="space-y-4">
    <SectionHeader
      id="riscos"
      title="Riscos e mitigação"
      description="Principais pontos que quebram projetos multi-CRM — e como evitar."
      icon={AlertTriangle}
    />

    <div className="space-y-3">
      {RISKS.map((risk, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="group rounded-xl border border-dark-border bg-gradient-to-b from-dark-card to-dark-panel p-4 shadow-md hover:border-gold/20 transition-colors"
        >
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-destructive/10 border border-destructive/20 text-xs font-bold text-destructive">
              {i + 1}
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-dark-text">{risk.risk}</p>
              <div className="mt-2 flex items-start gap-2 p-2.5 rounded-lg bg-gold/5 border border-gold/10">
                <Shield className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-sm text-dark-muted">
                  <span className="font-semibold text-gold">Mitigação:</span> {risk.mitigation}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
