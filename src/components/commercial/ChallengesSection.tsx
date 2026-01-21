import { motion } from "framer-motion";
import { CHALLENGES, OBJECTIVES } from "@/data/commercialProposalData";
import { SectionHeader } from "@/components/SectionHeader";
import { AlertTriangle, Target } from "lucide-react";

export const ChallengesSection = () => {
  return (
    <section id="desafios" className="space-y-8">
      {/* Desafios */}
      <div className="space-y-6">
        <SectionHeader
          icon={<AlertTriangle className="w-5 h-5" />}
          title="O que normalmente trava crescimento e conversão"
          subtitle="Desafios comuns que identificamos no mercado"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CHALLENGES.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-xl p-5 hover:border-red-500/30 transition-colors"
            >
              <div className="text-3xl mb-3">{challenge.icon}</div>
              <h3 className="font-semibold text-dark-text mb-2">{challenge.title}</h3>
              <p className="text-sm text-dark-muted">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Objetivos */}
      <div className="space-y-6 pt-6">
        <SectionHeader
          icon={<Target className="w-5 h-5" />}
          title="Objetivos do Projeto"
          subtitle="O que vamos resolver juntos"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {OBJECTIVES.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-xl p-5 hover:border-gold/30 transition-colors group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{objective.icon}</div>
              <h3 className="font-semibold text-dark-text mb-2">{objective.title}</h3>
              <p className="text-sm text-dark-muted">{objective.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
