export default function About() {
  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-4xl text-center">
        {/* Top divider */}
        <div className="mb-12 border-t border-gray-200" />

        <h2 className="mb-6 text-3xl font-bold text-gray-900">Engineered for Performance</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          Engineered Tennis combines the precision of <strong>system design</strong> with the
          science of <strong>biomechanics</strong>. Every lesson is built around efficiency,
          structure, and clarity — giving players a deeper understanding of their mechanics while
          creating measurable improvement on the court.
        </p>
        <p className="text-md leading-relaxed text-gray-600">
          Founded by Brandon Tran, a high-performance tennis coach and software engineer, Engineered
          Tennis was created to help disciplined players level up their game with the same mindset
          used to build advanced systems in tech: detailed analysis, iteration, and results.
        </p>

        {/* Bottom divider */}
        <div className="mt-12 border-t border-gray-200" />
      </div>
    </section>
  );
}
