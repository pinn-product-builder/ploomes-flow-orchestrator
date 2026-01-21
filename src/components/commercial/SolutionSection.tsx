import { motion } from "framer-motion";
import { SOLUTION } from "@/data/commercialProposalData";
import { SectionHeader } from "@/components/SectionHeader";
import { Layers, MessageSquare, BarChart3, Zap, CheckCircle2, Lightbulb } from "lucide-react";

const systemIcons = {
  kommo: MessageSquare,
  ploomes: BarChart3,
  automation: Zap,
};

const systemColors = {
  kommo: "blue",
  ploomes: "emerald",
  automation: "purple",
};

export const SolutionSection = () => {
  return (
    <section id="solucao" className="space-y-8">
      <SectionHeader
        icon={<Layers className="w-5 h-5" />}
        title="Solução Proposta"
        subtitle="Como cada sistema ajuda o seu negócio"
      />

      <div className="grid lg:grid-cols-3 gap-6">
        {(["kommo", "ploomes", "automation"] as const).map((key, index) => {
          const system = SOLUTION[key];
          const Icon = systemIcons[key];
          const color = systemColors[key];

          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`bg-dark-card border rounded-2xl overflow-hidden ${
                color === "blue"
                  ? "border-blue-500/20 hover:border-blue-500/40"
                  : color === "emerald"
                  ? "border-emerald-500/20 hover:border-emerald-500/40"
                  : "border-purple-500/20 hover:border-purple-500/40"
              } transition-colors`}
            >
              {/* Header */}
              <div
                className={`p-4 ${
                  color === "blue"
                    ? "bg-blue-500/10"
                    : color === "emerald"
                    ? "bg-emerald-500/10"
                    : "bg-purple-500/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      color === "blue"
                        ? "bg-blue-500/20"
                        : color === "emerald"
                        ? "bg-emerald-500/20"
                        : "bg-purple-500/20"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        color === "blue"
                          ? "text-blue-400"
                          : color === "emerald"
                          ? "text-emerald-400"
                          : "text-purple-400"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-text">{system.name}</h3>
                    <p className="text-xs text-dark-muted">{system.subtitle}</p>
                  </div>
                </div>
                <span
                  className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium ${
                    color === "blue"
                      ? "bg-blue-500/20 text-blue-300"
                      : color === "emerald"
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "bg-purple-500/20 text-purple-300"
                  }`}
                >
                  {system.role}
                </span>
              </div>

              {/* Benefits */}
              <div className="p-4 space-y-3">
                {system.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        color === "blue"
                          ? "text-blue-400/60"
                          : color === "emerald"
                          ? "text-emerald-400/60"
                          : "text-purple-400/60"
                      }`}
                    />
                    <span className="text-sm text-dark-muted">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Why Both */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-gold/5 to-gold/10 border border-gold/20 rounded-2xl p-6"
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h3 className="font-semibold text-dark-text mb-2">
              Por que usar dois sistemas é melhor que um?
            </h3>
            <p className="text-dark-muted">{SOLUTION.whyBoth}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
