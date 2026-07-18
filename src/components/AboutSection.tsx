"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Cpu, Layers } from "lucide-react";

export default function AboutSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const narrative = [
    {
      title: "Who We Are",
      text: "RGSS is a new age professional setup for facilitating clients for end-to-end IT technology solutions, delivering fine-tuned services across IT Security, Cloud, Infrastructure, Unified Communications and also one of the digital operating transformation providers to the mid-market clients.",
      icon: Cpu,
    },
    {
      title: "Our Mission",
      text: "Our mission is to turn operating friction into digital business momentum and solutions to organizations of all scales to accomplish their business requirements.",
      icon: Layers,
    },
    {
      title: "Dynamic Expertise",
      text: "We represent a team of young but experienced, talented and dynamic individuals who come from different industry background with rich accumulated experience of business processes, functions, technology, systems and resources.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Corporate Profile"
          title="About RGSS"
          subtitle="Aligning business processes with cutting-edge digital infrastructure."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Narrative Columns */}
          <div className="lg:col-span-6 space-y-8">
            {narrative.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative p-6 rounded-2xl border border-rgss-light/25 bg-gradient-to-r from-rgss-light/5 to-transparent hover:border-rgss-primary/45 transition-colors group"
                >
                  <div className="flex gap-4 items-start">
                    {Icon && (
                      <div className="p-3 rounded-xl bg-rgss-light/20 text-rgss-deep group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-bold text-rgss-deep mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-rgss-dark font-semibold leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-sm text-rgss-primary/80 font-medium italic border-l-2 border-rgss-primary pl-4 py-1"
            >
              "We, at AGSS, value our clients and offer the best possible solutions and appropriate advice for their ERP and digital transformations."
            </motion.p>
          </div>

          {/* Corporate Profile Video - Cardless and Bigger */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-lg aspect-square flex items-center justify-center relative"
            >
              {/* Subtle background glow */}
              <div className="absolute w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-rgss-primary/10 via-rgss-light/5 to-transparent blur-3xl -z-10 animate-pulse-glow" />
              
              {isClient && (
                <video
                  src="/corporate.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  suppressHydrationWarning
                  className="w-full h-full object-contain rounded-3xl relative z-10"
                />
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
