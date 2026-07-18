"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#091D28] text-white border-t border-rgss-dark/40 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Grid and Blur glows */}
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{
          backgroundImage: "radial-gradient(#8FD3F4 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />
      <div className="absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full bg-rgss-light/5 blur-[80px] pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-[300px] h-[300px] rounded-full bg-rgss-primary/5 blur-[80px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-rgss-dark/30">
          
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-5 flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="inline-block relative w-48 h-15 bg-white/95 px-5 py-2.5 rounded-2xl shadow-lg flex items-center justify-center border border-rgss-light/25 hover:border-rgss-primary/45 transition-colors">
              <Image
                src="/logo.png"
                alt="RGSS Logo"
                fill
                sizes="192px"
                className="object-contain p-1.5"
              />
            </a>
            <p className="text-xs text-rgss-light/80 leading-relaxed font-normal max-w-xs">
              Next-generation IT consulting and digital operating transformation services for mid-market clients.
            </p>
            <div className="pt-2 text-[10px] text-rgss-light/60 font-semibold tracking-wide uppercase italic">
              "Simple People………High Performance"
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-rgss-primary">
              Corporate
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-rgss-light/80">
              <li><a href="#about" className="hover:text-white hover:underline transition-all">About Us</a></li>
              <li><a href="#philosophy" className="hover:text-white hover:underline transition-all">Our Philosophy</a></li>
              <li><a href="#journey" className="hover:text-white hover:underline transition-all">Transformation Journey</a></li>
              <li><a href="#lifecycle" className="hover:text-white hover:underline transition-all">Business Lifecycle</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-rgss-primary">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-rgss-light/80">
              <li><a href="#services" className="hover:text-white hover:underline transition-all">IT Security & Cloud</a></li>
              <li><a href="#services" className="hover:text-white hover:underline transition-all">Infrastructure Management</a></li>
              <li><a href="#services" className="hover:text-white hover:underline transition-all">Unified Communications</a></li>
              <li><a href="#services" className="hover:text-white hover:underline transition-all">SAP S/4 HANA Consulting</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Action */}
          <div className="lg:col-span-2 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-rgss-primary">
              Get Connected
            </h4>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-rgss-light/10 border border-rgss-light/35 text-rgss-light hover:bg-rgss-light hover:text-rgss-deep text-[10px] font-black uppercase tracking-wider transition-all shadow-md shadow-rgss-light/5"
            >
              Get in Touch
            </a>
            <button
              onClick={handleScrollTop}
              className="p-2.5 rounded-xl border border-rgss-light/20 text-white/80 hover:text-white hover:bg-white/5 active:scale-95 transition-all flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider mt-2"
            >
              <span>Back to Top</span>
              <ArrowUp size={11} className="text-rgss-light animate-pulse" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Made With Love & Legal */}
        <div className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left max-w-xl">
            <p className="text-[10px] text-rgss-light/60 leading-normal font-normal">
              © {new Date().getFullYear()} Rayaan Global Software Solutions Pvt Ltd. All rights reserved. 
            </p>
            <p className="text-[9px] text-rgss-light/45 leading-normal font-normal">
              SAP S/4 HANA, Microsoft, and Oracle are registered trademarks of their respective owners.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-1">
            <span className="text-[10px] font-bold tracking-wide text-rgss-light/80 flex items-center gap-1.5">
              Made with <span className="text-rose-500 animate-pulse">❤️</span> by{" "}
              <a 
                href="https://buildingindiadigital.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-black bg-gradient-to-r from-rgss-primary via-rgss-light to-rgss-primary bg-clip-text text-transparent hover:scale-105 transition-all"
              >
                BuildingIndiaDigital
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
