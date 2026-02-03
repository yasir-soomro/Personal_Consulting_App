import React from "react";

interface LogoProps {
  className?: string;
  theme?: "light" | "dark";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  theme = "light",
}) => {
  const isDark = theme === "dark";

  return (
    <div
      className={`flex items-center gap-3 group cursor-pointer select-none ${className}`}
    >
      {/* ICON */}
      <div
        className={`
        relative w-10 h-10 flex items-center justify-center rounded-xl
        transition-all duration-300
        group-hover:scale-105 group-hover:rotate-3 overflow-hidden
        shadow-lg
        ${
          isDark
            ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-blue-500/30"
            : "bg-white/80 backdrop-blur border border-black/10 text-slate-800 shadow-black/10 group-hover:shadow-black/20"
        }
      `}
      >
        {/* subtle glass shine */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* geometric mark */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 drop-shadow-sm"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:stroke-[2.5]"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
            className="transition-all duration-300 group-hover:opacity-100"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
            className="transition-all duration-300 group-hover:opacity-100"
          />
        </svg>
      </div>

      {/* TEXT */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-bold text-lg tracking-tight transition-all duration-300 ${
            isDark
              ? "text-white group-hover:text-blue-400"
              : "text-slate-800 group-hover:text-blue-600"
          } group-hover:tracking-wide`}
        >
          Tech UNstack
        </span>

        <span
          className={`text-[10px] uppercase tracking-widest font-semibold transition-colors duration-300 ${
            isDark
              ? "text-slate-400 group-hover:text-slate-300"
              : "text-slate-500 group-hover:text-slate-600"
          }`}
        >
          Consulting
        </span>
      </div>
    </div>
  );
};
