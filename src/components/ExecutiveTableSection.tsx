import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Table } from "lucide-react";
import { EXECUTIVE_TABLE } from "@/data/projectData";

export const ExecutiveTableSection = () => (
  <section className="space-y-4">
    <SectionHeader
      id="tabela"
      title="Tabela Executiva (1 Página)"
      description="Visão consolidada: Etapa → Sistema → Dono → Automação → Saída."
      icon={Table}
    />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border border-dark-border bg-gradient-to-b from-dark-card to-dark-panel overflow-hidden shadow-md"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-border bg-dark-card/50">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gold">Etapa</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gold">Sistema</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gold">Dono</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gold">Entradas</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gold">Automação</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gold">Saída</th>
            </tr>
          </thead>
          <tbody>
            {EXECUTIVE_TABLE.map((row, i) => (
              <tr 
                key={i} 
                className={`border-b border-dark-border/50 ${i % 2 === 0 ? 'bg-dark-bg/20' : 'bg-dark-bg/40'} hover:bg-gold/5 transition-colors`}
              >
                <td className="px-4 py-3 font-medium text-dark-text">{row.stage}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 rounded-full text-xs font-medium border border-dark-border bg-dark-card/50 text-dark-muted">
                    {row.system}
                  </span>
                </td>
                <td className="px-4 py-3 text-dark-muted">{row.owner}</td>
                <td className="px-4 py-3 text-dark-muted text-xs">{row.inputs}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 rounded-full text-xs font-medium border border-gold/30 bg-gold/10 text-gold">
                    {row.automation}
                  </span>
                </td>
                <td className="px-4 py-3 text-dark-muted text-xs">{row.output}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  </section>
);
