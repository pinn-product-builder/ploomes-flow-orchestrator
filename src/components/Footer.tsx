import { motion } from "framer-motion";
import pinnLogo from "@/assets/pinn-logo.jpg";

export const Footer = () => {
  const now = new Date();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-8 py-6 border-t border-dark-border"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg overflow-hidden ring-1 ring-gold/20">
            <img src={pinnLogo} alt="Pinn" className="h-full w-full object-cover" />
          </div>
          <span className="text-sm text-dark-muted">
            Documento gerado em {now.toLocaleString("pt-BR")}
          </span>
        </div>
        <p className="text-xs text-dark-muted/70 text-center md:text-right max-w-md">
          Use como escopo do projeto, base do ClickUp/Notion e referência técnica para configuração Ploomes + n8n.
        </p>
      </div>
    </motion.footer>
  );
};
