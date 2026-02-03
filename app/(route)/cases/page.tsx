"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight, BarChart3 } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "./data";

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const staggerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <motion.div variants={heroVariants} initial="hidden" animate="show" className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest mb-8">
                <BarChart3 size={14} className="text-emerald-400" />
                Proven Results
              </div>
              <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight font-display leading-[0.9] mb-8">
                Strategic <br />
                <span className="text-slate-300 italic">Impact.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-500 font-medium leading-relaxed">
                Explore how we translate complex architectural theories into measurable business success across diverse technical domains.
              </p>
            </motion.div>
            <motion.div variants={heroVariants} initial="hidden" animate="show">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=1400"
                  alt="Case study analysis"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-4 py-3 text-xs font-black uppercase tracking-[0.3em] text-slate-700">
                  Client outcomes
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <div className="h-full w-full bg-[repeating-linear-gradient(45deg,transparent,transparent_40px,rgba(0,0,0,0.1)_40px,rgba(0,0,0,0.1)_80px)]" />
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="space-y-32"
          >
            {caseStudies.map((project, i) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row gap-16 items-center ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Side */}
                <div className="flex-1 w-full relative">
                  <div className="relative group overflow-hidden rounded-[2.5rem] bg-slate-100 aspect-[4/3] shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <span className="inline-block px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Decorative Floater */}
                  <div className={`absolute -bottom-6 -right-6 lg:right-[-20px] lg:bottom-[-20px] bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden sm:block`}>
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white mb-4`}>
                      <TrendingUp size={24} />
                    </div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Key Outcome</p>
                    <p className="text-lg font-bold text-slate-900">{project.impact}</p>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    <p className="text-sm font-black text-blue-600 uppercase tracking-[0.3em]">Case Study 0{i + 1}</p>
                    <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 font-display tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 font-bold tracking-widest text-xs uppercase">Client: {project.client}</p>
                  </div>

                  <p className="text-lg text-slate-500 leading-relaxed italic">
                    "{project.description}"
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <p className="text-xl font-black text-slate-900">{m.value}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/cases/${project.slug}`}
                    className="inline-flex items-center gap-3 text-slate-900 font-black uppercase tracking-widest text-sm pt-8 border-b-2 border-slate-900 pb-2 hover:gap-6 transition-all group"
                  >
                    Deep Dive Technical Analysis
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Impact Numbers */}
      <section className="py-24 sm:py-40 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-blue-500 text-xs font-black uppercase tracking-[0.4em] mb-12">Cumulative Intelligence</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 sm:gap-24">
            {[
              { label: "Lines Scaled", val: "2M+" },
              { label: "Cloud Uptime", val: "99.9%" },
              { label: "AI Deployments", val: "500+" },
              { label: "Client ROI", val: "Avg 4x" }
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl sm:text-6xl font-black mb-2">{stat.val}</p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
