// app/components/Programs.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import AnimatedSection, { fadeItem } from "@/app/components/AnimatedSection";

type Program = {
  title: string;
  blurb: string;
  points: string[];
  highlight?: boolean;
};

const PROGRAMS: Program[] = [
  {
    title: "Private Lessons",
    blurb:
      "1–2 hour sessions focused on refining mechanics, timing, and consistency through personalized feedback and clear progression.",
    points: ["Stroke correction", "Video feedback", "Targeted drills", "Progress tracking"],
  },
  {
    title: "Junior Clinics",
    blurb:
      "High-intensity group sessions for ages 8–18 focused on timing, movement, and rally consistency through high-rep live-ball training.",
    points: [
      "High-rep rally drills",
      "Low student–coach ratio",
      "Footwork + decision training",
      "Ages 8–18",
    ],
  },
  {
    title: "Elite Intensives",
    blurb:
      "High-performance camps offered during school breaks that pressure-test movement, timing, and consistency through advanced live-ball training.",
    points: ["Advanced players only", "3–5 hour formats", "High workload + tempo control", "Breaks + holidays only"],
  },
  {
    title: "Blueprint Packages",
    blurb:
      "Multi-session plans that stack lessons into one structured progression for durable results.",
    points: ["4 / 8 / 12 session plans", "Milestones & reviews", "Practice plan between sessions", "Visible progress tracking"],
    highlight: false,
  },
];

export default function Programs() {
  return (
    <AnimatedSection
      id="programs"
      className="relative bg-white py-20 md:py-28 scroll-mt-24"
      threshold={0.35}
      stagger={0.12}
      duration={0.6}
      offsetY={14}
      once={false} // fade out when scrolled away
    >
      {/* subtle top divider */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4 text-center">
        <motion.h2 variants={fadeItem} className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Programs & Training Options
        </motion.h2>

        <motion.p variants={fadeItem} className="mx-auto mt-3 max-w-2xl text-slate-600">
          Choose the path that fits your goals. Every program follows the
          <span className="font-semibold"> Engineered Approach</span> — blending clarity, structure,
          and measurable improvement.
        </motion.p>

        {/* Program cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((p) => (
            <ProgramCard
              key={p.title}
              variants={fadeItem}
              title={p.title}
              blurb={p.blurb}
              points={p.points}
              highlight={p.highlight}
            />
          ))}
        </div>

        {/* Section CTA */}
        <motion.div variants={fadeItem} className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center rounded-lg bg-emerald-600 px-6 py-3 text-white transition hover:bg-emerald-700"
          >
            Compare All Programs
          </Link>
        </motion.div>
      </div>

      {/* subtle bottom divider */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
      />
    </AnimatedSection>
  );
}

/* --- Program Card component --- */
function ProgramCard({
  variants,
  title,
  blurb,
  points,
  highlight = false,
}: {
  variants: Variants;
  title: string;
  blurb: string;
  points: string[];
  highlight?: boolean;
}) {
  const cardClass =
    "group rounded-2xl p-6 text-left shadow-sm ring-1 transition hover:shadow-md " +
    (highlight ? "bg-emerald-50 ring-emerald-200" : "bg-white ring-slate-200");

  return (
    <motion.div variants={variants} className={cardClass}>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{blurb}</p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </motion.div>
  );
}
