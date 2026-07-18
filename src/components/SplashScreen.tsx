"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface SplashScreenProps {
  finishLoading: () => void;
}

export default function SplashScreen({ finishLoading }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            finishLoading();
          }, 400); // Small pause at 100% before transition
          return 100;
        }
        return prev + 2;
      });
    }, 30); // 1.5s total loading time

    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#091D28] overflow-hidden" suppressHydrationWarning>
      {/* Background Video */}
      {isClient && (
        <video
          src="/ryanlogo.mp4"
          autoPlay
          muted
          loop
          playsInline
          suppressHydrationWarning
          className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none -z-20"
        />
      )}

      {/* Background Grid and Glowing shapes */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none -z-10" 
        style={{
          backgroundImage: "radial-gradient(#8FD3F4 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px"
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-rgss-light/5 blur-[100px] pointer-events-none animate-pulse-glow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-rgss-primary/5 blur-[100px] pointer-events-none animate-pulse-glow -z-10" style={{ animationDelay: "2s" }} />

      <div className="flex flex-col items-center gap-8 max-w-sm w-full px-6 relative z-10">
        
        {/* White Background Logo Container Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-80 h-32 bg-white px-6 py-4 rounded-3xl shadow-2xl flex items-center justify-center border border-rgss-light/35 shadow-rgss-primary/10 overflow-hidden"
        >
          {/* Background subtle glow behind the logo */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-rgss-primary/10 to-rgss-light/10 opacity-30 blur-sm -z-10 animate-pulse" />
          
          <Image
            src="/logo.png"
            alt="RGSS Logo"
            fill
            sizes="320px"
            className="object-contain p-3 relative z-10"
            priority
          />
        </motion.div>

        {/* Circular buffer spinner animation */}
        <div className="relative w-20 h-20 mt-4 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="40"
              cy="40"
              r="34"
              className="stroke-rgss-light/10"
              strokeWidth="3"
              fill="transparent"
            />
            <motion.circle
              cx="40"
              cy="40"
              r="34"
              className="stroke-rgss-primary"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 34}
              strokeDashoffset={2 * Math.PI * 34 * (1 - progress / 100)}
              transition={{ ease: "easeOut" }}
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-sm font-black text-white tracking-tighter">
              {progress}%
            </span>
            <span className="text-[7px] font-bold text-rgss-light/60 uppercase tracking-widest -mt-0.5">
              LOAD
            </span>
          </div>
        </div>

        {/* Sincere performance tag */}
        <div className="flex flex-col items-center gap-1.5 mt-2">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.3 }}
            className="text-[10px] font-bold uppercase tracking-widest text-rgss-light text-center"
          >
            "Simple People………High Performance"
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-rgss-primary to-transparent"
          />
        </div>

      </div>
    </div>
  );
}
