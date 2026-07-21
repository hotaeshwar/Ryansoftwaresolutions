"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Network } from "lucide-react";

function TypewriterHeading() {
  const words = [
    "Software Solutions",
    "IT Consulting",
    "SAP S/4 HANA Systems",
    "Digital Transformation"
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      // Pause at the end of the word before erasing
      const timeout = setTimeout(() => setReverse(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150); // Erase faster than write

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  useEffect(() => {
    setText(words[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <span className="inline-block relative">
      {text}
      <span className="absolute -right-2 top-0 bottom-0 w-[3px] bg-rgss-primary animate-[pulse_1s_infinite]" />
    </span>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log("Autoplay failed:", err);
      });
    }
  }, [isClient]);
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const logoY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#8FD3F4]/10 blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            style={{ y: textY, opacity }}
            className="lg:col-span-6 text-left space-y-6"
          >
            <div className="space-y-2">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-rgss-deep bg-rgss-light/15 border border-rgss-light/20"
              >
                <Network size={12} className="text-rgss-primary animate-pulse" />
                Next-Gen IT Consulting
              </motion.div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-rgss-deep leading-[1.1] font-sans">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="block text-rgss-deep"
                >
                  Rayaan Global
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block bg-gradient-to-r from-rgss-primary to-rgss-dark bg-clip-text text-transparent min-h-[1.2em]"
                >
                  <TypewriterHeading />
                </motion.span>
              </h1>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg text-rgss-dark font-semibold tracking-wider uppercase border-l-2 border-rgss-light/60 pl-4 py-1"
            >
              "Simple People………High Performance"
            </motion.p>

            {/* Core Message */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-rgss-deep font-bold max-w-2xl leading-relaxed"
            >
              RGSS transforms operating friction into{" "}
              <span className="font-extrabold text-rgss-primary border-b-2 border-rgss-light/40 pb-0.5">
                digital business momentum
              </span>
              . We align strategy, infrastructure, and enterprise application services.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#services"
                whileHover={{ x: -10, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-rgss-primary to-rgss-dark text-white text-sm font-bold tracking-wider uppercase shadow-md shadow-rgss-primary/20 transition-all cursor-pointer"
              >
                Explore Ecosystem
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ x: 10, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="px-6 py-3 rounded-xl bg-[#F8FCFD] border border-rgss-light/40 text-rgss-deep text-sm font-bold tracking-wider uppercase transition-all cursor-pointer shadow-sm shadow-rgss-primary/5"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Interactive Logo Video */}
          <motion.div
            style={{ y: logoY, opacity }}
            className="lg:col-span-6 flex justify-center items-center relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-2xl aspect-video flex items-center justify-center overflow-hidden rounded-3xl shadow-2xl shadow-rgss-primary/10 border-none isolate z-10"
            >
              {/* Glow behind the video */}
              <div className="absolute w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-rgss-primary/20 via-rgss-light/10 to-transparent blur-3xl -z-10 animate-pulse-glow animate-float" />
              
              <video
                ref={videoRef}
                src="/ryanlogo.mp4"
                loop
                playsInline
                muted
                autoPlay
                controls={false}
                suppressHydrationWarning
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[116%] h-[116%] max-w-none object-cover z-10 transition-all duration-700 hover:scale-[1.05]"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer pointer-events-none"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-rgss-primary">
          Scroll Down
        </span>
        <ArrowDown size={14} className="text-rgss-primary" />
      </motion.div>
    </section>
  );
}
