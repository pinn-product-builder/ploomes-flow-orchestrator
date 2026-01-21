// Dados da Proposta Comercial - Linguagem simples, foco em benefícios

export const COMPANY_CONTEXT = {
  name: "Promaflex",
  tagline: "Maior fabricante de filmes de proteção de superfície da América Latina",
  yearsInMarket: "35+ anos",
  description: "A Promaflex é pioneira na produção de soluções inovadoras para mercados diversos. Player internacional com produtos desenvolvidos com base em pesquisa, alta tecnologia e sustentabilidade. Uma indústria voltada à solução, com forte veia de inovação focada em resolver os problemas dos clientes.",
  founders: ["Dr. Márcio Velletri", "Dr. Marcos Velletri"],
  sectors: [
    { name: "Construção Civil", description: "Proteção de obras com soluções como PromaPiso" },
    { name: "Indústria", description: "Automobilístico, siderúrgico, moveleiro, eletroeletrônicos" },
    { name: "Projetos Especiais", description: "Inovação tecnológica para projetos diferenciados" },
    { name: "Varejo", description: "Produtos diretos ao consumidor como Xô Mofo" }
  ],
  portfolio: [
    "Filmes de proteção de superfície (líder América Latina)",
    "PromaPiso — proteção para obras (recomendado por arquitetos)",
    "Xô Mofo — manta térmica e antimofo para armários",
    "Mantas termoacústicas",
    "Fitas adesivas técnicas",
    "Soluções personalizadas por projeto"
  ],
  highlights: [
    "Líder de mercado na América Latina há mais de 35 anos",
    "Investimento constante em tecnologia e sustentabilidade",
    "Equipe técnica de excelência focada no cliente",
    "Presença em feiras como Expo Revestir",
    "Programa de representantes estruturado"
  ],
  testimonials: [
    { author: "Arq. Maria Cláudia Cunha", text: "Sou fã do PromaPiso. Nunca tivemos problemas na aplicação e retirada. Recomendo para todos os profissionais." },
    { author: "Ana Paula Aguiar", text: "O Xô Mofo é uma manta milagrosa! Estou apaixonada pelo resultado." },
    { author: "Carlos Lollato", text: "Parabéns pelo prestígio que o nome Promaflex construiu no mercado plástico." }
  ]
};

export const CHALLENGES = [
  {
    icon: "⏱️",
    title: "Múltiplos canais, resposta lenta",
    description: "Leads de arquitetos, construtoras, indústrias e varejo chegam por site, WhatsApp, feiras e indicações — resposta rápida é decisiva"
  },
  {
    icon: "🔀",
    title: "Vendas B2B e B2C misturadas",
    description: "Contratos industriais exigem qualificação profunda, enquanto varejo/arquitetos precisam de agilidade. Processos diferentes no mesmo funil"
  },
  {
    icon: "❄️",
    title: "Projetos longos esfriam",
    description: "Especificações técnicas e aprovações demoram — sem follow-up estruturado, oportunidades se perdem"
  },
  {
    icon: "📄",
    title: "Propostas técnicas complexas",
    description: "Produtos personalizados exigem histórico de versões, aprovações técnicas e comerciais organizadas"
  },
  {
    icon: "🏆",
    title: "Cases de sucesso não são capturados",
    description: "Depoimentos como da Arq. Maria Cláudia e Ana Paula mostram potencial — mas falta processo para gerar mais cases"
  },
  {
    icon: "🔄",
    title: "Representantes sem visibilidade",
    description: "Rede de representantes precisa de acompanhamento e pipeline organizado para maximizar resultados"
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
      "Centraliza leads de feiras, site, WhatsApp e indicações",
      "Resposta rápida para arquitetos, construtoras e indústrias",
      "Qualificação inicial: varejo vs. projeto técnico vs. indústria",
      "Follow-up automático para não perder especificações longas"
    ]
  },
  ploomes: {
    name: "Ploomes",
    subtitle: "Gestão Comercial",
    role: "Vendas Consultivas",
    color: "green",
    benefits: [
      "Pipeline separado por segmento (Construção, Indústria, Varejo)",
      "Propostas técnicas com versões e aprovações",
      "Forecast por probabilidade e ciclo de venda",
      "Histórico de especificações e projetos personalizados"
    ]
  },
  automation: {
    name: "Automações",
    subtitle: "Motor de tarefas automáticas",
    role: "Integrações",
    color: "purple",
    benefits: [
      "Conecta atendimento inicial com gestão comercial",
      "Alertas de projetos parados ou próximos de fechar",
      "Lembrete para capturar cases e depoimentos (como Xô Mofo)",
      "Integra com calendário para reuniões técnicas"
    ]
  },
  whyBoth: "A Promaflex atende desde arquitetos que precisam de resposta rápida até indústrias com contratos complexos. Um sistema agiliza o primeiro contato, o outro organiza a negociação técnica. Juntos, cobrem toda a jornada — do lead ao case de sucesso."
};

export const JOURNEY_STEPS = [
  {
    number: 1,
    title: "Lead chega por qualquer canal",
    where: "Kommo",
    description: "Arquiteto pelo Instagram, construtora pelo site, indústria por feira ou indicação — todos entram no mesmo funil e são respondidos rapidamente.",
    icon: "📥"
  },
  {
    number: 2,
    title: "Identificação do perfil e segmento",
    where: "Kommo + Automação",
    description: "É varejo (Xô Mofo)? Projeto de construção (PromaPiso)? Indústria (filme técnico)? Cada um segue uma trilha diferente.",
    icon: "🎯"
  },
  {
    number: 3,
    title: "Follow-up para projetos longos",
    where: "Automação",
    description: "Especificações técnicas demoram — lembretes automáticos garantem que nenhum projeto esfrie enquanto aguarda aprovação.",
    icon: "🔔"
  },
  {
    number: 4,
    title: "Proposta técnica com histórico",
    where: "Kommo → Ploomes",
    description: "Produtos personalizados? O vendedor recebe todo o contexto: segmento, necessidade, interações anteriores.",
    icon: "🤝"
  },
  {
    number: 5,
    title: "Negociação e aprovações organizadas",
    where: "Ploomes",
    description: "Versões de proposta, aprovações técnicas e comerciais, probabilidade de fechamento — tudo rastreável.",
    icon: "📋"
  },
  {
    number: 6,
    title: "Fechou! Entrega + captura de case",
    where: "Ploomes + Automação",
    description: "Kickoff do projeto, acompanhamento da entrega e — como a Arq. Maria Cláudia — potencial para virar depoimento e case.",
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
