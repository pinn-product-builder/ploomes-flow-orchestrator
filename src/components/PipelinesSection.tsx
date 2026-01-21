import { SectionHeader } from "./SectionHeader";
import { Card, BulletList, Chip } from "./Card";
import { GitBranch } from "lucide-react";
import { PIPELINES } from "@/data/projectData";

export const PipelinesSection = () => (
  <section className="space-y-4">
    <SectionHeader
      id="pipelines"
      title="Pipelines no Ploomes"
      description="Funis necessários para manter comercial e pós-venda organizados."
      icon={GitBranch}
    />

    <div className="grid gap-4 md:grid-cols-3">
      {PIPELINES.map((pipeline, i) => (
        <Card
          key={i}
          kicker={`Pipeline ${i + 1}`}
          title={pipeline.name}
          delay={0.1 + i * 0.05}
        >
          <div className="space-y-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-dark-text/70 mb-2 block">
                Etapas
              </span>
              <div className="flex flex-wrap gap-1.5">
                {pipeline.stages.map((stage, j) => (
                  <Chip key={j}>{stage}</Chip>
                ))}
              </div>
            </div>
            {pipeline.notes && pipeline.notes.length > 0 && (
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-dark-text/70 mb-2 block">
                  Notas
                </span>
                <BulletList items={pipeline.notes} />
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  </section>
);
