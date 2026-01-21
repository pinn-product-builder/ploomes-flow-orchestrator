import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Route, ChevronDown, Target, MapPin, User, FileText, Zap, CheckCircle, XCircle, Database } from "lucide-react";
import { JOURNEY_STAGES } from "@/data/projectData";

export const JourneySection = () => (
  <section className="space-y-4">
    <SectionHeader
      id="jornada"
      title="Jornada Ponta a Ponta"
      description="Cada etapa detalhada: objetivo, sistema, responsável, campos, automações e critérios."
      icon={Route}
    />

    <div className="space-y-3">
      {JOURNEY_STAGES.map((stage, i) => (
        <JourneyStageBlock key={stage.id} stage={stage} index={i} defaultOpen={i < 2} />
      ))}
    </div>
  </section>
);

interface JourneyStageBlockProps {
  stage: typeof JOURNEY_STAGES[0];
  index: number;
  defaultOpen: boolean;
}

const JourneyStageBlock = ({ stage, index, defaultOpen }: JourneyStageBlockProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.02 }}
      className="group rounded-xl border border-dark-border bg-gradient-to-b from-dark-card to-dark-panel overflow-hidden shadow-md"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-gold/5 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 border border-gold/20 text-sm font-bold text-gold">
            {stage.id}
          </span>
          <div className="min-w-0">
            <span className="font-semibold text-dark-text block truncate">{stage.name}</span>
            <span className="text-xs text-dark-muted">{stage.where.join(" + ")}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden md:inline-flex px-2 py-1 rounded-full text-xs font-medium border border-dark-border bg-dark-card/50 text-dark-muted">
            {stage.owner}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 text-dark-muted"
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 space-y-4">
              {/* Objetivo */}
              <div className="p-3 rounded-lg border border-dark-border bg-dark-bg/30">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4 text-gold" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold">Objetivo</span>
                </div>
                <p className="text-sm text-dark-muted">{stage.objective}</p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {/* Onde acontece */}
                <div className="p-3 rounded-lg border border-dark-border bg-dark-bg/30">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-gold" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">Onde acontece</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.where.map((system, j) => (
                      <span key={j} className="px-2 py-1 rounded-full text-xs font-medium border border-gold/30 bg-gold/10 text-gold">
                        {system}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Responsável */}
                <div className="p-3 rounded-lg border border-dark-border bg-dark-bg/30">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4 text-gold" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">Responsável</span>
                  </div>
                  <span className="text-sm font-medium text-dark-text">{stage.owner}</span>
                </div>
              </div>

              {/* Campos obrigatórios */}
              <div className="p-3 rounded-lg border border-dark-border bg-dark-bg/30">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-4 w-4 text-gold" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold">Campos Obrigatórios</span>
                </div>
                <ul className="grid gap-1 md:grid-cols-2">
                  {stage.requiredFields.map((field, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-dark-muted">
                      <span className="mt-1 h-1 w-1 rounded-full bg-gold/60 flex-shrink-0" />
                      <span>{field}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Automações */}
              <div className="p-3 rounded-lg border border-dark-border bg-dark-bg/30">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-4 w-4 text-gold" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold">Automações / Gatilhos</span>
                </div>
                <ol className="space-y-1.5">
                  {stage.automations.map((automation, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-dark-muted">
                      <span className="flex-shrink-0 flex h-4 w-4 items-center justify-center rounded-full bg-gold/10 border border-gold/20 text-[10px] font-bold text-gold">
                        {j + 1}
                      </span>
                      <span>{automation}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Critérios */}
              <div className="grid gap-3 md:grid-cols-2">
                <div className="p-3 rounded-lg border border-green-500/20 bg-green-500/5">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-green-400">Critério de Avanço</span>
                  </div>
                  <p className="text-xs text-dark-muted">{stage.advanceCriteria || "—"}</p>
                </div>
                <div className="p-3 rounded-lg border border-red-500/20 bg-red-500/5">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="h-4 w-4 text-red-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-red-400">Critério de Desqualificação</span>
                  </div>
                  <p className="text-xs text-dark-muted">{stage.disqualifyCriteria || "N/A"}</p>
                </div>
              </div>

              {/* Saídas */}
              <div className="grid gap-3 md:grid-cols-2">
                {stage.outputs.kommo.length > 0 && (
                  <div className="p-3 rounded-lg border border-dark-border bg-dark-bg/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="h-4 w-4 text-gold" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-gold">Saída Kommo</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {stage.outputs.kommo.map((output, j) => (
                        <span key={j} className="px-2 py-0.5 rounded text-[10px] font-mono border border-dark-border bg-dark-card/50 text-dark-muted">
                          {output}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {stage.outputs.ploomes.length > 0 && (
                  <div className="p-3 rounded-lg border border-dark-border bg-dark-bg/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="h-4 w-4 text-gold" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-gold">Saída Ploomes</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {stage.outputs.ploomes.map((output, j) => (
                        <span key={j} className="px-2 py-0.5 rounded text-[10px] font-mono border border-dark-border bg-dark-card/50 text-dark-muted">
                          {output}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
