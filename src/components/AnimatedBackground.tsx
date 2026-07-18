"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate static nodes for the background network
    const generatedParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 15 + 10,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-white">
      {/* Light Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #4BAED6 1px, transparent 1px),
            linear-gradient(to bottom, #4BAED6 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Ambient Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orb 1: Top Right */}
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#8FD3F4]/20 to-[#7CC7E8]/5 blur-[80px] animate-drift" />
        
        {/* Orb 2: Center Left */}
        <div className="absolute top-[40%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-[#7CC7E8]/15 to-[#4BAED6]/5 blur-[100px] animate-drift" style={{ animationDelay: "-5s" }} />

        {/* Orb 3: Bottom Right */}
        <div className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-[#8FD3F4]/15 to-[#4BAED6]/10 blur-[90px] animate-drift" style={{ animationDelay: "-10s" }} />
      </div>

      {/* Connected Network Nodes Background */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none">
        {/* Animated Connection Lines */}
        <motion.path
          d="M 100 200 Q 300 150 500 300 T 900 200 T 1200 400"
          fill="none"
          stroke="#4BAED6"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 200 800 Q 500 700 800 850 T 1400 700"
          fill="none"
          stroke="#7CC7E8"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </svg>

      {/* Floating Digital Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#7CC7E8] opacity-30"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: ["0vh", "-100vh"],
              x: ["0vw", `${(Math.random() - 0.5) * 10}vw`],
              opacity: [0, 0.4, 0.4, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}
