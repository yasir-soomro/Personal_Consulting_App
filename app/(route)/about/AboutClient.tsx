"use client"

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Target, Shield, Globe, Award, Star, History, Users, Rocket, Sparkles } from "lucide-react";

/* ================================
   Data
================================ */
const values = [
  {
    title: "Architectural Integrity",
    description: "We don't teach just to pass interviews. We teach to build systems that survive the next decade of technical evolution.",
    icon: Shield,
    color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  },
  {
    title: "Foundry First Principles",
    description: "Stripping away the hype to reveal the core logic. Our roadmaps are built on fundamentals, not fleeting buzzwords.",
    icon: Target,
    color: "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400",
  },
  {
    title: "Global Intelligence",
    description: "Our network spans top-tier engineering teams at Google, Vercel, and Anthropic. We bring world-class context to your local screen.",
    icon: Globe,
    color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
  },
];

const milestones = [
  { 
    year: "2021", 
    title: "The Inception", 
    description: "Started as a closed-door research lab focused on high-performance architecture.",
    icon: History 
  },
  { 
    year: "2022", 
    title: "Public Protocol", 
    description: "Released our internal playbooks to the public, training the first 500 architects.",
    icon: Users 
  },
  { 
    year: "2023", 
    title: "Global Mesh", 
    description: "Expanded mentorship network to 12 countries, partnering with top tech leads.",
    icon: Globe 
  },
  { 
    year: "2024", 
    title: "Agentic Era", 
    description: "Pioneering the first AI-native engineering curriculum for enterprise systems.",
    icon: Rocket 
  }
];

/* ================================
   Helper Components
================================ */
const Typewriter = ({ text, delay = 50 }: { text: string; delay?: number }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}<span className="animate-pulse text-indigo-500">|</span></span>;
};

/* ================================
   Main Component
================================ */
const About: React.FC = () => {
  // Mouse movement logic
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  function handleMouseMove({ clientX, clientY }: { clientX: number, clientY: number }) {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const xPos = (clientX - left) / width - 0.5;
    const yPos = (clientY - top) / height - 0.5;
    x.set(xPos * 100); // move range -50 to 50
    y.set(yPos * 100);
  }

  // Parallax transforms
  const moveBackgroundX = useTransform(mouseX, (val) => -val * 0.5); // Move opposite
  const moveBackgroundY = useTransform(mouseY, (val) => -val * 0.5);
  const moveForegroundX = useTransform(mouseX, (val) => val * 0.2); // Move with
  const moveForegroundY = useTransform(mouseY, (val) => val * 0.2);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 font-sans overflow-x-hidden mt-20">
      
      {/* ================= HERO SECTION ================= */}
      <section 
        ref={ref}
        onMouseMove={(e) => handleMouseMove(e)}
        className="relative pt-20 pb-20  overflow-hidden"
      >
        {/* Interactive Background Elements */}
        <motion.div 
            style={{ x: moveBackgroundX, y: moveBackgroundY }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0"
        >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen dark:bg-indigo-500/20" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen dark:bg-purple-500/20" />
        </motion.div>

        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm text-slate-900 text-[11px] font-black uppercase tracking-widest mb-8 dark:bg-slate-900 dark:border-slate-800 dark:text-white"
            >
              <Star size={12} className="text-yellow-500 fill-current" />
              The Foundry Origin
            </motion.div>

            <motion.h1 
              style={{ x: moveForegroundX, y: moveForegroundY }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-8"
            >
              Engineering <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-400">
                Mastery.
              </span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto h-20"
            >
               <Typewriter text="We bridge the gap between amateur coding and architectural excellence." delay={30} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-2 mb-6">
                        <span className="h-px w-8 bg-indigo-500"></span>
                        <span className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Our Protocol</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                        Built for those who refuse to settle for average.
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                        Foundry Labs was born from a simple observation: the internet is drowning in tutorials, but starving for architectural wisdom. Most roadmaps focus on "how" to type a command. We focus on "why" a system exists.
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                        Whether you're pivoting to Agentic AI or scaling a distributed cloud mesh, our mission is to provide the precision engineering required to succeed at the highest levels of tech.
                    </p>

                    <div className="grid grid-cols-2 gap-8 border-t border-slate-200 dark:border-slate-800 pt-8">
                        <div>
                            <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">4,200+</div>
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Architects Trained</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">Top 1%</div>
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Mentor Network</div>
                        </div>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8 }}
                   className="relative"
                >
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                        <img 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600" 
                            alt="Team Collaboration" 
                            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
                    </div>

                    {/* Floating Badge */}
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 max-w-xs"
                    >
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center text-yellow-600 dark:text-yellow-500">
                                <Award size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Industry Standard</p>
                                <p className="text-sm text-slate-500 mt-1">Voted #1 Advanced Learning Protocol in 2024</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* ================= JOURNEY SECTION ================= */}
      <section className="py-24 relative overflow-hidden">
        {/* Wave Divider Top */}
        <div className="absolute top-0 left-0 right-0 -mt-px text-slate-50 dark:text-slate-900/50">
             <svg fill="currentColor" viewBox="0 0 1440 48" className="w-full h-12 block transform rotate-180"><path d="M0 48h1440V0c-264.9 14-539.1 38.3-825.8 45.4C374.9 51.3 145.4 34.6 0 0v48z"></path></svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
            <div className="text-center mb-16">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-500 mb-3">Timeline</h2>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Evolution of the Forge</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {milestones.map((m, i) => (
                    <motion.div
                        key={m.year}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 group"
                    >
                         <div className="text-5xl font-black text-slate-100 dark:text-slate-800 absolute top-4 right-4 group-hover:text-indigo-50 dark:group-hover:text-indigo-900/20 transition-colors">
                             {m.year.slice(-2)}
                         </div>
                         <div className="relative z-10">
                             <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                                 <m.icon size={24} />
                             </div>
                             <span className="inline-block px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-2">
                                 {m.year}
                             </span>
                             <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{m.title}</h4>
                             <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{m.description}</p>
                         </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* ================= VALUES SECTION ================= */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-500 mb-3">Core Values</h2>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Fundamental Truths</h3>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">The principles that guide every decision, line of code, and architectural blueprint we create.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {values.map((val, i) => (
                    <motion.div
                        key={val.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300"
                    >
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${val.color}`}>
                            <val.icon size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{val.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {val.description}
                        </p>
                    </motion.div>
                ))}
            </div>
         </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.2),transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
             <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
             >
                 <Sparkles className="w-8 h-8 text-indigo-400 mx-auto mb-6" />
                 <h2 className="text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-8">The Foundry Creed</h2>
                 <p className="text-4xl sm:text-6xl font-black text-white italic tracking-tight leading-tight mb-12">
                    "We don't build developers. <br/> We engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">architects</span>."
                 </p>
                 <div className="flex flex-wrap justify-center gap-6 sm:gap-12 opacity-40 text-sm font-bold tracking-widest uppercase">
                    <span>Est. 2022</span>
                    <span>•</span>
                    <span>Foundry.Labs</span>
                    <span>•</span>
                    <span>Precision.Dev</span>
                 </div>
             </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;