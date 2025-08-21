// app/components/Contact.tsx
import { FaInstagram, FaYelp, FaGoogle } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
        <p className="mt-3 text-gray-600">
          Have a question or want to set up a lesson? Reach out any time.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {/* Location */}
          <div className="rounded-xl border border-slate-200 p-6">
            <p className="text-sm uppercase tracking-wide text-slate-500">Location</p>
            <p className="mt-2 font-medium text-slate-900">Scripps Ranch • San Diego, CA</p>
            <a
              href="https://maps.google.com/?q=Scripps+Ranch+San+Diego+CA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-emerald-700 hover:underline"
            >
              View on Maps
            </a>
          </div>

          {/* Email */}
          <div className="rounded-xl border border-slate-200 p-6">
            <p className="text-sm uppercase tracking-wide text-slate-500">Email</p>
            <a
              href="mailto:engineeredtennis@gmail.com"
              className="mt-2 block font-medium text-emerald-700 hover:underline break-words"
            >
              engineeredtennis@gmail.com
            </a>
            <p className="mt-2 text-sm text-slate-500">Typically replies within a day.</p>
          </div>

          {/* Phone */}
          <div className="rounded-xl border border-slate-200 p-6">
            <p className="text-sm uppercase tracking-wide text-slate-500">Phone</p>
            <a
              href="tel:+17143129593"
              className="mt-2 block font-medium text-emerald-700 hover:underline"
            >
              (714) 312-9593
            </a>
            <p className="mt-2 text-sm text-slate-500">Call or text for quick coordination.</p>
          </div>
        </div>

        {/* Book button (optional secondary CTA) */}
        <a
          href="https://calendar.app.google/zD6V3MMCcvMpuMPL6"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-md bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700 transition"
        >
          Book a Lesson
        </a>
      </div>

      {/* Social & Reviews */}
      <div className="mt-16 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-gray-900">Follow & Reviews</h3>
        <p className="mt-3 text-gray-600">Stay connected and see what others are saying.</p>
        <div className="mt-6 flex justify-center gap-8 text-3xl text-emerald-700">
          <a
            href="https://instagram.com/engineeredtennis"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.yelp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition"
          >
            <FaYelp />
          </a>
          <a
            href="https://www.google.com/maps/place/Engineered+Tennis/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition"
          >
            <FaGoogle />
          </a>
        </div>
      </div>
    </section>
  );
}