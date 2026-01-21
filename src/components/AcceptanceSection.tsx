import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { CheckCircle, Circle } from "lucide-react";
import { ACCEPTANCE } from "@/data/projectData";

export const AcceptanceSection = () => {
  const [checked, setChecked] = useState<boolean[]>(new Array(ACCEPTANCE.length).fill(false));

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const completedCount = checked.filter(Boolean).length;

  return (
    <section className="space-y-4">
    <SectionHeader
      id="aceite"
      title="Critérios de aceite (Definition of Done)"
      description="O que precisa estar funcionando para considerar a implementação concluída."
      icon={CheckCircle}
    />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="rounded-xl border border-dark-border bg-gradient-to-b from-dark-card to-dark-panel overflow-hidden shadow-md"
      >
        <div className="border-b border-dark-border bg-dark-card/50 p-4 flex items-center justify-between">
          <h3 className="text-base font-bold text-dark-text">Checklist de aceite</h3>
          <div className="flex items-center gap-2">
            <div className="h-2 w-24 rounded-full bg-dark-border overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(completedCount / ACCEPTANCE.length) * 100}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-gold rounded-full"
              />
            </div>
            <span className="text-xs font-medium text-dark-muted">
              {completedCount}/{ACCEPTANCE.length}
            </span>
          </div>
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            {ACCEPTANCE.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="group"
              >
                <label
                  className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                    checked[i]
                      ? "border-gold/30 bg-gold/5"
                      : "border-dark-border bg-dark-bg/30 hover:border-gold/20 hover:bg-dark-card/50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked[i]}
                    onChange={() => toggle(i)}
                    className="sr-only"
                  />
                  <span className="flex-shrink-0 mt-0.5">
                    {checked[i] ? (
                      <CheckCircle className="h-5 w-5 text-gold" />
                    ) : (
                      <Circle className="h-5 w-5 text-dark-muted group-hover:text-gold/50 transition-colors" />
                    )}
                  </span>
                  <span
                    className={`text-sm ${
                      checked[i] ? "text-dark-text line-through opacity-70" : "text-dark-muted"
                    }`}
                  >
                    {item}
                  </span>
                </label>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
