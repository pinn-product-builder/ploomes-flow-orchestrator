import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  kicker?: string;
  title: string;
  description?: string;
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const Card = ({ kicker, title, description, children, delay = 0, className = "" }: CardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay }}
    className={`group relative overflow-hidden rounded-xl border border-dark-border bg-gradient-to-b from-dark-card to-dark-panel shadow-md card-hover ${className}`}
  >
    {/* Hover glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="relative">
      <div className="border-b border-dark-border bg-dark-card/50 p-4">
        {kicker && (
          <span className="inline-block mb-1 text-xs font-semibold uppercase tracking-wider text-gold">
            {kicker}
          </span>
        )}
        <h3 className="text-base font-bold text-dark-text">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-dark-muted">{description}</p>
        )}
      </div>
      <div className="p-4">{children}</div>
    </div>
  </motion.div>
);

export const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2 text-sm text-dark-muted">
        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold/60 flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const Chip = ({ children, variant = "default" }: { children: ReactNode; variant?: "default" | "gold" }) => (
  <span
    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
      variant === "gold"
        ? "border-gold/30 bg-gold/10 text-gold"
        : "border-dark-border bg-dark-card/50 text-dark-muted hover:border-gold/20"
    }`}
  >
    {children}
  </span>
);
