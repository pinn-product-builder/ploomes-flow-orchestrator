import { motion } from "framer-motion";
import { SUCCESS_METRICS, REQUIREMENTS, NEXT_STEPS } from "@/data/commercialProposalData";
import { SectionHeader } from "@/components/SectionHeader";
import { BarChart3, ClipboardList, ArrowRight, Rocket } from "lucide-react";

export const MetricsSection = () => {
  return (
    <section id="metricas" className="space-y-10">
      {/* Métricas de Sucesso */}
      <div className="space-y-6">
        <SectionHeader
          icon={<BarChart3 className="w-5 h-5" />}
          title="Métricas de Sucesso"
          subtitle="O que vamos medir para garantir resultados"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SUCCESS_METRICS.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-dark-card border border-dark-border rounded-xl p-4 hover:border-gold/30 transition-colors"
            >
              <div className="text-2xl mb-2">{metric.icon}</div>
              <h3 className="font-semibold text-dark-text text-sm mb-1">{metric.metric}</h3>
              <p className="text-xs text-dark-muted">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* O que precisamos */}
      <div className="space-y-6">
        <SectionHeader
          icon={<ClipboardList className="w-5 h-5" />}
          title="O que precisamos da Promaflex"
          subtitle="Para garantir o sucesso do projeto"
        />

        <div className="bg-dark-card border border-dark-border rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {REQUIREMENTS.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-dark-panel/50"
              >
                <div className="w-6 h-6 rounded-md bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-gold">{index + 1}</span>
                </div>
                <div>
                  <h4 className="font-medium text-dark-text text-sm">{req.item}</h4>
                  <p className="text-xs text-dark-muted mt-0.5">{req.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Próximos Passos */}
      <div className="space-y-6">
        <SectionHeader
          icon={<Rocket className="w-5 h-5" />}
          title="Próximos Passos"
          subtitle="Como começamos"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gold/10 via-gold/5 to-transparent border border-gold/20 rounded-2xl p-6"
        >
          <div className="flex flex-col md:flex-row items-stretch gap-4">
            {NEXT_STEPS.map((step, index) => (
              <div key={step.step} className="flex-1 flex items-center gap-4">
                <div className="bg-dark-card border border-dark-border rounded-xl p-4 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                      <span className="text-sm font-bold text-dark-bg">{step.step}</span>
                    </div>
                    <h3 className="font-semibold text-dark-text text-sm">{step.title}</h3>
                  </div>
                  <p className="text-xs text-dark-muted pl-11">{step.description}</p>
                </div>

                {index < NEXT_STEPS.length - 1 && (
                  <ArrowRight className="hidden md:block w-5 h-5 text-gold/40 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gold/20 text-center">
            <p className="text-gold font-medium">
              Pronto para acelerar suas vendas? Vamos conversar! 🚀
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
