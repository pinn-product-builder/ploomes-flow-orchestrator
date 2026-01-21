// Dados da Proposta Comercial - Linguagem simples, foco em benefícios

export const COMPANY_CONTEXT = {
  name: "Promaflex",
  tagline: "Soluções de proteção de superfícies e isolamento",
  description: "A Promaflex atua no mercado com soluções especializadas em proteção de superfícies e isolamento, atendendo diversos segmentos como indústria e construção civil.",
  portfolio: [
    "Filmes de proteção",
    "Mantas e mantas termoacústicas",
    "Fitas adesivas técnicas",
    "Rótulos e embalagens",
    "Soluções personalizadas"
  ],
  highlights: [
    "Atuação ampla em varejo e projetos especiais",
    "Programa de representantes estruturado",
    "Canais de atendimento e relacionamento dedicados"
  ]
};

export const CHALLENGES = [
  {
    icon: "⏱️",
    title: "Resposta lenta = oportunidade perdida",
    description: "Leads chegam por vários canais e a velocidade de resposta é decisiva para não perder negócios"
  },
  {
    icon: "🔀",
    title: "Passagem de bastão confusa",
    description: "Falta padronização na transferência do atendimento para o time comercial, causando perda de contexto"
  },
  {
    icon: "❄️",
    title: "Follow-up inconsistente",
    description: "Dificuldade de manter acompanhamento constante faz oportunidades 'esfriarem'"
  },
  {
    icon: "📄",
    title: "Propostas sem organização",
    description: "Negociações precisam de histórico, versões e aprovações para evitar ruído"
  },
  {
    icon: "🔄",
    title: "Pós-venda sem processo",
    description: "Sem estrutura clara, fica difícil renovar, expandir e criar cases de sucesso"
  }
];

export const OBJECTIVES = [
  {
    icon: "🚀",
    title: "Resposta rápida",
    description: "Aumentar conversão com atendimento organizado e ágil"
  },
  {
    icon: "📋",
    title: "Follow-up automático",
    description: "Garantir acompanhamento consistente sem depender de memória"
  },
  {
    icon: "📊",
    title: "Funil previsível",
    description: "Saber o que está 'quente', o que está travado e onde agir"
  },
  {
    icon: "✅",
    title: "Propostas padronizadas",
    description: "Histórico, versões e aprovações organizadas"
  },
  {
    icon: "🎯",
    title: "Pós-venda estruturado",
    description: "Processo claro para renovação, expansão e cases"
  }
];

export const SOLUTION = {
  kommo: {
    name: "Kommo",
    subtitle: "Central de Atendimento",
    role: "SDR / Pré-vendas",
    color: "blue",
    benefits: [
      "Centraliza atendimento de entrada (WhatsApp, mensagens, contatos)",
      "Garante resposta rápida com alertas automáticos",
      "Organiza rotina de follow-up",
      "Estrutura a qualificação inicial"
    ]
  },
  ploomes: {
    name: "Ploomes",
    subtitle: "Gestão Comercial",
    role: "Vendas Consultivas",
    color: "green",
    benefits: [
      "Organiza oportunidades com governança",
      "Dá visão clara de etapas e probabilidade",
      "Estrutura propostas e documentos",
      "Mantém histórico completo do negócio"
    ]
  },
  automation: {
    name: "Automações",
    subtitle: "Motor de tarefas automáticas",
    role: "Integrações",
    color: "purple",
    benefits: [
      "Conecta sistemas sem retrabalho",
      "Dispara lembretes e alertas",
      "Avisa sobre negócios parados ou prioritários",
      "Integra com calendário e gestão de projetos"
    ]
  },
  whyBoth: "Porque um sistema é ótimo para atendimento rápido e conversa, enquanto o outro é ótimo para governança, propostas e fechamento. Juntos, cobrem toda a jornada."
};

export const JOURNEY_STEPS = [
  {
    number: 1,
    title: "Lead chega e é atendido rapidamente",
    where: "Kommo",
    description: "O contato entra pelo canal (WhatsApp, site, indicação) e recebe resposta em minutos, não horas.",
    icon: "📥"
  },
  {
    number: 2,
    title: "Lead é qualificado e priorizado",
    where: "Kommo + Automação",
    description: "Identificamos se é quente, morno ou frio para direcionar esforço certo.",
    icon: "🎯"
  },
  {
    number: 3,
    title: "Follow-up automático para não esfriar",
    where: "Automação",
    description: "Lembretes, tarefas e mensagens garantem que ninguém seja esquecido.",
    icon: "🔔"
  },
  {
    number: 4,
    title: "Oportunidade vai para vendas (com contexto)",
    where: "Kommo → Ploomes",
    description: "Passagem organizada: o vendedor recebe tudo que precisa saber.",
    icon: "🤝"
  },
  {
    number: 5,
    title: "Proposta e negociação organizadas",
    where: "Ploomes",
    description: "Histórico, versões, probabilidade e previsão de fechamento.",
    icon: "📋"
  },
  {
    number: 6,
    title: "Fechou! Inicia entrega e pós-venda",
    where: "Ploomes + Automação",
    description: "Kickoff organizado, projeto criado, acompanhamento estruturado.",
    icon: "🏆"
  }
];

export const DELIVERABLES_PHASES = [
  {
    phase: 1,
    title: "Estrutura e organização do funil",
    items: [
      "Campos essenciais e etapas de atendimento",
      "Organização de responsáveis",
      "Regras de passagem entre etapas"
    ]
  },
  {
    phase: 2,
    title: "Atendimento e resposta rápida",
    items: [
      "Rotina de atendimento e follow-up",
      "Alertas de tempo de resposta",
      "Lembretes de próximos passos"
    ]
  },
  {
    phase: 3,
    title: "Passagem organizada para vendas",
    items: [
      "Transferência do lead qualificado",
      "Histórico e informações preservadas",
      "Contexto completo para o vendedor"
    ]
  },
  {
    phase: 4,
    title: "Propostas com padrão e previsibilidade",
    items: [
      "Modelos de proposta padronizados",
      "Controle de versões e aprovações",
      "Visão de probabilidade e travamentos"
    ]
  },
  {
    phase: 5,
    title: "Ganho/Perda e pós-venda",
    items: [
      "Processo de fechamento estruturado",
      "Análise de perdas para aprendizado",
      "Kickoff, acompanhamento e renovação"
    ]
  }
];

export const SUCCESS_METRICS = [
  {
    metric: "Tempo de primeira resposta",
    description: "Quanto tempo leva para atender um novo contato",
    icon: "⏱️"
  },
  {
    metric: "Atendidos → Qualificados",
    description: "Taxa de leads que avançam para o comercial",
    icon: "📈"
  },
  {
    metric: "Tempo por etapa",
    description: "Identificar onde o processo trava",
    icon: "⏳"
  },
  {
    metric: "Propostas → Fechamentos",
    description: "Taxa de conversão final",
    icon: "✅"
  },
  {
    metric: "Motivos de perda",
    description: "Entender por que perdemos para melhorar",
    icon: "🔍"
  },
  {
    metric: "Renovação e expansão",
    description: "Retenção e crescimento de clientes",
    icon: "🔄"
  }
];

export const REQUIREMENTS = [
  {
    item: "Definir responsáveis",
    description: "Quem cuida do atendimento, comercial e pós-venda"
  },
  {
    item: "Validar etapas do funil",
    description: "Confirmar as fases e campos essenciais"
  },
  {
    item: "Informar canais de entrada",
    description: "De onde vêm os leads e rotinas atuais"
  },
  {
    item: "Aprovar modelos de proposta",
    description: "Padrões e condições comerciais"
  },
  {
    item: "Acesso às ferramentas",
    description: "Calendário, gestão de projetos se usar"
  }
];

export const NEXT_STEPS = [
  {
    step: 1,
    title: "Reunião de alinhamento",
    description: "Kickoff para validar escopo e expectativas"
  },
  {
    step: 2,
    title: "Validação do fluxo",
    description: "Confirmar etapas, responsáveis e regras"
  },
  {
    step: 3,
    title: "Início da Fase 1",
    description: "Estruturação e primeiras entregas"
  }
];
