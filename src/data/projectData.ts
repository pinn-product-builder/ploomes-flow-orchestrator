// ============= PROJECT CONFIG =============
export const PROJECT = {
  title: "Blueprint Interno — Kommo + Ploomes + n8n",
  company: "Promaflex",
  version: "v1.1",
  property: "Pinngrowh",
  owner: "Time Comercial + Operações",
  techOwners: ["Roberto Arruda", "Lucas Henrique Sbazi", "Pedro Henrique Ventura"],
  stack: ["Kommo", "Ploomes", "n8n", "E-mail provider", "Calendário", "ClickUp", "Storage"],
  northStar:
    "Acelerar o ciclo Lead → Qualificação → Proposta → Fechamento, com SLA de resposta, governança de proposta/forecast e dados consistentes (sem duplicidade).",
};

// ============= NAVIGATION =============
export const NAV_SECTIONS = [
  { id: "resumo", label: "Resumo Executivo" },
  { id: "arquitetura", label: "Arquitetura" },
  { id: "regras", label: "Regras de Ouro" },
  { id: "tabela", label: "Tabela Executiva" },
  { id: "jornada", label: "Jornada Completa" },
  { id: "workflows", label: "Módulos n8n" },
  { id: "roadmap", label: "Roadmap" },
  { id: "aceite", label: "Critérios de Aceite" },
  { id: "riscos", label: "Riscos" },
];

// ============= ARCHITECTURE LAYERS =============
export const ARCHITECTURE = {
  operational: {
    title: "Camada Operacional",
    subtitle: "O time usa",
    systems: [
      {
        name: "Kommo",
        role: "System of Engagement",
        icon: "message-circle",
        items: [
          "SDR / Conversa / Cadência",
          "SLA 1ª resposta",
          "Qualificação rápida",
          "WhatsApp / DM / Email entrada",
        ],
      },
      {
        name: "Ploomes",
        role: "System of Record",
        icon: "database",
        items: [
          "AE / Governança / Proposta",
          "Forecast / Documentos",
          "Ganho-Perda oficiais",
          "Pós-venda / CS",
        ],
      },
    ],
  },
  orchestration: {
    title: "Camada de Orquestração",
    subtitle: "Automação centralizada",
    systems: [
      {
        name: "n8n",
        role: "Orquestrador",
        icon: "workflow",
        items: [
          "Dedupe e normalização",
          "Scoring + Routing",
          "Sync mínimo entre CRMs",
          "Cadências por Cron",
          "Logs e idempotência",
        ],
      },
    ],
  },
  services: {
    title: "Camada de Serviços",
    subtitle: "Integrações externas",
    systems: [
      { name: "Email Provider", icon: "mail", items: ["Envio + opens/clicks"] },
      { name: "Calendário", icon: "calendar", items: ["Eventos + lembretes"] },
      { name: "ClickUp", icon: "check-square", items: ["Projeto + listas + tasks"] },
      { name: "Storage", icon: "folder", items: ["Proposta/contrato versionados"] },
      { name: "Base de Dados", icon: "database", items: ["Logs (opcional: Supabase)"] },
    ],
  },
};

// ============= GOLDEN RULES =============
export const GOLDEN_RULES = {
  sourceOfTruth: {
    title: "Fonte da Verdade por Domínio",
    kommo: [
      "Conversa e mensagens",
      "Tentativas de contato",
      "Cadência SDR",
      "Tempo de 1ª resposta",
      "Status SDR",
    ],
    ploomes: [
      "Deal oficial",
      "Probabilidade/Forecast",
      "Proposta/Contratos (versões)",
      "Aprovações internas",
      "Ganho/Perda oficiais",
      "Pós-venda/CS",
    ],
  },
  syncMinimal: {
    title: "Sync Mínimo (não espelhar tudo)",
    items: [
      "IDs cruzados: kommo_lead_id ↔ ploomes_deal_id",
      "Status macro: SDR / AE / Proposta / Ganho / Perdido / Nurturing",
      "Lead score + roteamento",
      "Links de documentos (proposta/minuta/NDA/anexos)",
      "(Opcional) Próxima ação/responsável",
    ],
  },
  idempotency: {
    title: "Idempotência e Logs",
    items: [
      "last_action_id para impedir duplicidade",
      "Log de sync (o que mudou, quando, em qual sistema)",
      "Fallback por Cron (não depender só de webhook)",
    ],
  },
};

// ============= EXECUTIVE TABLE =============
export const EXECUTIVE_TABLE = [
  {
    stage: "Entrada do Lead",
    system: "Kommo",
    owner: "SDR",
    inputs: "Lead + canal",
    automation: "SLA 1ª resposta",
    output: "Atendimento iniciado",
  },
  {
    stage: "Scoring & Routing",
    system: "n8n",
    owner: "Automação",
    inputs: "Sinais + ICP",
    automation: "Score/rota",
    output: "Rota definida",
  },
  {
    stage: "Cadência SDR",
    system: "Kommo + n8n",
    owner: "SDR",
    inputs: "Rota + próximos passos",
    automation: "Scheduler + alertas",
    output: "Qualificar/nurturing",
  },
  {
    stage: "Qualificação Rápida",
    system: "Kommo",
    owner: "SDR",
    inputs: "Dor/DM/interesse",
    automation: "Agenda AE + calendário",
    output: "Handoff pronto",
  },
  {
    stage: "Handoff → Ploomes",
    system: "n8n",
    owner: "Automação",
    inputs: "Qualificado",
    automation: "Cria deal Ploomes",
    output: "AE recebe deal oficial",
  },
  {
    stage: "Qualificação Profunda",
    system: "Ploomes",
    owner: "AE",
    inputs: "BANT/fit/stakeholders",
    automation: "Gates + tasks",
    output: "Pronto p/ proposta",
  },
  {
    stage: "Proposta/Negociação",
    system: "Ploomes + n8n",
    owner: "AE",
    inputs: "Escopo/valores",
    automation: "Versões + aprovações + alertas",
    output: "Pronto p/ fechar",
  },
  {
    stage: "Fechado-Ganho",
    system: "Ploomes + n8n",
    owner: "AE/CS",
    inputs: "Contrato/pagamento",
    automation: "ClickUp + kickoff + CS",
    output: "Execução iniciada",
  },
  {
    stage: "Fechado-Perdido",
    system: "Ploomes + n8n",
    owner: "AE/Liderança",
    inputs: "Motivos",
    automation: "Feedback + análise + nurturing",
    output: "Lições registradas",
  },
  {
    stage: "Renovação/Expansion/Advocacy",
    system: "Ploomes + n8n",
    owner: "CS/Liderança",
    inputs: "Health/NPS/vencimento",
    automation: "Alertas + pipeline",
    output: "Retenção/expansion/case",
  },
];

// ============= JOURNEY STAGES =============
export const JOURNEY_STAGES = [
  {
    id: 0,
    name: "Entrada do Lead + SLA",
    objective: "Capturar lead multicanal e garantir resposta rápida com SLA definido.",
    where: ["Kommo"],
    owner: "SDR",
    requiredFields: [
      "Nome, Email, Telefone (normalizado)",
      "Origem (site/WhatsApp/LinkedIn/indicação)",
      "Canal de 1º contato",
      "Timestamp de entrada",
    ],
    automations: [
      "Dedupe por email/telefone/domínio",
      "Criação automática de Lead/Contato",
      "Tarefa 'Responder em X min' com SLA",
      "Alerta se SLA vencido",
    ],
    advanceCriteria: "Primeiro contato realizado dentro do SLA.",
    disqualifyCriteria: "Email/telefone inválido (após validação).",
    outputs: {
      kommo: ["kommo_lead_id", "sla_due_at", "status=Novo"],
      ploomes: [],
    },
  },
  {
    id: 1,
    name: "Scoring & Routing",
    objective: "Calcular score do lead e rotear para SDR IA, Warm ou Cold.",
    where: ["n8n"],
    owner: "Automação",
    requiredFields: [
      "Fit ICP (0–40)",
      "Engajamento (0–30)",
      "Intenção (0–30)",
      "Lead Score Total (0–100)",
    ],
    automations: [
      "Calcular componentes do score",
      "Routing: ≥70 → SDR IA; 40–69 → Warm; <40 → Cold",
      "Atualizar campos no Kommo",
      "Definir next_action_at",
    ],
    advanceCriteria: "Score ≥ 70 → vai direto para SDR IA.",
    disqualifyCriteria: "Score < 40 → Cold nurturing.",
    outputs: {
      kommo: ["lead_score", "routing", "data_routing"],
      ploomes: [],
    },
  },
  {
    id: 2,
    name: "Cadência SDR (D1/D2/D4/D7/D10)",
    objective: "Executar sequência de contatos até resposta ou exaustão.",
    where: ["Kommo", "n8n"],
    owner: "SDR",
    requiredFields: [
      "cadence_status (ativa/warm/cold/encerrado)",
      "cadence_step (D1/D2/D4/D7/D10)",
      "next_action_at (timestamp)",
      "attempt_count (nº tentativas)",
      "last_action_id (idempotência)",
    ],
    automations: [
      "Cron scheduler seleciona leads com next_action_at vencido",
      "Executa passo: D1 email, D2 LinkedIn, D4 email, D7 ligação, D10 email+case",
      "Registra tentativa e atualiza contadores",
      "Se respondeu → mover para Qualificação Rápida",
      "Se 5 tentativas sem resposta → mover para Nurturing",
    ],
    advanceCriteria: "Lead respondeu e demonstrou interesse.",
    disqualifyCriteria: "5 tentativas sem resposta → Nurturing warm/cold.",
    outputs: {
      kommo: ["cadence_step", "attempt_count", "last_interaction_at", "engagement_level"],
      ploomes: [],
    },
  },
  {
    id: 3,
    name: "Qualificação Rápida + Agendamento AE",
    objective: "Validar interesse e agendar reunião com AE.",
    where: ["Kommo"],
    owner: "SDR",
    requiredFields: [
      "Dor principal identificada",
      "Área impactada",
      "Decision Maker (DM) confirmado",
      "DM alternativo (se houver)",
      "Nível de interesse (Baixo/Médio/Alto)",
    ],
    automations: [
      "Validar campos obrigatórios antes de avançar",
      "Criar evento no calendário",
      "Enviar confirmação para lead + AE",
      "Lembrete 24h antes",
    ],
    advanceCriteria: "Reunião agendada e confirmada.",
    disqualifyCriteria: "Lead não tem fit mínimo ou não responde após tentativas.",
    outputs: {
      kommo: ["meeting_scheduled_at", "ae_owner", "status=Qualificado p/ AE"],
      ploomes: [],
    },
  },
  {
    id: 4,
    name: "Handoff Kommo → Ploomes",
    objective: "Criar deal oficial no Ploomes com IDs cruzados.",
    where: ["n8n"],
    owner: "Automação",
    requiredFields: [
      "Todos os campos de qualificação rápida",
      "kommo_lead_id",
      "Email e telefone validados",
    ],
    automations: [
      "Dedupe empresa por domínio/CNPJ no Ploomes",
      "Criar/atualizar Empresa + Contato no Ploomes",
      "Criar Deal no pipeline AE",
      "Gravar IDs cruzados em ambos os sistemas",
      "Criar 1ª tarefa para AE: 'Qualificação Profunda'",
    ],
    advanceCriteria: "Deal criado no Ploomes com IDs cruzados gravados.",
    disqualifyCriteria: null,
    outputs: {
      kommo: ["ploomes_deal_id", "status=Handoff Realizado"],
      ploomes: ["kommo_lead_id", "ploomes_deal_id", "ploomes_company_id"],
    },
  },
  {
    id: 5,
    name: "Qualificação Profunda (AE)",
    objective: "Validar BANT completo e fit detalhado.",
    where: ["Ploomes"],
    owner: "AE",
    requiredFields: [
      "Budget (orçamento disponível)",
      "Authority (quem decide)",
      "Need (necessidade confirmada)",
      "Timeline (prazo de decisão)",
      "Fit score por critério (Baixo/Médio/Alto)",
    ],
    automations: [
      "Validar campos obrigatórios (hard gate)",
      "Notificar Barbara se deal > 300k",
      "Notificar Renan se validação técnica necessária",
    ],
    advanceCriteria: "BANT completo e fit score ≥ Médio em todos os critérios.",
    disqualifyCriteria: "Fit técnico negativo, sem orçamento, decisão > 6 meses.",
    outputs: {
      kommo: [],
      ploomes: ["bant_status", "fit_score", "discovery_ready=true"],
    },
  },
  {
    id: 6,
    name: "Discovery",
    objective: "Mapear stakeholders, ferramentas, integrações e escopo técnico.",
    where: ["Ploomes"],
    owner: "AE + Renan (se regra)",
    requiredFields: [
      "Lista de stakeholders (nome/cargo/papel/email)",
      "Ferramentas atuais",
      "Integrações necessárias",
      "Dores específicas por área",
      "Expectativas de resultado",
    ],
    automations: [
      "Regra: Barbara obrigatória se deal > 300k",
      "Regra: Renan obrigatório se integração complexa",
      "Criar tarefa de validação técnica se aplicável",
    ],
    advanceCriteria: "Discovery completo com escopo técnico validado.",
    disqualifyCriteria: "Integrações inviáveis, complexidade fora do escopo.",
    outputs: {
      kommo: [],
      ploomes: ["stakeholders_list", "integrations_required", "technical_notes"],
    },
  },
  {
    id: 7,
    name: "Proposta + Negociação + Forecast + Docs",
    objective: "Gerar proposta versionada, manter forecast atualizado e gerir aprovações.",
    where: ["Ploomes", "n8n"],
    owner: "AE",
    requiredFields: [
      "Valores: total + breakdown (setup/recorrente/suporte)",
      "Condições de pagamento + validade",
      "Probabilidade atual (%)",
      "Data última atualização de probabilidade",
      "Escopo: fases, milestones, critérios de aceite",
    ],
    automations: [
      "Gerar proposta (template) e salvar versão em Storage",
      "Atualizar link/versão no Ploomes",
      "Se desconto > limite → solicitar aprovação Barbara",
      "Alerta: negociação > 30 dias → Barbara",
      "Alerta: prob < 30% → sugerir desqualificar",
      "Alerta: prob > 80% → preparar docs de fechamento",
    ],
    advanceCriteria: "Acordo verbal + stakeholders alinhados + prob > 80%.",
    disqualifyCriteria: "Prob < 30% por mais de 15 dias sem evolução.",
    outputs: {
      kommo: ["status=Proposta"],
      ploomes: ["proposal_version", "proposal_link", "probability", "approval_status"],
    },
  },
  {
    id: 8,
    name: "Fechado-Ganho",
    objective: "Registrar contrato, disparar execução e iniciar CS.",
    where: ["Ploomes", "n8n"],
    owner: "AE → CS",
    requiredFields: [
      "Produto contratado",
      "TCV (Total Contract Value)",
      "Data assinatura + vigência",
      "1º pagamento + status",
      "Datas do projeto",
    ],
    automations: [
      "Criar workspace/projeto no ClickUp",
      "Criar evento kickoff no calendário",
      "Enviar email boas-vindas",
      "Mover para pipeline Pós-venda/CS",
      "Gerar briefing técnico para Renan",
      "Iniciar tracking NPS/health",
    ],
    advanceCriteria: "Contrato assinado e 1º pagamento confirmado.",
    disqualifyCriteria: null,
    outputs: {
      kommo: ["status=Ganho"],
      ploomes: ["clickup_workspace_id", "kickoff_event_id", "cs_pipeline_item_id"],
    },
  },
  {
    id: 9,
    name: "Fechado-Perdido",
    objective: "Registrar motivos, capturar aprendizado e definir plano de revisita.",
    where: ["Ploomes", "n8n"],
    owner: "AE + Liderança",
    requiredFields: [
      "Motivo principal",
      "Motivos secundários",
      "Concorrente (se houver)",
      "Por que perdemos (texto)",
      "Feedback do cliente (sim/não + texto)",
    ],
    automations: [
      "Exigir campos obrigatórios (hard gate)",
      "Criar tarefa 'Feedback call' para AE",
      "Registrar lições aprendidas",
      "Se reativável → agendar revisita + manter nurturing",
      "Tag Lost + motivo + atualizar dashboard",
    ],
    advanceCriteria: null,
    disqualifyCriteria: null,
    outputs: {
      kommo: ["status=Perdido"],
      ploomes: ["loss_reason", "lessons_learned", "reactivation_plan"],
    },
  },
  {
    id: 10,
    name: "Kickoff e CS Onboarding",
    objective: "Iniciar execução com pauta estruturada e rituais definidos.",
    where: ["Ploomes", "n8n", "ClickUp"],
    owner: "CS/PM",
    requiredFields: [
      "Pauta do kickoff",
      "Participantes confirmados",
      "Outputs esperados",
      "Próximos passos",
      "Critérios de aceite do projeto",
    ],
    automations: [
      "Enviar convite com pauta",
      "Criar listas/tasks no ClickUp por fase",
      "Registrar ata do kickoff no Ploomes",
      "Iniciar tracking de health score",
      "Agendar check-ins periódicos",
    ],
    advanceCriteria: "Kickoff realizado e projeto iniciado no ClickUp.",
    disqualifyCriteria: null,
    outputs: {
      kommo: [],
      ploomes: ["kickoff_completed", "onboarding_status", "health_score"],
    },
  },
  {
    id: 11,
    name: "Renovação / Churn",
    objective: "Gerenciar vencimentos e evitar churn com ações proativas.",
    where: ["Ploomes", "n8n"],
    owner: "CS + Liderança",
    requiredFields: [
      "Data de vencimento",
      "Status renovação (120/90/60/30 dias)",
      "Probabilidade de renovação",
      "Valores propostos + uplift",
      "Motivo de churn (se aplicável)",
    ],
    automations: [
      "Alertas: 120/90/60/30 dias antes do vencimento",
      "Criar tarefas para CSM e Barbara",
      "Se churn: exigir motivo + análise evitabilidade",
      "Atualizar dashboard de churn",
    ],
    advanceCriteria: "Renovação assinada e pagamento confirmado.",
    disqualifyCriteria: null,
    outputs: {
      kommo: [],
      ploomes: ["renewal_status", "churn_reason", "churn_avoidable"],
    },
  },
  {
    id: 12,
    name: "Expansion",
    objective: "Identificar e converter oportunidades de upsell/cross-sell.",
    where: ["Ploomes", "n8n"],
    owner: "CS + AE",
    requiredFields: [
      "Gatilho de expansion",
      "Tipo (upsell/cross-sell)",
      "Produto adicional",
      "Valor estimado",
    ],
    automations: [
      "Gatilhos: health > 80, NPS ≥ 9, uso > 80%, ROI > 5x",
      "Criar oportunidade no pipeline Expansion",
      "Notificar AE responsável",
      "Atualizar métricas NRR/MRR",
    ],
    advanceCriteria: "Proposta de expansion aceita.",
    disqualifyCriteria: null,
    outputs: {
      kommo: [],
      ploomes: ["expansion_flag", "expansion_value", "expansion_type"],
    },
  },
  {
    id: 13,
    name: "Advocacy / Cases",
    objective: "Gerar cases, referências e promotores da marca.",
    where: ["Ploomes", "n8n"],
    owner: "CS + Marketing",
    requiredFields: [
      "Health score > 85",
      "NPS ≥ 9",
      "Tipo de advocacy (testimonial/case/vídeo/referência)",
      "Link do case (quando publicado)",
    ],
    automations: [
      "Identificar clientes elegíveis automaticamente",
      "Criar tarefas para marketing",
      "Registrar aceite do cliente",
      "Atualizar NPS de advocacy",
    ],
    advanceCriteria: "Case publicado ou referência fornecida.",
    disqualifyCriteria: null,
    outputs: {
      kommo: [],
      ploomes: ["advocacy_flag", "advocacy_type", "case_link"],
    },
  },
];

// ============= WORKFLOW MODULES =============
export const WORKFLOW_MODULES = [
  {
    id: "WF-01",
    name: "Inbound → Kommo (dedupe + SLA)",
    trigger: "Form/site/WhatsApp/email/LinkedIn (entrada)",
    description: "Captura e normaliza leads de múltiplos canais.",
    steps: [
      "Normalizar telefone (E.164) e email",
      "Dedupe por email + telefone + domínio/CNPJ",
      "Criar/atualizar Lead/Contato no Kommo",
      "Criar tarefa 'Responder em X minutos'",
      "Gravar origem/canal/timestamp",
    ],
    kommoFields: ["kommo_lead_id", "origem", "canal", "status=Novo", "sla_due_at"],
    ploomesFields: [],
    outputs: ["kommo_lead_id", "sla_1a_resposta_due_at"],
  },
  {
    id: "WF-02",
    name: "Scoring + Routing",
    trigger: "Novo lead / atualização de sinais",
    description: "Calcula score e define rota do lead.",
    steps: [
      "Calcular Fit (0–40), Engajamento (0–30), Intenção (0–30)",
      "Somar Lead Score (0–100)",
      "Routing: ≥70 → SDR IA; 40–69 → Warm; <40 → Cold",
      "Atualizar campos e definir next_action_at",
    ],
    kommoFields: ["lead_score", "fit_score", "engagement_score", "intent_score", "routing", "data_routing"],
    ploomesFields: [],
    outputs: ["lead_score", "routing", "next_action_at"],
  },
  {
    id: "WF-03",
    name: "Handoff → Ploomes (deal oficial + IDs)",
    trigger: "SDR marca 'Qualificado p/ AE' no Kommo",
    description: "Cria deal oficial no Ploomes com IDs cruzados.",
    steps: [
      "Dedupe empresa por domínio/CNPJ no Ploomes",
      "Criar/atualizar Empresa + Contato no Ploomes",
      "Criar Deal no pipeline AE",
      "Gravar IDs cruzados (kommo_* ↔ ploomes_*)",
      "Criar 1ª tarefa AE: 'Qualificação Profunda'",
    ],
    kommoFields: ["ploomes_deal_id", "status=Handoff"],
    ploomesFields: ["kommo_lead_id", "ploomes_deal_id", "ploomes_company_id", "ae_owner"],
    outputs: ["ploomes_deal_id", "ploomes_company_id"],
  },
  {
    id: "WF-04",
    name: "Cadência SDR + Nurturing (Cron)",
    trigger: "Cron (hora/dia/semana/mês)",
    description: "Executa cadência por scheduler robusto.",
    steps: [
      "Selecionar registros com next_action_at vencido",
      "Executar passo D1/D2/D4/D7/D10",
      "Atualizar cadence_step, attempt_count, next_action_at",
      "Warm: 1x/semana | Cold: 1x/mês + cases",
      "Se respondeu → alertar SDR",
      "Se 5 tentativas → mover para nurturing",
    ],
    kommoFields: ["cadence_step", "attempt_count", "last_interaction_at", "engagement_level", "last_action_id"],
    ploomesFields: [],
    outputs: ["cadence_state", "engagement_level"],
  },
  {
    id: "WF-05",
    name: "Proposta/Docs/Aprovações",
    trigger: "Deal entra em 'Proposta/Negociação' (Ploomes)",
    description: "Gera proposta versionada e gerencia aprovações.",
    steps: [
      "Gerar proposta (template) e salvar versão em Storage",
      "Atualizar campos: proposta_versao, link_proposta",
      "Se desconto > limite → solicitar aprovação (Barbara/Renan)",
      "Registrar logs com hash/versão",
      "Minuta + anexos + NDA se aplicável",
    ],
    kommoFields: ["status=Proposta"],
    ploomesFields: ["proposal_version", "proposal_link", "minuta_version", "approval_status", "nda_status"],
    outputs: ["proposal_version", "proposal_link", "approval_status"],
  },
  {
    id: "WF-06",
    name: "Aging/Probabilidade/Alertas",
    trigger: "Cron diário + mudança de probabilidade",
    description: "Monitora riscos e prepara fechamento.",
    steps: [
      "Se negociação > 30 dias → alerta Barbara",
      "Se probabilidade < 30% → tarefa 'sugerir desqualificar'",
      "Se probabilidade > 80% → checklist 'preparar docs fechamento'",
      "Validar hard gate de ganho",
    ],
    kommoFields: [],
    ploomesFields: ["risk_flags", "close_readiness", "aging_days"],
    outputs: ["risk_flags", "close_readiness"],
  },
  {
    id: "WF-07",
    name: "Closed Won (ClickUp + Kickoff + CS)",
    trigger: "Deal = Fechado-Ganho (Ploomes)",
    description: "Dispara execução e inicia pós-venda.",
    steps: [
      "Criar workspace/projeto ClickUp via API",
      "Criar listas por fase + tasks principais",
      "Criar evento kickoff no calendário",
      "Enviar email boas-vindas",
      "Mover para pipeline Pós-venda/CS",
      "Gerar briefing técnico para Renan",
    ],
    kommoFields: ["status=Ganho"],
    ploomesFields: ["clickup_workspace_id", "kickoff_event_id", "cs_pipeline_item_id", "briefing_sent"],
    outputs: ["clickup_workspace_id", "kickoff_event_id"],
  },
  {
    id: "WF-08",
    name: "Closed Lost (feedback + análise)",
    trigger: "Deal = Fechado-Perdido (Ploomes)",
    description: "Captura aprendizado e define revisita.",
    steps: [
      "Exigir campos: motivo principal/secundários, concorrente",
      "Criar tarefa 'Feedback call' para AE",
      "Registrar lições aprendidas",
      "Se reativável → agendar revisita + nurturing",
      "Tag Lost + motivo + atualizar dashboard",
    ],
    kommoFields: ["status=Perdido"],
    ploomesFields: ["loss_reason_primary", "loss_reason_secondary", "competitor", "lessons_learned", "reactivation_date"],
    outputs: ["loss_reason", "reactivation_plan"],
  },
  {
    id: "WF-09",
    name: "Renewals/Churn/Expansion/Advocacy",
    trigger: "Cron (diário/semanal) + eventos CS",
    description: "Gerencia ciclo de vida do cliente.",
    steps: [
      "Renovação: 120/90/60/30 dias → alertas CSM/Barbara",
      "Churn: motivo obrigatório + análise + dashboard",
      "Expansion: health>80, NPS≥9, uso>80% → criar oportunidade",
      "Advocacy: health>85, NPS≥9 → marcar 'Case potencial'",
    ],
    kommoFields: [],
    ploomesFields: ["renewal_status", "renewal_prob", "churn_reason", "expansion_flag", "advocacy_flag"],
    outputs: ["renewal_status", "expansion_pipeline_id", "advocacy_flag"],
  },
];

// ============= ROADMAP PHASES =============
export const ROADMAP = [
  {
    phase: 1,
    title: "MVP: Base + Inbound + IDs Cruzados",
    objective: "Kommo SDR + Ploomes AE rodando com entrada de leads, dedupe e handoff básico.",
    duration: "Semana 1–2",
    deliverables: [
      "Pipelines: SDR (Kommo) e AE (Ploomes)",
      "Campos mínimos + picklists (origem/canal/status)",
      "WF-01: Inbound → Kommo",
      "WF-03: Handoff → Ploomes",
      "IDs cruzados (kommo_* ↔ ploomes_*)",
      "Dedupe básico + SLA 1ª resposta",
    ],
    dependencies: ["Acesso Kommo + Ploomes configurado", "n8n operacional"],
    acceptance: [
      "Lead inbound cria registro no Kommo em < 2 min",
      "Handoff cria deal no Ploomes com IDs cruzados",
      "SLA de 1ª resposta funcionando com alertas",
    ],
  },
  {
    phase: 2,
    title: "Scoring + Cadência SDR",
    objective: "Lead score funcionando e cadência D1/D2/D4/D7/D10 por scheduler.",
    duration: "Semana 3–4",
    deliverables: [
      "Campos: cadence_step, next_action_at, attempt_count, last_action_id",
      "WF-02: Scoring + Routing",
      "WF-04: Cadência SDR + Nurturing (Cron)",
      "Regras: ≥70 SDR IA; 40–69 Warm; <40 Cold",
      "Gatilhos de reativação",
    ],
    dependencies: ["Fase 1 completa", "Regras de scoring definidas"],
    acceptance: [
      "Score preenche corretamente e roteia sem duplicidade",
      "Cadência executa passos e registra tentativas",
      "5 tentativas sem resposta → nurturing",
    ],
  },
  {
    phase: 3,
    title: "Handoff Completo + Gates SDR/AE",
    objective: "Handoff robusto com validação de campos e discovery estruturado.",
    duration: "Semana 5",
    deliverables: [
      "Campos de qualificação rápida obrigatórios",
      "Hard gates SDR → AE",
      "Campos BANT + Discovery no Ploomes",
      "Regras Barbara/Renan por critério",
    ],
    dependencies: ["Fase 2 completa"],
    acceptance: [
      "SDR não avança sem campos obrigatórios",
      "AE recebe deal com dados de qualificação",
      "Discovery registra stakeholders e integrações",
    ],
  },
  {
    phase: 4,
    title: "Proposta + Forecast + Docs",
    objective: "Proposta versionada, forecast confiável e alertas por aging.",
    duration: "Semana 6–7",
    deliverables: [
      "Campos de proposta (comercial/técnico/entrega)",
      "WF-05: Proposta/Docs/Aprovações",
      "WF-06: Aging/Probabilidade/Alertas",
      "Storage para versionamento de docs",
      "Checklist hard gate para Fechado-Ganho",
    ],
    dependencies: ["Fase 3 completa", "Storage configurado"],
    acceptance: [
      "Proposta gera versões (v1/v2/…) e mantém link",
      "Alertas: negociação>30d, prob<30%, prob>80%",
      "Aprovações funcionando para descontos",
    ],
  },
  {
    phase: 5,
    title: "Closed Won/Lost + Kickoff + CS",
    objective: "Fechamentos automatizados com ClickUp, kickoff e tracking CS.",
    duration: "Semana 8–9",
    deliverables: [
      "WF-07: Closed Won (ClickUp + Kickoff + CS)",
      "WF-08: Closed Lost (feedback + análise)",
      "Modelo de kickoff padronizado",
      "Pipeline pós-venda + health score",
      "Dashboards: SLA, conversão, aging, motivos perda",
    ],
    dependencies: ["Fase 4 completa", "ClickUp integrado"],
    acceptance: [
      "Ganho cria ClickUp + kickoff + CS automaticamente",
      "Perdido exige motivo/feedback e registra lições",
      "Dashboards operacionais entregues",
    ],
  },
  {
    phase: 6,
    title: "Renewals + Expansion + Advocacy",
    objective: "CS opera renovação proativa, expansion e geração de cases.",
    duration: "Semana 10+ (contínuo)",
    deliverables: [
      "WF-09: Renewals/Churn/Expansion/Advocacy",
      "Alertas 120/90/60/30 dias",
      "Pipeline expansion + métricas",
      "Campos + critérios de advocacy",
      "Dashboards: NRR, churn, expansion, cases",
    ],
    dependencies: ["Fase 5 completa"],
    acceptance: [
      "Renovação alerta nos prazos corretos",
      "Expansion identifica oportunidades automaticamente",
      "Cases elegíveis são marcados e notificados",
    ],
  },
];

// ============= ACCEPTANCE CRITERIA =============
export const ACCEPTANCE = [
  "Lead inbound cria registro no Kommo com SLA e campos mínimos em < 2 minutos",
  "Routing por score preenche lead_score + roteamento + data_routing sem duplicidade",
  "Handoff cria Deal no Ploomes e mantém IDs cruzados (Kommo↔Ploomes) sempre",
  "Cadência SDR executa D1/D2/D4/D7/D10 com controle de tentativa e logs",
  "Proposta no Ploomes gera versões (v1/v2/…) e mantém link + aprovadores",
  "Forecast e alertas: negociação>30d, prob<30%, prob>80% funcionando",
  "Closed Won cria ClickUp + kickoff + pós-venda automaticamente",
  "Closed Lost exige motivos/feedback e gera tarefa de feedback call",
  "Dashboards entregues: SLA, conversão SDR→AE, aging, motivos perda, forecast",
];

// ============= RISKS =============
export const RISKS = [
  { 
    risk: "Duplicidade empresa/deal", 
    mitigation: "Dedupe por email/telefone/domínio/CNPJ + merge + idempotência (last_action_id)." 
  },
  { 
    risk: "Divergência de status entre sistemas", 
    mitigation: "Master por domínio + sync apenas de status macro + logs de sync." 
  },
  { 
    risk: "Cadência falhar por dependência de webhook", 
    mitigation: "Cron scheduler (next_action_at) como fonte primária de execução." 
  },
  { 
    risk: "Baixa adesão do time aos campos obrigatórios", 
    mitigation: "Hard gates por etapa + treinamento + dashboards de compliance." 
  },
  { 
    risk: "Proposta/contrato sem versionamento", 
    mitigation: "Sempre criar nova versão (nunca sobrescrever) + Storage + hash + link fixo." 
  },
  { 
    risk: "Aprovação de proposta vira gargalo", 
    mitigation: "SLA de aprovação + alertas + campos objetivos (desconto/motivo/escopo)." 
  },
];

// ============= ROLES (detailed) =============
export const ROLES = [
  { 
    role: "SDR / SDR IA", 
    system: "Kommo",
    responsibilities: [
      "Responder leads dentro do SLA",
      "Executar cadência D1/D2/D4/D7/D10",
      "Qualificação rápida (dor/DM/interesse)",
      "Agendar reunião com AE",
      "Handoff com campos completos",
    ] 
  },
  { 
    role: "AE (Account Executive)", 
    system: "Ploomes",
    responsibilities: [
      "Qualificação profunda (BANT/fit)",
      "Discovery com stakeholders",
      "Proposta e negociação",
      "Atualizar probabilidade/forecast",
      "Fechamento e handoff para CS",
    ] 
  },
  { 
    role: "Barbara (Liderança/RevOps)", 
    system: "Ploomes",
    responsibilities: [
      "Aprovação final de propostas > limite",
      "Deals estratégicos (> 300k)",
      "Alertas de aging e risco",
      "Renovação/retention/expansion",
      "Advocacy e cases",
    ] 
  },
  { 
    role: "Renan (Técnico)", 
    system: "Ploomes + ClickUp",
    responsibilities: [
      "Validação técnica de escopo",
      "Integrações e arquitetura",
      "Briefing e handoff para entrega",
      "Review técnico de propostas",
    ] 
  },
  { 
    role: "CSM / PM", 
    system: "Ploomes + ClickUp",
    responsibilities: [
      "Kickoff e onboarding",
      "Rituais de execução",
      "Health score e NPS",
      "Renovação e churn",
    ] 
  },
  { 
    role: "DevOps/Automations", 
    system: "n8n",
    responsibilities: [
      "n8n e integrações",
      "Storage e versionamento",
      "Monitoramento e logs",
      "Governança de dados",
    ] 
  },
];
