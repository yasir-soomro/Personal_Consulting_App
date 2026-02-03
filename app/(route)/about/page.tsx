"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Target, Shield, Globe, Award, Star } from "lucide-react";

const values = [
  {
    title: "Architectural Integrity",
    description: "We don't teach just to pass interviews. We teach to build systems that survive the next decade of technical evolution.",
    icon: Shield,
    color: "text-blue-500",
  },
  {
    title: "Foundry First Principles",
    description: "Stripping away the hype to reveal the core logic. Our roadmaps are built on fundamentals, not fleeting buzzwords.",
    icon: Target,
    color: "text-violet-500",
  },
  {
    title: "Global Intelligence",
    description: "Our network spans top-tier engineering teams at Google, Vercel, and Anthropic. We bring world-class context to your local screen.",
    icon: Globe,
    color: "text-emerald-500",
  },
];

const Typewriter = ({
  text,
  delay = 40,
  accentColor = "violet",
}: {
  text: string;
  delay?: number;
  accentColor?: "violet" | "blue" | "emerald";
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
    setIsComplete(true);
  }, [currentIndex, delay, text]);

  const colorMap: Record<string, string[]> = {
    violet: ["text-violet-400", "text-indigo-400", "text-violet-300"],
    blue: ["text-blue-400", "text-cyan-400", "text-blue-300"],
    emerald: ["text-emerald-400", "text-lime-400", "text-emerald-300"],
  };

  const colors = colorMap[accentColor] || colorMap.violet;

  return (
    <span className="inline-block">
      {currentText.split("").map((char, index) => {
        const colorIndex = index % colors.length;
        return (
          <span
            key={`${char}-${index}`}
            className={`${colors[colorIndex]} transition-colors duration-300`}
          >
            {char}
          </span>
        );
      })}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-0.5 inline-block h-5 w-0.5 bg-slate-400/70"
        />
      )}
    </span>
  );
};

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

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-40 overflow-hidden border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div variants={heroVariants} initial="hidden" animate="show" className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest mb-8">
              <Star size={14} className="text-yellow-400" fill="currentColor" />
              The Foundry Origin
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight font-display leading-[0.9] mb-10">
              Engineering <br />
              <span className="text-slate-300 italic">Mastery.</span>
            </h1>
            <div className="text-xl sm:text-3xl font-bold text-slate-500 max-w-2xl leading-tight h-24 sm:h-20">
              <Typewriter
                text="We bridge the gap between amateur coding and architectural excellence."
                accentColor="violet"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Abstract Background Grid */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none overflow-hidden">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400">Our Protocol</h2>
              <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight font-display leading-tight">
                Built for those who refuse <br />to settle for average.
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                Foundry Labs was born from a simple observation: the internet is drowning in tutorials, but starving for architectural wisdom. Most roadmaps focus on "how" to type a command. We focus on "why" a system exists.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                Whether you're pivoting to Agentic AI or scaling a distributed cloud mesh, our mission is to provide the precision engineering required to succeed at the highest levels of tech.
              </p>
              
              <div className="flex items-center gap-10 pt-4">
                <div>
                   <p className="text-4xl font-black text-slate-900">4,200+</p>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Architects Trained</p>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div>
                   <p className="text-4xl font-black text-slate-900">1%</p>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Mentor Network</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 rounded-[3rem] bg-slate-50 border border-slate-100 overflow-hidden shadow-2xl">
                 <img
                   src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                   alt="Foundry Office"
                   className="w-full h-full object-cover grayscale opacity-50"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent" />
              </div>

              <motion.div
                whileHover={{ rotateX: 8, rotateY: -8, y: -6 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="absolute right-4 top-4 sm:right-[-24px] sm:top-10 w-48 sm:w-56 rounded-3xl border border-slate-200 bg-white shadow-xl p-4 transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                  Metrics snapshot
                </p>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                  alt="Performance chart"
                  className="mt-3 h-28 w-full rounded-2xl object-cover"
                />
                <p className="mt-3 text-xs font-semibold text-slate-600">
                  Delivery velocity +42%
                </p>
              </motion.div>

              {/* Floating element */}
              <div className="absolute bottom-4 left-4 sm:-bottom-10 sm:-left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-xs">
                <Award className="text-yellow-500 mb-4" size={32} />
                <p className="text-sm font-bold text-slate-900 leading-snug">Voted #1 Advanced Learning Protocol 2024</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24 sm:py-48 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-32">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400 mb-6">Fundamental Truths</h2>
            <h3 className="text-4xl sm:text-6xl font-bold text-slate-900 font-display italic">What drives us.</h3>
          </div>

          <motion.div
            variants={heroVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="mb-16 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-lg"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600"
                alt="Foundry team collaboration"
                className="h-56 w-full object-cover sm:h-64"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-4 py-3 text-xs font-black uppercase tracking-[0.3em] text-slate-700">
                Mentorship first
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8"
          >
            {values.map((val) => (
              <motion.div
                key={val.title}
                variants={itemVariants}
                className="group relative p-10 bg-white rounded-[2.5rem] border border-slate-200 hover:border-blue-200 hover:shadow-2xl transition-all duration-500"
              >
                <div className={`h-16 w-16 rounded-2xl bg-slate-50 flex items-center justify-center ${val.color} mb-8 group-hover:scale-110 transition-transform`}>
                  <val.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{val.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{val.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategy Systems",
                copy: "We map signals, not assumptions, for durable engineering bets.",
                gradient: "from-slate-900 via-slate-800 to-slate-900",
              },
              {
                title: "AI Velocity",
                copy: "Agentic tooling that accelerates delivery without compromising safety.",
                gradient: "from-blue-600 via-indigo-600 to-slate-900",
              },
              {
                title: "Operational Clarity",
                copy: "Dashboards and playbooks that keep teams aligned at scale.",
                gradient: "from-emerald-600 via-teal-600 to-slate-900",
              },
            ].map((theme) => (
              <motion.div
                key={theme.title}
                whileHover={{ rotateX: 6, rotateY: -6, y: -8 }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}
                className="relative rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-xl transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${theme.gradient} opacity-[0.08]`}
                />
                <div className="relative">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                    Theme
                  </p>
                  <h4 className="mt-4 text-xl font-bold text-slate-900">{theme.title}</h4>
                  <p className="mt-3 text-sm text-slate-500">{theme.copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 sm:py-48 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3)_0%,transparent_70%)]" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10 text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="max-w-4xl mx-auto"
           >
              <h2 className="text-blue-500 text-xs font-black uppercase tracking-[0.4em] mb-12">The Foundry Creed</h2>
              <p className="text-3xl sm:text-6xl font-bold font-display italic leading-tight mb-16">
                "We don't build developers. <br />We engineer <span className="text-blue-400">architects.</span>"
              </p>
              <div className="h-px w-32 bg-white/10 mx-auto mb-16" />
              <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-24 grayscale opacity-40">
                 <div className="flex items-center gap-2 font-black text-2xl italic tracking-tighter">EST. 2022</div>
                 <div className="flex items-center gap-2 font-black text-2xl italic tracking-tighter">FOUNDRY.LABS</div>
                 <div className="flex items-center gap-2 font-black text-2xl italic tracking-tighter">PRECISION.DEV</div>
              </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
