import { SectionHeader } from "./SectionHeader";
import { Card, BulletList } from "./Card";
import { Database, User, Target, Clock, FileText, CheckCircle } from "lucide-react";
import { DATA_MODEL } from "@/data/projectData";

const iconMap: Record<string, typeof User> = {
  user: User,
  target: Target,
  clock: Clock,
  file: FileText,
  check: CheckCircle,
};

export const DataModelSection = () => (
  <section className="space-y-4">
    <SectionHeader
      id="dados"
      title="Modelo de dados"
      description="A base para scoring, cadências, proposta, forecast, CS e analytics."
      icon={Database}
    />

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {DATA_MODEL.map((block, i) => {
        const Icon = iconMap[block.icon] || Database;
        return (
          <Card
            key={i}
            title={block.title}
            delay={0.1 + i * 0.05}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gold/10 border border-gold/20">
                <Icon className="h-3.5 w-3.5 text-gold" />
              </div>
            </div>
            <BulletList items={block.bullets} />
          </Card>
        );
      })}
    </div>
  </section>
);
