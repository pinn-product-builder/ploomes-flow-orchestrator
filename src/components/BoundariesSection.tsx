import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { BulletList } from "./Card";
import { Layers, MessageCircle, Database, Workflow } from "lucide-react";
import { BOUNDARIES } from "@/data/projectData";

const boundaryIcons: Record<string, typeof Layers> = {
  "message-circle": MessageCircle,
  "database": Database,
  "workflow": Workflow,
};

export const BoundariesSection = () => (
  <section className="space-y-4">
    <SectionHeader
      id="fronteiras"
      title="Fronteiras e responsabilidades por sistema"
      description="Definição clara evita divergência e retrabalho."
      icon={Layers}
    />

    <div className="grid gap-4 md:grid-cols-3">
      {BOUNDARIES.map((boundary, i) => {
        const Icon = boundaryIcons[boundary.icon] || Layers;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
            className="group relative overflow-hidden rounded-xl border border-dark-border bg-gradient-to-b from-dark-card to-dark-panel shadow-md card-hover"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative">
              <div className="border-b border-dark-border bg-dark-card/50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 border border-gold/20">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="text-base font-bold text-dark-text">{boundary.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <BulletList items={boundary.bullets} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);
