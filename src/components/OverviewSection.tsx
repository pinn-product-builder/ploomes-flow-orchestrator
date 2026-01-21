import { SectionHeader } from "./SectionHeader";
import { Card, BulletList } from "./Card";
import { Eye } from "lucide-react";
import { OBJECTIVES, EXPECTED_RESULTS, PRINCIPLES } from "@/data/projectData";

export const OverviewSection = () => (
  <section className="space-y-4">
    <SectionHeader
      id="visao"
      title="Visão geral do projeto"
      description="Estrutura recomendada: Kommo para SDR/conversa e execução rápida, Ploomes para AE/forecast/documentos e 'fonte da verdade', e n8n para dedupe, roteamento, cadências e integrações."
      icon={Eye}
    />

    <div className="grid gap-4 md:grid-cols-3">
      <Card kicker="Objetivos" title="O que precisa melhorar" description="Velocidade na ponta + governança no núcleo." delay={0.1}>
        <BulletList items={OBJECTIVES} />
      </Card>

      <Card kicker="Resultados esperados" title="KPIs e ganhos" description="Medir e ajustar." delay={0.15}>
        <BulletList items={EXPECTED_RESULTS} />
      </Card>

      <Card kicker="Princípios" title="Regras do jogo" description="Sem CRM duplo caótico." delay={0.2}>
        <BulletList items={PRINCIPLES} />
      </Card>
    </div>
  </section>
);
