"use client"
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Command,
  Compass,
  Map,
  Lightbulb,
  Globe,
  Building2,
  Landmark,
  Briefcase,
  Cpu,
  Cloud,
  Code2,
  CircuitBoard,
  Binary,
} from "lucide-react";

interface WelcomeProps {
  onComplete: () => void;
}

const questions = [
  {
    id: 1,
    title: "Where are you currently?",
    subtitle: "Let's find your starting point on the map.",
    icon: Compass,
    options: [
      { label: "Student / Fresh Grad", color: "from-blue-500 to-cyan-500", icon: Landmark },
      { label: "Switching Careers", color: "from-indigo-500 to-purple-500", icon: Briefcase },
      { label: "Junior Developer", color: "from-emerald-500 to-teal-500", icon: Code2 },
      { label: "Total Beginner", color: "from-rose-500 to-orange-500", icon: Globe },
    ],
  },
  {
    id: 2,
    title: "What's holding you back?",
    subtitle: "We'll help you break through the wall.",
    icon: Map,
    options: [
      { label: "Overwhelmed by choices", color: "from-orange-400 to-amber-400", icon: Compass },
      { label: "Stuck in 'Tutorial Hell'", color: "from-pink-400 to-rose-400", icon: CircuitBoard },
      { label: "No real project exp.", color: "from-cyan-400 to-blue-400", icon: Building2 },
      { label: "Imposter Syndrome", color: "from-violet-400 to-purple-400", icon: Cpu },
    ],
  },
  {
    id: 3,
    title: "What is your main goal?",
    subtitle: "Visualizing your destination.",
    icon: Lightbulb,
    options: [
      { label: "Land a high-paying job", color: "from-teal-400 to-emerald-400", icon: Briefcase },
      { label: "Build my own startup", color: "from-blue-500 to-indigo-500", icon: Cloud },
      { label: "Freelance freedom", color: "from-indigo-500 to-violet-500", icon: Globe },
      { label: "Just learn for fun", color: "from-slate-500 to-gray-500", icon: Binary },
    ],
  },
];

const cardVariants: Variants = {
  initial: { opacity: 0, scale: 0.9, rotateX: 10, y: 50 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    rotateX: 0, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1]
    } 
  },
  exit: { opacity: 0, scale: 0.95, y: -50, rotateX: -10, transition: { duration: 0.4 } },
};

/* =========================================
   Typewriter Component
   ========================================= */
const TypewriterHeading = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 40); // Typing speed
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayedText}
      <motion.span 
        animate={{ opacity: [1, 0] }} 
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[3px] h-[0.8em] bg-indigo-200 ml-1 align-middle"
      />
    </span>
  );
};

/* =========================================
   3D Background Component
   ========================================= */
const Background3D = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none perspective-[1000px] bg-slate-50">
       
       {/* Soft Gradient Orbs */}
       <motion.div 
           animate={{ 
             x: [0, 50, -50, 0], 
             y: [0, 30, -30, 0], 
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-indigo-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-60" 
       />
       <motion.div 
           animate={{ 
             x: [0, -60, 40, 0], 
             y: [0, -40, 50, 0], 
           }}
           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
           className="absolute bottom-[-10%] right-[-20%] w-[50vw] h-[50vw] bg-purple-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-60" 
       />

       {/* Floating Geometrics */}
       <motion.div 
          className="absolute top-[20%] right-[15%] w-32 h-32 border border-slate-300/30 rounded-3xl"
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ rotate: { duration: 30, ease: "linear", repeat: Infinity }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
       />
       
       <motion.div 
          className="absolute bottom-[20%] left-[10%] w-24 h-24 border border-indigo-300/20 rounded-full"
          animate={{ scale: [1, 1.2, 1], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
       />

       {/* Noise Overlay */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay" />
    </div>
  );
};

/* =========================================
   Ultra 3D Tilt Container
   ========================================= */
const UltraTilt = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - left) / width - 0.5;
    const yPos = (e.clientY - top) / height - 0.5;
    
    // Increased range for "Ultra" feel
    x.set(xPos * 15); 
    y.set(yPos * -15);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, (val) => `${val}deg`);
  const rotateY = useTransform(mouseX, (val) => `${val}deg`);
  
  // Dynamic shadow moving opposite to tilt
  const shadowX = useTransform(mouseX, (val) => `${-val * 2}px`);
  const shadowY = useTransform(mouseY, (val) => `${val * 2}px`);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className={`relative perspective-1000 ${className}`}
    >
      <motion.div style={{ x: shadowX, y: shadowY }} className="absolute inset-4 bg-indigo-500/20 rounded-[2.5rem] blur-2xl -z-10 transition-all duration-300" />
      {children}
    </motion.div>
  );
};

/* =========================================
   3D Cube Loader (Preserved & Enhanced)
   ========================================= */
const ThreeDCubeLoader = () => {
  return (
    <div className="relative w-32 h-32 mx-auto mb-10 perspective-[800px]">
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: 360, rotateX: 180 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        {/* Faces */}
        {[
          { color: "bg-indigo-400/10 border-indigo-500/40", transform: "translateZ(64px)" }, 
          { color: "bg-purple-500/10 border-purple-500/40", transform: "translateZ(-64px) rotateY(180deg)" }, 
          { color: "bg-blue-500/10 border-blue-500/40", transform: "translateX(64px) rotateY(90deg)" }, 
          { color: "bg-cyan-500/10 border-cyan-500/40", transform: "translateX(-64px) rotateY(-90deg)" }, 
          { color: "bg-emerald-500/10 border-emerald-500/40", transform: "translateY(-64px) rotateX(90deg)" }, 
          { color: "bg-rose-500/10 border-rose-500/40", transform: "translateY(64px) rotateX(-90deg)" }, 
        ].map((face, i) => (
          <div
            key={i}
            className={`absolute inset-0 border-2 ${face.color} backdrop-blur-md rounded-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]`}
            style={{ transform: face.transform }}
          >
             <div className="absolute inset-0 bg-white/5" />
          </div>
        ))}
        
        {/* Inner Core */}
        <motion.div 
            className="absolute inset-8 bg-white rounded-full blur-md shadow-[0_0_40px_rgba(99,102,241,0.8)]"
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

/* =========================================
   Main Component
   ========================================= */
const Welcome: React.FC<WelcomeProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0); 
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleStart = () => setStep(1);

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [step]: answer }));
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setStep(questions.length + 1); // Loading
      setTimeout(() => {
        onComplete();
      }, 3500);
    }
  };

  const currentQuestion = questions[step - 1];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/30">
      
      <Background3D />

      <div className="relative z-10 w-full max-w-3xl px-6">
        <AnimatePresence mode="wait">
          
          {/* ================= STEP 0: INTRO ================= */}
          {step === 0 && (
            <motion.div
              key="intro"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-center"
            >
              <UltraTilt className="inline-block">
                <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                    className="mx-auto w-28 h-28 bg-white/80 backdrop-blur-xl border border-white/60 rounded-[2.5rem] flex items-center justify-center mb-10 shadow-2xl relative group cursor-pointer"
                    style={{ transform: "translateZ(30px)" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-[2.5rem]" />
                    <Globe size={56} className="text-indigo-600 relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
                </motion.div>
              </UltraTilt>

              <motion.h1 
                className="text-5xl sm:text-7xl font-black/30 tracking-tighter mb-6 text-slate-800 drop-shadow-sm "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                TECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-300">UNSTACK.</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl sm:text-2xl text-slate-500 max-w-lg mx-auto mb-12 leading-relaxed font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Your personalized path to mastering modern tech. <br/> Let's build your career roadmap.
              </motion.p>

              <motion.button
                onClick={handleStart}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-red-600 transition-all duration-500 shadow-xl shadow-slate-900/20"
              >
                Start Journey
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          )}

          {/* ================= STEP 1-3: QUESTIONS ================= */}
          {step >= 1 && step <= questions.length && currentQuestion && (
            <motion.div
              key={`question-${step}`}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <UltraTilt>
                  <div className="bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[3rem] p-8 sm:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden transform-gpu"
                       style={{ transformStyle: 'preserve-3d' }}
                  >
                    
                    {/* Glass Shine Effect */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

                    {/* Laser Progress Bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-slate-100" style={{ transform: "translateZ(10px)" }}>
                        <motion.div 
                            initial={{ width: `${((step - 1) / questions.length) * 100}%` }}
                            animate={{ width: `${(step / questions.length) * 100}%` }}
                            transition={{ duration: 0.5 }}
                            className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
                        />
                    </div>

                    {/* Header Section */}
                    <div className="mb-10 relative" style={{ transform: "translateZ(40px)" }}>
                        <div className="flex items-center justify-between mb-4">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 text-[10px] font-black uppercase tracking-widest text-slate-500">
                                <Command size={10} /> Step 0{step}
                            </span>
                            <currentQuestion.icon className="text-indigo-500/50" size={32} />
                        </div>
                        
                        <h2 className="text-2xl sm:text-3xl font-black text-red-600 mb-2 tracking-tight min-h-[1.2em]">
                           <TypewriterHeading text={currentQuestion.title} />
                        </h2>
                        <p className="text-lg text-slate-500 font-medium">{currentQuestion.subtitle}</p>
                    </div>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative" style={{ transform: "translateZ(60px)" }}>
                      {currentQuestion.options.map((option, idx) => (
                        <motion.button
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          onClick={() => handleAnswer(option.label)}
                          className="group relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 text-left overflow-hidden"
                          whileHover={{ scale: 1.02, z: 20 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Gradient Hover Border */}
                          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2 border-transparent bg-gradient-to-r ${option.color} [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:destination-out] mask-composite:exclude rounded-2xl`} />

                          <div className="flex items-center gap-4 relative z-10">
                            <div className="text-2xl text-slate-400 group-hover:text-indigo-600 transition-all duration-300 scale-100 group-hover:scale-125">
                              <option.icon size={28} />
                            </div>
                            <span className="font-bold text-slate-700 group-hover:text-slate-900 text-lg transition-colors">
                                {option.label}
                            </span>
                            <ChevronRight size={20} className="ml-auto text-slate-300 group-hover:text-indigo-500 transform group-hover:translate-x-1 transition-all" />
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
              </UltraTilt>
            </motion.div>
          )}

          {/* ================= STEP 4: PROCESSING ================= */}
          {step > questions.length && (
            <motion.div
              key="processing"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-center w-full"
            >
               <UltraTilt>
                   <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-[3rem] p-16 shadow-2xl inline-block" style={{ transformStyle: 'preserve-3d' }}>
                       <div style={{ transform: "translateZ(50px)" }}>
                           <ThreeDCubeLoader />
                           
                           <motion.h2 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-3xl sm:text-4xl font-black text-slate-900 mb-4"
                           >
                            Generating Plan...
                           </motion.h2>
                           
                           <div className="flex flex-col items-center gap-3">
                              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Analyzing Your Profile</p>
                              <div className="w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                  <motion.div 
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                    className="h-full w-1/2 bg-indigo-600 rounded-full"
                                  />
                              </div>
                           </div>
                       </div>
                   </div>
               </UltraTilt>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-8 text-center w-full z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-sm">
             <Binary size={14} className="text-indigo-600" />
             <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Lumina OS v2.0</span>
          </div>
      </div>
    </div>
  );
};

export default Welcome;
