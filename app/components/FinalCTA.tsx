// app/components/FinalCTA.tsx
"use client";

import AnimatedSection, { fadeItem } from "@/app/components/AnimatedSection";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <AnimatedSection
      id="final-cta"
      className="relative bg-gray-50 py-14 md:py-16"
      threshold={0.3}
      duration={0.65}
      offsetY={16}
      stagger={0.06}
      once={false}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
      />

      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-center md:flex-row md:text-left shadow-sm">
          <div>
            <motion.h3 variants={fadeItem} className="text-xl font-semibold text-slate-900 md:text-2xl">
              Ready to start your Blueprint?
            </motion.h3>
            <motion.p variants={fadeItem} className="mt-1 text-slate-600">
              Build efficient, repeatable mechanics with a plan that fits.
            </motion.p>
          </div>

          <motion.div variants={fadeItem} className="flex flex-none items-center gap-4">
            <a
              href="https://calendar.app.google/pxjE9UQCSZsQvxrx9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white transition hover:bg-emerald-700"
            >
              Book Now
            </a>
            <Link
              href="/services"
              className="text-sm font-medium text-emerald-700 hover:underline"
            >
              or compare programs
            </Link>
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
        
      />
    </AnimatedSection>
    
  );
}
