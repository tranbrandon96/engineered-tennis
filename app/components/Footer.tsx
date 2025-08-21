// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-3 text-sm text-slate-700">
        {/* Brand blurb */}
        <div>
          <p className="font-semibold">
            Engineered <span className="text-emerald-600">Tennis</span>
          </p>
          <p className="mt-2 text-slate-600">
            Mechanics-first coaching in Scripps Ranch • San Diego, CA.
          </p>
        </div>

        {/* Contact */}
        <div>
          <p className="font-semibold">Contact</p>
          <ul className="mt-2 space-y-1">
            <li>
              Email:{" "}
              <a className="underline" href="mailto:brandon.tran.tennis@gmail.com">
                brandon.tran.tennis@gmail.com
              </a>
            </li>
            <li>Phone: (714) 312-9593</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-semibold">Quick Links</p>
          <ul className="mt-2 space-y-1">
            <li><a className="hover:underline" href="/">Home</a></li>
            <li><a className="hover:underline" href="/services">Services</a></li>
            <li>
              <a
                className="hover:underline"
                href="https://calendar.app.google/zD6V3MMCcvMpuMPL6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Lesson
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-slate-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Engineered Tennis</span>
          <span>San Diego, CA</span>
        </div>
      </div>
    </footer>
  );
}