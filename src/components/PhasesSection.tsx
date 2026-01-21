import { SectionHeader } from "./SectionHeader";
import { Card, BulletList } from "./Card";
import { Calendar } from "lucide-react";
import { PHASES } from "@/data/projectData";

export const PhasesSection = () => (
  <section className="space-y-4">
    <SectionHeader
      id="fases"
      title="Fases do projeto (roadmap)"
      description="Implementação incremental para entrar em produção rápido e evoluir com segurança."
      icon={Calendar}
    />

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {PHASES.map((phase, i) => (
        <Card
          key={i}
          kicker={`Fase ${i + 1} • ${phase.duration}`}
          title={phase.title}
          description={phase.outcome}
          delay={0.1 + i * 0.05}
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-dark-text/70 mb-2 block">
              Entregáveis
            </span>
            <BulletList items={phase.deliverables} />
          </div>
        </Card>
      ))}
    </div>
  </section>
);
