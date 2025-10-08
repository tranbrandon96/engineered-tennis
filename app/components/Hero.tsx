"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";
import Link from "next/link";

const EASE: [number, number, number, number] = [0.42, 0, 0.58, 1];

const container: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, staggerChildren: 0.18 },
  },
};

const child: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
<section
  aria-label="Engineered Tennis hero"
  className="
    relative isolate flex h-[100svh] flex-col items-center justify-center
    overflow-hidden text-white
    bg-slate-950 bg-no-repeat bg-cover
    bg-[position:center_58%]        /* mobile: lower logo alignment */
    md:bg-[position:center_46%]     /* desktop: keep perfect alignment */
    px-4 sm:px-6
    pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]
  "
  style={{ backgroundImage: "url('/hero-background.png')" }}
>

  {/* Vignette */}
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_45%,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.55)_100%)]"
  />
  <div aria-hidden className="absolute inset-0 bg-black/35" />

<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.5 }}
  className="
    relative z-10 flex w-full max-w-6xl flex-col items-center text-center
    translate-y-[6vh] md:translate-y-0   /* ⬅️ move content down on phones */
  "
>
    {/* width-based so CTAs don't push layout taller than the viewport */}
    <motion.img
      variants={child}
      src="/engineered-tennis-logo.svg"
      alt="Engineered Tennis Logo"
      loading="eager"
      decoding="async"
      className="
        w-[min(78vw,540px)] md:w-[min(52vw,680px)]
        h-auto
        drop-shadow-[0_6px_24px_rgba(16,185,129,0.25)]
      "
    />

    <motion.div
      variants={child}
      className="mt-5 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center"
    >
      <motion.a
        href="https://calendar.app.google/pxjE9UQCSZsQvxrx9"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={!prefersReduced ? { scale: 1.04 } : undefined}
        whileTap={!prefersReduced ? { scale: 0.98 } : undefined}
        className="
          w-full sm:w-auto
          rounded-lg bg-white px-8 py-4 text-center text-lg sm:text-xl
          font-semibold text-emerald-600 shadow-md transition
          hover:bg-gray-100 focus:outline-none
          focus-visible:ring-2 focus-visible:ring-emerald-400
        "
      >
        Book Now
      </motion.a>

      <Link
        href="/services"
        prefetch
        className="
          w-full sm:w-auto
          rounded-lg bg-white/10 px-8 py-4 text-center text-lg sm:text-xl
          font-semibold text-white ring-1 ring-white/30 transition
          hover:bg-white/20 focus:outline-none
          focus-visible:ring-2 focus-visible:ring-emerald-400
        "
      >
        <motion.span
          whileHover={!prefersReduced ? { scale: 1.04 } : undefined}
          whileTap={!prefersReduced ? { scale: 0.98 } : undefined}
          className="inline-block"
        >
          View Services
        </motion.span>
      </Link>
    </motion.div>
  </motion.div>
</section>

  );
}
