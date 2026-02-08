"use client";

import { motion, useInView, Variants } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const words = [
  { text: "Agentic AI", color: "from-purple-500 to-pink-500" },
  { text: "Full-Stack Development", color: "from-blue-500 to-cyan-500" },
  { text: "Cloud-Native", color: "from-emerald-500 to-lime-500" },
  { text: "Your Tech Career", color: "from-orange-500 to-red-500" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.4, 0.25, 1], // ✅ typed easing (no TS error)
    },
  },
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const rightSectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(rightSectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const currentWord = words[index].text;

    if (!isDeleting && charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplay((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 90);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      const pause = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(pause);
    }

    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplay((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 50);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }
  }, [charIndex, index, isDeleting]);

  const features = [
    "Beginners confused about where to start",
    "Developers stuck switching stacks",
    "Engineers curious about Agentic AI",
    "People lost in cloud & roadmap chaos",
  ];

  return (
    <section className="relative min-h-screen pt-35 flex items-center bg-white overflow-hidden dark:bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900/60" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200/70 bg-white/80 backdrop-blur text-sm shadow dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-100"
            >
              <Sparkles size={16} className="text-purple-500" />
              Free Tech Career Guidance
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 dark:text-white"
            >
              Stuck in Your Tech Path?  
              <span className="block mt-3 text-slate-700 dark:text-slate-200">
                We Guide You in{" "}
                <span
                  className={`bg-clip-text text-transparent bg-gradient-to-r ${words[index].color}`}
                >
                  {display}
                </span>
                <span className="animate-pulse ml-1">|</span>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-slate-600 max-w-xl dark:text-slate-300"
            >
              Free consulting for developers & students confused about learning
              paths, careers, Agentic AI, Full-Stack & Cloud-Native systems.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
              >
                Get Free Guidance →
              </Link>
              <Link
                href="/roadmap"
                className="font-semibold text-slate-600 hover:text-slate-900 transition dark:text-slate-300 dark:hover:text-white"
              >
                See Learning Roadmap →
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            ref={rightSectionRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.8, 0.25, 1], // ✅ typed easing
            }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1], // easeInOut typed
              }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200/70 dark:bg-slate-900 dark:border-slate-800"
            >
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Who This Is For</h3>
              <ul className="space-y-4">
                {features.map((f, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="text-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
