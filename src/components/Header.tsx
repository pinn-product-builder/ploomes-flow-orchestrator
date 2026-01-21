import { motion } from "framer-motion";
import pinnLogo from "@/assets/pinn-logo.jpg";
import { PROJECT, NAV_SECTIONS } from "@/data/projectData";
import { Calendar, User, GitBranch, Layers } from "lucide-react";

export const Header = () => {
  const now = new Date();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl border border-dark-border bg-gradient-to-br from-dark-panel via-dark-card to-dark-panel p-6 shadow-lg"
    >
      {/* Background glow effect */}
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-gold/5 blur-2xl" />

      <div className="relative z-10">
        {/* Logo and Title */}
        <div className="flex items-start gap-4 mb-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="h-14 w-14 rounded-xl overflow-hidden shadow-lg ring-2 ring-gold/30"
          >
            <img
              src={pinnLogo}
              alt="Pinn Logo"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-bold text-dark-text">
              <span className="text-gradient-gold">{PROJECT.company}</span>
              <span className="text-dark-muted mx-2">—</span>
              <span className="text-dark-text/90">{PROJECT.title}</span>
            </h1>
            <p className="mt-2 text-sm text-dark-muted leading-relaxed max-w-3xl">
              {PROJECT.northStar}
            </p>
          </div>
        </div>

        {/* Meta pills */}
        <div className="flex flex-wrap gap-2 mt-4">
          <MetaPill icon={<GitBranch className="h-3.5 w-3.5" />} label="Versão" value={PROJECT.version} />
          <MetaPill icon={<User className="h-3.5 w-3.5" />} label="Dono" value={PROJECT.owner} />
          <MetaPill icon={<Calendar className="h-3.5 w-3.5" />} label="Gerado" value={now.toLocaleDateString("pt-BR")} />
        </div>

        {/* Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/20 bg-gold/5">
            <Layers className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs font-medium text-dark-muted">Stack:</span>
          </div>
          {PROJECT.stack.map((item, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="px-3 py-1.5 rounded-full text-xs font-medium border border-dark-border bg-dark-card/50 text-dark-text/80 hover:border-gold/30 hover:bg-gold/5 transition-colors cursor-default"
            >
              {item}
            </motion.span>
          ))}
        </div>

        {/* Navigation */}
        <nav className="mt-5 flex flex-wrap gap-2">
          {NAV_SECTIONS.map((section, i) => (
            <motion.a
              key={section.id}
              href={`#${section.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              whileHover={{ y: -2 }}
              className="px-4 py-2 rounded-full text-sm font-medium border border-dark-border bg-dark-card/30 text-dark-text/80 hover:border-gold/40 hover:bg-gold/10 hover:text-gold transition-all duration-200"
            >
              {section.label}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

const MetaPill = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-dark-border bg-dark-card/50">
    <span className="text-gold">{icon}</span>
    <span className="text-xs text-dark-muted">{label}:</span>
    <span className="text-xs font-semibold text-dark-text">{value}</span>
  </div>
);
