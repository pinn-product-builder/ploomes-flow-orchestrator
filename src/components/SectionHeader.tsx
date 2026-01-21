import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface SectionHeaderProps {
  id?: string;
  title: string;
  description?: string;
  subtitle?: string;
  icon?: LucideIcon | ReactNode;
}

export const SectionHeader = ({ id, title, description, subtitle, icon }: SectionHeaderProps) => {
  const desc = description || subtitle;
  
  // Check if icon is a LucideIcon component or already a ReactNode element
  const renderIcon = () => {
    if (!icon) return null;
    
    // If it's a valid React element (JSX), render it directly
    if (typeof icon === 'object' && icon !== null && '$$typeof' in icon) {
      return icon;
    }
    
    // If it's a component (LucideIcon or forwardRef), instantiate it
    if (typeof icon === 'function' || (typeof icon === 'object' && icon !== null && 'render' in icon)) {
      const Icon = icon as LucideIcon;
      return <Icon className="h-5 w-5 text-gold" />;
    }
    
    return icon;
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
