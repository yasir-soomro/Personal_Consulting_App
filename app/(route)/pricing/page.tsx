"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, ShieldCheck, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

const pricingTiers = [
  {
    name: "Advisor Sprint",
    description: "30-day free consultation, then low-cost ongoing guidance.",
    price: "$3",
    cadence: "per month after free trial",
    highlight: "30 days free",
    discount: "70% launch discount",
    icon: Sparkles,
    features: [
      "Free 30-day consultation access",
      "Monthly roadmap review",
      "Quick audits + feedback loops",
      "Asynchronous support",
    ],
  },
  {
    name: "Product Build",
    description: "30-day free consultation, then a low-cost build partnership.",
    price: "$5",
    cadence: "per month after free trial",
    highlight: "Most popular",
    discount: "50% launch discount",
    icon: Rocket,
    featured: true,
    features: [
      "Free 30-day consultation access",
      "Monthly delivery planning",
      "Priority feedback + reviews",
      "Lightweight execution support",
    ],
  },
  {
    name: "Fractional CTO",
    description: "30-day free consultation, then discounted leadership access.",
    price: "$5",
    cadence: "per month after free trial",
    highlight: "Leadership support",
    discount: "60% launch discount",
    icon: ShieldCheck,
    features: [
      "Free 30-day consultation access",
      "Leadership syncs + guidance",
      "Hiring + org design advisory",
      "Priority escalation access",
    ],
  },
];

const faqs = [
  {
    question: "How quickly can we start?",
    answer:
      "Most engagements begin within 1-2 weeks after the discovery call, depending on scope and team availability.",
  },
  {
    question: "Do you offer fixed-bid projects?",
    answer:
      "Yes for tightly scoped deliveries. For evolving roadmaps, we recommend the monthly engagement model.",
  },
  {
    question: "Can we mix expertise areas?",
    answer:
      "Absolutely. We routinely combine AI, full-stack, and cloud-native work within a single engagement.",
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

const PricingPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <motion.div variants={heroVariants} initial="hidden" animate="show">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest mb-8">
                <Sparkles size={14} className="text-amber-300" />
                Transparent Pricing
              </div>
              <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight font-display leading-[0.9] mb-8">
                Pricing built for <br />
                <span className="text-slate-300 italic">serious delivery.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-500 font-medium leading-relaxed">
                Engagements that match your pace — from rapid discovery to embedded execution.
              </p>
            </motion.div>

            <motion.div variants={heroVariants} initial="hidden" animate="show">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1400"
                  alt="Pricing strategy planning"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-4 py-3 text-xs font-black uppercase tracking-[0.3em] text-slate-700">
                  30 days free
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="grid gap-8 lg:grid-cols-3"
          >
            {pricingTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.name}
                  variants={itemVariants}
                  className={`rounded-3xl border p-8 sm:p-10 shadow-sm ${
                    tier.featured
                      ? "border-slate-900 bg-slate-900 text-white shadow-xl"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                        {tier.highlight}
                      </p>
                      <h3 className="mt-4 text-2xl font-bold">{tier.name}</h3>
                    </div>
                    <span
                      className={`h-12 w-12 rounded-2xl flex items-center justify-center ${
                        tier.featured ? "bg-white/10 text-white" : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      <Icon size={22} />
                    </span>
                  </div>

                  <p className={`mt-6 text-sm ${tier.featured ? "text-white/70" : "text-slate-500"}`}>
                    {tier.description}
                  </p>

                  {tier.discount && (
                    <div
                      className={`mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] ${
                        tier.featured
                          ? "bg-white/10 text-white/80"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {tier.discount}
                    </div>
                  )}

                  <div className="mt-8 flex items-baseline gap-3">
                    <p className="text-3xl font-black">{tier.price}</p>
                    <span className={`text-xs uppercase tracking-[0.3em] ${tier.featured ? "text-white/60" : "text-slate-400"}`}>
                      {tier.cadence}
                    </span>
                  </div>

                  <div className="mt-8 space-y-3">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 size={16} className={tier.featured ? "text-emerald-300" : "text-emerald-600"} />
                        <span className={tier.featured ? "text-white/80" : "text-slate-600"}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black uppercase tracking-widest transition ${
                      tier.featured
                        ? "bg-white text-slate-900 hover:bg-white/90"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    Start Engagement
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Frequently asked questions</h2>
            <p className="mt-4 text-slate-500">
              Clear answers to help you choose the right engagement structure.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
                <h3 className="text-base font-bold text-slate-900">{item.question}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
