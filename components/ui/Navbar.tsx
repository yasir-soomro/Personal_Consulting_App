"use client";

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
  type LucideIcon,
  
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
        <motion.nav
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className={`relative w-full border-b transition-all duration-500 ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl border-slate-200/60 shadow-sm"
              : "bg-white/60 backdrop-blur-md border-slate-100/40"
          }`}
        >
          {/* Subtle gradient overlay matching Hero */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/30 via-white/20 to-transparent pointer-events-none" />

          {/* Decorative gradient orbs - very subtle */}
          <div className="absolute top-0 left-1/4 h-32 w-32 rounded-full bg-purple-500/[0.02] blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/4 h-32 w-32 rounded-full bg-blue-500/[0.02] blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            {/* LEFT - Logo + Links */}
            <div className="flex items-center gap-10">
              <Link href="/" aria-label="Home">
                <Logo theme="light" />
              </Link>

              {/* Desktop Links */}
              <ul className="hidden lg:flex items-center gap-1">
                {menuLinks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={index}
                      className="relative"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Link
                        href={item.link}
                        className="relative z-10 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors duration-200"
                      >
                        <Icon
                          size={16}
                          className={`transition-all duration-200 ${
                            hoveredIndex === index
                              ? "text-blue-600 scale-110"
                              : "text-slate-500"
                          }`}
                        />
                        {item.title}
                      </Link>

                      <AnimatePresence>
                        {hoveredIndex === index && (
                          <motion.div
                            layoutId="nav-hover"
                            className="absolute inset-0 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-sm"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* RIGHT - Sign in + CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <Link
                href="/login"
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                Sign in
              </Link>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Consultation
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100/80 active:bg-slate-200/80 transition-colors duration-200"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={2.5} />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* MOBILE DRAWER - Hero Theme */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[60] bg-slate-900/20 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="fixed right-0 top-0 z-[70] h-full w-[85%] max-w-sm bg-white border-l border-slate-200/60 shadow-2xl p-6 flex flex-col overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Subtle background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-slate-50/30 pointer-events-none" />
              
              {/* Decorative gradient orb */}
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between mb-8">
                <Logo theme="light" />
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200 transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <X size={22} strokeWidth={2.5} />
                </button>
              </div>

              {/* Navigation */}
              <nav className="relative z-10 flex flex-col gap-2 mb-6">
                <span className="px-3 mb-2 text-xs uppercase tracking-wider font-bold text-slate-500">
                  Navigation
                </span>

                {menuLinks.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={i}
                      href={item.link}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                      className="group flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 active:bg-slate-200/80 transition-all duration-200"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all duration-200">
                        <Icon size={16} className="text-slate-600 group-hover:text-blue-600 transition-colors duration-200" strokeWidth={2.5} />
                      </div>
                      <span className="font-semibold">{item.title}</span>
                    </motion.a>
                  );
                })}
              </nav>

              {/* Divider */}
              <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-6" />

              {/* Sign In Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative z-10 mb-4"
              >
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="group block w-full text-center py-3.5 px-6 rounded-xl bg-white border border-slate-200/80 text-slate-700 font-semibold hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm active:bg-slate-100 transition-all duration-200"
                >
                  Sign In
                </Link>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="relative z-10"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200"
                >
                  <Phone size={18} strokeWidth={2.5} />
                  Contact Us
                  <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform duration-200" strokeWidth={2.5} />
                </Link>
              </motion.div>

              {/* Bottom Spacing */}
              <div className="flex-1 min-h-6" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Premium Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
      `}</style>
    </>
  );
};

export default Navbar;