"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  align = "center",
}: SectionHeadingProps) {
  const isLeft = align === "left";

  const [typedText, setTypedText] = useState("");
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === title.length + 1 && !reverse) {
      // Pause at the end of typing
      const timeout = setTimeout(() => setReverse(true), 2500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100); // Backspace faster than typing

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, title]);

  useEffect(() => {
    setTypedText(title.substring(0, subIndex));
  }, [subIndex, title]);

  return (
    <div className={`mb-12 md:mb-16 flex flex-col ${isLeft ? "items-start text-left" : "items-center text-center"}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-rgss-dark bg-rgss-light/10 border border-rgss-light/20 mb-3"
        >
          {badge}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-rgss-deep font-sans relative select-none"
      >
        {/* Invisible title to reserve layout height/width, preventing text wrap jumps */}
        <span className="invisible block pointer-events-none">{title}</span>
        
        {/* Absolute typing text overlay */}
        <span className="absolute inset-0 block select-text">
          {typedText}
          <span className="inline-block w-[3px] h-[0.8em] bg-rgss-primary ml-1 animate-[pulse_1s_infinite] align-middle" />
        </span>
      </motion.h2>

      {/* Premium custom line animation */}
      <div className={`relative w-24 h-1 mt-4 rounded-full overflow-hidden bg-rgss-light/20 ${isLeft ? "" : "mx-auto"}`}>
        <motion.div
          initial={{ left: "-100%" }}
          whileInView={{ left: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 bottom-0 w-12 bg-gradient-to-r from-transparent via-rgss-primary to-transparent"
        />
      </div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base md:text-lg text-rgss-deep font-bold leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
