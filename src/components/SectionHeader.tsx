import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode, isValidElement } from "react";

interface SectionHeaderProps {
  id?: string;
  title: string;
  description?: string;
  subtitle?: string;
  icon?: LucideIcon | ReactNode;
}

export const SectionHeader = ({ id, title, description, subtitle, icon }: SectionHeaderProps) => {
  const desc = description || subtitle;
  
  const renderIcon = () => {
    if (!icon) return null;
    
    // If it's already a valid React element (JSX like <Icon />), render directly
    if (isValidElement(icon)) {
      return icon;
    }
    
    // Otherwise it's a component reference (LucideIcon), instantiate it
    const Icon = icon as LucideIcon;
    return <Icon className="h-5 w-5 text-gold" />;
  };

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
      className="relative rounded-xl border border-dark-border bg-gradient-to-r from-dark-panel to-dark-card p-5 shadow-md scroll-mt-8"
    >
      <div className="flex items-start gap-3">
        {icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 border border-gold/20 text-gold">
            {renderIcon()}
          </div>
        )}
        <div>
          <h2 className="text-lg font-bold text-dark-text">{title}</h2>
          {desc && <p className="mt-1 text-sm text-dark-muted">{desc}</p>}
        </div>
      </div>
    </motion.div>
  );
};
