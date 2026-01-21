import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Layers, MessageCircle, Database, Workflow, Mail, Calendar, CheckSquare, Folder } from "lucide-react";
import { ARCHITECTURE } from "@/data/projectData";

const iconMap: Record<string, typeof Layers> = {
  "message-circle": MessageCircle,
  "database": Database,
  "workflow": Workflow,
  "mail": Mail,
  "calendar": Calendar,
  "check-square": CheckSquare,
  "folder": Folder,
};

export const ArchitectureSection = () => (
  <section className="space-y-4">
    <SectionHeader
      id="arquitetura"
      title="Arquitetura em 1 Minuto"
      description="Visão das 3 camadas do sistema: Operacional, Orquestração e Serviços."
      icon={Layers}
    />

    <div className="space-y-4">
      {/* Camada Operacional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="rounded-xl border border-dark-border bg-gradient-to-b from-dark-card to-dark-panel overflow-hidden shadow-md"
      >
        <div className="border-b border-dark-border bg-dark-card/50 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 border border-gold/20">
              <Layers className="h-5 w-5 text-gold" />
            </div>
            <div>
              <h3 className="text-base font-bold text-dark-text">{ARCHITECTURE.operational.title}</h3>
              <p className="text-sm text-dark-muted">{ARCHITECTURE.operational.subtitle}</p>
            </div>
          </div>
        </div>
        <div className="p-4 grid gap-4 md:grid-cols-2">
          {ARCHITECTURE.operational.systems.map((system, i) => {
            const Icon = iconMap[system.icon] || Layers;
            return (
              <div key={i} className="p-4 rounded-lg border border-dark-border bg-dark-bg/30">
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="h-4 w-4 text-gold" />
                  <span className="font-semibold text-dark-text">{system.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-gold/30 bg-gold/10 text-gold">
                    {system.role}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {system.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-dark-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Camada de Orquestração */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="rounded-xl border border-dark-border bg-gradient-to-b from-dark-card to-dark-panel overflow-hidden shadow-md"
      >
        <div className="border-b border-dark-border bg-dark-card/50 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 border border-gold/20">
              <Workflow className="h-5 w-5 text-gold" />
            </div>
            <div>
              <h3 className="text-base font-bold text-dark-text">{ARCHITECTURE.orchestration.title}</h3>
              <p className="text-sm text-dark-muted">{ARCHITECTURE.orchestration.subtitle}</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          {ARCHITECTURE.orchestration.systems.map((system, i) => {
            const Icon = iconMap[system.icon] || Workflow;
            return (
              <div key={i} className="p-4 rounded-lg border border-dark-border bg-dark-bg/30">
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="h-4 w-4 text-gold" />
                  <span className="font-semibold text-dark-text">{system.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-gold/30 bg-gold/10 text-gold">
                    {system.role}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {system.items.map((item, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border border-dark-border bg-dark-card/50 text-dark-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Camada de Serviços */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="rounded-xl border border-dark-border bg-gradient-to-b from-dark-card to-dark-panel overflow-hidden shadow-md"
      >
        <div className="border-b border-dark-border bg-dark-card/50 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 border border-gold/20">
              <Folder className="h-5 w-5 text-gold" />
            </div>
            <div>
              <h3 className="text-base font-bold text-dark-text">{ARCHITECTURE.services.title}</h3>
              <p className="text-sm text-dark-muted">{ARCHITECTURE.services.subtitle}</p>
            </div>
          </div>
        </div>
        <div className="p-4 grid gap-3 md:grid-cols-3 lg:grid-cols-5">
          {ARCHITECTURE.services.systems.map((system, i) => {
            const Icon = iconMap[system.icon] || Folder;
            return (
              <div key={i} className="p-3 rounded-lg border border-dark-border bg-dark-bg/30 text-center">
                <Icon className="h-5 w-5 text-gold mx-auto mb-2" />
                <div className="font-medium text-sm text-dark-text">{system.name}</div>
                <div className="text-xs text-dark-muted mt-1">{system.items[0]}</div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
);
