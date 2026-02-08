import React from "react";
import { Zap } from "lucide-react";

const messages = [
  "Empowering developers to overcome blockers and choose the right technology stack.",
  "Build production-ready applications with FastAPI and Next.js.",
  "Advance your backend and frontend engineering skills with real-world practice.",
  "Deliver high-quality software faster with clean architecture and proven best practices.",
];

const MessageList = () => (
  <>
    {messages.map((text, index) => (
      <div
        key={index}
        className="flex items-center gap-3 mx-6 md:mx-10 select-none opacity-80"
      >
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/20 dark:bg-blue-400/10 dark:border-blue-400/30">
          <Zap size={12} className="text-blue-400 fill-blue-400/20 dark:text-blue-300 dark:fill-blue-300/20" />
        </div>
        <span className="text-[11px] sm:text-xs md:text-sm font-medium tracking-wide text-slate-700 dark:text-slate-200">
          {text}
        </span>
      </div>
    ))}
  </>
);

const TopBanner: React.FC = () => {
  return (
    <div className="relative w-full h-[42px] bg-white/40 backdrop-blur-md border-b border-black/10 overflow-hidden z-[60] dark:bg-slate-950/60 dark:border-white/10">
      {/* Background Gradient for subtle depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 pointer-events-none dark:from-slate-900/40 dark:via-slate-950/30 dark:to-slate-900/40" />

      {/* Marquee */}
      <div className="relative flex w-max">
        <div className="flex animate-marquee items-center py-2 will-change-transform">
          <MessageList />
          <MessageList />
        </div>
      </div>

      {/* Fade edges for smooth transition */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/40 to-transparent dark:from-slate-950/70" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/40 to-transparent dark:from-slate-950/70" />
    </div>
  );
};

export default TopBanner;
