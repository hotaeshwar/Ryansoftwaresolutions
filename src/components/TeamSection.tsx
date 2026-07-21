"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { 
  Users2, Award, Globe2, ShieldAlert, GraduationCap, CheckCircle
} from "lucide-react";

interface Qualification {
  title: string;
  desc: string;
  source?: string;
  sourceUrl?: string;
}

const QUALIFICATIONS: Qualification[] = [
  {
    title: "Chartered Accountant PGDBA",
    desc: "Advanced financial and accounting process frameworks integrated with business administration databases."
  },
  {
    title: "Bachelor of Technology, Masters in Business Administration",
    desc: "Bridging engineering system dynamics with executive administration, operations management, and strategic solutions."
  },
  {
    title: "Masters in Computer Applications",
    desc: "Expertise in software engineering, backend databases, and advanced business application logic."
  },
  {
    title: "Certified Project Management Professional from PMI, USA",
    desc: "Project and program lifecycle governance, timeline coordination, and professional risk mitigation.",
    source: "PMI, USA",
    sourceUrl: "https://www.pmi.org"
  }
];

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  details: string[];
  color: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Sandeep Verma",
    role: "SAP Delivery & Project Management Leader",
    initials: "SV",
    details: [
      "26 Years of Experience in SAP",
      "Multiple implementations in India & Abroad",
      "Worked at Accenture, TCS, Steria, HCL etc.",
      "B.Tech, PMP Certified"
    ],
    color: "from-blue-600 to-cyan-500"
  },
  {
    name: "Sanjeev Budki",
    role: "Enterprise Program & SAP Integration Leader",
    initials: "SB",
    details: [
      "Over 24 years of experience, worked with TCS",
      "Managed large-scale SAP programs & projects",
      "B.Tech, ME, ITIL 4, PRINCE2, TOGAF",
      "Google Cloud Digital Leader & Generative AI Certified",
      "SAP S/4 HANA Business Process Integration Specialist"
    ],
    color: "from-rgss-primary to-rgss-light"
  },
  {
    name: "Vikram Garg",
    role: "SAP Finance & Process Advisory Leader",
    initials: "VG",
    details: [
      "Over 20 years of experience in SAP",
      "Worked with TCS and Accenture",
      "Multiple implementations in India & Abroad",
      "Chartered Accountant"
    ],
    color: "from-indigo-600 to-purple-500"
  }
];

export default function TeamSection() {
  const [activeQualIdx, setActiveQualIdx] = useState<number>(0);

  return (
    <section id="team" className="py-20 md:py-28 relative overflow-hidden bg-[#F8FCFD]">
      {/* Background shape */}
      <div className="absolute top-[20%] left-0 w-[30vw] h-[30vw] bg-rgss-light/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Our Experts"
          title="Team RGSS"
          subtitle="Experienced IT domain professionals possessing average tenures of 12 to 20 years across global landscapes."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Lottie Animation (Cardless & Bigger) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-md h-[400px] flex items-center justify-center overflow-hidden"
            >
              <iframe 
                src="https://lottie.host/embed/3808be23-9cd6-4090-8f5b-3c07aa72764b/19h15gs8OU.lottie"
                className="w-full h-full border-none pointer-events-none scale-125"
                title="Team RGSS Lottie Animation"
              />
            </motion.div>
          </div>

          {/* Right Column: Experience Metrics and active qualification card */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Experience narrative card */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-rgss-deep border-b border-rgss-light/20 pb-2 uppercase tracking-tight">
                Collective Strength & Qualifications
              </h3>
              <p className="text-sm text-rgss-dark/95 leading-relaxed font-normal">
                We are a team of highly experienced people in IT industry, having experience upto 12-20 years in their respective working domains.
              </p>
              <p className="text-sm text-rgss-dark/95 leading-relaxed font-normal">
                The key team members have done numerous implementations, International and domestics roll outs, upgrades and support projects.
              </p>
              <p className="text-sm text-rgss-dark/95 leading-relaxed font-normal">
                We completely understand the client expectations and not only put our best to meet them but put our experience to mitigate the issues which may come later. The qualifications of Team RGSS are below:
              </p>
            </div>

            {/* Interactive Grid Selector Tabs */}
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rgss-primary block">
                Select Qualification to View Details
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {QUALIFICATIONS.map((q, idx) => {
                  const isSelected = activeQualIdx === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveQualIdx(idx)}
                      className={`p-3.5 rounded-xl border text-left text-xs font-extrabold transition-all duration-300 ${
                        isSelected
                          ? "bg-rgss-primary text-white border-rgss-primary shadow-md shadow-rgss-primary/10"
                          : "bg-white text-rgss-dark border-rgss-light/25 hover:border-rgss-primary/45 hover:bg-rgss-light/5"
                      }`}
                    >
                      {q.title}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected qualification highlights panel */}
            <div className="p-6 rounded-2xl border border-rgss-light/35 bg-white shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-rgss-primary" />
              <span className="text-[9px] font-bold text-rgss-primary uppercase tracking-widest block pl-1">
                Highlighting Qualification
              </span>
              <h4 className="text-md font-bold text-rgss-deep mt-1 leading-tight pl-1">
                {QUALIFICATIONS[activeQualIdx].title}
              </h4>
              <p className="text-xs text-rgss-dark/90 leading-relaxed mt-2.5 font-normal pl-1">
                {QUALIFICATIONS[activeQualIdx].desc}
              </p>
              
              {QUALIFICATIONS[activeQualIdx].source && (
                <div className="mt-4 flex items-center gap-1.5 text-[10px] text-rgss-primary font-bold uppercase tracking-wider pl-1">
                  <Award size={12} />
                  <span>Certified By: </span>
                  <a
                    href={QUALIFICATIONS[activeQualIdx].sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-rgss-deep"
                  >
                    {QUALIFICATIONS[activeQualIdx].source}
                  </a>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Individual Team Members Cards Grid */}
        <div className="mt-20 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-black text-rgss-deep uppercase tracking-tight">
              Our Leadership & Advisory Experts
            </h3>
            <p className="text-xs sm:text-sm text-rgss-dark/85 mt-2">
              Meet our core technology leaders guiding enterprise roadmap transformations with verified global backgrounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border border-rgss-light/25 p-6 rounded-3xl shadow-lg hover:shadow-xl hover:border-rgss-primary/45 hover:scale-[1.02] transition-all flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Stylized Avatar Header */}
                  <div className="flex items-center gap-4 border-b border-rgss-light/15 pb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${member.color} text-white flex items-center justify-center font-black text-lg shadow-md shrink-0`}>
                      {member.initials}
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-rgss-deep leading-tight">
                        {member.name}
                      </h4>
                      <span className="text-[10px] font-bold text-rgss-primary uppercase tracking-wider block mt-0.5">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Details Bullets */}
                  <ul className="space-y-2.5">
                    {member.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex gap-2 text-xs text-rgss-dark/95 leading-normal">
                        <CheckCircle size={14} className="text-rgss-primary shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
