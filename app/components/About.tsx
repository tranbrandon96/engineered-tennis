export default function About() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Top divider */}
        <div className="border-t border-gray-200 mb-12" />

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Engineered for Performance
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Engineered Tennis combines the precision of <strong>system design</strong> with the
          science of <strong>biomechanics</strong>. Every lesson is built around efficiency,
          structure, and clarity — giving players a deeper understanding of their mechanics while
          creating measurable improvement on the court.
        </p>
        <p className="text-md text-gray-600 leading-relaxed">
          Founded by Brandon Tran, a high-performance tennis coach and software engineer,
          Engineered Tennis was created to help disciplined players level up their game with the
          same mindset used to build advanced systems in tech: detailed analysis, iteration, and
          results.
        </p>

        {/* Bottom divider */}
        <div className="border-t border-gray-200 mt-12" />
      </div>
    </section>
  );
}