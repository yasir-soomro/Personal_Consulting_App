"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail, MapPin, Phone } from "lucide-react";

const contactOptions = [
  {
    title: "Discovery Call",
    description: "Talk through goals, constraints, and the fastest path to results.",
    icon: Calendar,
    action: "Schedule now",
  },
  {
    title: "Email",
    description: "Share context, timelines, and technical requirements in detail.",
    icon: Mail,
    action: "hello@foundrylabs.co",
  },
  {
    title: "Phone",
    description: "Direct access for urgent consulting and executive conversations.",
    icon: Phone,
    action: "+1 (212) 555-0148",
  },
];

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

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="relative py-24 sm:py-32 overflow-hidden border-b border-slate-100 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <motion.div variants={heroVariants} initial="hidden" animate="show">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest mb-8">
                <MapPin size={14} className="text-emerald-300" />
                Contact Foundry
              </div>
              <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight font-display leading-[0.9] mb-8">
                Let's map your <br />
                <span className="text-slate-300 italic">next build.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-500 font-medium leading-relaxed">
                Tell us where you're headed. We'll help you design the fastest, safest route to production.
              </p>
            </motion.div>

            <motion.div variants={heroVariants} initial="hidden" animate="show" className="space-y-6">
              <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-2xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                      First 30 days free
                    </p>
                    <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">
                      Start with value, not risk.
                    </h2>
                    <p className="mt-3 text-sm text-slate-500">
                      Get a full month of advisory support before your paid engagement begins.
                    </p>
                  </div>
                  <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 font-black">
                    30
                  </div>
                </div>
                <div className="mt-6 grid gap-3 text-xs font-semibold text-slate-600">
                  {["Weekly strategy check-ins", "Rapid architecture feedback", "Priority roadmap notes"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:bg-slate-800">
                    Claim Free Month
                    <ArrowRight size={14} />
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900">
                    Book a Call
                  </button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400"
                  alt="Consulting dashboard with charts"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-4 py-3 text-xs font-black uppercase tracking-[0.3em] text-slate-700">
                  Decision-ready insights
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-lg"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Tell us about your project</h2>
              <p className="mt-4 text-slate-500">
                Share a few details and we’ll reply within 24 hours with next steps.
              </p>
            </motion.div>

            <motion.form variants={staggerVariants} className="mt-10 grid gap-6">
              {["Full name", "Work email", "Company", "Project timeline"].map((label) => (
                <motion.div key={label} variants={itemVariants} className="grid gap-2">
                  <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                    {label}
                  </label>
                  <input
                    type="text"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-400"
                    placeholder={label}
                  />
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="grid gap-2">
                <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                  Project goals
                </label>
                <textarea
                  rows={4}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-400"
                  placeholder="Tell us about scope, context, and desired outcomes."
                />
              </motion.div>
              <motion.button
                variants={itemVariants}
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-xs font-black uppercase tracking-widest text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Send request
                <ArrowRight size={16} />
              </motion.button>
            </motion.form>
          </motion.div>

          <motion.aside variants={staggerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-120px" }} className="space-y-6">
            {contactOptions.map((option) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.title}
                  variants={itemVariants}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{option.title}</h3>
                      <p className="mt-2 text-sm text-slate-500">{option.description}</p>
                      <p className="mt-4 text-xs font-black uppercase tracking-[0.3em] text-slate-700">
                        {option.action}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <motion.div variants={itemVariants} className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-300">Location</p>
              <p className="mt-3 text-lg font-bold">New York City, NY</p>
              <p className="mt-2 text-sm text-white/70">
                Serving remote teams across North America, Europe, and APAC.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1200"
                  alt="New York skyline"
                  className="h-40 w-full object-cover"
                />
              </div>
            </motion.div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
