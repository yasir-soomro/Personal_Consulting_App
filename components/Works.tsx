"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MessageCircle, Map, Rocket, ArrowRight, Sparkles, CheckCircle2, Loader2 } from "lucide-react";

const steps = [
  {
    title: "Share Your Current Challenge",
    description:
      "Tell us where you're stuck—whether it's choosing career paths, understanding Agentic AI, or conquering cloud architecture. We listen and analyze without judgment.",
    icon: MessageCircle,
    highlights: ["No gatekeeping", "Real-time analysis", "Your pace, your goals"],
    color: "from-violet-500 to-fuchsia-500",
    accentColor: "violet",
  },
  {
    title: "Receive Your Custom Roadmap",
    description:
      "We synthesize your background and ambitions into ONE focused learning path. No information overload—just a clear, actionable roadmap designed specifically for you.",
    icon: Map,
    highlights: ["Personalized path", "Step-by-step clarity", "Zero fluff advice"],
    color: "from-blue-500 to-cyan-500",
    accentColor: "blue",
  },
  {
    title: "Begin With Total Confidence",
    description:
      "Walk away with crystal-clear next steps and genuine confidence. You'll know exactly what to learn, in what order, and why it matters for your career longevity.",
    icon: Rocket,
    highlights: ["Actionable items", "Resource toolkit", "Ongoing support"],
    color: "from-emerald-500 to-teal-500",
    accentColor: "emerald",
  },
];

// Mock AI image generator
const generateAIImageMock = async (prompt: string) => {
  return "https://via.placeholder.com/400x300.png?text=AI+Illustration"; // placeholder
};

const AIIllustration = ({ prompt, colorClass }: { prompt: string; colorClass: string }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    generateAIImageMock(prompt)
      .then((url) => setImageUrl(url))
      .finally(() => setLoading(false));
  }, [prompt]);

  return (
    <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-50 flex items-center justify-center">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-2"
          >
            <Loader2 className={`w-10 h-10 animate-spin text-${colorClass}-500`} />
            <span className="text-xs text-gray-400 uppercase tracking-widest">
              Rendering AI Vision...
            </span>
          </motion.div>
        ) : (
          <motion.img
            key="image"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src={imageUrl!}
            alt="Step Illustration"
            className="w-full h-full object-contain p-4"
          />
        )}
      </AnimatePresence>
      <div className={`absolute inset-0 bg-gradient-to-br ${steps[0].color} opacity-5 pointer-events-none`} />
    </div>
  );
};

export const HowItWorks: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative bg-white py-32 sm:py-48 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-3 rounded-full bg-gray-100 px-5 py-2 text-xs font-black text-gray-900 mb-8 tracking-widest uppercase shadow-sm"
          >
            <Sparkles size={14} className="text-blue-500" />
            The Foundry Process
          </motion.div>

          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 leading-tight font-display">
            Methodology <br />
            <span className="text-gray-400 italic">Redefined</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-gray-500 font-medium leading-relaxed">
            Our precision framework is designed to move at the speed of the industry. 
            Direct, data-driven, and hyper-personalized.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-40 sm:space-y-64">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={step.title} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-2xl`}>
                      <step.icon size={26} strokeWidth={2} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-gray-400 tracking-widest uppercase">Stage 0{index + 1}</span>
                      <span className="text-sm font-bold text-gray-900">Elite Protocol</span>
                    </div>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight font-display">{step.title}</h3>
                  <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">{step.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                    {step.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex-shrink-0 h-7 w-7 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shadow-sm">
                          <CheckCircle2 size={16} className="text-gray-900" strokeWidth={2.5} />
                        </div>
                        <span className="text-xs font-black text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* AI Illustration */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="flex-1 w-full max-w-xl"
                >
                  <AIIllustration prompt={step.title} colorClass={step.accentColor} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
