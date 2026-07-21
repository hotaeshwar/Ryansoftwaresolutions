"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { 
  MapPin, Globe, Mail, Phone, Send
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="pt-20 pb-12 md:pt-28 md:pb-16 relative overflow-hidden bg-white">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-rgss-light/10 blur-[100px] pointer-events-none -z-10 animate-pulse-glow" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Get In Touch"
          title="Contact RGSS"
          subtitle="Let's align your technology systems to drive enterprise agility."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto overflow-hidden lg:overflow-visible">
          
          {/* Left Column: Corporate Location Details */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Address Card */}
            <div className="p-6 rounded-3xl border border-rgss-light/35 bg-[#F8FCFD] shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-[9px] font-bold text-rgss-primary uppercase tracking-widest block">
                  Corporate Headquarters
                </span>
                <h3 className="text-md font-bold text-rgss-deep uppercase tracking-tight">
                  Rayaan Global Software Solutions (P) Ltd
                </h3>
              </div>

              <div className="space-y-4 pt-2 border-t border-rgss-light/15 text-xs text-rgss-dark">
                {/* Noida address */}
                <div className="flex gap-3.5 items-start">
                  <div className="p-2 rounded-xl bg-white border border-rgss-light/20 text-rgss-primary shrink-0">
                    <MapPin size={16} />
                  </div>
                  <p className="leading-relaxed font-semibold text-rgss-deep">
                    2502, T-14, Lotus Panache,<br />
                    Sector-110, Noida, UP,<br />
                    India
                  </p>
                </div>

                {/* Phone */}
                <div className="flex gap-3.5 items-center">
                  <div className="p-2 rounded-xl bg-white border border-rgss-light/20 text-rgss-primary shrink-0">
                    <Phone size={16} />
                  </div>
                  <a
                    href="tel:9818695636"
                    className="hover:text-rgss-primary hover:underline font-semibold text-rgss-deep transition-all"
                  >
                    +91 9818695636
                  </a>
                </div>

                {/* Email */}
                <div className="flex gap-3.5 items-center">
                  <div className="p-2 rounded-xl bg-white border border-rgss-light/20 text-rgss-primary shrink-0">
                    <Mail size={16} />
                  </div>
                  <a
                    href="mailto:contactus@r-gss.com"
                    className="hover:text-rgss-primary hover:underline font-semibold text-rgss-deep transition-all"
                  >
                    contactus@r-gss.com
                  </a>
                </div>

                {/* Website */}
                <div className="flex gap-3.5 items-center">
                  <div className="p-2 rounded-xl bg-white border border-rgss-light/20 text-rgss-primary shrink-0">
                    <Globe size={16} />
                  </div>
                  <a
                    href="https://www.r-gss.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-rgss-primary hover:underline font-semibold text-rgss-deep transition-all"
                  >
                    www.r-gss.com
                  </a>
                </div>
              </div>

              {/* Tagline footer details */}
              <div className="pt-6 border-t border-rgss-light/15">
                <p className="text-[11px] font-semibold text-rgss-primary tracking-widest uppercase text-center italic">
                  "Simple People………High Performance"
                </p>
              </div>
            </div>

            {/* Real Embedded Google Map */}
            <div className="h-44 rounded-3xl border border-rgss-light/25 overflow-hidden w-full relative shadow-sm bg-rgss-light/5">
              <iframe
                src="https://maps.google.com/maps?q=2502,%20T-14,%20Lotus%20Panache%20,%20sector-110,%20Noida&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </motion.div>

          {/* Right Column: Interaction Form via FormSubmit */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-3xl border border-rgss-light/35 bg-white shadow-sm">
              <form 
                action="https://formsubmit.co/contactus@r-gss.com" 
                method="POST" 
                className="space-y-6"
              >
                {/* FormSubmit Configs */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://www.r-gss.com" />

                <div>
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-rgss-primary block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 text-xs rounded-xl border border-rgss-light/30 focus:border-rgss-primary focus:outline-none bg-[#F8FCFD] text-rgss-deep transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-rgss-primary block mb-2">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 text-xs rounded-xl border border-rgss-light/30 focus:border-rgss-primary focus:outline-none bg-[#F8FCFD] text-rgss-deep transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="msg" className="text-[10px] font-bold uppercase tracking-widest text-rgss-primary block mb-2">
                    Message
                  </label>
                  <textarea
                    id="msg"
                    name="message"
                    rows={4}
                    required
                    placeholder="Describe your IT demands (SAP S/4 HANA, Strategy, Infrastructure...)"
                    className="w-full px-4 py-3 text-xs rounded-xl border border-rgss-light/30 focus:border-rgss-primary focus:outline-none bg-[#F8FCFD] text-rgss-deep transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all bg-[#1A5B7A] text-white hover:bg-rgss-deep shadow-md shadow-rgss-primary/10 active:scale-98"
                >
                  <Send size={16} />
                  <span>Transmit Request</span>
                </button>

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
