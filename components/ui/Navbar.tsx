"use client";
import { TbMenu4 } from "react-icons/tb";


import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import TopBanner from "./TopBanner";
import {
  Menu,
  X,
  Phone,
  Layers,
  FileText,
  CreditCard,
  Info,
  ChevronRight,
  Moon,
  Sun,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "./ThemeContext";

interface MenuItem {
  title: string;
  link: string;
  icon: LucideIcon;
}

const menuLinks: MenuItem[] = [
  { title: "Expertise", link: "/expertise", icon: Layers },
  { title: "Case Studies", link: "/cases", icon: FileText },
  { title: "Pricing", link: "/pricing", icon: CreditCard },
  { title: "About", link: "/about", icon: Info },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50 flex flex-col">
        <TopBanner />

        {/* Desktop Navbar - Hero Theme */}
        <nav
          className={`relative w-full border-b transition-all duration-500 ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl border-slate-200/60 shadow-sm dark:bg-slate-950/85 dark:border-slate-800/60 dark:shadow-black/30"
              : "bg-white/60 backdrop-blur-md border-slate-100/40 dark:bg-slate-950/60 dark:border-slate-900/50"
          }`}
        >
          {/* Subtle gradient overlay matching Hero */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/30 via-white/20 to-transparent dark:from-slate-900/50 dark:via-slate-950/30 pointer-events-none" />

          {/* Decorative gradient orbs - very subtle */}
          <div className="absolute top-0 left-1/4 h-32 w-32 rounded-full bg-purple-500/[0.02] dark:bg-purple-500/[0.05] blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/4 h-32 w-32 rounded-full bg-blue-500/[0.02] dark:bg-blue-500/[0.05] blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            {/* LEFT - Logo + Links */}
            <div className="flex items-center gap-10">
              <Link href="/" aria-label="Home">
                <Logo theme={isDark ? "dark" : "light"} />
              </Link>

              {/* Desktop Links */}
              <ul className="hidden lg:flex items-center gap-1">
                {menuLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.link}
                      className="relative group"
                    >
                      <span className="absolute inset-0 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-sm opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 dark:bg-slate-900/80 dark:border-slate-700/60" />
                      <Link
                        href={item.link}
                        className="relative z-10 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white transition-colors duration-200"
                      >
                        <Icon
                          size={16}
                          className="text-slate-500 transition-all duration-200 group-hover:text-blue-600 group-hover:scale-110 dark:text-slate-400"
                        />
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* RIGHT - Sign in + CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200/70 text-slate-700 hover:text-slate-900 hover:bg-slate-100/70 transition-colors duration-200 dark:border-slate-800/80 dark:text-slate-200 dark:hover:text-white dark:hover:bg-slate-800/70"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} strokeWidth={2.2} /> : <Moon size={18} strokeWidth={2.2} />}
              </button>

              <Link
                href="/login"
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors duration-200"
              >
                Sign in
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
              >
                Book Consultation
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </Link>
            </div>

            {/* Mobile actions */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200/70 text-slate-700 hover:text-slate-900 hover:bg-slate-100/70 transition-colors duration-200 dark:border-slate-800/80 dark:text-slate-200 dark:hover:text-white dark:hover:bg-slate-800/70"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} strokeWidth={2.2} /> : <Moon size={18} strokeWidth={2.2} />}
              </button>
              <button
                className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100/80 active:bg-slate-200/80 transition-colors duration-200 dark:text-slate-200 dark:hover:bg-slate-800/70 dark:active:bg-slate-800"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
              >
                <TbMenu4  size={22} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* MOBILE DRAWER - Hero Theme */}
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-[60] bg-slate-900/20 dark:bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setOpen(false)}
          aria-hidden={!open}
        />

        {/* Drawer */}
        <div
          className={`fixed right-0 top-0 z-[70] h-full w-[85%] max-w-sm bg-white border-l border-slate-200/60 shadow-2xl p-6 flex flex-col overflow-y-auto dark:bg-slate-950 dark:border-slate-800/80 transform transition-transform duration-300 md:hidden ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
          aria-hidden={!open}
        >
              {/* Subtle background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-slate-50/30 dark:from-slate-900/30 dark:via-slate-950 dark:to-slate-900/20 pointer-events-none" />

              {/* Decorative gradient orb */}
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between mb-8">
                <Logo theme={isDark ? "dark" : "light"} />
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200 transition-colors duration-200 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/70"
                  aria-label="Close menu"
                >
                  <X size={22} strokeWidth={2.5} />
                </button>
              </div>

              {/* Navigation */}
              <nav className="relative z-10 flex flex-col gap-2 mb-6">
                <span className="px-3 mb-2 text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">
                  Navigation
                </span>

                {menuLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.link}
                      href={item.link}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 active:bg-slate-200/80 transition-all duration-200 dark:text-slate-200 dark:hover:text-white dark:hover:bg-slate-900/60"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all duration-200 dark:bg-slate-900/70 dark:group-hover:bg-slate-950">
                        <Icon size={16} className="text-slate-600 group-hover:text-blue-600 transition-colors duration-200 dark:text-slate-400" strokeWidth={2.5} />
                      </div>
                      <span className="font-semibold">{item.title}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Divider */}
              <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-6 dark:via-slate-800" />

              {/* Sign In Button */}
              <div className="relative z-10 mb-4">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="group block w-full text-center py-3.5 px-6 rounded-xl bg-white border border-slate-200/80 text-slate-700 font-semibold hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm active:bg-slate-100 transition-all duration-200 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-200 dark:hover:text-white dark:hover:bg-slate-900"
                >
                  Sign In
                </Link>
              </div>

              {/* CTA Button */}
              <div className="relative z-10">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  <Phone size={18} strokeWidth={2.5} />
                  Contact Us
                  <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform duration-200" strokeWidth={2.5} />
                </Link>
              </div>

              {/* Bottom Spacing */}
              <div className="flex-1 min-h-6" />
        </div>
      </>
    </>
  );
};

export default Navbar;
