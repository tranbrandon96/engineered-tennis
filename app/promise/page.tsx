'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import {
    BarChart3,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    Flame,
    Lightbulb,
    Quote,
    Target,
    Trophy,
    Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Promise Page
 * Clean, emotionally grounded layout highlighting Brandon’s teaching philosophy.
 */

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function PromisePage() {
  const bookingHref = "https://calendar.app.google/pxjE9UQCSZsQvxrx9";

  const email = "contact@engineeredtennis.com";
  const subject = "Free Trial Inquiry — from Promise page";
  const body = `Hi Brandon,

I'd like to book a free trial / ask a question. Here are my details:

Name:
Age:
Player level (beginner / intermediate / advanced / UTR/USTA rating):
What I'm looking for (goals):
Tennis background:

Thanks!`;
  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // --- First Break Honors gallery (stateful fade with arrows) ---
  const photos = [
    "/images/firstbreak-1.jpeg",
    "/images/firstbreak-2.jpeg",
    "/images/firstbreak-3.jpeg",
    "/images/firstbreak-4.jpeg",
    "/images/firstbreak-5.jpeg",
    //"/images/firstbreak-6.jpeg",
    "/images/firstbreak-7.jpeg",
  ];
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const holdMs = 6000; // time each photo is shown
  const fadeSec = 0.8; // cross-fade duration

  const next = () => setIdx((i) => (i + 1) % photos.length);
  const prev = () => setIdx((i) => (i - 1 + photos.length) % photos.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, holdMs);
    return () => clearInterval(id);
  }, [paused, idx]); // re-arm timer each change

  // Back-to-top visibility
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/60 via-white to-white" />
        <div aria-hidden className="absolute right-[-8rem] top-16 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />
        <div aria-hidden className="absolute left-[-10rem] bottom-24 h-80 w-80 rounded-full bg-emerald-100/30 blur-3xl" />
      </div>

      {/* HERO */}
      <section>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:py-20"
        >
          <motion.div variants={item} className="lg:col-span-6">
            <p className="text-sm font-medium uppercase tracking-wide text-emerald-700/90">
              Promise
            </p>
            <h1 className="mt-2 text-[1.35rem] font-semibold leading-tight text-gray-900 sm:text-2xl md:text-3xl">
              Every player deserves a coach who fits the way they learn.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-[1.9] text-gray-700">
              Too many players work hard but never feel their progress.
              I started Engineered Tennis to change that — to make sure
              every student finally feels what clicks.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-2xl border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-200"
              >
                <a
                  href={bookingHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Your Free Trial Lesson
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-2xl border-2 border-gray-400 text-gray-700 hover:bg-gray-800 hover:text-white transition-all duration-200"
              >
                <a href={mailtoHref}>Ask a Question</a>
              </Button>
            </div>
          </motion.div>

          {/* ENGINEERED TENNIS: FIRST BREAK HONORS (portrait-optimized carousel) */}
          <motion.figure variants={item} className="relative lg:col-span-6 lg:w-[85%] mx-auto">
<div
  className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl shadow-xl bg-gray-100"
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
>
<AnimatePresence mode="sync">  {/* was mode="wait" */}
  <motion.div
    key={photos[idx]}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: fadeSec, ease: "easeInOut" }}
    className="absolute inset-0"
  >
    <Image
      src={photos[idx]}
      alt="Engineered Tennis: First Break Honors"
      fill
      className="object-cover object-top rounded-3xl"
      priority={idx === 0}   // priority only on first render
      sizes="(min-width:1024px) 40vw, 90vw"
    />
  </motion.div>
</AnimatePresence>


              {/* Arrows */}
              <button
                aria-label="Previous photo"
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 backdrop-blur hover:bg-white shadow"
              >
                <ChevronLeft className="h-5 w-5 text-gray-900" />
              </button>
              <button
                aria-label="Next photo"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 backdrop-blur hover:bg-white shadow"
              >
                <ChevronRight className="h-5 w-5 text-gray-900" />
              </button>

              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
            <p className="mt-2 text-center text-sm text-gray-600">
              <span className="font-medium text-emerald-700">Engineered Tennis: First Break Honors</span> — celebrating players’ first string-break milestones.
            </p>
          </motion.figure>
        </motion.div>
      </section>

      {/* WHY I DO THIS */}
      <section className="relative border-t border-emerald-100/70 bg-white/60 pt-12 pb-16 sm:pt-14 sm:pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 sm:px-8 lg:grid-cols-12 lg:gap-12"
        >
          <motion.div variants={item} className="lg:col-span-6">
            <p className="text-lg font-medium text-gray-900">Why I Do This</p>
            <p className="mt-3 text-base leading-[1.9] text-gray-700">
              I’ll never just feed balls or correct form for the sake of it. My goal is to understand how each player learns
              — the way they move, think, and respond — then teach in a way that finally makes sense. Every lesson is personal.
              Every milestone matters. Because when a player truly understands their own mechanics, real improvement never stops.
            </p>
          </motion.div>
          <motion.blockquote
            variants={item}
            className="lg:col-span-6 rounded-2xl bg-emerald-50 p-6 lg:p-7 text-gray-800 shadow-sm"
          >
            <Quote className="mb-3 h-5 w-5 text-emerald-700" />
            <p className="text-base leading-[1.9]">
              “Understanding how a player learns is the foundation of every breakthrough.”
            </p>
          </motion.blockquote>
        </motion.div>
      </section>

      {/* ATP/WTA HIGHLIGHT — Even the Best Need the Right Fit */}
      <section className="relative isolate overflow-hidden bg-emerald-900 text-emerald-50">
        {/* base vertical gradient */}
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-900 via-emerald-900/95 to-emerald-800" />
        {/* subtle grid overlay (no mask, safe everywhere) */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* soft bloom light blobs */}
        <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24"
        >
          <motion.div variants={item} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200/90">
              At Every Level
            </p>
            <h2 className="mt-2 text-[1.6rem] font-semibold leading-tight sm:text-3xl md:text-4xl">
              Even the best need the right fit.
            </h2>
            <p className="mt-4 text-base leading-[1.9] text-emerald-100/90">
              On tour, ATP and WTA players choose coaches who fit how they learn and compete.
              When that connection clicks, confidence rises, decisions get cleaner, and the best version shows up on court.
              When it doesn’t, they part ways respectfully and find a better match. The same principle guides how I coach every junior and adult.
            </p>
          </motion.div>

          {/* signal pills */}
          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            {[
              { Icon: Trophy, label: "Performance follows fit" },
              { Icon: Users, label: "Partnership over protocol" },
              { Icon: BarChart3, label: "Clarity → confidence" },
            ].map(({ Icon, label }, i) => (
              <motion.li
                key={i}
                variants={item}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-600/40 
                           bg-emerald-800/40 px-5 py-2 text-sm text-emerald-100/95 
                           backdrop-blur transition-transform hover:-translate-y-0.5"
              >
                <Icon className="relative top-[1px] h-4 w-4 text-emerald-200" />
                {label}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* BACK TO TOP (floating) */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 rounded-full bg-emerald-700 p-3 text-white shadow-lg transition-colors hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-emerald-700"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* MINDSET SECTION */}
      <section>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl px-6 py-20 sm:px-8"
        >
          <motion.h3
            variants={item}
            className="text-[1.35rem] font-semibold text-gray-900 sm:text-2xl md:text-3xl"
          >
            What I Look For
          </motion.h3>
          <motion.p
            variants={item}
            className="mt-2 max-w-3xl text-base text-gray-700 leading-[1.9]"
          >
            Your level doesn’t matter to me — your mindset does. If you bring effort, curiosity,
            and honesty to the court, I’ll meet you with patience, clarity, and everything I’ve got to help you grow.
          </motion.p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: Flame, title: "Discipline", desc: "Showing up even when it’s tough. The players who stay consistent are the ones who truly transform." },
              { icon: Target, title: "Motivation", desc: "Asking “why” instead of just following instructions. The more you understand, the faster everything clicks." },
              { icon: Lightbulb, title: "Open-mindedness", desc: "Being willing to try new ideas — even when it means breaking old habits. That’s how real change begins." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={i} variants={item}>
                <Card className="h-full rounded-2xl border-emerald-100">
                  <CardHeader className="flex flex-row items-center gap-2 pb-2">
                    <Icon className="h-5 w-5 text-emerald-700" />
                    <CardTitle className="text-base">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">{desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ADULTS + JUNIORS (RESTORED) */}
      <section>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-20 sm:px-8 lg:grid-cols-2"
        >
          <motion.div variants={item} className="rounded-2xl border border-emerald-100 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">A Lesson That’s About You</h3>
            <p className="mt-2 text-sm leading-[1.9] text-gray-700">
              Every player — junior or adult — begins with a 1–2 hour session focused on finding the right fit:
              how you learn, how I teach, and how we build rhythm together. I’ll observe how you move, process
              feedback, and adjust under guidance. The goal isn’t to sell lessons — it’s to understand how you learn best.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>1–2 hour session focused on discovering your learning rhythm</li>
              <li>Clear, personalized feedback that highlights your strengths and next steps</li>
              <li>Honest, no-pressure environment — built around clarity and growth</li>
            </ul>
          </motion.div>

          <motion.div variants={item} className="rounded-2xl border border-emerald-100 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">For Juniors — The 4-Lesson Starter Phase</h3>
            <p className="mt-2 text-sm leading-[1.9] text-gray-700">
              After the first lesson, juniors continue with a 4-lesson phase designed to confirm fit, progress, and consistency.
              Each session builds on the last — helping players develop rhythm, awareness, and repeatable habits.
              At the end of the month, I meet with parents to review what’s improving, what still needs time, and how we’ll move forward together.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Four lessons over roughly one month</li>
              <li>Step-by-step feedback that tracks the player’s growth</li>
              <li>Honest, open review with parents — clear next steps, no pressure</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* PROMISE SECTION */}
      <section>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8"
        >
          <motion.h3 variants={item} className="text-[1.35rem] font-semibold text-gray-900 sm:text-2xl md:text-3xl">
            My Promise
          </motion.h3>
          <motion.p variants={item} className="mx-auto mt-4 max-w-3xl text-base leading-[1.9] text-gray-700">
            I’ll never teach for the sake of teaching. If I can help you, you’ll feel it from day one — through clarity,
            patience, and direction that actually makes sense. If I can’t, I’ll be honest and help you find a coach who fits how you learn.
          </motion.p>
        </motion.div>
      </section>

      {/* FOOTER QUOTE */}
      <footer className="relative bg-emerald-900">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8">
          <figure className="mx-auto max-w-3xl text-center text-white">
            <blockquote className="text-lg leading-[1.9]">
              “Progress isn’t taught. It’s built — one clear step at a time.”
            </blockquote>
            <figcaption className="mt-4 text-sm text-emerald-100">— Brandon Tran, Founder & Head Coach</figcaption>
          </figure>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-2xl bg-white text-gray-900 hover:bg-white/90">
              <a href={bookingHref} target="_blank" rel="noopener noreferrer">
                Book Your Free Trial Lesson
              </a>
            </Button>

            <Button asChild size="lg" className="rounded-2xl bg-white text-gray-900 hover:bg-white/90">
              <a href={mailtoHref}>Ask a Question</a>
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}
