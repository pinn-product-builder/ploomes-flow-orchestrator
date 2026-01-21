export const PROJECT = {
  title: "Projeto de Implementação — Ploomes (100%) + n8n (Orquestração)",
  company: "Promaflex",
  version: "v1.0",
  owner: "Time Comercial + Operações",
  stack: ["Ploomes", "n8n", "E-mail provider", "Calendário", "ClickUp", "Storage (S3/Supabase/Drive)"],
  northStar:
    "Centralizar toda a operação comercial e pós-venda no Ploomes, com automações via n8n para cadências, scoring, nurturing, documentos, forecast e handoffs.",
};

export const PRINCIPLES = [
  "Ploomes é a fonte da verdade (conta, contato, deal, atividades, documentos e pós-venda).",
  "n8n é o motor de automação (webhooks + cron) e integrações externas (email, calendário, ClickUp, storage).",
  "Cadências e timelines rodam por next_action_at (Cron) para robustez (não depender só de evento).",
  "Campos obrigatórios e hard gates por etapa garantem governança e previsibilidade.",
  "Idempotência (last_action_id) e logs evitam duplicidade (webhooks repetidos e reprocessamento).",
];

export const ROLES = [
  { role: "SDR IA (ou SDR)", responsibilities: ["Contato inicial + cadência", "Qualificação rápida", "Nurturing/reativação (com n8n)", "Handoff para AE"] },
  { role: "AE", responsibilities: ["Qualificação profunda (BANT/fit)", "Discovery", "Proposta e negociação", "Atualizar probabilidade/forecast", "Fechamento"] },
  { role: "Barbara (Liderança/CS/RevOps)", responsibilities: ["Aprovação final de proposta", "Deals estratégicos", "Renovação/retention/expansion", "Advocacy/cases"] },
  { role: "Renan (Técnico)", responsibilities: ["Validação técnica de escopo", "Integrações/arquitetura", "Briefing e handoff para entrega"] },
  { role: "CSM / PM", responsibilities: ["Kickoff", "Onboarding", "Rituais de execução", "Renovação/churn", "Health score/NPS"] },
  { role: "DevOps/Automations", responsibilities: ["n8n e integrações", "Storage e versionamento", "Monitoramento e logs", "Governança de dados"] },
];

export const PIPELINES = [
  {
    name: "Pipeline Comercial (New Business)",
    stages: [
      "Lead Novo",
      "SDR IA — Contato Inicial (Cadência)",
      "Qualificação Rápida (SDR IA)",
      "Qualificação Profunda (AE)",
      "Discovery",
      "Proposta + Negociação",
      "Fechado-Ganho ✅",
      "Fechado-Perdido ❌",
    ],
    notes: [
      "Hard gates por etapa (campos obrigatórios) para evitar avanço sem dados.",
      "Probabilidade/forecast atualizado a partir de Proposta + Negociação.",
    ],
  },
  {
    name: "Pipeline Pós-venda / CS",
    stages: ["Kickoff", "Em execução", "Valor entregue", "Renovação/Retenção", "Advocacy/Cases", "Churn"],
    notes: ["Pode ser pipeline separado ou status dentro do cliente/contrato, dependendo do modelo do Ploomes na conta."],
  },
  {
    name: "Pipeline Expansion (opcional)",
    stages: ["Oportunidade Expansion", "Discovery Expansion", "Proposta Expansion", "Fechado (Ganho/Perdido)"],
    notes: ["Alternativa: usar pipeline comercial e marcar Tipo=New/Expansion."],
  },
];

export const DATA_MODEL = [
  {
    title: "Campos essenciais (Lead/Contato/Empresa)",
    icon: "user",
    bullets: [
      "Nome, Email, Telefone (normalizado E.164)",
      "Empresa (e domínio/CNPJ se disponível) + Cargo",
      "Origem: Hermes Outbound / Inbound Site/LinkedIn / Indicação / Evento/Webinar",
      "Canal 1º contato: Email / LinkedIn / Telefone",
      "Setor, Porte empresa, Faturamento estimado",
      "Stakeholders (lista): nome+cargo+papel+email+fone",
    ],
  },
  {
    title: "Scoring + Routing",
    icon: "target",
    bullets: [
      "Fit ICP (0–40), Engajamento (0–30), Intenção (0–30)",
      "Lead Score total (0–100)",
      "Roteamento: SDR IA / Nurturing Warm / Nurturing Cold",
      "Data routing",
      "Engajamento: Baixo/Médio/Alto + Última interação + Tópicos de interesse",
    ],
  },
  {
    title: "Cadências e controles (técnicos)",
    icon: "clock",
    bullets: [
      "cadence_status (ativa/warm/cold/reativado/encerrado)",
      "cadence_step (D1/D2/D4/D7/D10)",
      "next_action_at (timestamp)",
      "attempt_count (nº tentativas)",
      "last_action_id (idempotência)",
    ],
  },
  {
    title: "Proposta/Negociação/Forecast/Docs",
    icon: "file",
    bullets: [
      "Probabilidade atual (%) + probabilidade máxima atingida + data última atualização",
      "Valores: total + breakdown (setup, recorrente, treinamento, suporte, customizações)",
      "Forma/condições de pagamento + validade + descontos (% + motivo)",
      "Técnico: produto, escopo fases, integrações, customizações, fora escopo, stack/arquitetura, premissas/restrições",
      "Entrega: prazo total, fases, milestones, critérios de aceite, squad/dedicação, horas estimadas",
      "Documentos versionados: proposta, minuta, anexos, NDA + aprovações internas Pinn",
    ],
  },
  {
    title: "Closed Won/Lost + CS",
    icon: "check",
    bullets: [
      "Ganho: produto contratado, TCV, assinatura, vigência, datas do projeto, 1º pagamento, status pagamento",
      "Perdido: motivo principal/secundários, concorrente, por que perdemos, feedback, lições, revisita, analytics (duração/prob máx)",
      "Kickoff: pauta, participantes, outputs e próximos passos",
      "Renovação: vencimento, status 90/60/30, prob renovação, valores, uplift, churn (motivo/evitável/lições)",
      "Expansion: gatilhos, tipo (upsell/cross-sell), produto adicional, valor, métricas (NRR/MRR)",
      "Advocacy: health>85, NPS≥9, tipo advocacy, link case, referências, NPS advocacy",
    ],
  },
];

export const WORKFLOWS = [
  {
    id: "WF-01",
    name: "Entrada de Lead (multicanal) → Ploomes",
    trigger: "Form/site, e-mail, WhatsApp, LinkedIn, indicação, evento",
    steps: [
      "n8n recebe lead (webhook/email ingest/WA provider) e normaliza dados",
      "Dedupe: localizar Empresa/Contato no Ploomes (domínio/CNPJ/email/telefone)",
      "Criar/atualizar Empresa + Contato + Deal no estágio 'Lead Novo'",
      "Preencher origem/canal + campos mínimos + status=Novo",
      "Criar tarefa imediata: 'Primeiro contato' com SLA (ex.: 2h)",
    ],
    outputs: ["ploomes_company_id", "ploomes_contact_id", "ploomes_deal_id", "sla_first_response_due_at"],
  },
  {
    id: "WF-02",
    name: "Scoring + Routing (SDR IA vs Nurturing Warm/Cold)",
    trigger: "Lead Novo criado/atualizado + sinais de engajamento",
    steps: [
      "Calcular Fit (0–40), Engajamento (0–30), Intenção (0–30)",
      "Atualizar Lead Score total + campos de componentes",
      "Routing: ≥70 → SDR IA imediato; 40–69 → Warm; <40 → Cold",
      "Atualizar: roteamento + data routing + responsible (SDR IA ou fila nurturing)",
      "Setar cadence_status e next_action_at conforme rota",
    ],
    outputs: ["lead_score", "routing", "next_action_at"],
  },
  {
    id: "WF-03",
    name: "Cadência SDR IA (D1/D2/D4/D7/D10) — Scheduler robusto",
    trigger: "Cron (hora/dia) + next_action_at vencido",
    steps: [
      "Selecionar deals com cadence_status=ativa e next_action_at <= agora",
      "Executar passo: D1 email, D2 tarefa LinkedIn, D4 email follow-up, D7 tarefa ligação, D10 email final+case",
      "Registrar InteractionRecord/Nota no Ploomes com resultado da tentativa",
      "Atualizar attempt_count, cadence_step e agendar next_action_at",
      "Se respondeu → alertar SDR IA e mover para 'Qualificação Rápida'",
      "Se 5 tentativas sem resposta → mover para nurturing (warm/cold conforme score)",
    ],
    outputs: ["attempt_count", "cadence_step", "last_interaction_at", "engagement_level"],
  },
  {
    id: "WF-04",
    name: "Nurturing Warm/Cold + Reativação",
    trigger: "Cron semanal/mensal + eventos (opens/clicks/downloads/eventos empresa)",
    steps: [
      "Warm: enviar 1x/semana conteúdo; Cold: 1x/mês cases (via email provider)",
      "Atualizar: última interação, engajamento, tópicos de interesse",
      "Se gatilho de reativação (score↑, engajamento alto, evento crítico) → status=Reativado",
      "Mover para SDR IA + criar tarefa 'Tentativa fresh'",
      "Registrar motivo e data de reativação",
    ],
    outputs: ["nurturing_segment", "reactivation_reason", "reactivation_date"],
  },
  {
    id: "WF-05",
    name: "Qualificação Rápida (SDR IA) → Agendar AE",
    trigger: "Deal em 'Qualificação Rápida' + resposta do lead",
    steps: [
      "Exigir campos: dor, área impactada, decision maker, DM alternativo, interesse",
      "Se reunião agendada: enviar confirmação, notificar AE, criar evento calendário",
      "24h antes: lembrete lead + AE",
      "Ao completar: status 'Qualificado p/ AE' + mover para 'Qualificação Profunda (AE)'",
    ],
    outputs: ["meeting_scheduled_at", "ae_owner", "calendar_event_id"],
  },
  {
    id: "WF-06",
    name: "Qualificação Profunda (AE) + Discovery",
    trigger: "Mudança de etapa para AE + campos preenchidos",
    steps: [
      "BANT completo + fit score por critério (Baixo/Médio/Alto)",
      "Se critério ok: mover para Discovery e registrar stakeholders + ferramentas + integrações",
      "Regra: Barbara obrigatória se deal > 300k; Renan quando necessário para validação técnica",
      "Desqualificação se: fit técnico negativo, integrações inviáveis, sem engajamento DM, decisão > 6 meses",
    ],
    outputs: ["bant_status", "fit_score", "discovery_ready"],
  },
  {
    id: "WF-07",
    name: "Proposta + Negociação + Forecast + Documentos (versões + aprovações)",
    trigger: "Deal entra em 'Proposta + Negociação'",
    steps: [
      "Exigir campos comercial/técnico/entrega + forecast (probabilidade atual)",
      "Gerar proposta (template) e salvar versão em Storage; atualizar link/versão no Ploomes",
      "Minuta contrato + anexos + NDA (se aplicável) + aprovações internas Pinn",
      "Alertas: negociação >30d → Barbara; prob<30% → sugerir desqualificar; prob>80% → preparar docs fechamento",
      "Hard gate de ganho: acordo verbal, stakeholders alinhados, jurídico/PO, aprovações cliente, termos finais, prob>80%",
    ],
    outputs: ["proposal_version", "contract_version", "probability", "close_readiness"],
  },
  {
    id: "WF-08",
    name: "Fechado-Ganho (contrato, financeiro, kickoff, ClickUp, CS)",
    trigger: "Deal = Fechado-Ganho",
    steps: [
      "Exigir campos finais: produto, TCV, pagamento, assinatura, vigência, datas do projeto",
      "Financeiro: 1º pagamento + data + status; recorrência (se houver)",
      "Criar evento kickoff calendário + email boas-vindas",
      "Criar workspace/projeto no ClickUp via API + listas por fase + tasks principais",
      "Transferir docs para entrega + briefing completo para Renan",
      "Mover para pipeline Pós-venda/CS e iniciar onboarding + tracking NPS/health",
    ],
    outputs: ["clickup_workspace_id", "kickoff_event_id", "cs_pipeline_item_id"],
  },
  {
    id: "WF-09",
    name: "Fechado-Perdido (motivos, feedback, análise, revisita, nurturing)",
    trigger: "Deal = Fechado-Perdido",
    steps: [
      "Exigir motivo principal/secundários + concorrente + por que perdemos",
      "Feedback cliente (sim/não) + texto; análise interna (lições, erro processo, SPIN, competitividade)",
      "Dados analíticos: estágio perda, duração, horas, prob máx",
      "Criar tarefa 'Feedback call' para AE e compartilhar lições com time",
      "Se reativável: agendar revisita + manter nurturing; senão arquivar",
      "Tag Lost + motivo + monitor concorrente (opcional)",
    ],
    outputs: ["loss_reason", "lessons_learned", "reactivation_plan"],
  },
  {
    id: "WF-10",
    name: "Renovação/Churn + Expansion + Advocacy",
    trigger: "Cron diário/semanal + sinais CS (health/NPS/uso/ROI)",
    steps: [
      "Renovação: 120/90/60/30 dias antes do vencimento → alertas e tarefas CSM/Barbara",
      "Churn: motivo obrigatório + churn evitável? + lições + análise churn dashboard",
      "Expansion: gatilhos (health>80, NPS≥9, uso>80%, ROI>5x) → criar oportunidade expansion",
      "Advocacy: health>85 e NPS≥9 → marcar Case potencial + tarefas marketing (testimonial/case/vídeo/referência)",
    ],
    outputs: ["renewal_status", "churn_reason", "expansion_flag", "advocacy_flag"],
  },
];

export const PHASES = [
  {
    title: "Fase 1 — Fundação Ploomes + Inbound (MVP)",
    duration: "Semana 1–2",
    outcome:
      "Ploomes com pipelines e campos mínimos, entradas multicanal criando Empresa/Contato/Deal, com SLA de 1ª resposta.",
    deliverables: [
      "Pipelines: Comercial, Pós-venda/CS (e Expansion opcional)",
      "Campos mínimos + picklists + owners + permissões",
      "n8n WF-01 (entrada) + dedupe + tarefa SLA",
      "IDs internos, logs e padrão de nomeação",
    ],
  },
  {
    title: "Fase 2 — Scoring + Routing + Cadência SDR IA",
    duration: "Semana 3–4",
    outcome:
      "Lead score funcionando e roteando automaticamente; cadência D1/D2/D4/D7/D10 rodando por scheduler robusto.",
    deliverables: [
      "Campos de scoring + routing + engajamento",
      "Campos técnicos: cadence_status/step/next_action_at/attempt_count/last_action_id",
      "n8n WF-02 (score/routing) + WF-03 (cadência)",
      "Gatilhos: respondeu → qualificação rápida; 5 tentativas → nurturing",
    ],
  },
  {
    title: "Fase 3 — Nurturing Warm/Cold + Reativação",
    duration: "Semana 5",
    outcome:
      "Nurturing por segmento e reativação por sinais (score↑/engajamento/evento empresa).",
    deliverables: [
      "n8n WF-04 (warm semanal / cold mensal + reativação)",
      "Campos: tópicos de interesse, motivo/data reativação",
      "Integração de eventos (opens/clicks/download) se aplicável",
    ],
  },
  {
    title: "Fase 4 — AE (Qualificação Profunda + Discovery) + Proposta/Docs/Forecast",
    duration: "Semana 6–7",
    outcome:
      "AE com BANT/fit, discovery e proposta versionada, com forecast e alertas (aging/probabilidade).",
    deliverables: [
      "Campos BANT/Fit + Discovery + stakeholders/integrations",
      "Campos de proposta (comercial/técnico/entrega) + docs versionados",
      "Forecast: prob atual, prob máx, data atualização",
      "n8n WF-06 (AE/Discovery) + WF-07 (proposta/forecast/docs + alertas)",
    ],
  },
  {
    title: "Fase 5 — Closed Won/Lost + Kickoff + CS + ClickUp",
    duration: "Semana 8–9",
    outcome:
      "Fechamentos automatizados: ganho cria projeto/kickoff/CS; perdido força aprendizado e plano de revisita.",
    deliverables: [
      "Campos finais de ganho (contrato/financeiro) e de perda (motivos/feedback/análise)",
      "n8n WF-08 (ganho) + WF-09 (perdido)",
      "Kickoff padronizado + setup ClickUp + tracking NPS/health",
    ],
  },
  {
    title: "Fase 6 — Renovação/Churn + Expansion + Advocacy (maturidade)",
    duration: "Semana 10+ (contínuo)",
    outcome:
      "CS roda renovação 120/90/60/30, churn estruturado, expansion e cases.",
    deliverables: [
      "Campos de renovação/churn + automações",
      "Pipeline/flags de expansion + métricas (NRR/MRR)",
      "Campos de advocacy + tarefas para marketing",
      "n8n WF-10 (CS/renewal/expansion/advocacy)",
    ],
  },
];

export const ACCEPTANCE = [
  "Entrada multicanal cria/atualiza Empresa+Contato+Deal no Ploomes com SLA e dedupe (sem duplicidade).",
  "Scoring preenche Fit/Engajamento/Intenção + Score total e roteia corretamente (≥70 SDR IA; 40–69 warm; <40 cold).",
  "Cadência SDR IA (D1/D2/D4/D7/D10) roda por scheduler (next_action_at) e registra tentativas/interações.",
  "Nurturing warm/cold envia nas periodicidades corretas e reativa por sinais definidos, registrando motivo/data.",
  "Qualificação rápida agenda AE, cria evento e lembretes (lead + AE), e move etapa corretamente.",
  "AE executa qualificação profunda + discovery com campos obrigatórios e regras (Barbara/Renan por critério).",
  "Proposta gera documentos versionados, mantém aprovações e forecast com alertas (aging/probabilidade).",
  "Ganho dispara kickoff + ClickUp + CS; Perdido exige motivos/feedback/análise e agenda revisita se aplicável.",
];

export const RISKS = [
  { risk: "Sem disciplina de preenchimento → pipeline vira 'banco de notas'", mitigation: "Hard gates por etapa + campos obrigatórios + dashboards de compliance." },
  { risk: "Cadência quebrar por depender só de webhook", mitigation: "Scheduler Cron por next_action_at como fonte de execução." },
  { risk: "Dedupe falhar e criar duplicatas", mitigation: "Chaves: domínio/CNPJ/email/telefone + regra de merge e logs." },
  { risk: "Forecast vira 'opinião' sem padrão", mitigation: "Regras de atualização de probabilidade + obrigatoriedade de data e justificativa." },
  { risk: "Docs sem versionamento geram confusão jurídica", mitigation: "Sempre criar nova versão (nunca sobrescrever) + hash + link fixo por versão." },
];

export const NAV_SECTIONS = [
  { id: "visao", label: "Visão geral" },
  { id: "pipelines", label: "Pipelines" },
  { id: "dados", label: "Modelo de dados" },
  { id: "workflows", label: "Workflows n8n" },
  { id: "fases", label: "Fases do projeto" },
  { id: "aceite", label: "Critérios de aceite" },
  { id: "riscos", label: "Riscos" },
];
