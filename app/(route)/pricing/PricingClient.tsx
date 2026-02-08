"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, ShieldCheck, Rocket, ArrowRight, Minus } from "lucide-react";
import Link from "next/link";

/* ================================
   Typewriter Component
================================ */
const Typewriter = ({
  phrases,
  speed = 100,
  deleteSpeed = 50,
  pause = 2000,
}: {
  phrases: { text: string; className: string }[];
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
}) => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      if (text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        timer = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deleteSpeed);
      }
    } else {
      if (text === currentPhrase.text) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      } else {
        timer = setTimeout(() => {
          setText(currentPhrase.text.slice(0, text.length + 1));
        }, speed);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, phrases, speed, deleteSpeed, pause]);

  return (
    <span className="inline-flex items-center flex-wrap min-h-[1.2em]">
      <span className={phrases[phraseIndex].className}>{text}</span>
      <span className="animate-pulse ml-1 lg:ml-2 w-[3px] h-[0.9em] bg-slate-900 dark:bg-white rounded-full inline-block align-middle opacity-60" />
    </span>
  );
};

/* ================================
   Data
================================ */
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

const comparisonData = [
  {
    category: "Strategy & Planning",
    rows: [
      { feature: "Roadmap Strategy", tier1: "Monthly Review", tier2: "Monthly Planning", tier3: "Deep Strategic Alignment" },
      { feature: "Technical Audit", tier1: "Quick Scan", tier2: "Ongoing Checks", tier3: "Comprehensive & Continuous" },
      { feature: "Architecture Design", tier1: "High-level Guidance", tier2: "Implementation Support", tier3: "System Design Authority" },
    ]
  },
  {
    category: "Execution & Delivery",
    rows: [
      { feature: "Code Implementation", tier1: false, tier2: "Lightweight Support", tier3: "Prototype / Core Logic" },
      { feature: "Team Management", tier1: false, tier2: false, tier3: "Hiring & Org Design" },
      { feature: "Vendor Selection", tier1: "Recommendations", tier2: "Assistance", tier3: "Full Management" },
    ]
  },
  {
    category: "Support & Access",
    rows: [
      { feature: "Sync Frequency", tier1: "Monthly", tier2: "Bi-weekly", tier3: "Weekly / On-demand" },
      { feature: "Response Time", tier1: "48h", tier2: "24h", tier3: "Priority (Same day)" },
      { feature: "Slack Access", tier1: true, tier2: true, tier3: "Dedicated Channel" },
    ]
  }
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

/* ================================
   Animations
================================ */
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

const renderCell = (content: string | boolean) => {
  if (content === true) return <CheckCircle2 size={18} className="text-emerald-500 mx-auto" />;
  if (content === false) return <Minus size={18} className="text-slate-300 dark:text-slate-700 mx-auto" />;
  return <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{content}</span>;
};

/* ================================
   Component
================================ */
const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 mt-10">
      
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-slate-50 border-b border-slate-100 dark:bg-slate-950 dark:border-slate-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <motion.div variants={heroVariants} initial="hidden" animate="show">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest mb-8 dark:bg-white dark:text-slate-900">
                <Sparkles size={14} className="text-amber-300" />
                Transparent Pricing
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black text-slate-900 tracking-tight  leading-[1.05] mb-8 dark:text-white">
                Partnership models for <br />
                <Typewriter 
                    phrases={[
                        { text: "Rapid Scale.", className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400" },
                        { text: "Technical Moats.", className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400" },
                        { text: "Market Leadership.", className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-400" },
                        { text: "Certainty.", className: "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500 dark:from-rose-400 dark:to-orange-400" },
                    ]}
                />
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-500 font-medium leading-relaxed dark:text-slate-300 max-w-lg">
                Stop overpaying for bloated agencies. Start partnering with elite engineering leadership that aligns with your runway.
              </p>
            </motion.div>

            <motion.div variants={heroVariants} initial="hidden" animate="show" className="relative">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 aspect-[4/3] w-full group">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1400"
                  alt="Pricing strategy planning"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/70 via-transparent to-transparent" />
                
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xl">
                        <div className="flex items-center justify-between mb-2">
                             <div className="flex items-center gap-2">
                                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                 <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Available Now</span>
                             </div>
                             <span className="text-xs font-bold text-slate-900 dark:text-white">Q1 Cohort</span>
                        </div>
                        <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
                            Book your 30-day free consultation to secure your spot.
                        </div>
                    </div>
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
                  className={`rounded-3xl border p-8 sm:p-10 shadow-sm flex flex-col ${
                    tier.featured
                      ? "border-slate-900 bg-slate-900 text-white shadow-xl dark:border-slate-700"
                      : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                        {tier.highlight}
                      </p>
                      <h3 className="mt-4 text-2xl font-bold">{tier.name}</h3>
                    </div>
                    <span
                      className={`h-12 w-12 rounded-2xl flex items-center justify-center ${
                        tier.featured ? "bg-white/10 text-white" : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                      }`}
                    >
                      <Icon size={22} />
                    </span>
                  </div>

                  <p className={`mt-6 text-sm ${tier.featured ? "text-white/70" : "text-slate-500 dark:text-slate-300"}`}>
                    {tier.description}
                  </p>

                  {tier.discount && (
                    <div className="mt-5">
                      <div
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] ${
                          tier.featured
                            ? "bg-white/10 text-white/80"
                            : "bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300"
                        }`}
                      >
                        {tier.discount}
                      </div>
                    </div>
                  )}

                  <div className="mt-8 flex items-baseline gap-3">
                    <p className="text-3xl font-black">{tier.price}</p>
                    <span className={`text-xs uppercase tracking-[0.3em] ${tier.featured ? "text-white/60" : "text-slate-400 dark:text-slate-500"}`}>
                      {tier.cadence}
                    </span>
                  </div>

                  <div className="mt-8 space-y-3 flex-1">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 size={16} className={tier.featured ? "text-emerald-300" : "text-emerald-600"} />
                        <span className={tier.featured ? "text-white/80" : "text-slate-600 dark:text-slate-300"}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black uppercase tracking-widest transition ${
                      tier.featured
                        ? "bg-white text-slate-900 hover:bg-white/90"
                        : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
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

      {/* Comparison Table */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="mb-16 text-center">
                 <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Compare Plans</h2>
                 <p className="mt-4 text-slate-500 dark:text-slate-400">Detailed breakdown of what's included in each engagement level.</p>
            </div>

            <div className="overflow-x-auto pb-4">
                <table className="w-full min-w-[800px] border-collapse text-center">
                    <thead>
                        <tr>
                            <th className="p-4 text-left w-1/4"></th>
                            <th className="p-4 w-1/4 text-lg font-bold text-slate-900 dark:text-white">Advisor Sprint</th>
                            <th className="p-4 w-1/4 text-lg font-bold text-indigo-600 dark:text-indigo-400">Product Build</th>
                            <th className="p-4 w-1/4 text-lg font-bold text-slate-900 dark:text-white">Fractional CTO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonData.map((section, idx) => (
                            <React.Fragment key={idx}>
                                <tr className="bg-white dark:bg-slate-900">
                                    <td colSpan={4} className="p-4 text-left font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 border-y border-slate-200 dark:border-slate-800">
                                        {section.category}
                                    </td>
                                </tr>
                                {section.rows.map((row, rIdx) => (
                                    <tr key={rIdx} className="border-b border-slate-200/50 dark:border-slate-800/50 hover:bg-white dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="p-4 text-left font-medium text-slate-900 dark:text-white">{row.feature}</td>
                                        <td className="p-4">{renderCell(row.tier1)}</td>
                                        <td className="p-4 bg-indigo-50/30 dark:bg-indigo-900/10 rounded-lg">{renderCell(row.tier2)}</td>
                                        <td className="p-4">{renderCell(row.tier3)}</td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-32 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Frequently asked questions</h2>
            <p className="mt-4 text-slate-500 dark:text-slate-300">
              Clear answers to help you choose the right engagement structure.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{item.question}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;