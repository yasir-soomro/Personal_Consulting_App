"use client";

import React from "react";
import { motion, cubicBezier, Variants } from "framer-motion";
import { TrendingUp, ArrowRight, BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/app/(route)/cases/data";

/* ================= Animations ================= */
const customEase = cubicBezier(0.16, 1, 0.3, 1);

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: customEase },
  },
};

const staggerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: customEase },
  },
};

/* ================= Page ================= */
const Works = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* ================= Hero ================= */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-slate-50 border-b dark:bg-slate-950 dark:border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate="show"
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest mb-8 dark:bg-white dark:text-slate-900">
                <BarChart3 size={14} className="text-emerald-400" />
                Proven Results
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.9] mb-8">
                Strategic <br />
                <span className="italic text-slate-300 dark:text-slate-500">
                  Impact.
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-slate-500 leading-relaxed dark:text-slate-300">
                Translating complex architectural ideas into measurable business
                outcomes across real-world systems.
              </p>
            </motion.div>

            {/* Hero Image */}
            <motion.div variants={heroVariants} initial="hidden" animate="show" className="w-full">
              <div className="relative w-full aspect-video rounded-2xl sm:rounded-[2.5rem] overflow-hidden border shadow-2xl bg-slate-100 dark:bg-slate-900">
                <Image
                  src="/images/lina.jpg"
                  alt="Case study analysis"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/70 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= Case Studies ================= */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="space-y-16 sm:space-y-24 lg:space-y-32"
          >
            {caseStudies.map((project, i) => (
              <motion.div
                key={project.slug}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-start lg:items-center ${
                  i % 2 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="flex-1 w-full relative">
                  <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] overflow-hidden shadow-xl sm:shadow-2xl group bg-slate-100 dark:bg-slate-900">
                    <Image
                      src={project.image || "/images/cons.png"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute bottom-6 left-6 px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-black uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>

                  {/* Floating Card */}
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 block sm:block bg-white dark:bg-slate-900 p-3 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border text-xs sm:text-base">
                    <div
                      className={`h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white mb-3 sm:mb-4`}
                    >
                      <TrendingUp size={18} className="sm:w-[22px] sm:h-[22px]" />
                    </div>
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-400">
                      Key Outcome
                    </p>
                    <p className="text-base sm:text-lg font-bold">{project.impact}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6 sm:space-y-8">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-3">
                      Case Study 0{i + 1}
                    </p>
                    <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-slate-400">
                      Client: {project.client}
                    </p>
                  </div>

                  <p className="text-base sm:text-lg italic text-slate-500 dark:text-slate-300">
                    &ldquo;{project.description}&rdquo;
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900 border"
                      >
                        <p className="text-lg sm:text-xl font-black">{m.value}</p>
                        <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-slate-400">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/cases/${project.slug}`}
                    className="inline-flex items-center gap-2 sm:gap-3 font-black uppercase tracking-widest text-xs sm:text-sm border-b-2 pb-2 transition-all hover:gap-4 sm:hover:gap-5"
                  >
                    Deep Dive Analysis
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= Stats ================= */}
      <section className="py-16 sm:py-24 lg:py-40 bg-slate-950 text-white text-center">
        <h2 className="text-xs uppercase tracking-[0.4em] text-blue-500 mb-8 sm:mb-12">
          Cumulative Intelligence
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-12">
          {[
            ["2M+", "Lines Scaled"],
            ["99.9%", "Cloud Uptime"],
            ["500+", "AI Deployments"],
            ["4x", "Client ROI"],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="text-2xl sm:text-4xl lg:text-6xl font-black">{val}</p>
              <p className="text-[9px] sm:text-xs uppercase tracking-widest text-slate-500 mt-1 sm:mt-2">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Works;
