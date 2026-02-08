"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight, Mail, Lock, User, CheckCircle2, Loader2, Sparkles, Command } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

interface AuthProps {
  initialView?: "login" | "signup";
}

const Auth: React.FC<AuthProps> = ({ initialView = "login" }) => {
  const router = useRouter();
  
  // Determine view based on prop or current URL logic if needed, 
  // but internal state allows smooth toggling without page reload
  const [view, setView] = useState<"login" | "signup">(initialView);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Sync state with prop if it changes (e.g. navigation)
  useEffect(() => {
    setView(initialView);
  }, [initialView]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Redirect after success animation
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full grid lg:grid-cols-2 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 mt-28 pt-10">
      
      {/* ================= LEFT: VISUAL (Desktop) ================= */}
      <div className="hidden lg:flex relative overflow-hidden bg-slate-900 flex-col justify-between p-8 lg:p-12 text-white">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-indigo-600/20 rounded-full blur-[80px] lg:blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-purple-600/20 rounded-full blur-[80px] lg:blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

        {/* Brand */}
        <div className="relative z-10">
          <Logo theme="dark" />
        </div>

        {/* 3D Abstract Representation */}
        <div className="relative z-10 flex-1 flex items-center justify-center">
            <div className="relative w-40 lg:w-64 h-40 lg:h-64 perspective-[1000px]">
                <motion.div 
                    animate={{ rotateX: [0, 10, 0], rotateY: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full relative transform-style-3d"
                >
                     {/* Floating Cards */}
                     <motion.div 
                        initial={{ y: 0 }} animate={{ y: -20 }} transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                        className="absolute top-0 left-0 w-48 h-32 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-4 transform rotate-12"
                     >
                        <div className="w-8 h-8 rounded-full bg-indigo-500 mb-2" />
                        <div className="w-24 h-2 bg-white/20 rounded-full" />
                     </motion.div>
                     
                     <motion.div 
                        initial={{ y: 0 }} animate={{ y: 20 }} transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror", delay: 0.5 }}
                        className="absolute bottom-10 right-0 w-48 h-64 bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-4 -rotate-6 z-10"
                     >
                         <div className="space-y-3 mt-4">
                             {[1,2,3].map(i => <div key={i} className="h-2 w-full bg-white/10 rounded-full" />)}
                         </div>
                     </motion.div>
                </motion.div>
            </div>
        </div>

        {/* Testimonial */}
        <div className="relative z-10">
          <div className="flex gap-1 mb-3 lg:mb-4">
             {[1,2,3,4,5].map(i => <Sparkles key={i} size={14} className="lg:w-4 lg:h-4 text-yellow-400 fill-yellow-400" />)}
          </div>
          <p className="text-base lg:text-2xl font-medium leading-relaxed mb-3 lg:mb-4">
            "Lumina transformed how we deploy enterprise architecture. It's not just a tool, it's a force multiplier."
          </p>
          <div>
            <p className="font-bold text-sm lg:text-base">Sarah Jenkins</p>
            <p className="text-slate-400 text-xs lg:text-sm">CTO, Vertex Global</p>
          </div>
        </div>
      </div>

      {/* ================= RIGHT: FORM ================= */}
      <div className="relative flex items-center justify-center p-4 sm:p-6 lg:p-12 min-h-screen lg:min-h-auto">
        {/* Mobile Background */}
        <div className="lg:hidden absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
        
        <div className="w-full max-w-md">
           {/* Mobile Logo */}
           <div className="lg:hidden mb-6 sm:mb-8 flex justify-center">
               <Logo theme="light" />
           </div>

           <AnimatePresence mode="wait">
             {success ? (
               /* SUCCESS STATE */
               <motion.div 
                 key="success"
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 className="text-center py-12"
               >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-24 h-24 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6"
                  >
                     <CheckCircle2 size={48} className="text-green-600 dark:text-green-400" />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Access Granted</h2>
                  <p className="text-slate-500 dark:text-slate-400">Redirecting you to the dashboard...</p>
               </motion.div>
             ) : (
               /* FORM STATE */
               <motion.div
                 key="form"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.4 }}
               >
                 <div className="mb-6 sm:mb-8">
                   <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2">
                     {view === "login" ? "Welcome back" : "Create an account"}
                   </h2>
                   <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
                     {view === "login" 
                       ? "Enter your credentials to access your workspace." 
                       : "Start building your enterprise roadmap today."}
                   </p>
                 </div>

                 <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                   {view === "signup" && (
                     <div className="space-y-1">
                       <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Full Name</label>
                       <div className="relative group">
                         <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
                         <input 
                           type="text" 
                           placeholder="John Doe"
                           required
                           className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg sm:rounded-xl py-2.5 sm:py-3.5 pl-11 pr-4 text-sm sm:text-base font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" 
                         />
                       </div>
                     </div>
                   )}

                   <div className="space-y-1">
                     <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Email Address</label>
                     <div className="relative group">
                       <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
                       <input 
                         type="email" 
                         placeholder="name@company.com"
                         required
                         className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg sm:rounded-xl py-2.5 sm:py-3.5 pl-11 pr-4 text-sm sm:text-base font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" 
                       />
                     </div>
                   </div>

                   <div className="space-y-1">
                     <div className="flex items-center justify-between gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Password</label>
                        {view === "login" && (
                           <a href="#" className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Forgot?</a>
                        )}
                     </div>
                     <div className="relative group">
                       <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
                       <input 
                         type="password" 
                         placeholder="••••••••"
                         required
                         className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg sm:rounded-xl py-2.5 sm:py-3.5 pl-11 pr-4 text-sm sm:text-base font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" 
                       />
                     </div>
                   </div>

                   <button 
                     type="submit" 
                     disabled={loading}
                     className="w-full py-3 sm:py-4 rounded-lg sm:rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                   >
                     {loading ? (
                        <Loader2 size={18} className="animate-spin" />
                     ) : (
                        <>
                           {view === "login" ? "Sign In" : "Create Account"}
                           <ArrowRight size={18} />
                        </>
                     )}
                   </button>
                 </form>
                 
                 <div className="mt-6 sm:mt-8 text-center">
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        {view === "login" ? "Don't have an account?" : "Already have an account?"}
                        <button 
                            onClick={() => setView(view === "login" ? "signup" : "login")}
                            className="ml-1 sm:ml-2 font-bold text-indigo-600 dark:text-indigo-400 hover:underline focus:outline-none"
                        >
                            {view === "login" ? "Sign up" : "Log in"}
                        </button>
                    </p>
                 </div>
                 
                 {/* Social Proof Mini */}
                 <div className="mt-6 sm:mt-12 pt-4 sm:pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-3 sm:gap-6 grayscale opacity-60">
                    <div className="flex items-center gap-1 font-bold text-slate-500 text-[10px] sm:text-xs"><Command size={12} className="sm:block hidden" /><Command size={10} className="sm:hidden" /> ACME Corp</div>
                    <div className="w-1 h-1 rounded-full bg-slate-300" />
                    <div className="flex items-center gap-1 font-bold text-slate-500 text-[10px] sm:text-xs"><Command size={12} className="sm:block hidden" /><Command size={10} className="sm:hidden" /> Stark Ind</div>
                 </div>
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Auth;