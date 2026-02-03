"use client";

import React from "react";
import { Logo } from "./Logo";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
      { name: "Guides", href: "#" },
      { name: "Roadmaps", href: "#roadmap" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white py-24 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-purple-200/20 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-200/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Section: Logo + Description */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0 mb-16">
          <div className="flex-1">
            <Logo />
            <p className="mt-4 text-slate-600 max-w-sm leading-relaxed font-body">
              Crafting clear learning paths, modern web solutions, and AI-powered growth for ambitious developers and teams.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">
              <Link href="#" className="hover:text-purple-500 transition-colors">
                <Github size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="hover:text-teal-500 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="mailto:hello@example.com" className="hover:text-indigo-500 transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 flex-1">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-slate-900 font-bold mb-4 tracking-wide">{section.title}</h4>
                <ul className="space-y-2 text-slate-500 font-medium">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="hover:text-purple-500 transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 pt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Foundry Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
