import { motion } from "framer-motion";
import { COMPANY_CONTEXT } from "@/data/commercialProposalData";
import { Building2, CheckCircle2, Award, Users, Quote } from "lucide-react";

export const CommercialHeader = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Hero */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20"
        >
          <Building2 className="w-4 h-4 text-gold" />
          <span className="text-sm font-medium text-gold">Proposta Comercial</span>
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold text-dark-text">
          Transformação Comercial
          <span className="text-gradient-gold"> Promaflex</span>
        </h1>

        <p className="text-dark-muted max-w-2xl mx-auto text-lg">
          Uma solução completa para acelerar vendas, organizar o funil comercial e garantir previsibilidade no fechamento.
        </p>
      </div>

      {/* Company Context Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-dark-card border border-dark-border rounded-2xl p-6 space-y-5"
      >
        {/* Header with badge */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
            <Award className="w-6 h-6 text-gold" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xl font-bold text-dark-text">{COMPANY_CONTEXT.name}</h2>
              <span className="px-2 py-0.5 rounded-full bg-gold/10 border border-gold/20 text-xs font-medium text-gold">
                {COMPANY_CONTEXT.yearsInMarket}
              </span>
            </div>
            <p className="text-gold font-medium mt-1">{COMPANY_CONTEXT.tagline}</p>
          </div>
        </div>

        <p className="text-dark-muted leading-relaxed">
          {COMPANY_CONTEXT.description}
        </p>

        {/* Sectors */}
        <div>
          <h3 className="text-sm font-semibold text-gold mb-3 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Segmentos Atendidos
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {COMPANY_CONTEXT.sectors.map((sector, i) => (
              <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-dark-bg/50 border border-dark-border">
                <CheckCircle2 className="w-4 h-4 text-gold/60 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-dark-text text-sm font-medium">{sector.name}</span>
                  <p className="text-dark-muted text-xs mt-0.5">{sector.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio & Highlights */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-gold mb-3">Portfólio de Produtos</h3>
            <ul className="space-y-2">
              {COMPANY_CONTEXT.portfolio.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-dark-muted text-sm">
                  <CheckCircle2 className="w-4 h-4 text-gold/60 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gold mb-3">Diferenciais</h3>
            <ul className="space-y-2">
              {COMPANY_CONTEXT.highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-dark-muted text-sm">
                  <CheckCircle2 className="w-4 h-4 text-gold/60 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Testimonials */}
        <div className="pt-4 border-t border-dark-border">
          <h3 className="text-sm font-semibold text-gold mb-3 flex items-center gap-2">
            <Quote className="w-4 h-4" />
            O que dizem sobre a Promaflex
          </h3>
          <div className="grid md:grid-cols-3 gap-3">
            {COMPANY_CONTEXT.testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="p-3 rounded-lg bg-dark-bg/30 border border-dark-border"
              >
                <p className="text-dark-muted text-xs italic leading-relaxed">"{testimonial.text}"</p>
                <p className="text-gold text-xs font-medium mt-2">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-dark-border">
          <p className="text-sm text-gold/80 italic">
            ✨ Fizemos um estudo detalhado do seu contexto para propor a melhor solução — baseado em mais de 35 anos de liderança no mercado.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};
