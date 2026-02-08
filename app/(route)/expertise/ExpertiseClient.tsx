"use client"

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Zap, Globe, Sparkles } from "lucide-react";
import Link from "next/link";

/* ================================
   Typewriter Text
================================ */
const TypewriterText = ({
  words,
  speed = 120,
}: {
  words: string[];
  speed?: number;
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (charIndex < currentWord.length) {
      const t = setTimeout(() => {
        setText((p) => p + currentWord[charIndex]);
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setWordIndex((p) => (p + 1) % words.length);
      }, 1500);
      return () => clearTimeout(t);
    }
  }, [charIndex, wordIndex, words, speed]);

  return (
    <span className="text-red-500 dark:text-indigo-400">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

/* ================================
   Competencies Data
================================ */
const competencies = [
  {
    title: "AI Consulting & Automation",
    description: "Designing real-world AI systems — from agent workflows to production-grade automation.",
    icon: Sparkles,
    tags: ["Agentic AI", "RAG", "LLMs", "OpenAI"],
    color: "from-violet-500 to-indigo-500",
  },
  {
    title: "System Architecture",
    description: "Clean, scalable architectures focused on long-term growth and simplicity.",
    icon: Globe,
    tags: ["APIs", "Microservices", "Cloud"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Performance Optimization",
    description: "Speed, scalability, and reliability across modern frontend and backend systems.",
    icon: Zap,
    tags: ["React", "Backend", "Scalability"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Security & Reliability",
    description: "Secure-by-default systems that scale safely and confidently.",
    icon: ShieldCheck,
    tags: ["Auth", "Secure APIs", "Best Practices"],
    color: "from-rose-500 to-red-500",
  },
];

/* ================================
   Animations
================================ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

/* ================================
   Component
================================ */
const Expertise = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 mt-28">
      
      {/* ================= Hero ================= */}
      <section className="relative pt-10 pb-20 sm:pt-16 sm:pb-24 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            animate="show"
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/10 text-slate-900 dark:text-white text-[11px] font-bold uppercase tracking-widest mb-6 border border-slate-200 dark:border-slate-800">
              <Cpu size={14} className="text-indigo-500" />
              Technical Consultant
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-slate-900 dark:text-white">
              Building clear,
              <br />
              <span className="">
                <TypewriterText
                  words={[
                    "scalable systems.",
                    "AI-powered products.",
                    "clean architectures.",
                  ]}
                />
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              I help startups and teams transform complex ideas into reliable,
              production-ready software — without unnecessary complexity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/cases"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300 shadow-lg dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-white hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>

          {/* Image + Chart */}
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            animate="show" 
            transition={{ delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 aspect-[4/3] group">
              <img
                src="https://plus.unsplash.com/premium_photo-1661420128622-4a5267435ce4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbnN1bHRpbmd8ZW58MHx8MHx8fDA%3D"
                alt="System Analytics"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              
              {/* Floating Elements */}
               <motion.div 
                className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
               >
                 <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">System Load</span>
                    <span className="text-xs font-bold text-green-500">Optimal</span>
                 </div>
                 <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 w-[65%] rounded-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
                    </div>
                 </div>
               </motion.div>
            </div>
            
            {/* Decorative background element behind image */}
            <div className="absolute -z-10 top-6 -right-6 w-full h-full border-2 border-indigo-500/10 rounded-2xl" />
          </motion.div>
        </div>
      </section>

      {/* ================= Competencies ================= */}
      <section className="relative bg-white dark:bg-slate-900 py-24 sm:py-32">
         {/* Wave Divider Top */}
        <div className="absolute top-0 left-0 right-0 -mt-16 sm:-mt-24 transform rotate-180 pointer-events-none">
            <svg viewBox="0 0 1440 320" className="w-full h-16 sm:h-24 block fill-white dark:fill-slate-900">
                <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-500 mb-3">
                Expertise
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                Consulting Focus Areas
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {competencies.map((c, i) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors duration-300"
              >
                <div
                  className={`h-12 w-12 mb-6 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <c.icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{c.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm sm:text-base">{c.description}</p>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Philosophy ================= */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
         {/* Wave Divider Top of Footerish section */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-white dark:fill-slate-900">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-indigo-400 text-xs font-black uppercase tracking-[0.3em] mb-6">
            Philosophy
          </h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-white mb-8 leading-tight">
            Clarity over complexity.
          </h3>
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-10">
            I focus on first principles — simplifying decisions, reducing risk,
            and building systems that teams can understand, scale, and maintain
            with confidence.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold border-b border-indigo-500 pb-0.5 hover:text-indigo-400 transition-colors">
            Let's discuss your project <Sparkles size={16} />
          </Link>
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>
      </section>
    </div>
  );
};

export default Expertise;
