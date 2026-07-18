"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppChat() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none">
      {/* Tooltip Message */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 15, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 15, scale: 0.95 }}
            className="bg-white text-rgss-deep px-4 py-2.5 rounded-2xl shadow-xl border border-rgss-light/35 flex flex-col gap-1 items-start text-left max-w-[200px] sm:max-w-xs relative shrink-0"
          >
            {/* Close Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }} 
              className="absolute top-2 right-2.5 text-rgss-dark/50 hover:text-rgss-primary text-[9px] font-bold"
            >
              ✕
            </button>
            <span className="text-[9px] font-bold text-rgss-primary uppercase tracking-widest">
              RGSS Assistant
            </span>
            <p className="text-[11px] font-bold text-rgss-dark leading-normal pr-4">
              Hi! How can we help you with your IT demands? Chat with us now!
            </p>
            {/* Triangle indicator */}
            <div className="absolute right-[-5px] top-[22px] w-2.5 h-2.5 bg-white border-r border-t border-rgss-light/35 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.a
        href="https://wa.me/919810827720?text=Hi%20RGSS,%20I'm%20interested%20in%20your%20IT%20Consulting%20Services."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 cursor-pointer relative shrink-0"
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        
        {/* WhatsApp Real SVG Icon */}
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.49-3.238c1.652.98 3.271 1.497 4.93 1.499 5.385.002 9.769-4.38 9.773-9.768.002-2.61-1.01-5.064-2.85-6.906C16.5 3.743 14.054 2.73 11.44 2.73c-5.388 0-9.773 4.382-9.777 9.77-.001 1.764.467 3.486 1.357 5.02L2.017 21.97l4.53-1.208zM17.06 14.86c-.297-.148-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.148-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>
      </motion.a>
    </div>
  );
}
