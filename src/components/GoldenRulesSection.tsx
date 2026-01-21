import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Shield, MessageCircle, Database, RefreshCw, FileText } from "lucide-react";
import { GOLDEN_RULES } from "@/data/projectData";

export const GoldenRulesSection = () => (
  <section className="space-y-4">
    <SectionHeader
      id="regras"
      title="Regras de Ouro"
      description="Para não virar 'CRM duplo caótico' — definições que evitam divergência e retrabalho."
      icon={Shield}
    />

    <div className="grid gap-4 md:grid-cols-3">
      {/* Fonte da Verdade */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="rounded-xl border border-dark-border bg-gradient-to-b from-dark-card to-dark-panel overflow-hidden shadow-md"
      >
        <div className="border-b border-dark-border bg-dark-card/50 p-4">
          <div className="flex items-center gap-2">
            <Database className="h-4 w-4 text-gold" />
            <h3 className="text-sm font-bold text-dark-text">{GOLDEN_RULES.sourceOfTruth.title}</h3>
          </div>
        </div>
        <div className="p-4 space-y-4">
          {/* Kommo */}
          <div className="p-3 rounded-lg border border-dark-border bg-dark-bg/30">
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle className="h-3.5 w-3.5 text-gold" />
              <span className="text-xs font-semibold text-gold">Kommo manda em:</span>
            </div>
            <ul className="space-y-1">
              {GOLDEN_RULES.sourceOfTruth.kommo.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-dark-muted">
                  <span className="mt-1 h-1 w-1 rounded-full bg-gold/60 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Ploomes */}
          <div className="p-3 rounded-lg border border-dark-border bg-dark-bg/30">
            <div className="flex items-center gap-2 mb-2">
              <Database className="h-3.5 w-3.5 text-gold" />
              <span className="text-xs font-semibold text-gold">Ploomes manda em:</span>
            </div>
            <ul className="space-y-1">
              {GOLDEN_RULES.sourceOfTruth.ploomes.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-dark-muted">
                  <span className="mt-1 h-1 w-1 rounded-full bg-gold/60 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Sync Mínimo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="rounded-xl border border-dark-border bg-gradient-to-b from-dark-card to-dark-panel overflow-hidden shadow-md"
      >
        <div className="border-b border-dark-border bg-dark-card/50 p-4">
          <div className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4 text-gold" />
            <h3 className="text-sm font-bold text-dark-text">{GOLDEN_RULES.syncMinimal.title}</h3>
          </div>
        </div>
        <div className="p-4">
          <div className="p-3 rounded-lg border border-dark-border bg-dark-bg/30">
            <p className="text-xs text-gold font-semibold mb-2">Sincronizar APENAS:</p>
            <ul className="space-y-1.5">
              {GOLDEN_RULES.syncMinimal.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-dark-muted">
                  <span className="mt-1 h-1 w-1 rounded-full bg-gold/60 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-3 p-3 rounded-lg border border-red-500/20 bg-red-500/5">
            <p className="text-xs text-red-400 font-semibold">⚠️ Não espelhar tudo!</p>
            <p className="text-xs text-dark-muted mt-1">Duplicar dados gera inconsistência e overhead.</p>
          </div>
        </div>
      </motion.div>

      {/* Idempotência */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="rounded-xl border border-dark-border bg-gradient-to-b from-dark-card to-dark-panel overflow-hidden shadow-md"
      >
        <div className="border-b border-dark-border bg-dark-card/50 p-4">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-gold" />
            <h3 className="text-sm font-bold text-dark-text">{GOLDEN_RULES.idempotency.title}</h3>
          </div>
        </div>
        <div className="p-4">
          <ul className="space-y-3">
            {GOLDEN_RULES.idempotency.items.map((item, i) => (
              <li key={i} className="p-3 rounded-lg border border-dark-border bg-dark-bg/30">
                <div className="flex items-start gap-2 text-sm text-dark-muted">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/10 border border-gold/20 text-xs font-bold text-gold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  </section>
);
