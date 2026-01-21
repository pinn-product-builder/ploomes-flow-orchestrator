import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Card, BulletList } from "./Card";
import { Users, Bot, Briefcase, Crown, Wrench, Headphones, Settings } from "lucide-react";
import { ROLES } from "@/data/projectData";

const roleIcons: Record<string, typeof Users> = {
  "SDR IA (ou SDR)": Bot,
  "AE": Briefcase,
  "Barbara (Liderança/CS/RevOps)": Crown,
  "Renan (Técnico)": Wrench,
  "CSM / PM": Headphones,
  "DevOps/Automations": Settings,
};

export const RolesSection = () => (
  <section className="space-y-4">
    <SectionHeader
      id="papeis"
      title="Papéis e responsabilidades"
      description="Quem faz o quê no processo end-to-end."
      icon={Users}
    />

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {ROLES.map((role, i) => {
        const Icon = roleIcons[role.role] || Users;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
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
                  <h3 className="text-base font-bold text-dark-text">{role.role}</h3>
                </div>
              </div>
              <div className="p-4">
                <BulletList items={role.responsibilities} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);
