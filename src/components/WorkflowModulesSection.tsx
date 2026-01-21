import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Workflow, ChevronDown, Zap, MessageCircle, Database, ArrowRight } from "lucide-react";
import { WORKFLOW_MODULES } from "@/data/projectData";

export const WorkflowModulesSection = () => (
  <section className="space-y-4">
    <SectionHeader
      id="workflows"
      title="Módulos de Automação (n8n)"
      description="Cada workflow explicado: trigger, passos, campos atualizados e saídas."
      icon={Workflow}
    />

    <div className="space-y-3">
      {WORKFLOW_MODULES.map((workflow, i) => (
        <WorkflowModuleBlock key={workflow.id} workflow={workflow} index={i} defaultOpen={i < 2} />
      ))}
    </div>
  </section>
);

interface WorkflowModuleBlockProps {
  workflow: typeof WORKFLOW_MODULES[0];
  index: number;
  defaultOpen: boolean;
}

const WorkflowModuleBlock = ({ workflow, index, defaultOpen }: WorkflowModuleBlockProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="group rounded-xl border border-dark-border bg-gradient-to-b from-dark-card to-dark-panel overflow-hidden shadow-md"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-gold/5 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold border border-gold/30 bg-gold/10 text-gold">
            {workflow.id}
          </span>
          <span className="font-semibold text-dark-text truncate">{workflow.name}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-dark-muted"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
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
              {/* Descrição */}
              <p className="text-sm text-dark-muted italic">{workflow.description}</p>

              {/* Trigger e Saídas */}
              <div className="grid gap-3 md:grid-cols-2">
                <div className="p-3 rounded-lg border border-dark-border bg-dark-bg/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-gold" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">Trigger</span>
                  </div>
                  <p className="text-sm text-dark-muted">{workflow.trigger}</p>
                </div>
                <div className="p-3 rounded-lg border border-dark-border bg-dark-bg/30">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowRight className="h-4 w-4 text-gold" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">Saídas</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {workflow.outputs.map((output, j) => (
                      <span key={j} className="px-2 py-1 rounded-full text-xs font-medium border border-gold/30 bg-gold/10 text-gold">
                        {output}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Passos */}
              <div className="p-3 rounded-lg border border-dark-border bg-dark-bg/30">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold mb-2 block">O que faz</span>
                <ol className="space-y-2">
                  {workflow.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-dark-muted">
                      <span className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-gold/10 border border-gold/20 text-xs font-bold text-gold">
                        {j + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Campos atualizados */}
              <div className="grid gap-3 md:grid-cols-2">
                {workflow.kommoFields.length > 0 && (
                  <div className="p-3 rounded-lg border border-dark-border bg-dark-bg/30">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageCircle className="h-4 w-4 text-gold" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-gold">Campos Kommo</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {workflow.kommoFields.map((field, j) => (
                        <span key={j} className="px-2 py-0.5 rounded text-[10px] font-mono border border-dark-border bg-dark-card/50 text-dark-muted">
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {workflow.ploomesFields.length > 0 && (
                  <div className="p-3 rounded-lg border border-dark-border bg-dark-bg/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="h-4 w-4 text-gold" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-gold">Campos Ploomes</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {workflow.ploomesFields.map((field, j) => (
                        <span key={j} className="px-2 py-0.5 rounded text-[10px] font-mono border border-dark-border bg-dark-card/50 text-dark-muted">
                          {field}
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
