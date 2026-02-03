"use client";

import { motion, useInView } from "framer-motion";
import { Brain, Code2, Cloud, ArrowRight, Rocket, Database, Shield, Sparkles, Zap, Target, CheckCircle2 } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const paths = [
  {
    title: "Agentic AI Path",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    darkBg: "bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600",
    description:
      "For developers curious about AI agents, autonomy, and real-world AI systems.",
    steps: [
      "Python fundamentals",
      "LLMs & Prompting",
      "Agents & Tools",
      "Multi-agent workflows",
      "Real projects",
    ],
    backContent: "Transform your career by mastering the cutting edge of AI. Build intelligent agents that can reason, plan, and execute complex tasks autonomously. Learn to work with LangChain, AutoGPT, and production-grade AI systems.",
    accentColor: "purple",
    benefits: ['Build production AI agents', 'Master LLM orchestration', 'Real-world AI projects'],
  },
  {
    title: "Full-Stack Path",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    darkBg: "bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600",
    description:
      "For those confused between frontend, backend, or switching stacks.",
    steps: [
      "HTML, CSS, JS",
      "React / Next.js",
      "Backend APIs",
      "Databases",
      "Production projects",
    ],
    backContent: "Go from zero to shipping production apps. Master the complete stack from beautiful UIs to scalable backends. Build real products that users love and employers value.",
    accentColor: "blue",
    benefits: ['End-to-end development', 'Modern tech stack', 'Portfolio projects'],
  },
  {
    title: "Cloud-Native Path",
    icon: Cloud,
    color: "from-emerald-500 to-lime-500",
    darkBg: "bg-gradient-to-br from-emerald-600 via-emerald-700 to-lime-600",
    description:
      "For engineers lost in Docker, Kubernetes, and DevOps buzzwords.",
    steps: [
      "Linux basics",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Cloud deployment",
    ],
    backContent: "Become the engineer every team needs. Master containerization, orchestration, and infrastructure as code. Deploy and scale applications on AWS, GCP, or Azure with confidence.",
    accentColor: "emerald",
    benefits: ['Infrastructure mastery', 'Container expertise', 'Cloud deployment skills'],
  },
  {
    title: "Data Engineering Path",
    icon: Database,
    color: "from-orange-500 to-red-500",
    darkBg: "bg-gradient-to-br from-orange-600 via-orange-700 to-red-600",
    description:
      "For those drowning in data pipelines, ETL, and big data technologies.",
    steps: [
      "SQL mastery",
      "Python for data",
      "ETL pipelines",
      "Data warehousing",
      "Real-time streaming",
    ],
    backContent: "Turn chaotic data into business value. Build robust pipelines that process millions of records. Master tools like Airflow, Spark, and modern data warehouses to become indispensable.",
    accentColor: "orange",
    benefits: ['Pipeline architecture', 'Big data processing', 'Data warehouse design'],
  },
  {
    title: "Cybersecurity Path",
    icon: Shield,
    color: "from-red-500 to-purple-500",
    darkBg: "bg-gradient-to-br from-red-600 via-red-700 to-purple-600",
    description:
      "For developers wanting to secure applications and understand threat landscapes.",
    steps: [
      "Security fundamentals",
      "Penetration testing",
      "Secure coding",
      "Network security",
      "Incident response",
    ],
    backContent: "Protect what matters most. Learn to think like attackers and defend like experts. From web app security to network defense, become the guardian every organization needs.",
    accentColor: "red",
    benefits: ['Ethical hacking skills', 'Security architecture', 'Threat detection'],
  },
  {
    title: "Startup Tech Path",
    icon: Rocket,
    color: "from-yellow-500 to-orange-500",
    darkBg: "bg-gradient-to-br from-yellow-600 via-yellow-700 to-orange-600",
    description:
      "For entrepreneurs building MVPs and need to move fast without breaking things.",
    steps: [
      "Rapid prototyping",
      "No-code/Low-code",
      "MVP development",
      "Growth hacking",
      "Product scaling",
    ],
    backContent: "Ship products that people want, fast. Learn to validate ideas quickly, build MVPs efficiently, and scale when traction hits. Perfect for founders and early-stage builders.",
    accentColor: "yellow",
    benefits: ['Rapid product launch', 'Lean methodology', 'Growth strategies'],
  },
];

// Typewriter Component with multiple colors
const Typewriter = ({ text, delay = 50, accentColor }: { text: string; delay?: number; accentColor: string }) => {
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
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, delay, text]);

  const colorMap: Record<string, string[]> = {
    purple: ['text-purple-200', 'text-pink-200', 'text-purple-100', 'text-pink-100'],
    blue: ['text-blue-200', 'text-cyan-200', 'text-blue-100', 'text-cyan-100'],
    emerald: ['text-emerald-200', 'text-lime-200', 'text-emerald-100', 'text-lime-100'],
    orange: ['text-orange-200', 'text-red-200', 'text-orange-100', 'text-red-100'],
    red: ['text-red-200', 'text-purple-200', 'text-red-100', 'text-purple-100'],
    yellow: ['text-yellow-200', 'text-orange-200', 'text-yellow-100', 'text-orange-100'],
  };

  const colors = colorMap[accentColor] || colorMap.purple;
  
  return (
    <span className="inline-block">
      {currentText.split('').map((char, index) => {
        const colorIndex = index % colors.length;
        return (
          <span
            key={index}
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
          className="ml-0.5 inline-block h-5 w-0.5 bg-white/60"
        />
      )}
    </span>
  );
};

// FlipCard Component - Fully Responsive
const FlipCard = ({ path, index }: { path: typeof paths[0]; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="group perspective-1000 cursor-pointer h-full"
      onClick={handleCardClick}
    >
      <div className="relative h-[480px] sm:h-[500px] md:h-[520px] w-full">
        {/* Front Side - Hero Theme */}
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="relative h-full rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:border-slate-300">
            {/* Subtle gradient overlay matching Hero */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-slate-50/30 pointer-events-none" />
            
            {/* Animated gradient orb - subtle like Hero */}
            <div className={`absolute -top-24 -right-24 h-40 w-40 sm:h-48 sm:w-48 rounded-full bg-gradient-to-r ${path.color} opacity-[0.07] blur-3xl group-hover:opacity-[0.12] group-hover:scale-125 transition-all duration-700`} />

            <div className="relative z-10 h-full flex flex-col">
              {/* Icon with Hero-style design */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className={`inline-flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${path.color} p-3 sm:p-4 text-white shadow-md group-hover:shadow-xl transition-shadow duration-300 w-fit`}
              >
                <path.icon size={24} className="sm:w-7 sm:h-7" strokeWidth={2.5} />
              </motion.div>

              {/* Title - Clean Hero style */}
              <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {path.title}
              </h3>

              {/* Description - Hero typography */}
              <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                {path.description}
              </p>

              {/* Steps - Clean minimal design */}
              <ul className="mt-6 sm:mt-8 space-y-2 sm:space-y-3 flex-1">
                {path.steps.map((step, i) => (
                  <motion.li
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-700 font-medium group/item"
                  >
                    <motion.span 
                      className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${path.color} shadow-sm flex-shrink-0 group-hover/item:scale-125 transition-transform`}
                    />
                    <span className="group-hover/item:text-slate-900 transition-colors">{step}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Click Indicator - matching Hero's subtle style */}
              <div className="mt-auto pt-5 sm:pt-6 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400 group-hover:text-slate-600 transition-colors">
                    Click to explore
                  </span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="text-slate-400 group-hover:text-slate-600 transition-colors" size={14} />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back Side - Bold Themed Design */}
        <motion.div
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className={`relative h-full rounded-2xl sm:rounded-3xl ${path.darkBg} p-6 sm:p-8 shadow-2xl overflow-hidden`}>
            {/* Animated mesh gradient background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%),
                  radial-gradient(circle at 40% 20%, rgba(255,255,255,0.25) 0%, transparent 50%)
                `,
              }} />
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(
                  0deg,
                  rgba(255,255,255,0.03) 0px,
                  transparent 2px,
                  transparent 4px,
                  rgba(255,255,255,0.03) 6px
                )`,
              }} />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                {/* Animated Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isFlipped ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center justify-center rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-3 sm:p-4 text-white shadow-xl w-fit"
                >
                  <Zap size={24} className="sm:w-8 sm:h-8" strokeWidth={2.5} />
                </motion.div>

                {/* Title with Typewriter */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFlipped ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="mt-5 sm:mt-6 text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
                >
                  {isFlipped && <Typewriter text="Why Choose This?" delay={60} accentColor={path.accentColor} />}
                </motion.h3>

                {/* Description with elegant typography */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFlipped ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="mt-4 sm:mt-5 text-white/95 text-sm sm:text-base leading-relaxed font-light"
                >
                  {path.backContent}
                </motion.p>

                {/* Benefits with animated checkmarks */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFlipped ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="mt-5 sm:mt-6 space-y-2 sm:space-y-3"
                >
                  {path.benefits.map((benefit, i) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isFlipped ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="flex items-center gap-2 text-xs sm:text-sm text-white/90 font-medium"
                    >
                      <CheckCircle2 size={16} className="sm:w-[18px] sm:h-[18px] text-white/80 flex-shrink-0" />
                      {benefit}
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* CTA Button with premium styling */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={isFlipped ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
                href="#contact"
                className="group/btn mt-5 sm:mt-6 inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl bg-white px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-bold text-slate-900 shadow-2xl hover:shadow-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <Target size={18} className="sm:w-5 sm:h-5 group-hover/btn:rotate-90 transition-transform duration-300" />
                Start Your Journey
                <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </motion.a>

              {/* Click to flip back indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isFlipped ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
                className="mt-3 sm:mt-4 text-center text-[10px] sm:text-xs text-white/60"
              >
                Click card to flip back
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Roadmap() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className="relative bg-white py-16 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle background gradients matching Hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 h-64 w-64 sm:h-96 sm:w-96 md:h-[500px] md:w-[500px] rounded-full bg-purple-500/[0.03] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 sm:h-96 sm:w-96 md:h-[500px] md:w-[500px] rounded-full bg-blue-500/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header - Hero style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto sm:mx-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-slate-700 mb-4 sm:mb-6"
          >
            <Sparkles size={14} className="sm:w-4 sm:h-4 text-slate-600" />
            Clear Learning Paths
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
            Simple Tech Roadmaps
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
            No hype. No confusion. Just clear learning paths based on where
            you are today. <span className="font-semibold text-slate-700">Click any card to explore.</span>
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 xl:gap-10">
          {paths.map((path, i) => (
            <FlipCard key={path.title} path={path} index={i} />
          ))}
        </div>

        {/* Bottom CTA - Hero style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-20 md:mt-24 text-center max-w-2xl mx-auto"
        >
          <p className="text-slate-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed px-4">
            Not sure which path to choose? Let's talk about your goals and create a personalized learning journey.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 sm:gap-3 rounded-xl bg-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-white shadow-lg hover:shadow-xl hover:bg-slate-800 active:scale-[0.98] transition-all duration-300"
          >
            Get Personalized Guidance
            <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* 3D Card Flip Styles */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @media (max-width: 640px) {
          .perspective-1000 {
            perspective: 800px;
          }
        }
      `}</style>
    </section>
  );
}