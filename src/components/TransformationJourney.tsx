"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface JourneyStage {
  title: string;
  badge: string;
  desc: string;
  icon: React.ReactNode;
}

const STAGES: JourneyStage[] = [
  {
    title: "Strategy",
    badge: "Stage 01",
    desc: "Define the transformation vision, key drivers, and high-level architectural roadmap.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="22" x2="21" y2="22" />
        <line x1="6" y1="18" x2="6" y2="11" />
        <line x1="10" y1="18" x2="10" y2="11" />
        <line x1="14" y1="18" x2="14" y2="11" />
        <line x1="18" y1="18" x2="18" y2="11" />
        <path d="M12 2L2 7h20L12 2z" />
        <path d="M2 18h20v4H2v-4z" />
      </svg>
    )
  },
  {
    title: "Strategic Mapping",
    badge: "Stage 02",
    desc: "Align services with core systems and establish solution footprints.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    )
  },
  {
    title: "Analysis & Design",
    badge: "Stage 03",
    desc: "Evaluate business landscapes, conference room pilots, and freeze designs.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    )
  },
  {
    title: "Realization",
    badge: "Stage 04",
    desc: "System configuration, customized builds, custom interfaces, and unit checks.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3" />
        <path d="M15 1v3" />
        <path d="M9 20v3" />
        <path d="M15 20v3" />
        <path d="M20 9h3" />
        <path d="M20 15h3" />
        <path d="M1 9h3" />
        <path d="M1 15h3" />
      </svg>
    )
  },
  {
    title: "Migration",
    badge: "Stage 05",
    desc: "Execute data cleanup, validate mapping, and complete database migrations.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    )
  },
  {
    title: "Sustain",
    badge: "Stage 06",
    desc: "Initiate onsite/offshore support queues, enhancements, and upgrades.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M3 21v-5h5" />
      </svg>
    )
  },
  {
    title: "Alignment of Services",
    badge: "Stage 07",
    desc: "Ensure systems achieve end-to-end integration and satisfy customer demands.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
      </svg>
    )
  }
];

export default function TransformationJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startCycling = () => {
    stopCycling();
    intervalRef.current = setInterval(() => {
      setActiveStageIdx((prev) => (prev + 1) % STAGES.length);
    }, 2800); // 2.8 seconds cycle
  };

  const stopCycling = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    if (!isHovered) {
      startCycling();
    }
    return () => stopCycling();
  }, [isHovered]);

  const handleMouseEnter = (idx: number) => {
    setIsHovered(true);
    setActiveStageIdx(idx);
    stopCycling();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section 
      ref={containerRef}
      id="journey" 
      className="py-20 md:py-28 relative overflow-hidden bg-[#F8FCFD]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Delivery Roadmap"
          title="Digital Transformation Journey"
          subtitle="Our methodology to transition operations smoothly from strategic concept to stabilized system sustainment."
        />

        {/* Desktop View: Horizontal scroll-linked map */}
        <div className="hidden lg:block relative py-12">
          
          {/* Timeline background track line */}
          <div className="absolute top-[68px] left-[6%] right-[6%] h-[3px] bg-rgss-light/15 -z-10 rounded-full overflow-hidden">
            {/* Auto-progress fill line */}
            <motion.div
              animate={{ scaleX: activeStageIdx / (STAGES.length - 1) }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="h-full bg-gradient-to-r from-rgss-primary via-rgss-light to-rgss-primary"
            />
          </div>

          <div className="grid grid-cols-7 gap-4 relative">
            {STAGES.map((s, idx) => {
              const isActive = activeStageIdx === idx;
              return (
                <div key={idx} className="flex flex-col items-center text-center">
                  
                  {/* Timeline circle node */}
                  <motion.div
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: isActive ? 1.25 : 1, opacity: 1 }}
                    animate={{
                      scale: isActive ? 1.25 : 0.95,
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`relative w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 z-10 cursor-pointer ${
                      isActive
                        ? "bg-[#1A5B7A] text-white border-[#1A5B7A] shadow-lg shadow-[#1A5B7A]/25 scale-125"
                        : "bg-white text-rgss-dark border-rgss-light/35 shadow-sm"
                    }`}
                  >
                    {/* Node glow animation */}
                    {isActive && (
                      <motion.div 
                        layoutId="stageGlow"
                        className="absolute -inset-2.5 rounded-full bg-rgss-light/15 border border-rgss-light/30 pointer-events-none -z-10 animate-pulse-glow"
                      />
                    )}
                    
                    {s.icon}

                    {/* Small index badge */}
                    <span className={`absolute -bottom-1.5 text-[8px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 border rounded z-20 ${
                      isActive 
                        ? "text-white bg-rgss-primary border-rgss-primary" 
                        : "text-rgss-primary bg-white border-rgss-light/30"
                    }`}>
                      0{idx + 1}
                    </span>
                  </motion.div>

                  {/* Node Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    animate={{
                      scale: isActive ? 1.04 : 0.96,
                      opacity: isActive ? 1 : 0.65,
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4 }}
                    className="mt-8 space-y-2 px-1 relative flex flex-col items-center"
                  >
                    <span className="text-[11px] font-bold text-rgss-primary uppercase tracking-widest block">
                      {s.badge}
                    </span>
                    <h3 className={`text-sm font-black uppercase tracking-tight transition-colors duration-300 ${
                      isActive ? "text-rgss-primary" : "text-rgss-deep"
                    }`}>
                      {s.title}
                    </h3>
                    <p className="text-[13px] text-rgss-dark/85 leading-normal font-normal">
                      {s.desc}
                    </p>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Mobile View: Vertical Timeline */}
        <div className="block lg:hidden relative pl-8 border-l border-rgss-light/30 space-y-10 py-4 ml-3">
          
          {/* Floating particle on mobile timeline line */}
          <div className="absolute left-[-1.5px] top-0 bottom-0 w-[3px]">
            <motion.div
              animate={{ scaleY: activeStageIdx / (STAGES.length - 1) }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
              className="w-full h-full bg-rgss-primary rounded-full"
            />
          </div>

          {STAGES.map((s, idx) => {
            const isActive = activeStageIdx === idx;
            return (
              <motion.div
                key={idx}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className={`absolute left-[-45px] top-1 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 z-10 ${
                  isActive
                    ? "bg-[#1A5B7A] text-white border-[#1A5B7A] scale-110 shadow-sm"
                    : "bg-white text-rgss-dark border-rgss-light"
                }`}>
                  {s.icon}
                </div>

                {/* Content card */}
                <div className={`p-4 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                  isActive 
                    ? "bg-white border-rgss-primary shadow-md shadow-rgss-light/10 scale-[1.02]" 
                    : "bg-white border-rgss-light/25 shadow-sm"
                }`}>
                  <span className="text-[11px] font-bold text-rgss-primary uppercase tracking-widest block">
                    {s.badge}
                  </span>
                  <h3 className={`text-base font-bold uppercase tracking-tight ${
                    isActive ? "text-rgss-primary" : "text-rgss-deep"
                  }`}>
                    {s.title}
                  </h3>
                  <p className="text-sm text-rgss-dark/95 leading-relaxed mt-1 font-normal">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
