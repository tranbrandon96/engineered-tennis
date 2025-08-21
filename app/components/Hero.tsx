// app/components/Hero.tsx
export default function Hero() {
  return (
    <section
      className="relative h-[80vh] md:h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/tennis-court-lines.jpg')" }} // ensure this image is in /public
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold">Engineered Tennis</h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-100">
          Precision. Performance. Player Developments.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* External booking link (1-hr / 2-hr options) */}
          <a
            href="https://calendar.app.google/zD6V3MMCcvMpuMPL6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg bg-white text-emerald-600 text-lg font-semibold hover:bg-gray-100 transition shadow-md"
          >
            Book Now
          </a>

          {/* Internal services page */}
          <a
            href="/services"
            className="inline-block px-8 py-3 rounded-lg bg-white/10 ring-1 ring-white/30 text-white text-lg font-semibold hover:bg-white/20 transition"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}