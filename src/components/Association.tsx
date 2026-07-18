"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { 
  Factory, Flame, Car, Plane, Phone, HelpCircle, HardHat, Hotel, ShoppingBag, ShieldAlert 
} from "lucide-react";

interface Domain {
  name: string;
  icon: React.ComponentType<any>;
}

const DOMAINS: Domain[] = [
  { name: "Manufacturing", icon: Factory },
  { name: "Oil & Gas", icon: Flame },
  { name: "Automotive", icon: Car },
  { name: "Airlines", icon: Plane },
  { name: "Telecom", icon: Phone },
  { name: "Utilities", icon: HardHat },
  { name: "Hospitality", icon: Hotel },
  { name: "Retail & Garments", icon: ShoppingBag },
];

export default function Association() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-[#F8FCFD]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Global Footprint"
          title="Consultant Industry Footprint"
          subtitle="Our partners and consultants have delivered world-class deployments across these major vertical sectors."
        />

        {/* Industrial Domains Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          {DOMAINS.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-5 rounded-2xl bg-white border border-rgss-light/20 flex flex-col items-center text-center gap-3 hover:border-rgss-primary hover:shadow-md transition-all group"
              >
                <div className="p-3 rounded-xl bg-rgss-light/10 text-rgss-deep group-hover:bg-rgss-primary group-hover:text-white transition-colors">
                  <Icon size={18} />
                </div>
                <span className="text-xs font-bold text-rgss-deep uppercase tracking-tight">
                  {domain.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto p-6 rounded-2xl border border-rgss-light/35 bg-white shadow-sm flex items-start gap-4"
        >
          <div className="p-2 rounded-xl bg-rgss-light/10 text-rgss-primary shrink-0">
            <ShieldAlert size={18} />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-rgss-deep uppercase tracking-widest">
              Engagement Notice
            </h4>
            <p className="text-[11px] text-rgss-dark/80 leading-relaxed font-normal">
              Disclaimer: In some organizations mentioned in this profile, associations of partners and consultants of RGSS represent their individual experiences and engagements. RGSS (or historically AGSS) was not associated directly or indirectly with any of these organizations at the time of their partners' or consultants' service engagements.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
