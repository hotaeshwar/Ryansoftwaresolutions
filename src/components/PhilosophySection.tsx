"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Heart, CheckCircle, Award, Lightbulb, Users } from "lucide-react";

export default function PhilosophySection() {
  const principles = [
    {
      title: "Harmony",
      desc: "Harmony between customers and ourselves",
      detail: "Building relationships is at the core of what we do, valuing our customers as much as our workforce.",
      icon: Heart,
    },
    {
      title: "Standardization",
      desc: "Unique but standardization-oriented solutions",
      detail: "Providing proven achievements and sincerity to meet expectations with structured, reproducible success.",
      icon: CheckCircle,
    },
    {
      title: "Competent Team",
      desc: "Quality through a dedicated, directed team",
      detail: "Delivering services with quality via a competent team practicing excellence through absolute integrity.",
      icon: Award,
    },
    {
      title: "Innovation",
      desc: "Maximizing innovative business opportunities",
      detail: "Striving to create future-ready solutions that leverage technology to its fullest capability.",
      icon: Lightbulb,
    },
  ];

  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startCycling = () => {
    stopCycling();
    intervalRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % principles.length);
    }, 3000); // 3 seconds interval
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
    setActiveIdx(idx);
    stopCycling();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section id="philosophy" className="py-20 md:py-28 relative overflow-hidden bg-[#F8FCFD]">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-rgss-light/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Core Beliefs"
          title="Our Philosophy"
          subtitle="Relationship-driven consulting built on integrity, competence, and standard-setting design."
        />

        {/* Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto p-8 rounded-3xl border border-rgss-light/35 bg-white shadow-xl shadow-rgss-light/10 mb-20 relative overflow-hidden"
        >
          {/* Quote mark decorator */}
          <div className="absolute top-4 left-6 text-rgss-light/20 text-8xl font-serif select-none pointer-events-none">
            “
          </div>
          
          <div className="relative z-10 text-center space-y-6">
            <p className="text-lg md:text-xl font-medium text-rgss-deep italic leading-relaxed">
              "Consulting is not just a coat of paint. It is all about brainstorming and providing agreeable solutions. We are and will continue to be driven by lesser overheads, thus providing to our customers better solution at a considerable price."
            </p>
            <div className="flex items-center justify-center gap-2">
              <Users size={16} className="text-rgss-primary animate-pulse" />
              <span className="text-xs uppercase font-bold tracking-widest text-rgss-primary">
                The RGSS Sincerity Pact
              </span>
            </div>
          </div>
        </motion.div>

        {/* Flowing timeline cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-16">


          {principles.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIdx === index;
            return (
              <motion.div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{
                  scale: isActive ? 1.08 : 0.95,
                  boxShadow: isActive
                    ? "0 20px 40px -15px rgba(75, 174, 214, 0.25), 0 0 25px 5px rgba(143, 211, 244, 0.35)"
                    : "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
                  borderColor: isActive ? "#4BAED6" : "rgba(143, 211, 244, 0.25)",
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  opacity: { duration: 0.6, delay: index * 0.15 },
                  y: { duration: 0.6, delay: index * 0.15 },
                }}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border transition-all cursor-pointer group"
              >
                {/* Node icon with glowing ring */}
                <div className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 mb-6 ${
                  isActive
                    ? "bg-rgss-primary text-white border-2 border-rgss-primary scale-105"
                    : "bg-rgss-light/10 border-2 border-rgss-light/35 text-rgss-deep group-hover:bg-rgss-primary group-hover:text-white group-hover:scale-105"
                }`}>
                  <Icon size={24} />
                  
                  {/* Small index tag */}
                  <span className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[9px] font-bold flex items-center justify-center border transition-all duration-300 ${
                    isActive
                      ? "bg-rgss-deep text-white border-white"
                      : "bg-rgss-deep text-white border-white"
                  }`}>
                    0{index + 1}
                  </span>
                </div>

                <h3 className={`text-md font-bold transition-colors mb-2 ${
                  isActive ? "text-rgss-primary" : "text-rgss-deep group-hover:text-rgss-primary"
                }`}>
                  {item.title}
                </h3>
                
                <h4 className="text-xs font-semibold text-rgss-primary mb-3 uppercase tracking-wide leading-tight">
                  {item.desc}
                </h4>

                <p className={`text-xs leading-relaxed font-normal transition-colors duration-300 ${
                  isActive ? "text-rgss-dark" : "text-rgss-dark/80"
                }`}>
                  {item.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
