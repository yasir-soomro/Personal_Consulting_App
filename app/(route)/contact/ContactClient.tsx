"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, cubicBezier, AnimatePresence, type Variants } from "framer-motion";
import { ArrowRight, Calendar, Mail, MapPin, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";

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
   Data & Config
================================ */
const contactOptions = [
  {
    title: "Discovery Call",
    description: "Talk through goals, constraints, and the fastest path to results.",
    icon: Calendar,
    action: "Schedule now",
    link: "#",
    color: "bg-blue-500",
  },
  {
    title: "Email",
    description: "Share context, timelines, and technical requirements in detail.",
    icon: Mail,
    action: "hello@foundrylabs.co",
    link: "mailto:hello@foundrylabs.co",
    color: "bg-violet-500",
  },
  {
    title: "Phone",
    description: "Direct access for urgent consulting and executive conversations.",
    icon: Phone,
    action: "+1 (212) 555-0148",
    link: "tel:+12125550148",
    color: "bg-emerald-500",
  },
];

const easeOut = cubicBezier(0.16, 1, 0.3, 1);

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOut } },
};

const staggerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

/* ================================
   Component
================================ */
const Contact: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const successTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (successTimer.current) {
        clearTimeout(successTimer.current);
      }
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);

      if (successTimer.current) {
        clearTimeout(successTimer.current);
      }
      successTimer.current = setTimeout(() => setShowSuccess(false), 4000);
    }, 1400);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 mt-18 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none" />
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
            
            {/* Left Content */}
            <motion.div variants={heroVariants} initial="hidden" animate="show">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest mb-8 dark:bg-white dark:text-slate-900 shadow-lg shadow-slate-200/50 dark:shadow-none">
                <MapPin size={14} className="text-emerald-300 dark:text-emerald-600" />
                Contact Foundry
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.05] mb-8 dark:text-white">
                Let's map your <br />
                <Typewriter 
                  phrases={[
                    { text: "Next Build.", className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400" },
                    { text: "Cloud Strategy.", className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400" },
                    { text: "AI Integration.", className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-400" },
                    { text: "Market Launch.", className: "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500 dark:from-rose-400 dark:to-orange-400" },
                  ]}
                />
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-500 font-medium leading-relaxed dark:text-slate-300 max-w-lg">
                Tell us where you're headed. We'll help you design the fastest, safest route to production.
              </p>
            </motion.div>

            {/* Right Visual / Offer */}
            <motion.div variants={heroVariants} initial="hidden" animate="show" className="relative space-y-6">
               {/* Offer Card */}
              <div className="relative rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900 overflow-hidden group hover:border-emerald-500/30 transition-colors duration-500">
                 <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors duration-500" />
                 
                <div className="flex items-start justify-between gap-4 relative z-10">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
                      Limited Availability
                    </p>
                    <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                      Start with value, not risk.
                    </h2>
                    <p className="mt-3 text-sm text-slate-500 dark:text-slate-300 font-medium">
                      Get a full month of advisory support before your paid engagement begins.
                    </p>
                  </div>
                  <div className="hidden sm:flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 font-black text-xl shadow-inner dark:bg-emerald-900/30 dark:text-emerald-400">
                    30
                  </div>
                </div>
                
                <div className="mt-8 grid gap-4 text-sm font-semibold text-slate-700 dark:text-slate-300 relative z-10">
                  {["Weekly strategy check-ins", "Rapid architecture feedback", "Priority roadmap notes"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={12} className="text-emerald-600 dark:text-emerald-400" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex flex-wrap gap-3 relative z-10">
                  <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-xs font-black uppercase tracking-widest text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100">
                    Claim Free Month
                    <ArrowRight size={14} />
                  </button>
                  <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-3.5 text-xs font-black uppercase tracking-widest text-slate-600 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white dark:hover:bg-slate-800">
                    Book a Call
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 sm:py-28 lg:py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
           <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
             
              {/* Contact Form */}
              <motion.div
                variants={staggerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="rounded-[2.5rem] border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xl dark:border-slate-800 dark:bg-slate-950 relative overflow-hidden"
              >
                 <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                 
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Tell us about your project</h2>
                  <p className="mt-4 text-slate-500 dark:text-slate-300 text-lg">
                    Share a few details and we'll reply within 24 hours with a preliminary roadmap.
                  </p>
                </motion.div>

                <motion.form
                  variants={staggerVariants}
                  className="mt-8 sm:mt-10 grid gap-8"
                  onSubmit={handleSubmit}
                >
                  <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                      {["Full name", "Work email", "Company", "Project timeline"].map((label, i) => (
                        <motion.div key={label} variants={itemVariants} className="group relative">
                          <input
                            type={label.includes("email") ? "email" : "text"}
                            id={`field-${i}`}
                            disabled={loading}
                            className="peer w-full rounded-xl border border-slate-200 bg-slate-50 px-4 pt-6 pb-2 text-base font-medium text-slate-900 outline-none transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:focus:border-indigo-400 disabled:opacity-60 disabled:cursor-not-allowed"
                            placeholder=" "
                          />
                          <label 
                            htmlFor={`field-${i}`}
                            className="absolute left-4 top-4 z-10 origin-[0] -translate-y-2.5 scale-75 text-xs font-bold uppercase tracking-wider text-slate-400 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2.5 peer-focus:scale-75 peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400 cursor-text"
                          >
                            {label}
                          </label>
                        </motion.div>
                      ))}
                  </div>

                  <motion.div variants={itemVariants} className="group relative">
                    <textarea
                      id="goals"
                      rows={5}
                      disabled={loading}
                      className="peer w-full rounded-xl border border-slate-200 bg-slate-50 px-4 pt-6 pb-2 text-base font-medium text-slate-900 outline-none transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:focus:border-indigo-400 resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                      placeholder=" "
                    />
                    <label 
                        htmlFor="goals"
                        className="absolute left-4 top-4 z-10 origin-[0] -translate-y-2.5 scale-75 text-xs font-bold uppercase tracking-wider text-slate-400 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2.5 peer-focus:scale-75 peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400 cursor-text"
                      >
                        Project goals & Context
                      </label>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                      <p className="text-xs text-slate-400 dark:text-slate-500 max-w-xs">
                          By sending this form, you agree to our privacy policy and terms of service.
                      </p>
                      <div className="w-full sm:w-auto flex flex-col items-stretch sm:items-end gap-3">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl active:translate-y-0 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {loading ? (
                            <>
                              <Loader2 size={16} className="animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Request
                              <Send size={16} />
                            </>
                          )}
                        </button>
                        <AnimatePresence>
                          {showSuccess && (
                            <motion.div
                              role="status"
                              aria-live="polite"
                              initial={{ opacity: 0, y: 8, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 6, scale: 0.98 }}
                              transition={{ duration: 0.35, ease: easeOut }}
                              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-700 border border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-200 dark:border-emerald-500/20"
                            >
                              <CheckCircle2 size={14} />
                              Your message is successfully submitted
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                  </motion.div>
                </motion.form>
              </motion.div>

              {/* Sidebar Info */}
              <motion.aside 
                variants={staggerVariants} 
                initial="hidden" 
                whileInView="show" 
                viewport={{ once: true, margin: "-50px" }} 
                className="space-y-6 flex flex-col h-full"
              >
                {contactOptions.map((option, i) => {
                  const Icon = option.icon;
                  return (
                    <motion.a
                      href={option.link}
                      key={option.title}
                      variants={itemVariants}
                      className="group block rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-indigo-200 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700"
                    >
                      <div className="flex items-start gap-5">
                        <div className={`h-12 w-12 rounded-2xl ${option.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{option.title}</h3>
                          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{option.description}</p>
                          <div className="mt-4 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white border-b border-transparent group-hover:border-slate-900 dark:group-hover:border-white transition-all pb-0.5">
                            {option.action} <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}

                <motion.div variants={itemVariants} className="mt-auto rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-2xl dark:border-slate-800 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="flex items-center gap-2 mb-4">
                      <MapPin size={16} className="text-emerald-400" />
                      <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-400">Headquarters</p>
                  </div>
                  <p className="text-2xl font-bold tracking-tight">New York City, NY</p>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    Serving remote teams across North America, Europe, and APAC with 24/7 asynchronous support.
                  </p>
                  
                  <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 shadow-inner group">
                     <div className="relative h-48 w-full bg-slate-800">
                        <Image
                            src="/images/lina.jpg"
                            alt="New York skyline"
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                             <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                 <span className="text-[10px] font-bold uppercase tracking-wider">Office Open</span>
                             </div>
                        </div>
                     </div>
                  </div>
                </motion.div>
              </motion.aside>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
