"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "https://testyourworld.myshopify.com", label: "Shop", external: true },
  { href: "/test-your-air", label: "Test Your Air" },
  { href: "/swab-testing", label: "Swab Testing" },
  { href: "/learn-more", label: "Learn More" },
  { href: "https://testyourworld.vercel.app", label: "Client Portal", external: true },
  { href: "/sample-report", label: "Sample Report" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--navy)]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border-2 border-[var(--cyan)] flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-shadow">
            <span className="text-[var(--cyan)] font-bold text-sm font-[Outfit]">TYW</span>
          </div>
          <span className="text-white font-[Outfit] font-semibold text-lg tracking-tight hidden sm:block">
            Test Your World
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm text-gray-300 hover:text-[var(--cyan)] transition-colors font-medium"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-gray-300 hover:text-[var(--cyan)] transition-colors font-medium"
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://testyourworld.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 bg-[var(--cyan)] text-[var(--navy)] px-5 py-2 rounded-lg text-sm font-[Outfit] font-semibold hover:bg-[#00D4ED] transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(0,229,255,0.3)]"
          >
            Get Your Kit
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[var(--navy)] border-t border-white/5 px-6 py-4 space-y-1 animate-fade-in">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block px-3 py-3 text-gray-300 hover:text-[var(--cyan)] transition-colors font-medium"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 text-gray-300 hover:text-[var(--cyan)] transition-colors font-medium"
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://testyourworld.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 bg-[var(--cyan)] text-[var(--navy)] px-5 py-3 rounded-lg text-center font-[Outfit] font-semibold"
          >
            Get Your Kit
          </a>
        </div>
      )}
    </header>
  );
}
