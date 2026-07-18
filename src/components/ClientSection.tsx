"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Image from "next/image";

export default function ClientSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clients = [
    { name: "Techbrawn", logo: "/techbrawn.jpg" },
    { name: "Value", logo: "/value.jpg" }
  ];

  const startCycling = () => {
    stopCycling();
    intervalRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % clients.length);
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
    <section className="py-20 md:py-24 relative overflow-hidden bg-white">
      {/* Background Soft Glow */}
      <div className="absolute top-[30%] left-[10%] w-[300px] h-[300px] rounded-full bg-rgss-light/10 blur-[90px] pointer-events-none -z-10 animate-pulse-glow" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Our Alliances"
          title="Clients & Partners"
          subtitle="We are trusted by leading enterprises and technical groups to engineer and support high-performance software systems."
        />

        <div className="flex flex-wrap justify-center items-center gap-12 mt-12 max-w-4xl mx-auto">
          {clients.map((client, idx) => {
            const isActive = activeIdx === idx;
            const isOthersActive = activeIdx !== idx;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
                animate={{
                  scale: isActive ? 1.12 : 0.92,
                  opacity: isOthersActive ? 0.45 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`relative group w-64 h-32 p-6 rounded-2xl border flex items-center justify-center overflow-hidden bg-white transition-shadow duration-300 ${
                  isActive 
                    ? "border-rgss-primary/60 shadow-xl shadow-[#0F4C68]/15" 
                    : "border-rgss-light/25 shadow-sm"
                }`}
              >
                {/* Overlay highlight */}
                <div className={`absolute inset-0 bg-gradient-to-tr from-rgss-primary/5 to-transparent transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`} />
                
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    fill
                    sizes="256px"
                    className={`object-contain transition-all duration-500 scale-95 group-hover:scale-100 ${
                      isActive ? "filter grayscale-0" : "filter grayscale opacity-60"
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
