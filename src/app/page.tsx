"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PhilosophySection from "@/components/PhilosophySection";
import ServicesEcosystem from "@/components/ServicesEcosystem";
import EnterpriseApplications from "@/components/EnterpriseApplications";
import TransformationJourney from "@/components/TransformationJourney";
import BusinessLifecycle from "@/components/BusinessLifecycle";
import SuccessFactors from "@/components/SuccessFactors";
import CustomerBenefits from "@/components/CustomerBenefits";
import TeamSection from "@/components/TeamSection";
import AssociationVision from "@/components/AssociationVision";
import Association from "@/components/Association";
import ClientSection from "@/components/ClientSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import WhatsAppChat from "@/components/WhatsAppChat";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <SplashScreen key="loader" finishLoading={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col min-h-screen"
          >
            {/* Ambient background particle system */}
            <AnimatedBackground />

            {/* Floating WhatsApp chatbot at left */}
            <WhatsAppChat />

            {/* Floating Header Navigation */}
            <Navbar />

            {/* Main long-scroll body */}
            <main className="flex-1 w-full relative">
              {/* 1. Hero / Identity Introduction */}
              <HeroSection />

              {/* 2. About Us Narrative & Digital Flow */}
              <AboutSection />

              {/* 3. Corporate Principles & Philosophy */}
              <PhilosophySection />

              {/* 4. Service Offerings Radial Grid */}
              <ServicesEcosystem />

              {/* 5. Enterprise Applications & Technology stack */}
              <EnterpriseApplications />

              {/* 6. Transformation Timeline Journey */}
              <TransformationJourney />

              {/* 7. End-to-End Business Life-Cycle */}
              <BusinessLifecycle />

              {/* 8. Success Factors & advantage matrix */}
              <SuccessFactors />

              {/* 9. Customer benefits grids */}
              <CustomerBenefits />

              {/* 10. Qualification and Team Expertise metrics */}
              <TeamSection />

              {/* 11. Alliance Vision */}
              <AssociationVision />

              {/* 12. Footprint verticals & Engagements notice */}
              <Association />

              {/* 12b. Clients & Partners Section */}
              <ClientSection />

              {/* 13. Contact Noida HQ & Transmit form */}
              <ContactSection />
            </main>

            {/* Trademark footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
