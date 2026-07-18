"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { 
  FileSearch, Compass, Settings2, ShieldAlert, Award, 
  HelpCircle, CheckCircle2, ChevronRight, Activity
} from "lucide-react";

interface LifecycleStage {
  id: string;
  name: string;
  phase: string;
  desc: string;
  activities: string[];
}

const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    id: "pre",
    name: "Strategic Mapping",
    phase: "Pre-Implementation",
    desc: "Evaluating business landscape and alignment strategies before implementation starts.",
    activities: [
      "Business Landscape Evaluation",
      "Key stakeholder Priorities",
      "Solution Evaluation",
      "Establishing the Solution Footprint",
      "Strategy & Roadmap"
    ]
  },
  {
    id: "analysis",
    name: "Analysis & Design",
    phase: "Implementation",
    desc: "Analyzing business requirements, mapping standard workflows, and configuring pilot systems.",
    activities: [
      "Review Q&A",
      "Select business flows from Catalogue",
      "Quick Setup",
      "Conference Room Pilot",
      "Freeze Solution Design"
    ]
  },
  {
    id: "migration",
    name: "Migration",
    phase: "Implementation",
    desc: "Customizations, database blueprinting, comprehensive user training, data cutover, and system launch.",
    activities: [
      "Customizations & Development, Interfaces",
      "Solution Blue Print",
      "User Training",
      "Data Migration",
      "Go Live"
    ]
  },
  {
    id: "sustain",
    name: "Sustain",
    phase: "Post-Implementation",
    desc: "Stabilizing operations, database tuning, training refreshers, platform upgrades, and helpdesk support.",
    activities: [
      "Support",
      "Post Implementation Audit",
      "Training",
      "DBA Support",
      "Enhancements",
      "Migration",
      "Upgrades",
      "Helpdesk"
    ]
  }
];

export default function BusinessLifecycle() {
  const [activeStageId, setActiveStageId] = useState<string>("pre");
  
  const currentStage = LIFECYCLE_STAGES.find(s => s.id === activeStageId) || LIFECYCLE_STAGES[0];

  return (
    <section id="lifecycle" className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="End-to-End Demands"
          title="Systems Integrator Supporting End-to-End Business Demands"
          subtitle="Our operational span from the initial decision, through strategy, build, sustainment, and optimization action."
        />

        {/* Process Flow Chevrons */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 border border-rgss-light/25 bg-[#F8FCFD] p-2 rounded-2xl mb-12">
          
          {/* Decision Node */}
          <div className="px-4 py-3 flex items-center gap-2 border-b md:border-b-0 md:border-r border-rgss-light/20 text-rgss-deep bg-white rounded-xl shadow-xs shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-rgss-primary animate-ping" />
            <span className="text-xs font-bold uppercase tracking-wider">Decision</span>
          </div>

          <ChevronRight size={16} className="text-rgss-light/50 hidden md:block" />

          {/* Core Interactive Stages */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-2">
            {LIFECYCLE_STAGES.map((s) => {
              const isSelected = s.id === activeStageId;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveStageId(s.id)}
                  className={`px-4 py-3.5 rounded-xl text-left border transition-all ${
                    isSelected
                      ? "bg-[#1A5B7A] text-white border-[#1A5B7A] shadow-md shadow-rgss-primary/10"
                      : "bg-white text-rgss-dark border-rgss-light/25 hover:bg-rgss-light/5"
                  }`}
                >
                  <span className={`text-[8px] font-bold uppercase tracking-wider block ${isSelected ? "text-rgss-light" : "text-rgss-primary"}`}>
                    {s.phase}
                  </span>
                  <span className="text-xs font-extrabold tracking-tight mt-0.5 block uppercase">
                    {s.name}
                  </span>
                </button>
              );
            })}
          </div>

          <ChevronRight size={16} className="text-rgss-light/50 hidden md:block" />

          {/* Action Node */}
          <div className="px-4 py-3 flex items-center gap-2 border-t md:border-t-0 md:border-l border-rgss-light/20 text-rgss-deep bg-white rounded-xl shadow-xs shrink-0">
            <Activity size={14} className="text-rgss-primary" />
            <span className="text-xs font-bold uppercase tracking-wider">Action</span>
          </div>

        </div>

        {/* Details Dashboard Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStageId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="p-8 rounded-3xl border border-rgss-light/35 bg-[#F8FCFD] shadow-sm relative overflow-hidden"
          >
            <div className="mb-6">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-rgss-primary bg-rgss-light/10 border border-rgss-light/20 px-2.5 py-0.5 rounded">
                Active Phase: {currentStage.phase}
              </span>
              <h3 className="text-xl font-bold text-rgss-deep mt-3">
                {currentStage.name}
              </h3>
              <p className="text-xs text-rgss-dark/85 mt-1">
                {currentStage.desc}
              </p>
            </div>

            {/* Activities grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentStage.activities.map((act, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-rgss-light/20 hover:border-rgss-primary/45 transition-colors group shadow-xs"
                >
                  <div className="w-5 h-5 rounded-full bg-rgss-light/15 text-rgss-deep flex items-center justify-center shrink-0 group-hover:bg-rgss-primary group-hover:text-white transition-colors">
                    <CheckCircle2 size={12} />
                  </div>
                  <span className="text-xs font-semibold text-rgss-dark group-hover:text-rgss-deep transition-colors leading-tight">
                    {act}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
