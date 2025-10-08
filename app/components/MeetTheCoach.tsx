// app/components/MeetTheCoach.tsx
"use client";

import AnimatedSection, { fadeItem } from "@/app/components/AnimatedSection";
import { motion } from "framer-motion";

export default function MeetTheCoach() {
  return (
    <AnimatedSection
      id="coach"
      className="relative bg-white py-20 md:py-24 scroll-mt-24"
      threshold={0.3}
      stagger={0.1}
      duration={0.6}
      offsetY={20}
      once={false} // fade out when leaving view
    >
      {/* top divider */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
      />

      <div className="mx-auto max-w-3xl px-4 text-center">
        <motion.h2 variants={fadeItem} className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Meet the Coach
        </motion.h2>

        <motion.p variants={fadeItem} className="mx-auto mt-4 max-w-2xl text-slate-600 leading-relaxed">
          <span className="font-semibold text-slate-900">Brandon Tran</span>, founder of{" "}
          <span className="font-semibold text-emerald-600">Engineered Tennis</span>, is a
          high-performance coach and former software engineer who merges <span className="font-medium">biomechanics</span> with{" "}
          <span className="font-medium">system design</span>. His analytical, feedback-driven approach helps players master efficient,
          repeatable mechanics with the precision of an engineered blueprint.
        </motion.p>

        <motion.div variants={fadeItem} className="mt-6">
          <a href="/about" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition">
            Learn more about Brandon →
          </a>
        </motion.div>
      </div>

      {/* bottom divider */}
<div
  aria-hidden
  className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
/>

    </AnimatedSection>
  );
}
