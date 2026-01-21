import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { FileText, Target, Users, Workflow, CheckCircle } from "lucide-react";
import { PROJECT } from "@/data/projectData";

export const ExecutiveSummary = () => (
  <section className="space-y-4">
    <SectionHeader
      id="resumo"
      title="Resumo Executivo (1 página)"
      description="Visão completa do projeto para alinhamento rápido."
      icon={FileText}
    />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border border-dark-border bg-gradient-to-b from-dark-card to-dark-panel overflow-hidden shadow-md"
    >
      {/* Header */}
      <div className="border-b border-dark-border bg-dark-card/50 p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 border border-gold/20">
            <Target className="h-5 w-5 text-gold" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-dark-text">{PROJECT.company}</h3>
            <p className="text-sm text-dark-muted">{PROJECT.title}</p>
          </div>
        </div>
        <p className="text-sm text-dark-muted leading-relaxed mt-3 p-3 rounded-lg bg-dark-bg/50 border border-dark-border">
          <span className="text-gold font-semibold">North Star:</span> {PROJECT.northStar}
        </p>
      </div>

      {/* Content Grid */}
      <div className="p-5 grid gap-4 md:grid-cols-2">
        {/* O que é este documento */}
        <div className="p-4 rounded-lg border border-dark-border bg-dark-bg/30">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="h-4 w-4 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">O que é este documento</span>
          </div>
          <ul className="space-y-2 text-sm text-dark-muted">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold/60 flex-shrink-0" />
              <span>Blueprint interno para implementação</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold/60 flex-shrink-0" />
              <span>Fluxo ponta a ponta: Lead → Fechamento → Pós-venda</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold/60 flex-shrink-0" />
              <span>Quem faz o quê em cada etapa</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold/60 flex-shrink-0" />
              <span>Camadas do sistema (Kommo/Ploomes/n8n)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold/60 flex-shrink-0" />
              <span>Fases de implementação com critérios de aceite</span>
            </li>
          </ul>
        </div>

        {/* Para quem */}
        <div className="p-4 rounded-lg border border-dark-border bg-dark-bg/30">
          <div className="flex items-center gap-2 mb-3">
            <Users className="h-4 w-4 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">Para quem</span>
          </div>
          <div className="space-y-2">
            {[
              { role: "SDR/SDR IA", desc: "Entender cadência, SLA e handoff" },
              { role: "AE", desc: "Qualificação, proposta e forecast" },
              { role: "CS/PM", desc: "Kickoff, renovação e expansion" },
              { role: "Liderança", desc: "Aprovações, riscos e métricas" },
              { role: "Automations", desc: "Workflows n8n e integrações" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="text-gold font-medium w-20">{item.role}</span>
                <span className="text-dark-muted">→ {item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sistemas */}
        <div className="p-4 rounded-lg border border-dark-border bg-dark-bg/30">
          <div className="flex items-center gap-2 mb-3">
            <Workflow className="h-4 w-4 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">Sistemas Integrados</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {PROJECT.stack.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full text-xs font-medium border border-dark-border bg-dark-card/50 text-dark-text/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Responsáveis */}
        <div className="p-4 rounded-lg border border-dark-border bg-dark-bg/30">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="h-4 w-4 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">Responsáveis Técnicos</span>
          </div>
          <div className="space-y-2">
            {PROJECT.techOwners.map((owner, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-dark-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-gold/60" />
                <span>{owner}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-dark-border">
            <div className="flex items-center justify-between text-xs">
              <span className="text-dark-muted">Propriedade:</span>
              <span className="text-gold font-semibold">{PROJECT.property}</span>
            </div>
            <div className="flex items-center justify-between text-xs mt-1">
              <span className="text-dark-muted">Versão:</span>
              <span className="text-dark-text">{PROJECT.version}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
