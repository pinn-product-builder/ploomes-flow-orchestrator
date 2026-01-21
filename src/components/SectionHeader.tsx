import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export const SectionHeader = ({ id, title, description, icon: Icon }: SectionHeaderProps) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.4 }}
    className="relative rounded-xl border border-dark-border bg-gradient-to-r from-dark-panel to-dark-card p-5 shadow-md scroll-mt-8"
  >
    <div className="flex items-start gap-3">
      {Icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 border border-gold/20">
          <Icon className="h-5 w-5 text-gold" />
        </div>
      )}
      <div>
        <h2 className="text-lg font-bold text-dark-text">{title}</h2>
        <p className="mt-1 text-sm text-dark-muted">{description}</p>
      </div>
    </div>
  </motion.div>
);
