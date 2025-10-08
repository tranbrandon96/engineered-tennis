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
      className="relative flex min-h-[100svh] flex-col items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/hero-background.png')" }}
      aria-label="Engineered Tennis hero"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_45%,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.55)_100%)]" />
      <div aria-hidden className="absolute inset-0 bg-black/40" />

      <motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.5 }} // replay on each enter; adjust threshold as you like
  className="relative z-10 flex flex-col items-center text-center"
      >
        <motion.img
          variants={child}
          src="/engineered-tennis-logo.svg"
          alt="Engineered Tennis Logo"
          className="w-auto h-[clamp(14rem,60vh,44rem)] md:h-[clamp(18rem,62vh,48rem)]"
          loading="eager"
          decoding="async"
        />

        <motion.div
          variants={child}
          className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="https://calendar.app.google/pxjE9UQCSZsQvxrx9"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={!prefersReduced ? { scale: 1.04 } : undefined}
            whileTap={!prefersReduced ? { scale: 0.98 } : undefined}
            className="inline-block rounded-lg bg-white px-10 py-4 text-xl font-semibold text-emerald-600 shadow-md transition hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            Book Now
          </motion.a>

          <Link
            href="/services"
            className="inline-block rounded-lg bg-white/10 px-10 py-4 text-xl font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            prefetch
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
