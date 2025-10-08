// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Pricing | Engineered Tennis",
  description:
    "Grand Opening Special through October 31: $70 (1 hr) and $120 (2 hrs). Mechanics-first tennis coaching in San Diego.",
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      {/* Announcement */}
      <div className="mb-8 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-900">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Grand Opening Special — Ends October 31
        </p>
        <p className="mt-1 text-slate-800">
          Private lessons: <span className="font-semibold">$70 / 1 hr</span> and{" "}
          <span className="font-semibold">$120 / 2 hrs</span>. Limited-time pricing available through{" "}
          <span className="font-semibold text-emerald-700">October 31</span>.
        </p>
      </div>

      {/* Header */}
      <section className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900">Services & Pricing</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Mechanics-first coaching in San Diego. Choose a 1–2 hour session and get targeted feedback you can apply immediately.
        </p>
      </section>

      {/* Services */}
      <section className="mb-12 grid gap-6 md:grid-cols-2">
        {/* Private 1:1 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-emerald-700">Private 1:1</h2>
          <p className="mt-2 text-slate-600">
            One-on-one training built around your goals. Diagnose mechanics, simplify your swing cues, and create a repeatable framework you can practice under pressure.
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Technique breakdown (live + optional video)</li>
            <li>• Footwork, spacing, and tempo models</li>
            <li>• Serve &amp; return frameworks</li>
            <li>• Take-home drill progression</li>
          </ul>
        </div>

        {/* Clinics */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-emerald-700">Clinics (Small Group)</h2>
          <p className="mt-2 text-slate-600">
            High-rep, high-feedback sessions. Improve consistency, decision-making, and movement under constraints with live ball patterns.
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Situational patterns &amp; depth targets</li>
            <li>• Pattern recognition &amp; point construction</li>
            <li>• Competitive sets with live coaching</li>
            <li>• Ideal for 2–4 players of similar level</li>
          </ul>
          <p className="mt-4 text-sm text-slate-500">
            Group pricing varies by size/level — <Link href="/about" className="underline">contact for details</Link>.
          </p>
        </div>

        {/* Match Play Coaching */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-emerald-700">Match Play Coaching</h2>
          <p className="mt-2 text-slate-600">
            Real-time coaching during sets. We’ll track patterns, decision quality, and momentum management so mechanics transfer into winning points.
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Serve + 1st-ball intentions</li>
            <li>• Return patterns &amp; neutral building</li>
            <li>• Pressure management &amp; routines</li>
            <li>• Post-match recap &amp; next steps</li>
          </ul>
        </div>

        {/* Remote Video Breakdown */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-emerald-700">Remote Video Breakdown</h2>
          <p className="mt-2 text-slate-600">
            Can’t get to the court? Send a short clip and get a mechanics report with cues and a simple, progressive drill plan.
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Key positions &amp; timing checkpoints</li>
            <li>• Common energy leaks &amp; fixes</li>
            <li>• 2–3 focused drills you can do solo</li>
          </ul>
          <p className="mt-4 text-sm text-slate-500">
            Turnaround typically within a few days. Contact to get started.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-12">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-semibold text-slate-900">Pricing</h3>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            Promo Ends Oct 31
          </span>
        </div>
        <p className="mt-2 max-w-2xl text-slate-600">
          Transparent and simple. Pay on site after your session; packages available on request.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* 1 Hour */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-xl font-semibold">Private — 1 Hour</h4>
            <div className="mt-1 flex items-baseline gap-3">
              <p className="text-2xl font-bold text-emerald-700">$70</p>
              <p className="text-sm text-slate-500 line-through">$80</p>
            </div>
            <p className="mt-2 text-slate-600">
              Focused technical session: one or two priorities and a drill plan to reinforce.
            </p>
          </div>

          {/* 2 Hours */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-semibold">Private — 2 Hours</h4>
              <span className="rounded-md bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">
                Limited Slots
              </span>
            </div>
            <div className="mt-1 flex items-baseline gap-3">
              <p className="text-2xl font-bold text-emerald-700">$120</p>
              <p className="text-sm text-slate-500 line-through">$140</p>
            </div>
            <p className="mt-2 text-slate-600">
              Deeper mechanics + live application. Ideal for serve work and full-pattern training.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              2-hour private sessions are limited each week to maintain quality and recovery windows.
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Small-group clinic rates depend on group size and level. Reach out to align the group and goals.
        </p>
      </section>

      {/* CTA */}
      <section className="mb-12">
        <div className="flex flex-col gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Ready to train?</h3>
            <p className="text-slate-700">
              Pick a 1–2 hour slot from live availability. Instant email confirmation. Promo pricing applies through October 31.
            </p>
          </div>
          <a
            href="https://calendar.app.google/pxjE9UQCSZsQvxrx9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 font-medium text-white transition hover:bg-emerald-700"
          >
            Book a Lesson
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="mb-4">
        <h3 className="text-2xl font-semibold text-slate-900">FAQs</h3>
        <div className="mt-4 space-y-3">
          <details className="group rounded-xl border border-slate-200 bg-white p-4 open:shadow-sm">
            <summary className="cursor-pointer list-none font-medium text-slate-900">
              Do you work with juniors and adults?
            </summary>
            <p className="mt-2 text-slate-600">
              Yes — all ages and levels. Sessions are customized by goals and experience.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-4 open:shadow-sm">
            <summary className="cursor-pointer list-none font-medium text-slate-900">
              Can I bring a friend to a private?
            </summary>
            <p className="mt-2 text-slate-600">
              For consistent quality, true privates are 1:1. If you’d like to train together, book a small-group clinic and I’ll structure the drills to your levels.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-4 open:shadow-sm">
            <summary className="cursor-pointer list-none font-medium text-slate-900">
              Do you provide video analysis?
            </summary>
            <p className="mt-2 text-slate-600">
              Yes — I can record key reps during your session and summarize the priorities with cues and drills. Remote breakdowns are also available.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-4 open:shadow-sm">
            <summary className="cursor-pointer list-none font-medium text-slate-900">
              How do I get started?
            </summary>
            <p className="mt-2 text-slate-600">
              Book a 1- or 2-hour slot, share a few goals, and I’ll build the session plan. First-time players get a quick baseline assessment.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
