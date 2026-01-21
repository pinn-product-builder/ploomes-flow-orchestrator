import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Map, Clock, Package, Link, CheckCircle } from "lucide-react";
import { ROADMAP } from "@/data/projectData";

export const RoadmapSection = () => (
  <section className="space-y-4">
    <SectionHeader
      id="roadmap"
      title="Roadmap de Implementação"
      description="Plano por fases com entregáveis, dependências e critérios de aceite."
      icon={Map}
    />

    <div className="space-y-4">
      {ROADMAP.map((phase, i) => (
        <motion.div
          key={phase.phase}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="rounded-xl border border-dark-border bg-gradient-to-b from-dark-card to-dark-panel overflow-hidden shadow-md"
        >
          {/* Header */}
          <div className="border-b border-dark-border bg-dark-card/50 p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 border border-gold/20 text-lg font-bold text-gold">
                  {phase.phase}
                </span>
                <div>
                  <h3 className="text-base font-bold text-dark-text">{phase.title}</h3>
                  <p className="text-sm text-dark-muted mt-0.5">{phase.objective}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-dark-border bg-dark-bg/50">
                <Clock className="h-3.5 w-3.5 text-gold" />
                <span className="text-xs font-medium text-dark-text">{phase.duration}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 grid gap-4 md:grid-cols-3">
            {/* Entregáveis */}
            <div className="p-3 rounded-lg border border-dark-border bg-dark-bg/30">
              <div className="flex items-center gap-2 mb-3">
                <Package className="h-4 w-4 text-gold" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">Entregáveis</span>
              </div>
              <ul className="space-y-1.5">
                {phase.deliverables.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-dark-muted">
                    <span className="mt-1 h-1 w-1 rounded-full bg-gold/60 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dependências */}
            <div className="p-3 rounded-lg border border-dark-border bg-dark-bg/30">
              <div className="flex items-center gap-2 mb-3">
                <Link className="h-4 w-4 text-gold" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">Dependências</span>
              </div>
              <ul className="space-y-1.5">
                {phase.dependencies.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-dark-muted">
                    <span className="mt-1 h-1 w-1 rounded-full bg-gold/60 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Critérios de Aceite */}
            <div className="p-3 rounded-lg border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-green-400">Aceite</span>
              </div>
              <ul className="space-y-1.5">
                {phase.acceptance.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-dark-muted">
                    <span className="mt-1 h-1 w-1 rounded-full bg-green-400/60 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
