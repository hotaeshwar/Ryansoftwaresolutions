"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { 
  Handshake, ShieldCheck, Minimize2, Coins, ArrowRightLeft 
} from "lucide-react";

export default function AssociationVision() {
  const pillars = [
    {
      title: "Business Value & Risk Mitigation",
      desc: "Our services are strengthened by experienced consultants , providing a value addition that creates business value, reduces risk and process turn around time.",
      icon: ShieldCheck
    },
    {
      title: "Satisfactory ROI & Efficiency",
      desc: "We work with our partners to provide best possible seamless solutions at lower maintenance / implementation cost with enhance system efficiency, which provides satisfactory ROI.",
      icon: Coins
    },
    {
      title: "High-Performing Workforce",
      desc: "we strive to attract, motivate and retain a high-performing, diverse workforce.",
      icon: Handshake
    },
    {
      title: "Customer-Inclusive Approach",
      desc: "For our motivation we view customers to be part of the solution, not as part of the problem which we believe the crux of sincerity and integrity and long associations.",
      icon: Minimize2
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Strategic Alliance"
          title="Our Association Vision"
          subtitle="Our core mindset surrounding shared ownership, client integrations, and sustainable long-term partnerships."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vision Pillars */}
          <div className="lg:col-span-7 space-y-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4 p-5 rounded-2xl border border-rgss-light/20 bg-gradient-to-r from-rgss-light/5 to-transparent hover:border-rgss-primary/45 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-white text-rgss-deep border border-rgss-light/20 shrink-0 group-hover:scale-105 transition-transform">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-rgss-deep uppercase tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-xs text-rgss-dark/90 leading-relaxed mt-1 font-normal">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Lottie Animation directly (Cardless & Bigger) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-md h-[400px] flex items-center justify-center overflow-hidden"
            >
              <iframe 
                src="https://lottie.host/embed/fee312c9-0395-438a-9aec-79a5f4653565/EESk4asvlC.lottie"
                className="w-full h-full border-none pointer-events-none scale-125"
                title="Association Vision Lottie Animation"
              />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
