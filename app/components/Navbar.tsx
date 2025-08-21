// app/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link"; // <-- important

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand (internal) */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Engineered <span className="text-emerald-600">Tennis</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-slate-700 hover:text-slate-900">
            Home
          </Link>
          <Link href="/services" className="text-slate-700 hover:text-slate-900">
            Services
          </Link>

          {/* External booking link stays <a> */}
          <a
            href="https://calendar.app.google/zD6V3MMCcvMpuMPL6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 transition"
          >
            Book Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 ring-1 ring-slate-300"
        >
          <span className={`block h-0.5 w-5 bg-slate-800 transition ${open ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`block h-0.5 w-5 bg-slate-800 my-1 transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-slate-800 transition ${open ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            <Link
              href="/"
              className="text-slate-700 hover:text-slate-900"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
<<<<<<< Updated upstream
            <Link 
              href="/about" 
              className="hover:text-gray-400">
                
=======
            <Link href="/about" className="hover:text-gray-400">
>>>>>>> Stashed changes
              About
            </Link>
            <Link
              href="/services"
              className="text-slate-700 hover:text-slate-900"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>

            {/* External keeps <a> */}
            <a
              href="https://calendar.app.google/zD6V3MMCcvMpuMPL6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 transition"
              onClick={() => setOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}