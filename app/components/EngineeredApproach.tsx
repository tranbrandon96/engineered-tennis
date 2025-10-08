// app/components/EngineeredApproach.tsx
"use client";

import { motion } from "framer-motion";
import AnimatedSection, { fadeItem } from "@/app/components/AnimatedSection";

export default function EngineeredApproach() {
  return (
    <AnimatedSection
      id="approach"
      className="relative isolate overflow-hidden bg-gray-50 py-20 md:py-28"
      threshold={0.4}
      once={false}
    >
      {/* subtle top divider */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <motion.h2
            variants={fadeItem}
            className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl"
          >
            The Engineered Approach
          </motion.h2>

          <motion.p
            variants={fadeItem}
            className="mx-auto mt-3 max-w-2xl text-slate-600"
          >
            A proven system combining{" "}
            <span className="font-semibold">biomechanics</span> and{" "}
            <span className="font-semibold">system design</span> to help players
            build measurable, repeatable improvement.
          </motion.p>

          {/* 3 Pillars */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3">
            {/* Analyze Mechanics */}
            <motion.div
              variants={fadeItem}
              className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
            >
              <IconAnalyze />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Analyze Mechanics
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Identify inefficient patterns, rebuild movement flow, and teach
                power through natural sequencing.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                <li>Fix mechanics at the source</li>
                <li>Re-align the kinetic chain</li>
                <li>Build repeatable movement</li>
              </ul>
            </motion.div>

            {/* Design Systems */}
            <motion.div
              variants={fadeItem}
              className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
            >
              <IconDesign />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Design Systems
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Structured frameworks that make tempo, tension, and timing
                measurable and controllable.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                <li>Tempo Ladder benchmarks</li>
                <li>Tension Dial calibration</li>
                <li>Blueprint phase progression</li>
              </ul>
            </motion.div>

            {/* Iterate & Refine */}
            <motion.div
              variants={fadeItem}
              className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
            >
              <IconIterate />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Iterate &amp; Refine
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Use feedback, metrics, and pressure testing to make every pattern
                reliable under match conditions.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                <li>Set measurable goals</li>
                <li>Review video feedback</li>
                <li>Reinforce under pressure</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* subtle bottom divider */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
      />
    </AnimatedSection>
  );
}

/* Inline icons */
function IconAnalyze() {
  return (
    <svg
      className="h-8 w-8 text-emerald-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M4 17l4-4 3 3 6-6 3 3" />
      <circle cx="6" cy="6" r="2.5" />
    </svg>
  );
}

function IconDesign() {
  return (
    <svg
      className="h-8 w-8 text-emerald-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3" y="3" width="18" height="6" rx="1.5" />
      <rect x="3" y="11" width="11" height="10" rx="1.5" />
      <path d="M16 11h5v10h-5z" />
    </svg>
  );
}

function IconIterate() {
  return (
    <svg
      className="h-8 w-8 text-emerald-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M3 12a9 9 0 0115.5-6.36M21 12a9 9 0 01-15.5 6.36" />
      <path d="M8 8V4M8 4h4M16 16v4m0 0h-4" />
    </svg>
  );
}
