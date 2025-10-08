// app/services/page.tsx
export const metadata = {
  title: 'Services & Pricing | Engineered Tennis',
  description:
    'Private lessons and small-group clinics focused on biomechanics, movement, and repeatable systems. Book 1–2 hour sessions.',
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <section className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900">Services & Pricing</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Mechanics-first coaching in San Diego. Choose a 1–2 hour session and get targeted feedback
          you can apply immediately.
        </p>
      </section>

      {/* Services (2-up) */}
      <section className="mb-12 grid gap-8 md:grid-cols-2">
        {/* Private Lessons */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-emerald-700">Private Lessons</h2>
          <p className="mt-2 text-slate-600">
            One-on-one training built around your goals. We’ll diagnose mechanics, simplify your
            swing cues, and create a repeatable process for practice and match play.
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Technique breakdown (video optional)</li>
            <li>• Footwork & spacing models</li>
            <li>• Serve & return frameworks</li>
            <li>• Take-home drill progression</li>
          </ul>
        </div>

        {/* Clinics */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-emerald-700">Clinics (Small Group)</h2>
          <p className="mt-2 text-slate-600">
            High-rep, high-feedback sessions. Improve consistency, decision-making, and movement
            under pressure with targeted constraints.
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Live ball + situational patterns</li>
            <li>• Consistency and depth targets</li>
            <li>• Pattern recognition & point construction</li>
            <li>• Competitive sets with coaching</li>
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-slate-900">Pricing</h3>
        <p className="mt-2 text-slate-600">
          Transparent and simple. Pay on site after your session; packages available on request.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* 1 Hour */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-xl font-semibold">Private — 1 Hour</h4>
            <p className="mt-1 text-2xl font-bold text-emerald-700">$80</p>
            <p className="mt-2 text-slate-600">
              Focused technical session: one or two priorities and a drill plan to reinforce.
            </p>
          </div>

          {/* 2 Hours */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-xl font-semibold">Private — 2 Hours</h4>
            <p className="mt-1 text-2xl font-bold text-emerald-700">$140</p>
            <p className="mt-2 text-slate-600">
              Deeper mechanics + live application. Ideal for serve work and full-pattern training.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-12">
        <div className="flex flex-col gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Ready to train?</h3>
            <p className="text-slate-700">
              Pick a 1–2 hour slot from live availability. Instant email confirmation.
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

      {/* FAQs (summary/details = no JS) */}
      <section className="mb-4">
        <h3 className="text-2xl font-semibold text-slate-900">FAQs</h3>

        <div className="mt-4 space-y-3">
          <details className="group rounded-xl border border-slate-200 bg-white p-4 open:shadow-sm">
            <summary className="cursor-pointer list-none font-medium text-slate-900">
              Where do you coach?
            </summary>
            <p className="mt-2 text-slate-600">
              Scripps Ranch • San Diego, CA. Exact court location is shared after booking.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-4 open:shadow-sm">
            <summary className="cursor-pointer list-none font-medium text-slate-900">
              What should I bring?
            </summary>
            <p className="mt-2 text-slate-600">
              Racquet, water, and tennis shoes. Optional: a short video of your stroke for quick
              mechanics context.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-4 open:shadow-sm">
            <summary className="cursor-pointer list-none font-medium text-slate-900">
              Do you work with juniors and adults?
            </summary>
            <p className="mt-2 text-slate-600">
              Yes — all ages and levels. Sessions are customized by player goals and experience.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
