import { SectionHeader } from "./SectionHeader";
import { Card, BulletList } from "./Card";
import { Eye, Users, Cpu, Shield } from "lucide-react";

export const OverviewSection = () => (
  <section className="space-y-4">
    <SectionHeader
      id="visao"
      title="Visão geral (Ploomes como CRM único)"
      description="Toda a operação vive no Ploomes: SDR IA, AE, proposta, forecast, documentos, pós-venda e CS. O n8n executa automações e integrações externas."
      icon={Eye}
    />

    <div className="grid gap-4 md:grid-cols-3">
      <Card
        kicker="Papéis"
        title="Quem opera"
        description="Processo end-to-end no mesmo CRM."
        delay={0.1}
      >
        <BulletList
          items={[
            "SDR IA: cadência, qualificação rápida e nurturing.",
            "AE: qualificação profunda, discovery, proposta e negociação.",
            "Barbara/Renan: aprovações e validações específicas.",
            "CSM/PM: kickoff, execução, renovação, expansion, advocacy.",
          ]}
        />
      </Card>

      <Card
        kicker="Tecnologia"
        title="O que fica fora do Ploomes"
        description="Somente integrações e automações."
        delay={0.15}
      >
        <BulletList
          items={[
            "Envio e tracking de email (opens/clicks) via provedor.",
            "Calendário (eventos e lembretes).",
            "ClickUp (projetos e tasks de entrega).",
            "Storage (versionamento de proposta/contrato/anexos).",
            "n8n como orquestrador e motor de cadências.",
          ]}
        />
      </Card>

      <Card
        kicker="Governança"
        title="Qualidade e previsibilidade"
        description="Sem 'dado solto'."
        delay={0.2}
      >
        <BulletList
          items={[
            "Campos obrigatórios por etapa (hard gates).",
            "Forecast e probabilidade com padrão e data.",
            "Documentos sempre versionados e aprovados.",
            "Logs/idempotência para evitar duplicidade.",
            "Dashboards de compliance.",
          ]}
        />
      </Card>
    </div>
  </section>
);
