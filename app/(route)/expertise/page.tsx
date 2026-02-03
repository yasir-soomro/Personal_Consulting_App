"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Zap, Globe, Terminal, Sparkles } from "lucide-react";
import Link from "next/link";

const competencies = [
  {
    title: "Agentic AI Systems",
    description: "Orchestrating autonomous agents that don't just chat, but execute. We specialize in LangGraph, multi-agent tool-calling, and high-fidelity LLM evaluation frameworks.",
    icon: Sparkles,
    tags: ["LangChain", "Vector DBs", "RAG", "Function Calling"],
    color: "from-violet-500 to-indigo-500",
    href: "/expertise/agentic-ai",
  },
  {
    title: "Distributed Architectures",
    description: "Building systems that scale horizontally without friction. Expertise in microservices, event-driven design, and globally distributed edge computing.",
    icon: Globe,
    tags: ["Kubernetes", "gRPC", "Kafka", "Edge Runtime"],
    color: "from-blue-500 to-cyan-500",
    href: "/expertise/distributed-architectures",
  },
  {
    title: "Performance Engineering",
    description: "Optimizing for the critical path. From sub-second Cold Starts in Serverless to 100/100 Lighthouse scores, we engineer for speed as a first-class feature.",
    icon: Zap,
    tags: ["WASM", "Rust", "Next.js", "Core Web Vitals"],
    color: "from-orange-500 to-amber-500",
    href: "/expertise/performance-engineering",
  },
  {
    title: "Security by Design",
    description: "Integrating Zero Trust principles into the development lifecycle. We focus on OWASP compliance, automated vulnerability scanning, and secure supply chains.",
    icon: ShieldCheck,
    tags: ["OAuth2", "JWT", "IAM", "Encryption"],
    color: "from-rose-500 to-red-500",
    href: "/expertise/security-by-design",
  },
];

const TechStack = () => {
  const categories = [
    { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"] },
    { name: "Backend", items: ["Node.js", "Python", "Go", "PostgreSQL", "Redis"] },
    { name: "DevOps", items: ["AWS", "Vercel", "Docker", "Terraform", "GitHub Actions"] },
    { name: "AI/ML", items: ["OpenAI", "Anthropic", "Pinecone", "Mistral", "LangGraph"] },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-6 rounded-2xl bg-slate-50 border border-slate-100"
        >
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">{cat.name}</h4>
          <div className="flex flex-wrap gap-2">
            {cat.items.map((item) => (
              <span key={item} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm hover:border-blue-400 hover:text-blue-600 transition-all cursor-default">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
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

export const ExpertisePage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <motion.div variants={heroVariants} initial="hidden" animate="show">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest mb-8">
                <Cpu size={14} className="text-blue-400" />
                Technical Authority
              </div>
              <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight font-display leading-[0.9] mb-8">
                Architectural <br />
                <span className="text-slate-300 italic">Precision.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed mb-10">
                We specialize in the bridge between bleeding-edge AI and high-reliability distributed systems. No fluff—just deep technical depth.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/cases"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-xs font-black uppercase tracking-widest text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  View case studies
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-600 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900"
                >
                  Start a project
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate="show"
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1400"
                  alt="AI systems and architecture"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-3xl border border-slate-100 bg-white p-6 shadow-xl">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                  Expertise
                </p>
                <p className="mt-2 text-lg font-bold text-slate-900">AI + Cloud + Full-stack</p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Visual */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
           <svg viewBox="0 0 400 400" className="w-full h-full text-slate-900">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M 50,50 L 350,50 L 350,350 L 50,350 Z M 100,100 L 300,100 L 300,300 L 100,300 Z"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
              />
              <motion.circle
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                cx="200" cy="200" r="40" fill="currentColor" opacity="0.1" 
              />
           </svg>
        </div>
      </section>

      {/* Competencies Grid */}
      <section className="py-24 sm:py-32 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Core Competencies</h2>
            <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight font-display italic">Domains of Excellence</h3>
          </div>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {competencies.map((comp) => (
              <motion.div
                key={comp.title}
                variants={itemVariants}
                className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500"
              >
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${comp.color} flex items-center justify-center text-white mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                  <comp.icon size={28} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{comp.title}</h4>
                <p className="text-slate-500 leading-relaxed mb-8">{comp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {comp.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href={comp.href}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-slate-500 transition hover:text-slate-900"
                  >
                    Learn more
                    <span className="text-base leading-none">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400 mb-4">The Toolkit</h2>
              <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight font-display leading-tight">
                Vetted stacks for <br />production-ready systems.
              </h3>
            </div>
            <div className="flex items-center gap-4 text-slate-500">
              <div className="h-px w-20 bg-slate-200" />
              <span className="text-xs font-black uppercase tracking-widest">Industry Standard</span>
            </div>
          </div>

          <motion.div
            variants={heroVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="mb-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-lg"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1600"
                alt="Modern engineering workspace"
                className="h-56 w-full object-cover sm:h-64"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-4 py-3 text-xs font-black uppercase tracking-[0.3em] text-slate-700">
                Production-ready
              </div>
            </div>
          </motion.div>
          
          <TechStack />
        </div>
      </section>

      {/* Technical Philosophy */}
      <section className="py-24 sm:py-48 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3)_0%,transparent_70%)]" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              variants={heroVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-120px" }}
            >
              <h2 className="text-blue-400 text-xs font-black uppercase tracking-[0.4em] mb-8">Architectural Philosophy</h2>
              <h3 className="text-4xl sm:text-6xl font-bold mb-10 font-display italic leading-tight">First principles <br />engineering.</h3>
              <p className="text-slate-400 text-xl leading-relaxed mb-12">
                We believe that modern software is too complex. Our goal is to strip away the abstractions until only the most efficient, performant, and secure logic remains.
              </p>
              
              <div className="space-y-6">
                {[
                  { t: "Simplicity First", d: "If a system can't be explained in five minutes, it's too complex." },
                  { t: "Security by Default", d: "Protection isn't an add-on; it's the foundation." },
                  { t: "Scale with Purpose", d: "Horizontal growth is a strategy, not a buzzword." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex gap-6 items-start group cursor-default"
                  >
                    <div className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-black text-blue-400 group-hover:bg-white group-hover:text-slate-950 transition-all">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.t}</h4>
                      <p className="text-slate-500 text-sm">{item.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={heroVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-120px" }}
              className="relative aspect-square"
            >
               <div className="absolute inset-0 rounded-full border-2 border-white/5 animate-spin-slow" />
               <div className="absolute inset-20 rounded-full border-2 border-white/10 animate-reverse-spin-slow" />
               <div className="absolute inset-40 flex items-center justify-center">
                  <div className="h-32 w-32 bg-white rounded-3xl rotate-45 flex items-center justify-center shadow-2xl">
                     <Terminal className="-rotate-45 text-slate-900" size={40} />
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertisePage;
