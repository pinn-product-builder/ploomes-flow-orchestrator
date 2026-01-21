export const PROJECT = {
  title: "Projeto de Implementação — Kommo (SDR) + Ploomes (AE/Docs/Forecast) + n8n (Orquestração)",
  company: "Promaflex",
  version: "v1.1",
  property: "Pinngrowh",
  owner: "Time Comercial + Operações",
  techOwners: ["Roberto Arruda", "Lucas Henrique Sbazi", "Pedro Henrique Ventura"],
  stack: ["Kommo", "Ploomes", "n8n", "E-mail provider", "Calendário", "ClickUp", "Storage (S3/Supabase/Drive)"],
  northStar:
    "Acelerar o ciclo Lead → Qualificação → Proposta → Fechamento, com SLA de resposta, governança de proposta/forecast e dados consistentes (sem duplicidade).",
};

export const NAV_SECTIONS = [
  { id: "visao", label: "Visão geral" },
  { id: "fronteiras", label: "Fronteiras Kommo/Ploomes/n8n" },
  { id: "papeis", label: "Papéis e responsabilidades" },
  { id: "fases", label: "Fases do projeto" },
  { id: "workflows", label: "Workflows n8n" },
  { id: "aceite", label: "Critérios de aceite" },
  { id: "riscos", label: "Riscos e mitigação" },
];

export const BOUNDARIES = [
  {
    title: "Kommo (System of Engagement)",
    icon: "message-circle",
    bullets: [
      "SDR / Atendimento / Conversa (WhatsApp/DM/E-mail de entrada)",
      "Cadência SDR (D1/D2/D4/D7/D10) e registro de tentativas",
      "Qualificação rápida e transferência para AE",
      "Nurturing leve (se optar por fazer no Kommo)",
      "Fonte da verdade: tentativas, mensagens, tempo de 1ª resposta, status de SDR",
    ],
  },
  {
    title: "Ploomes (System of Record)",
    icon: "database",
    bullets: [
      "AE / Qualificação profunda / Discovery / Proposta / Negociação",
      "Forecast: probabilidade, aging, critérios de avanço",
      "Documentos: proposta (versões), minuta, anexos, NDA, aprovações",
      "Fechado-Ganho: contrato/financeiro/handoff para pós-venda",
      "Fechado-Perdido: motivos estruturados, feedback e análise",
      "Fonte da verdade: probabilidade/forecast, docs e versões, contrato/financeiro, ganho/perda oficiais",
    ],
  },
  {
    title: "n8n (Orquestrador)",
    icon: "workflow",
    bullets: [
      "Dedupe e normalização (email/telefone/domínio/CNPJ se houver)",
      "Scoring + Routing (Fit/Engajamento/Intenção)",
      "Sync mínimo entre CRMs (IDs cruzados + status macro)",
      "Cadências por data (Cron) e alertas por aging",
      "Logs e idempotência (last_action_id) para não duplicar ações",
    ],
  },
];

export const OBJECTIVES = [
  "SLA de 1ª resposta (reduzir lead 'esfriando').",
  "Qualificação previsível (campos mínimos e gates).",
  "Proposta/versionamento e aprovações sem bagunça.",
  "Forecast confiável (probabilidade e aging).",
  "Handoff para execução (ClickUp + kickoff + CS).",
];

export const EXPECTED_RESULTS = [
  "Tempo de 1ª resposta (minutos/horas).",
  "Conversão SDR → AE (qualificados).",
  "Tempo por etapa e gargalos (aging).",
  "Taxa de ganho e motivos de perda (top 5).",
  "Tempo para gerar proposta e fechar.",
];

export const PRINCIPLES = [
  "Master por domínio (Kommo conversa, Ploomes deal oficial).",
  "Sync mínimo (IDs cruzados + status macro).",
  "Idempotência (não duplicar ações).",
  "Logs e auditoria de mudanças críticas.",
  "Automação sempre com fallback (Cron).",
];

export const ROLES = [
  { role: "SDR IA / SDR", responsibilities: ["Responder rápido", "Cadência e tentativas", "Qualificação rápida", "Handoff para AE"] },
  { role: "AE", responsibilities: ["Qualificação profunda (BANT/fit)", "Discovery", "Proposta e negociação", "Atualizar probabilidade/forecast"] },
  { role: "Barbara (Liderança/CS/RevOps)", responsibilities: ["Aprovação final proposta", "Deals estratégicos", "Renovação/retention/expansion", "Advocacy/cases"] },
  { role: "Renan (Técnico)", responsibilities: ["Validação técnica de escopo", "Integrações/arquitetura", "Briefing e handoff de entrega"] },
  { role: "CSM / PM", responsibilities: ["Kickoff", "Onboarding", "Rituais de execução", "Renovação e health score"] },
  { role: "DevOps/Automations", responsibilities: ["n8n, integrações, storage, calendários, ClickUp APIs", "Monitoramento e logs"] },
];

export const PHASES = [
  {
    title: "Fase 1 — Blueprint + Base (MVP operacional)",
    duration: "Semana 1–2",
    outcome:
      "Pipelines, campos mínimos, SLAs e integração de entrada (inbound) rodando: Lead → Kommo → Handoff → Ploomes.",
    deliverables: [
      "Mapa de processos (SDR x AE) + fronteiras Kommo/Ploomes",
      "Campos mínimos e picklists (origem/canal/segmento/score/status)",
      "Pipelines: SDR (Kommo) e AE (Ploomes)",
      "IDs cruzados (kommo_* / ploomes_*) e dedupe básico",
      "WF n8n: Inbound → Kommo, Scoring básico, Handoff → Ploomes",
      "SLA 1ª resposta (alertas e tarefas)",
    ],
  },
  {
    title: "Fase 2 — Scoring, Cadências e Nurturing",
    duration: "Semana 3–4",
    outcome:
      "SDR com cadência D1/D2/D4/D7/D10 e nurturing warm/cold por score, com gatilhos de reativação.",
    deliverables: [
      "Campos de controle: cadence_step, next_action_at, attempt_count, last_action_id",
      "WF n8n: Scheduler de cadência SDR + nurturing warm/cold",
      "Campos: engajamento, última interação, tópicos de interesse",
      "Regras de routing: ≥70 SDR IA; 40–69 warm; <40 cold",
      "Reativação por score/engajamento/evento",
    ],
  },
  {
    title: "Fase 3 — Proposta/Negociação/Forecast + Documentos",
    duration: "Semana 5–6",
    outcome:
      "Ploomes como centro de proposta: versões, aprovações, probabilidade e alertas por aging, com critérios de avanço para ganho/perda.",
    deliverables: [
      "Campos de proposta (comercial/técnico/entrega) completos",
      "Forecast: probabilidade atual + probabilidade máxima + data última atualização",
      "Documentos: proposta versão, minuta versão, NDA/anexos, aprovações internas",
      "WF n8n: aging >30 dias (alerta), prob<30% (sugerir desqualificar), prob>80% (preparar docs)",
      "Checklist hard gate para FECHADO-GANHO",
      "Motivos estruturados e análise para FECHADO-PERDIDO",
    ],
  },
  {
    title: "Fase 4 — Closed Won/Lost + Pós-venda + ClickUp/Kickoff",
    duration: "Semana 7–8",
    outcome:
      "Ganho cria projeto, kickoff e inicia CS. Perdido força feedback/análise e agenda revisita/nurturing.",
    deliverables: [
      "WF n8n: Closed Won → ClickUp workspace, kickoff, email boas-vindas, pipeline pós-venda, briefing técnico",
      "WF n8n: Closed Lost → tarefa feedback call, tags Lost+motivo, revisão interna, revisita se aplicável",
      "Modelo de Kickoff: pauta, outputs, rituais, critérios de aceite, change requests, escalation",
      "Base de pós-venda: health score/NPS tracking e renovação",
    ],
  },
  {
    title: "Fase 5 — Renovação/Expansion/Advocacy (maturidade)",
    duration: "Semana 9–10 (ou contínuo)",
    outcome:
      "CS opera renovação 120/90/60/30, churn estruturado, expansion e geração de cases.",
    deliverables: [
      "Campos + automações de renovação/churn (120/60/30)",
      "Campos + processo de expansion (upsell/cross-sell) + métricas",
      "Advocacy/cases: critérios, campos e tarefas marketing",
      "Dashboards: NRR, churn, expansion revenue, cases gerados",
    ],
  },
];

export const WORKFLOWS = [
  {
    id: "WF-01",
    name: "Inbound → Kommo (criação/atualização + SLA)",
    trigger: "Form/site/WhatsApp/e-mail/LinkedIn (entrada)",
    steps: [
      "Normalizar telefone/email e dedupe (email+telefone+domínio/CNPJ se houver)",
      "Criar/atualizar Lead/Contato no Kommo",
      "Criar tarefa 'Responder em X minutos' e setar status=Novo",
      "Gravar origem/canal/segmento (macro) e timestamp de entrada",
    ],
    outputs: ["kommo_lead_id", "sla_1a_resposta_due_at"],
  },
  {
    id: "WF-02",
    name: "Scoring + Routing (Fit/Engajamento/Intenção)",
    trigger: "Novo lead / atualização de sinais",
    steps: [
      "Calcular Fit (0–40), Engajamento (0–30), Intenção (0–30)",
      "Somar Lead Score (0–100) e gravar",
      "Routing: ≥70 → Transferir para AE; 40–69 → Warm; <40 → Cold",
      "Atualizar campos: lead_score, roteamento, data_routing",
    ],
    outputs: ["lead_score", "routing", "data_routing"],
  },
  {
    id: "WF-03",
    name: "Handoff Kommo → Ploomes (Deal oficial + AE)",
    trigger: "SDR marca 'Qualificado p/ AE' (Kommo)",
    steps: [
      "Criar/atualizar Empresa + Contato no Ploomes (dedupe por domínio/CNPJ)",
      "Criar Deal no pipeline AE no Ploomes",
      "Atribuir responsável (AE) + criar 1ª tarefa (Qualificação Profunda/Discovery)",
      "Gravar IDs cruzados (kommo_* ↔ ploomes_*) em ambos",
    ],
    outputs: ["ploomes_deal_id", "ploomes_company_id"],
  },
  {
    id: "WF-04",
    name: "Cadência SDR + Nurturing Scheduler",
    trigger: "Cron (hora/dia/semana/mês)",
    steps: [
      "Selecionar registros com next_action_at vencido",
      "Executar passo D1/D2/D4/D7/D10 (email/tarefa ligação/tarefa LinkedIn)",
      "Atualizar cadence_step, attempt_count e next_action_at",
      "Warm: 1x/semana | Cold: 1x/mês + cases",
      "Se respondeu → alertar SDR; se 5 tentativas sem resposta → nurturing",
    ],
    outputs: ["cadence_state", "last_interaction_at", "engagement_level"],
  },
  {
    id: "WF-05",
    name: "Ploomes Proposta/Docs (versões + aprovações)",
    trigger: "Deal entra em 'Proposta/Negociação' (Ploomes)",
    steps: [
      "Gerar proposta (template) e salvar versão em Storage",
      "Atualizar campos: proposta_versao, link_proposta, minuta_versao, NDA/anexos",
      "Se desconto > limite → solicitar aprovação interna (Barbara/Renan conforme regra)",
      "Registrar logs (Interaction/Notas) com hash/versão",
    ],
    outputs: ["proposal_version", "proposal_link", "approval_status"],
  },
  {
    id: "WF-06",
    name: "Risk & Forecast (aging/probabilidade/prepare close)",
    trigger: "Cron diário + mudança probabilidade",
    steps: [
      "Se negociação > 30 dias → alerta Barbara (risco esfriar)",
      "Se probabilidade < 30% → sugerir desqualificar (tarefa AE)",
      "Se probabilidade > 80% → checklist 'preparar documentos de fechamento'",
      "Validar hard gate de ganho (stakeholders, jurídico, termos, aprovações)",
    ],
    outputs: ["risk_flags", "close_readiness"],
  },
  {
    id: "WF-07",
    name: "Closed Won (ClickUp + Kickoff + CS)",
    trigger: "Deal = Fechado-Ganho (Ploomes)",
    steps: [
      "Criar workspace/projeto ClickUp via API + listas por fase",
      "Criar evento de kickoff no calendário + lembretes",
      "Enviar email boas-vindas + instruções próximos passos",
      "Mover cliente para pipeline Pós-venda + iniciar onboarding CS",
      "Gerar briefing completo para Renan + transferir docs para entrega",
    ],
    outputs: ["clickup_workspace_id", "kickoff_event_id"],
  },
  {
    id: "WF-08",
    name: "Closed Lost (feedback + análise + revisita)",
    trigger: "Deal = Fechado-Perdido (Ploomes)",
    steps: [
      "Exigir campos: motivo principal/secundários, concorrente, por que perdemos",
      "Criar tarefa feedback call (AE) e registrar lições aprendidas",
      "Tag Lost + motivo; se reativável → agendar revisita + nurturing",
      "Atualizar analytics de perdas (dashboard)",
    ],
    outputs: ["loss_reason", "reactivation_plan"],
  },
  {
    id: "WF-09",
    name: "Renewal/Churn/Expansion/Advocacy",
    trigger: "Cron (diário/semanal) + eventos CS",
    steps: [
      "Renovação: 120/90/60/30 dias → alertas e tarefas CSM/Barbara",
      "Churn: motivo obrigatório + análise + dashboard churn",
      "Expansion: gatilhos (health>80, NPS≥9, uso>80%) → criar oportunidade expansion",
      "Advocacy: health>85 e NPS≥9 → marcar 'Case potencial' + tarefas marketing",
    ],
    outputs: ["renewal_status", "expansion_pipeline_id", "advocacy_flag"],
  },
];

export const ACCEPTANCE = [
  "Lead inbound cria registro no Kommo com SLA e campos mínimos em < 2 minutos",
  "Routing por score preenche lead_score + roteamento + data_routing sem duplicidade",
  "Handoff cria Deal no Ploomes e mantém IDs cruzados (Kommo↔Ploomes) sempre",
  "Cadência SDR executa D1/D2/D4/D7/D10 com controle de tentativa e logs",
  "Proposta no Ploomes gera versões (v1/v2/…) e mantém link + aprovadores",
  "Forecast e alertas: negociação>30d, prob<30%, prob>80% funcionando",
  "Closed Won cria ClickUp + kickoff + pós-venda automaticamente",
  "Closed Lost exige motivos/feedback e gera tarefa de feedback call",
];

export const RISKS = [
  { risk: "Divergência de dados entre Kommo e Ploomes", mitigation: "Definir master por domínio + sync mínimo + IDs cruzados + logs." },
  { risk: "Duplicidade (mesmo lead vira 2 empresas/deals)", mitigation: "Dedupe por email/telefone/domínio/CNPJ + idempotência (last_action_id)." },
  { risk: "Cadência falhar por dependência de webhook", mitigation: "Cron scheduler (next_action_at) como fonte de execução." },
  { risk: "Time não adere ao processo (campos obrigatórios)", mitigation: "Gates por etapa + treinamento + dashboards de compliance." },
  { risk: "Aprovação de proposta vira gargalo", mitigation: "SLA de aprovação + alertas + campos objetivos (desconto/motivo/escopo)." },
];
