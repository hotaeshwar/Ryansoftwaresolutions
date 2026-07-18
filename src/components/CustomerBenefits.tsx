"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { 
  Star, ShieldCheck, CheckCircle2, Milestone
} from "lucide-react";

interface BenefitItem {
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
}

const OFFERING_DIFFERENTIATORS: BenefitItem[] = [
  {
    title: "Global Domain Experience",
    desc: "Partners and consultants have experience in world class deployments in various domains namely – Manufacturing, Oil & Gas, Automotive, Airlines, Telecom, Utilities, Hospitality, Retail & Garment Industry.",
    icon: Star
  },
  {
    title: "Cost-Effective Quality",
    desc: "Key differentiator is quality at a lesser price as we work with bare minimum overheads.",
    icon: ShieldCheck
  },
  {
    title: "Senior Tenure",
    desc: "All key consultants have experience more than 15 years.",
    icon: Milestone
  }
];

const CUSTOMER_BENEFITS: BenefitItem[] = [
  {
    title: "Decrease Operational Costs",
    desc: "Decrease Operational Costs by Providing Seamless Integration of System, Data and Processes across Enterprises.",
    icon: CheckCircle2
  },
  {
    title: "Increase Customer Satisfaction",
    desc: "Increase customer satisfaction based on improved on-time delivery, improved quality and shortened delivery cycle.",
    icon: CheckCircle2
  },
  {
    title: "Process Driven Orientation",
    desc: "More process driven solutions resulting in easier orientation of people with systems.",
    icon: CheckCircle2
  },
  {
    title: "Reduced Cost to Customer",
    desc: "Reduced cost to customer as benefits of lesser overheads are passed on to the customer.",
    icon: CheckCircle2
  }
];

export default function CustomerBenefits() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Impact & Returns"
          title="The RGSS Advantage"
          subtitle="How our lean overhead strategy and process-driven integration models translate to client success."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Offering Differentiators */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-rgss-light/25 pb-3">
              <span className="w-2.5 h-6 rounded-md bg-rgss-primary" />
              <h2 className="text-lg font-bold text-rgss-deep tracking-tight uppercase">
                Offering Differentiators
              </h2>
            </div>
            
            <div className="space-y-4">
              {OFFERING_DIFFERENTIATORS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl border border-rgss-light/20 bg-white hover:border-rgss-primary/45 hover:shadow-md transition-all group"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="p-2.5 rounded-xl bg-rgss-light/10 text-rgss-deep group-hover:bg-rgss-primary group-hover:text-white transition-colors shrink-0">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-rgss-deep group-hover:text-rgss-primary transition-colors uppercase tracking-wider">
                          {item.title}
                        </h4>
                        <p className="text-xs text-rgss-dark/85 leading-relaxed mt-1.5 font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Customer Benefits */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-rgss-light/25 pb-3">
              <span className="w-2.5 h-6 rounded-md bg-[#1A5B7A]" />
              <h2 className="text-lg font-bold text-rgss-deep tracking-tight uppercase">
                Customer Benefits
              </h2>
            </div>

            <div className="space-y-4">
              {CUSTOMER_BENEFITS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl border border-rgss-light/20 bg-[#F8FCFD] hover:border-rgss-primary/45 hover:shadow-md transition-all group"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="p-2.5 rounded-xl bg-[#1A5B7A]/10 text-[#1A5B7A] group-hover:bg-[#1A5B7A] group-hover:text-white transition-colors shrink-0">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-rgss-deep group-hover:text-[#1A5B7A] transition-colors uppercase tracking-wider">
                          {item.title}
                        </h4>
                        <p className="text-xs text-rgss-dark/85 leading-relaxed mt-1.5 font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
