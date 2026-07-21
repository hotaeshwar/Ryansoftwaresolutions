"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { 
  Database, GitMerge, RefreshCw, Cpu, Layers, HelpCircle, 
  ArrowRight, Users, Settings, Award
} from "lucide-react";

export default function EnterpriseApplications() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const architectureLayers = [
    {
      title: "System Integration",
      subtitle: "End-to-end implementation and platform migrations",
      icon: GitMerge,
      items: [
        { name: "Implementation (Greenfield & Brownfield)", desc: "End-to-end implementation of key platforms: SAP ECC and SAP S/4 HANA." },
        { name: "Migration from ECC to HANA", desc: "Safe, proven migration paths to transition your core ERP database layers to S/4 HANA." },
        { name: "Business Intelligence Reporting", desc: "Dynamic reporting solutions to provide firm-wide visibility and support strategic decision making." },
        { name: "Customized Vendor & Customer Portals", desc: "Tailored portal interfaces to streamline partner communication and customer self-service capabilities." },
        { name: "Roll Outs & Upgrades", desc: "Strategic deployment of global upgrades and template rollouts across business locations." },
      ]
    },
    {
      title: "Application Maintenance & Support",
      subtitle: "Continuous support and functional maintenance lifecycle",
      icon: Settings,
      items: [
        { name: "Onsite Support", desc: "Direct hands-on technical and functional assistance at client facilities for maximum responsiveness." },
        { name: "Offshore Support", desc: "Cost-efficient, 24/7 remote operational support and troubleshooting from our global delivery centers." },
        { name: "Reporting", desc: "Regular performance dashboards, system health reports, and operational audits." },
        { name: "Addition of New Functionalities", desc: "Continuous improvements, custom integrations, and minor enhancement configurations." },
        { name: "Data Archiving", desc: "System performance optimizations through database size reduction and archiving strategies." },
      ]
    },
    {
      title: "Subject Matter Experts / Trusted Advisory",
      subtitle: "Domain expertise and executive steering advisory",
      icon: Users,
      items: [
        { name: "Process Integration / Orchestration", desc: "Unifying heterogeneous business steps using advanced middleware channels." },
        { name: "Module Specific Expertise", desc: "Highly specialized advisory across Finance, Supply Chain, Logistics, and HR modules." },
        { name: "Higher Management Training", desc: "Empowering stakeholders and sponsors with strategic training to maximize platform adoption." },
        { name: "Project Management", desc: "Disciplined execution of deliverables, timeline tracking, and risk mitigation." },
        { name: "Program Management", desc: "Comprehensive program governance to align multiple parallel IT initiatives with business strategy." },
      ]
    }
  ];

  return (
    <section id="architecture" className="py-20 md:py-28 relative overflow-hidden bg-white">
      {/* Background decoration grid */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #4BAED6 2px, transparent 2px),
            linear-gradient(to bottom, #4BAED6 2px, transparent 2px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="System Architecture"
          title="Enterprise Applications Architecture"
          subtitle="Our specialized functional stack linking core transaction platforms, middleware channels, and program governance."
        />

        {/* Tab selection for Mobile */}
        <div className="flex md:hidden justify-between border border-rgss-light/25 rounded-xl p-1 mb-8 bg-[#F8FCFD]">
          {architectureLayers.map((layer, idx) => {
            const Icon = layer.icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`flex-1 flex flex-col items-center py-2 px-1 text-center rounded-lg transition-all ${
                  activeCategory === idx 
                    ? "bg-rgss-primary text-white" 
                    : "text-rgss-dark hover:bg-rgss-light/10"
                }`}
              >
                <Icon size={16} />
                <span className="text-[9px] font-bold uppercase tracking-wider mt-1">
                  {idx === 0 ? "Integration" : idx === 1 ? "Support" : "Advisory"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Desktop Layout: 3 Columns linked with flowing SVG lines */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Animated SVG Flow paths in background for Desktop */}
          <div className="hidden md:block absolute inset-0 pointer-events-none -z-10">
            <svg className="w-full h-full opacity-30">
              {/* Curve 1: Column 1 to Column 2 */}
              <motion.path
                d="M 300 200 C 400 150, 450 250, 500 200"
                fill="none"
                stroke="#7CC7E8"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <motion.path
                d="M 300 450 C 400 400, 450 500, 500 450"
                fill="none"
                stroke="#4BAED6"
                strokeWidth="2"
              />
              {/* Curve 2: Column 2 to Column 3 */}
              <motion.path
                d="M 700 200 C 800 250, 850 150, 900 200"
                fill="none"
                stroke="#4BAED6"
                strokeWidth="2"
              />
              <motion.path
                d="M 700 450 C 800 500, 850 400, 900 450"
                fill="none"
                stroke="#7CC7E8"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {architectureLayers.map((layer, idx) => {
            const Icon = layer.icon;
            const isVisible = activeCategory === idx;
            
            return (
              <div
                key={idx}
                className={`flex flex-col space-y-6 transition-all duration-300 ${
                  activeCategory !== idx ? "hidden md:flex" : "flex"
                }`}
              >
                {/* Column Header Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-tr from-rgss-light/10 via-white to-transparent border border-rgss-light/35 shadow-md shadow-rgss-light/5 hover:border-rgss-primary/45 transition-colors flex gap-4 items-center">
                  <div className="p-3 rounded-xl bg-white text-rgss-deep border border-rgss-light/25 shadow-sm shrink-0">
                    <Icon size={20} className="text-rgss-primary animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rgss-primary block">
                      Layer 0{idx + 1}
                    </span>
                    <h3 className="text-base font-extrabold text-rgss-deep uppercase tracking-tight leading-tight">
                      {layer.title}
                    </h3>
                    <p className="text-xs text-rgss-dark font-medium leading-tight mt-1">
                      {layer.subtitle}
                    </p>
                  </div>
                </div>

                {/* Items in Layer */}
                <div className="space-y-4">
                  {layer.items.map((item, itemIdx) => (
                    <motion.div
                      key={itemIdx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: itemIdx * 0.1 }}
                      className="p-5 rounded-2xl border border-rgss-light/20 bg-white hover:border-rgss-primary/45 hover:shadow-[0_0_25px_rgba(75,174,214,0.2)] hover:scale-[1.03] transition-all group relative overflow-hidden cursor-default"
                    >
                      {/* Left glowing bar on hover */}
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-rgss-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />

                      <h4 className="text-sm font-extrabold text-rgss-deep group-hover:text-rgss-primary transition-colors flex items-center gap-1">
                        {item.name}
                      </h4>
                      <p className="text-[13px] text-rgss-dark leading-relaxed mt-1.5 font-semibold">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
