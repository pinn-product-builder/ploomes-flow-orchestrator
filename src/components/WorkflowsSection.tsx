import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Chip } from "./Card";
import { Workflow, ChevronDown, Zap, ArrowRight } from "lucide-react";
import { WORKFLOWS } from "@/data/projectData";

export const WorkflowsSection = () => (
  <section className="space-y-4">
    <SectionHeader
      id="workflows"
      title="Workflows n8n (Ploomes-only)"
      description="Automação robusta via Webhooks + Cron (next_action_at) e integrações externas."
      icon={Workflow}
    />

    <div className="space-y-3">
      {WORKFLOWS.map((workflow, i) => (
        <WorkflowBlock key={workflow.id} workflow={workflow} defaultOpen={i < 2} index={i} />
      ))}
    </div>
  </section>
);

interface WorkflowBlockProps {
  workflow: (typeof WORKFLOWS)[0];
  defaultOpen: boolean;
  index: number;
}

const WorkflowBlock = ({ workflow, defaultOpen, index }: WorkflowBlockProps) => {
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
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-lg border border-dark-border bg-dark-bg/50 p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-gold" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-dark-text/70">
                      Trigger
                    </span>
                  </div>
                  <p className="text-sm text-dark-muted">{workflow.trigger}</p>
                </div>
                <div className="rounded-lg border border-dark-border bg-dark-bg/50 p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowRight className="h-4 w-4 text-gold" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-dark-text/70">
                      Saídas
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {workflow.outputs.map((output, j) => (
                      <Chip key={j} variant="gold">{output}</Chip>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-dark-text/70 mb-2 block">
                  Passos
                </span>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
