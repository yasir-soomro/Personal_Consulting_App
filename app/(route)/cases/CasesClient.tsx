"use client"

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { TrendingUp, ArrowRight, BarChart3, ShieldCheck, Zap, Globe, Cpu, Server } from "lucide-react";
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
    <span className="inline-flex items-center flex-wrap">
      <span className={phrases[phraseIndex].className}>{text}</span>
      <span className="animate-pulse ml-1 lg:ml-2 w-[3px] h-[0.9em] bg-slate-900 dark:bg-white rounded-full inline-block align-middle opacity-60" />
    </span>
  );
};

/* ================================
   Mock Data
================================ */
const caseStudies = [
  {
    title: "Velocity NeoBank",
    category: "Fintech Infrastructure",
    client: "Velocity Financial",
    description: "Architecting a zero-downtime ledger system capable of handling 100,000 concurrent transactions during market peaks.",
    impact: "Zero Latency",
    metrics: [
      { label: "Throughput", value: "100k TPS" },
      { label: "Uptime", value: "99.999%" },
      { label: "Infra Cost", value: "-40%" }
    ],
    tags: ["Event Sourcing", "Rust", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
    icon: Server,
    color: "bg-blue-500",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    title: "Aegis Legal AI",
    category: "Enterprise Automation",
    client: "Aegis Partners LLP",
    description: "Deploying a private, air-gapped LLM cluster to automate contract analysis while adhering to strict GDPR and SOC2 compliance.",
    impact: "85% Efficiency",
    metrics: [
      { label: "Review Time", value: "-85%" },
      { label: "Accuracy", value: "99.2%" },
      { label: "Security", value: "Air-Gapped" }
    ],
    tags: ["Llama 3", "Vector DB", "Private Cloud"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlydv9lQcF1M_rIWzllukYCYwSLopkbQJK_g&s",
    icon: ShieldCheck,
    color: "bg-violet-500",
    gradient: "from-violet-600 to-fuchsia-600"
  },
  {
    title: "Orbital Edge Mesh",
    category: "Global Networking",
    client: "Orbital Stream",
    description: "Designing a distributed edge-compute network to deliver 4K video streams with sub-30ms latency to users across 6 continents.",
    impact: "Global Reach",
    metrics: [
      { label: "PoPs", value: "240+" },
      { label: "Latency", value: "<30ms" },
      { label: "Bandwidth", value: "100 Pb/mo" }
    ],
    tags: ["Edge Computing", "WebAssembly", "Go"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600",
    icon: Globe,
    color: "bg-emerald-500",
    gradient: "from-emerald-600 to-teal-600"
  }
];

const stats = [
  { label: "Capital Saved", val: "$140M+", icon: TrendingUp },
  { label: "Users Served", val: "50M+", icon: Globe },
  { label: "AI Models", val: "120+", icon: Cpu },
  { label: "Avg Latency", val: "24ms", icon: Zap },
];

/* ================================
   Animations
================================ */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
};

/* ================================
   Component
================================ */
const Cases: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 mt-10">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-28 pb-10 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Engineering Outcomes</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black/30 text-slate-900 dark:text-white tracking-tight leading-[1.05] mb-8 ">
              We don't just write code. <br/>
              We engineer{" "}
              <Typewriter 
                phrases={[
                  { text: "Scalability.", className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400" },
                  { text: "Value.", className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400" },
                  { text: "Resilience.", className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-400" },
                  { text: "Impact.", className: "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500 dark:from-rose-400 dark:to-orange-400" },
                ]}
              />
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Dive into the technical details of how we've helped unicorns and enterprises scale their infrastructure, automate with AI, and secure their data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CASE STUDIES LIST ================= */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16 sm:space-y-24 lg:space-y-32" // Large vertical spacing between cases
          >
            {caseStudies.map((project, i) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start lg:items-center"
              >
                {/* Visual Side */}
                <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] rounded-lg sm:rounded-xl lg:rounded-[2rem] overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-lg sm:shadow-2xl transition-transform duration-700 hover:shadow-3xl border border-slate-200 dark:border-slate-800">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 via-slate-900/10 to-transparent opacity-80" />

                    {/* Floating Tech Stack Tags */}
                    <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 flex flex-wrap gap-1 sm:gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                  </div>

                  {/* Decorative Metric Card */}
                  <div className={`absolute -bottom-4 sm:-bottom-8 ${i % 2 === 1 ? '-left-4 sm:-left-8' : '-right-4 sm:-right-8'} bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-slate-100 dark:border-slate-800 block`}>
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                            <project.icon size={20} className="sm:w-[24px] sm:h-[24px]" />
                        </div>
                        <div>
                            <p className="text-[8px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">Primary Outcome</p>
                            <p className="text-base sm:text-xl font-black text-slate-900 dark:text-white">{project.impact}</p>
                        </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                   <div className="flex flex-col gap-4 sm:gap-6">
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-md text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white mb-3 sm:mb-4 bg-gradient-to-r ${project.gradient}`}>
                            {project.category}
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                            {project.title}
                        </h2>
                        <p className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                            Client: {project.client}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed border-l-2 border-slate-300 dark:border-slate-700 pl-4 sm:pl-6">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-3 gap-3 sm:gap-4 border-t border-slate-300 dark:border-slate-700 pt-4 sm:pt-6">
                          {project.metrics.map((m, idx) => (
                              <div key={idx}>
                                  <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">{m.value}</p>
                                  <p className="text-[8px] sm:text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mt-1">{m.label}</p>
                              </div>
                          ))}
                      </div>

                      <div className="pt-2 sm:pt-4">
                        <Link 
                            href="#" 
                            className="group inline-flex items-center gap-2 sm:gap-3 text-slate-900 dark:text-white font-bold text-sm sm:text-base hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                            <span className="border-b-2 border-slate-300 dark:border-slate-600 group-hover:border-indigo-600 dark:group-hover:border-indigo-400 pb-0.5 transition-colors">
                                View Technical Analysis
                            </span>
                            <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                   </div>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= IMPACT STATS ================= */}
      <section className="py-16 sm:py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
               {stats.map((stat, i) => (
                   <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center group"
                   >
                       <div className="inline-flex p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-800/50 group-hover:bg-indigo-900/30 text-indigo-400 mb-3 sm:mb-4 transition-colors">
                           <stat.icon size={20} className="sm:w-[24px] sm:h-[24px]" />
                       </div>
                       <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight">{stat.val}</h3>
                       <p className="text-[8px] sm:text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</p>
                   </motion.div>
               ))}
           </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 sm:py-24 lg:py-32 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8">Ready to build something iconic?</h2>
            <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-white transition-all duration-200 bg-slate-900 border border-transparent rounded-lg sm:rounded-xl hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
                Start Your Project
            </Link>
        </div>
      </section>
      
    </div>
  );
};

export default Cases;