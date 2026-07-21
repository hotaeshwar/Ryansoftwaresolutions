"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Services", href: "#services" },
  { label: "Architecture", href: "#architecture" },
  { label: "Journey", href: "#journey" },
  { label: "Lifecycle", href: "#lifecycle" },
  { label: "Advantages", href: "#advantages" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Highlight "Home" when near the top
      if (window.scrollY < 200) {
        setActiveSection("#");
        return;
      }

      // Scroll Spy logic to highlight navigation tabs
      const scrollPosition = window.scrollY + 200;
      for (const item of NAV_ITEMS) {
        if (item.href === "#") continue;
        const el = document.getElementById(item.href.replace("#", ""));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`mx-auto transition-all duration-300 w-full ${
          isScrolled
            ? "bg-white border-b border-rgss-light/20 shadow-sm shadow-rgss-light/5"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between lg:justify-center h-20">
          
          {/* Mobile Logo - Only shown on mobile/tablet */}
          <a href="#" className="flex items-center relative z-10 w-44 h-20 lg:hidden ml-2 pl-2">
            <Image
              src="/logo.png"
              alt="RGSS Logo"
              width={200}
              height={133}
              className="absolute left-0 top-1/2 -translate-y-1/2 max-w-none object-contain object-left pointer-events-none"
              priority
            />
          </a>

          {/* Desktop Nav Layout - Only shown on desktop */}
          <div 
            className="hidden lg:flex items-center w-full justify-between relative"
            onMouseLeave={() => setHoveredHref(null)}
          >
            {/* Left Nav Links */}
            <div className="flex items-center justify-end flex-1 gap-0.5 xl:gap-1">
              {NAV_ITEMS.slice(0, 5).map((item) => {
                const isActive = activeSection === item.href;
                const isHovered = hoveredHref === item.href;
                
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onMouseEnter={() => setHoveredHref(item.href)}
                    className={`relative px-2 lg:px-2.5 xl:px-3.5 2xl:px-4 py-2 rounded-lg text-xs lg:text-[11px] xl:text-[13px] 2xl:text-[15px] font-black uppercase tracking-wider transition-colors z-10 ${
                      isActive
                        ? "text-rgss-deep font-extrabold"
                        : "text-rgss-dark/80 hover:text-rgss-primary"
                    }`}
                  >
                    {/* Sliding Hover Tab */}
                    {isHovered && (
                      <motion.span
                        layoutId="navHoverBg"
                        className="absolute inset-0 bg-rgss-light/10 rounded-lg -z-20"
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      />
                    )}

                    {/* Sliding Active Tab */}
                    {isActive && (
                      <motion.span
                        layoutId="navActiveBg"
                        className="absolute inset-0 bg-rgss-light/20 border border-rgss-light/35 rounded-lg -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Centered Desktop Logo */}
            <div className="flex items-center justify-center shrink-0 w-32 lg:w-40 xl:w-48 h-20 mx-2 lg:mx-3 xl:mx-4 relative">
              <a href="#" className="w-full h-full relative block">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 lg:w-48 xl:w-56 h-28 lg:h-32 xl:h-36">
                  <Image
                    src="/logo.png"
                    alt="RGSS Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </a>
            </div>

            {/* Right Nav Links */}
            <div className="flex items-center justify-start flex-1 gap-0.5 xl:gap-1">
              {NAV_ITEMS.slice(5).map((item) => {
                const isActive = activeSection === item.href;
                const isHovered = hoveredHref === item.href;
                
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onMouseEnter={() => setHoveredHref(item.href)}
                    className={`relative px-2 lg:px-2.5 xl:px-3.5 2xl:px-4 py-2 rounded-lg text-xs lg:text-[11px] xl:text-[13px] 2xl:text-[15px] font-black uppercase tracking-wider transition-colors z-10 ${
                      isActive
                        ? "text-rgss-deep font-extrabold"
                        : "text-rgss-dark/80 hover:text-rgss-primary"
                    }`}
                  >
                    {/* Sliding Hover Tab */}
                    {isHovered && (
                      <motion.span
                        layoutId="navHoverBg"
                        className="absolute inset-0 bg-rgss-light/10 rounded-lg -z-20"
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      />
                    )}

                    {/* Sliding Active Tab */}
                    {isActive && (
                      <motion.span
                        layoutId="navActiveBg"
                        className="absolute inset-0 bg-rgss-light/20 border border-rgss-light/35 rounded-lg -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden relative z-10">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-rgss-light/25 text-rgss-deep hover:bg-rgss-light/10 transition-colors"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-md border border-rgss-light/35 rounded-2xl p-5 shadow-xl shadow-rgss-light/15"
          >
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all border ${
                    activeSection === item.href
                      ? "bg-rgss-light/10 text-rgss-deep border-rgss-light/25"
                      : "text-rgss-dark/75 hover:text-rgss-primary border-transparent"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
