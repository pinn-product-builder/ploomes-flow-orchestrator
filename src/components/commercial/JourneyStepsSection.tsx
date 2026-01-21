import { motion } from "framer-motion";
import { JOURNEY_STEPS } from "@/data/commercialProposalData";
import { SectionHeader } from "@/components/SectionHeader";
import { Route, ArrowRight } from "lucide-react";

export const JourneyStepsSection = () => {
  return (
    <section id="jornada" className="space-y-8">
      <SectionHeader
        icon={<Route className="w-5 h-5" />}
        title="Como funciona na prática"
        subtitle="A jornada do lead em 6 passos simples"
      />

      <div className="relative">
        {/* Timeline line - desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent" />

        <div className="space-y-6 lg:space-y-0">
          {JOURNEY_STEPS.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative lg:flex lg:items-center ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className={`lg:w-[calc(50%-2rem)] ${isLeft ? "lg:pr-8" : "lg:pl-8"}`}>
                  <div className="bg-dark-card border border-dark-border rounded-xl p-5 hover:border-gold/30 transition-colors group">
                    <div className="flex items-start gap-4">
                      {/* Number & Icon */}
                      <div className="relative">
                        <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-2xl group-hover:bg-gold/20 transition-colors">
                          {step.icon}
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-dark-bg text-xs font-bold flex items-center justify-center">
                          {step.number}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-dark-text mb-1">{step.title}</h3>
                        <p className="text-sm text-dark-muted mb-2">{step.description}</p>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-dark-panel text-xs text-gold/80">
                          📍 {step.where}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot - desktop */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-dark-bg z-10" />

                {/* Arrow connector - mobile */}
                {index < JOURNEY_STEPS.length - 1 && (
                  <div className="lg:hidden flex justify-center py-2">
                    <ArrowRight className="w-5 h-5 text-gold/40 rotate-90" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
