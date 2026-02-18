// app/cohort/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spring 2026 Cohort Program | Engineered Tennis",
  description:
    "Spring 2026 Cohort Program at USD in San Diego. Saturdays 1:00 PM to 4:00 PM. Biomechanics driven training, footwork, live ball patterns, match simulation, and tournament preparation to accelerate UTR progression.",
};

const USD_ADDRESS_LINE_1 = "University of San Diego";
const USD_ADDRESS_LINE_2 = "5998 Alcala Park, San Diego, CA 92110";
const USD_MAPS_URL = "https://maps.app.goo.gl/LyugZBSLEnBzMZcs5";
const IG_URL = "https://instagram.com/engineeredtennis";
const EMAIL_HREF =
  "mailto:info@engineeredtennis.com?subject=Spring%202026%20Cohort%20Inquiry&body=Player%20age%3A%0ACurrent%20level%20or%20UTR%3A%0ATournament%20experience%3A%0AGoals%3A%0A";

export default function CohortPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      {/* Announcement */}
      <div className="mb-8 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-900">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Spring 2026 Cohort at USD
        </p>
        <p className="mt-1 text-slate-800">
          Saturdays <span className="font-semibold">1:00 PM to 4:00 PM</span>, March to May 2026, San Diego. Early
          enrollment rate available through{" "}
          <span className="font-semibold text-emerald-700">March 2026</span>. Limited spots available.
        </p>
      </div>

      {/* Header */}
      <section className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900">Cohort Program</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          High performance development at the University of San Diego. A structured Saturday training system built on
          biomechanics, footwork sequencing, live ball pattern work, and match simulation to accelerate tournament
          readiness and UTR progression.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            Saturdays 1:00 PM to 4:00 PM
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            March to May 2026
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {USD_ADDRESS_LINE_1}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {USD_ADDRESS_LINE_2}
          </span>
        </div>

        <a
          href={USD_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-emerald-700 underline"
        >
          View on Google Maps
        </a>
      </section>

      {/* Core blocks */}
      <section className="mb-12 grid gap-6 md:grid-cols-2">
        {/* What it is */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-emerald-700">What the cohort is</h2>
          <p className="mt-2 text-slate-600">
            This is not a recreational clinic. It is performance development for competitive juniors who want structure,
            clarity, and real transfer into matches. Training is court based and designed for high repetition volume
            with coaching feedback and purposeful constraints.
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Biomechanics driven stroke development</li>
            <li>• Footwork sequencing and spacing systems</li>
            <li>• Live ball pattern integration</li>
            <li>• Structured match simulation and point play</li>
            <li>• Tournament preparation routines and match planning</li>
            <li>• On site tournament coaching and match analysis at select events</li>
          </ul>
        </div>

        {/* Who it is for */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-emerald-700">Who this is for</h2>
          <p className="mt-2 text-slate-600">
            Designed for athletes who want to train with intention and compete with a plan. Tournament experience is
            encouraged, and I can help players entering tournament play build the right habits to progress faster.
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Competitive juniors, typically UTR 3 and above</li>
            <li>• Players entering or actively competing in tournaments</li>
            <li>• Athletes who want structure, accountability, and measurable progress</li>
            <li>• Coachable players committed to long term development</li>
          </ul>
          <p className="mt-4 text-sm text-slate-500">
            UTR 3 and above is a common starting point, but placement is determined through a trial session to ensure the
            right training environment.
          </p>
<p className="mt-3 text-sm text-slate-500">
  Unsure if it is the right fit?{" "}
  <a
    href="mailto:info@engineeredtennis.com?subject=Spring%202026%20Cohort%20Inquiry&body=Player%20age%3A%0ACurrent%20level%20or%20UTR%3A%0ATournament%20experience%3A%0AGoals%3A%0A"
    className="underline text-emerald-700"
  >
    Email me directly
  </a>{" "}
  and I will recommend the best path.
</p>
        </div>
      </section>

      {/* How Saturdays Work */}
      <section className="mb-12">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-semibold text-slate-900">How Saturdays work</h3>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            Structured progression
          </span>
        </div>
        <p className="mt-2 max-w-3xl text-slate-600">
          Each session follows a simple structure so athletes get high quality repetitions, clear coaching feedback, and
          match realistic application.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-xl font-semibold">1 Technical focus</h4>
            <p className="mt-2 text-slate-600">
              Biomechanics priorities and movement cues for the day, so the athlete knows exactly what matters.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-xl font-semibold">2 Pattern training</h4>
            <p className="mt-2 text-slate-600">
              Live ball pattern reps built around spacing, recovery, timing, and decision making under pace.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-xl font-semibold">3 Match simulation</h4>
            <p className="mt-2 text-slate-600">
              Structured point play to pressure test habits and build competitive execution that transfers to
              tournaments.
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Athletes leave with clear priorities for the week and what to focus on between sessions.
        </p>
      </section>

      {/* Tournament support and community */}
      <section className="mb-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">Tournament coaching and guidance</h3>
          <p className="mt-2 text-slate-600">
            Tournament performance is where development shows up. I provide match planning support, between match
            feedback, and on site guidance at select events to help athletes learn how to compete with clarity.
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Match plan and warmup structure</li>
            <li>• Between match feedback and adjustments</li>
            <li>• Post match review and training priorities</li>
          </ul>
          <p className="mt-4 text-sm text-slate-500">Tournament attendance depends on schedule and event logistics.</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">Competitive community</h3>
          <p className="mt-2 text-slate-600">
            Train alongside athletes who want to compete at a high level. The cohort environment builds standards,
            accountability, and a culture of intentional improvement.
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• High performance environment and clear expectations</li>
            <li>• Structured match play and pressure training</li>
            <li>• A community of athletes committed to long term growth</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-12">
        <div className="flex flex-col gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Interested in the Spring Cohort?</h3>
            <p className="text-slate-700">Message me to confirm fit, receive enrollment details, and get next steps.</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 font-medium text-white transition hover:bg-emerald-700"
            >
              DM on Instagram
            </a>
            <a
              href={EMAIL_HREF}
              className="inline-flex items-center justify-center rounded-md border border-emerald-300 bg-white px-5 py-3 font-medium text-emerald-700 transition hover:bg-emerald-50"
            >
              Email Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mb-4">
        <h3 className="text-2xl font-semibold text-slate-900">FAQs</h3>
        <div className="mt-4 space-y-3">
          <details className="group rounded-xl border border-slate-200 bg-white p-4 open:shadow-sm">
            <summary className="cursor-pointer list-none font-medium text-slate-900">
              What level is required for the cohort
            </summary>
            <p className="mt-2 text-slate-600">
              Most cohort athletes are around UTR 3 and above, but I am open to developing players who are committed and
              coachable. Final placement is determined through a trial session to ensure the right training environment.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-4 open:shadow-sm">
            <summary className="cursor-pointer list-none font-medium text-slate-900">
              Is this a recreational clinic
            </summary>
            <p className="mt-2 text-slate-600">
              No. This is a structured performance environment focused on mechanics, movement systems, and match
              transfer.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-4 open:shadow-sm">
            <summary className="cursor-pointer list-none font-medium text-slate-900">
              How do I get started
            </summary>
            <p className="mt-2 text-slate-600">
              Send a message with player age, current level or UTR, tournament experience, and goals. I will reply with
              details and next steps.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-4 open:shadow-sm">
            <summary className="cursor-pointer list-none font-medium text-slate-900">
              Do you offer tournament coaching
            </summary>
            <p className="mt-2 text-slate-600">
              Yes, on site tournament coaching and match analysis is available at select events depending on schedule
              and logistics.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
