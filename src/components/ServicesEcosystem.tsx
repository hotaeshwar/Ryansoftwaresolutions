"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { 
  Network, Cpu, Settings, Cloud, HelpCircle, ShieldAlert,
  ArrowRight, ShieldCheck, Database, Compass, Radio, Users2
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  bullets: string[];
  icon: React.ComponentType<any>;
  color: string;
}

const SERVICES: Service[] = [
  {
    id: "eas",
    title: "Enterprise Application Services",
    shortDesc: "Maximize return on IT investments and enhance business productivity.",
    longDesc: "Our Enterprise Application Services address a wide range of enterprise-wide IT challenges. We help reduce total cost of ownership by delivering high performance using our end-to-end IT capabilities, world-class alliances, and offshore advantage.",
    bullets: [
      "Increase operational efficiency across all units",
      "Firm-wide information to support decision making",
      "Rapid responses to customer requests",
      "Analytical tools to evaluate organizational performance"
    ],
    icon: Database,
    color: "#4BAED6"
  },
  {
    id: "infra",
    title: "Infrastructure Management",
    shortDesc: "Secure, reliable, and scalable back-bone for modern enterprises.",
    longDesc: "Enterprises need to be secure, reliable and scalable. It all starts with IT infrastructure which is the back-bone of any enterprise. With the rapidly evolving technologies, it is nearly impossible to anticipate future infrastructure integration challenges without specialized frameworks in place.\n\nRGSS infrastructure portfolio of service offerings spans across Data Centre Management, Network Management, and Cloud Services.\n\nWe plan, design and deploy customized, optimal and cost-efficient infrastructure solutions in line with your business objectives. Our custom offerings are designed to push productivity and efficiency to the fullest while reducing infrastructure and operational expenses.",
    bullets: [
      "Data Centre Management & Optimization",
      "Network Management & Integrations",
      "Cloud Services (Public, Private, & Hybrid)",
      "Customized, Optimal & Cost-Efficient Solutions"
    ],
    icon: Cloud,
    color: "#8FD3F4"
  },
  {
    id: "strategy",
    title: "IT Strategy & Advisory",
    shortDesc: "Collaborative strategy for agility, sustainability, and resilience.",
    longDesc: "We act as a proactive business partner in reimagining your IT strategy. We map out digital transformation roadmaps and build adaptable architectures to handle future growth.",
    bullets: [
      "Infrastructure Strategy & Roadmap Development",
      "Architecture Design and Health Checks",
      "Enterprise Resilience & Security Controls",
      "Seamless integration with legacy nodes"
    ],
    icon: Compass,
    color: "#1A5B7A"
  },
  {
    id: "integration",
    title: "System Integration",
    shortDesc: "Cohesive alignment of platforms, data streams, and business logic.",
    longDesc: "We connect systems, data, and processes across enterprises. We design Greenfield and Brownfield integration architectures to prevent data fragmentation and keep information flowing.",
    bullets: [
      "System integration (SAP)",
      "Process Integration and Orchestration",
      "Unified operational databases",
      "Seamless interface and API management"
    ],
    icon: Network,
    color: "#7CC7E8"
  },
  {
    id: "support",
    title: "Application Maintenance & Support",
    shortDesc: "Around-the-clock lifecycle support, enhancements, and upgrades.",
    longDesc: "Maximize software uptime and extend standard functionality through onsite, offshore, or blended support options. We ensure your core platforms stay up-to-date and run smoothly.",
    bullets: [
      "Onsite & Offshore support structures",
      "Database Administration (DBA) Support",
      "Minor customization, enhancements & custom interfaces",
      "Platform upgrades, migrations, and bug patches"
    ],
    icon: Settings,
    color: "#4BAED6"
  },
  {
    id: "sme",
    title: "Subject Matter Expert Advisory",
    shortDesc: "Trusted advisory for project leadership and management training.",
    longDesc: "Access senior expertise to steer high-impact rollouts. We provide project managers, program managers, and specialists to audit designs, mitigate risks, and upskill higher management.",
    bullets: [
      "Project & Program Management (PMI/PMP certified)",
      "Module-Specific Expertise & Solutions Auditing",
      "Higher Management Transformation Training",
      "Risk Mitigation and Technical Advisory"
    ],
    icon: Users2,
    color: "#0F4C68"
  }
];

export default function ServicesEcosystem() {
  const [selectedService, setSelectedService] = useState<Service>(SERVICES[0]);
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);

  // Math helper to position nodes radially
  const getCoordinates = (index: number, total: number, radius: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2; // Start from top
    return {
      cx: 200 + radius * Math.cos(angle),
      cy: 200 + radius * Math.sin(angle),
    };
  };

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Service Portfolio"
          title="Services Ecosystem"
          subtitle="Explore our integrated digital solutions. Hover over nodes to preview data connections, and click to view our comprehensive capabilities."
        />

        {/* Mobile Layout (Simple Stacked / Accordion Experience) */}
        <div className="block lg:hidden space-y-4">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            const isSelected = selectedService.id === s.id;
            return (
              <div 
                key={s.id} 
                className={`p-5 rounded-2xl border transition-all ${
                  isSelected ? "bg-rgss-light/5 border-rgss-primary" : "bg-white border-rgss-light/20"
                }`}
              >
                <button 
                  onClick={() => setSelectedService(s)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-rgss-light/10 text-rgss-deep">
                      <Icon size={18} />
                    </div>
                    <span className="font-bold text-rgss-deep text-sm">{s.title}</span>
                  </div>
                  <ArrowRight size={16} className={`text-rgss-primary transition-transform ${isSelected ? "rotate-90" : ""}`} />
                </button>

                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden mt-4 pt-4 border-t border-rgss-light/20"
                    >
                      <p className="text-xs text-rgss-dark/90 leading-relaxed mb-4 whitespace-pre-line">
                        {s.longDesc}
                      </p>
                      <ul className="space-y-2">
                        {s.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-[11px] text-rgss-dark">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-rgss-primary shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop Interactive Layout (SVG Hub and Spoke + Sidebar Detail Panel) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
          
          {/* Radial SVG Hub Column */}
          <div className="col-span-6 flex justify-center items-center">
            <div className="relative w-[400px] h-[400px]">
              
              {/* Active Node Pulsing Halo Indicator */}
              <AnimatePresence>
                {SERVICES.map((s, idx) => {
                  const coords = getCoordinates(idx, SERVICES.length, 100);
                  const isSelected = selectedService.id === s.id;
                  
                  if (!isSelected) return null;
                  return (
                    <motion.div
                      key={s.id}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: [0.9, 1.3, 0.9], opacity: [0.2, 0.6, 0.2] }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      style={{
                        left: `${coords.cx - 28}px`,
                        top: `${coords.cy - 28}px`,
                      }}
                      className="absolute w-14 h-14 rounded-full border border-rgss-primary pointer-events-none z-10"
                    />
                  );
                })}
              </AnimatePresence>

              {/* Radial SVG overlay */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                {/* Decorative rotating background dial */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="100"
                  fill="none"
                  stroke="#4BAED6"
                  strokeWidth="0.75"
                  strokeDasharray="8 8"
                  opacity="0.2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  style={{ originX: "200px", originY: "200px" }}
                />

                {/* Spoke connection lines and pulsing packets */}
                {SERVICES.map((s, idx) => {
                  const coords = getCoordinates(idx, SERVICES.length, 100);
                  const isHovered = hoveredServiceId === s.id;
                  const isSelected = selectedService.id === s.id;
                  
                  return (
                    <g key={s.id}>
                      {/* Connection path line - animated dash array flowing data */}
                      <motion.line
                        x1="200"
                        y1="200"
                        x2={coords.cx}
                        y2={coords.cy}
                        stroke={isHovered || isSelected ? s.color : "#7CC7E8"}
                        strokeWidth={isHovered || isSelected ? 3 : 1.5}
                        strokeDasharray="6 6"
                        animate={{
                          strokeDashoffset: [0, -24],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: isHovered || isSelected ? 1 : 2.5,
                          ease: "linear",
                        }}
                        opacity={isHovered || isSelected ? 0.95 : 0.35}
                        className="transition-all"
                      />

                      {/* Pulsing data packets running from outer node to central hub on hover */}
                      {(isHovered || isSelected) && (
                        <motion.circle
                          r="4"
                          fill={s.color}
                          animate={{
                            cx: [coords.cx, 200],
                            cy: [coords.cy, 200],
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />
                      )}
                    </g>
                  );
                })}

                {/* Central Hub Circle Background glow */}
                <circle cx="200" cy="200" r="32" fill="white" stroke="#8FD3F4" strokeWidth="1" opacity="0.3" />
              </svg>

              {/* Central RGSS Core Node - pulsing and glowing */}
              <motion.div 
                animate={{
                  scale: [1, 1.06, 1],
                  boxShadow: [
                    "0px 4px 10px rgba(75, 174, 214, 0.25)",
                    "0px 4px 20px rgba(75, 174, 214, 0.55)",
                    "0px 4px 10px rgba(75, 174, 214, 0.25)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-[175px] left-[175px] w-[50px] h-[50px] rounded-full bg-gradient-to-tr from-rgss-primary to-rgss-dark text-white flex items-center justify-center font-bold text-xs z-20 cursor-default"
              >
                RGSS
              </motion.div>

              {/* Outer Service Nodes */}
              {SERVICES.map((s, idx) => {
                const coords = getCoordinates(idx, SERVICES.length, 100);
                const Icon = s.icon;
                const isSelected = selectedService.id === s.id;
                const isHovered = hoveredServiceId === s.id;

                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s)}
                    onMouseEnter={() => setHoveredServiceId(s.id)}
                    onMouseLeave={() => setHoveredServiceId(null)}
                    style={{
                      left: `${coords.cx - 24}px`,
                      top: `${coords.cy - 24}px`,
                    }}
                    className={`absolute w-12 h-12 rounded-full flex items-center justify-center border transition-all z-20 ${
                      isSelected
                        ? "bg-[#1A5B7A] text-white border-[#1A5B7A] scale-110 shadow-md shadow-rgss-primary/20"
                        : isHovered
                        ? "bg-rgss-light/20 text-[#1A5B7A] border-[#4BAED6] scale-105"
                        : "bg-white text-rgss-dark border-rgss-light/35 shadow-sm"
                    }`}
                  >
                    <Icon size={18} />
                  </button>
                );
              })}

            </div>
          </div>

          {/* Details Column */}
          <div className="col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-3xl border border-rgss-light/35 bg-[#F8FCFD] shadow-sm relative overflow-hidden"
              >
                <div className="flex gap-4 items-center mb-6">
                  <div className="p-3.5 rounded-2xl bg-white text-rgss-deep border border-rgss-light/25 shadow-sm">
                    {React.createElement(selectedService.icon, { size: 24 })}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-rgss-primary">
                      Ecosystem Node Detail
                    </span>
                    <h3 className="text-xl font-bold text-rgss-deep">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-rgss-dark/90 leading-relaxed mb-6 whitespace-pre-line">
                  {selectedService.longDesc}
                </p>

                <h4 className="text-xs font-bold text-rgss-deep uppercase tracking-wider mb-3">
                  Key Deliverables & Strengths
                </h4>
                
                <ul className="space-y-3">
                  {selectedService.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-rgss-dark/85">
                      <div className="w-4 h-4 rounded-full bg-rgss-light/25 text-rgss-deep flex items-center justify-center mt-0.5 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-rgss-primary" />
                      </div>
                      <span className="font-normal">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
