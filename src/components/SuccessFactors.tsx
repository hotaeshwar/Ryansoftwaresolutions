"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { 
  ShieldCheck, Brain, Workflow, Hammer, Star, ChevronDown, CheckCircle
} from "lucide-react";

interface SuccessFactor {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<any>;
  bullets: string[];
}

const SUCCESS_FACTORS: SuccessFactor[] = [
  {
    id: "diff",
    title: "Key Differentiators",
    subtitle: "Complete service depth at optimal TCO",
    icon: ShieldCheck,
    bullets: [
      "End to End Capabilities",
      "Process Efficiencies",
      "Low TCO with high level of expertise."
    ]
  },
  {
    id: "people",
    title: "People Expertise",
    subtitle: "High-caliber domain leaders",
    icon: Brain,
    bullets: [
      "Professionals from Different Industry Verticals",
      "Domain Experts",
      "Average experience of associates – more than 12 years",
      "Team include CAs, MBAs, MCA."
    ]
  },
  {
    id: "process",
    title: "Process Methodology",
    subtitle: "Standardized framework execution",
    icon: Workflow,
    bullets: [
      "Trusted Process Driven Approach for Service Support & Delivery",
      "Business processes oriented delivery approach",
      "SAP Activate Methodology"
    ]
  },
  {
    id: "tools",
    title: "Management Methodologies / Tools",
    subtitle: "Modern toolsets for agile execution",
    icon: Hammer,
    bullets: [
      "SAP Activate Methodology with Agile & Scrum",
      "Solution Manager",
      "MS Projects and testing tools",
      "Experience in automation of various processes as per organization requirements."
    ]
  }
];

export default function SuccessFactors() {
  const [openSectionId, setOpenSectionId] = useState<string>("diff");

  const toggleSection = (id: string) => {
    setOpenSectionId(openSectionId === id ? "" : id);
  };

  return (
    <section id="advantages" className="py-20 md:py-28 relative overflow-hidden bg-[#F8FCFD]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Value Proposition"
          title="RGSS Success Factors"
          subtitle="Our formula for success: combining experience, robust methodologies, and certified talent to deliver maximum enterprise value."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Autoplay Muted Brand Video (Cardless & Frameless) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-md aspect-video overflow-hidden rounded-3xl"
            >
              <video
                src="/make.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column: Interactive Accordions */}
          <div className="lg:col-span-7 space-y-4">
            {SUCCESS_FACTORS.map((s) => {
              const Icon = s.icon;
              const isOpen = s.id === openSectionId;
              
              return (
                <div
                  key={s.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen 
                      ? "bg-white border-rgss-primary shadow-md shadow-rgss-light/5" 
                      : "bg-white border-rgss-light/20 hover:border-rgss-primary/40"
                  }`}
                >
                  {/* Header Button */}
                  <button
                    onClick={() => toggleSection(s.id)}
                    className="flex items-center justify-between w-full p-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl transition-colors ${
                        isOpen ? "bg-rgss-primary text-white" : "bg-rgss-light/10 text-rgss-deep"
                      }`}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className="text-sm font-extrabold text-rgss-deep uppercase tracking-tight">
                          {s.title}
                        </h3>
                        <p className="text-[10px] font-medium text-rgss-primary uppercase tracking-wide block mt-0.5">
                          {s.subtitle}
                        </p>
                      </div>
                    </div>
                    <ChevronDown size={18} className={`text-rgss-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Body Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-rgss-light/15 space-y-2.5 bg-[#F8FCFD]">
                          {s.bullets.map((bullet, bulletIdx) => (
                            <div key={bulletIdx} className="flex items-start gap-2.5 text-xs text-rgss-dark">
                              <CheckCircle size={13} className="text-rgss-primary mt-0.5 shrink-0" />
                              <span className="leading-relaxed font-normal">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
