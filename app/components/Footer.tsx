// app/components/Footer.tsx
"use client";

import Link from "next/link";                // ✅ add this
import { FaInstagram, FaYelp, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300">
      <div
        aria-hidden
        className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Quick Links */}
          <nav aria-label="Footer quick links">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                {/* ✅ internal hash link must use <Link> */}
                <Link href="/#programs" className="hover:text-white transition">
                  Programs
                </Link>
              </li>
              <li>
                {/* external stays <a> */}
                <a
                  href="https://calendar.app.google/pxjE9UQCSZsQvxrx9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="block text-slate-400">Location</span>
                <span className="block text-white">Scripps Ranch • San Diego, CA</span>
                <a
                  href="https://maps.google.com/?q=Scripps+Ranch+San+Diego+CA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition"
                >
                  View on Maps
                </a>
              </li>
              <li>
                <span className="block text-slate-400">Email</span>
                <a
                  href="mailto:contact@engineeredtennis.com?subject=Lesson%20Inquiry%20from%20Website"
                  className="text-white hover:text-emerald-300 transition break-all"
                >
                  contact@engineeredtennis.com
                </a>
                <span className="block text-xs text-slate-500">Replies within a day</span>
              </li>
              <li>
                <span className="block text-slate-400">Phone</span>
                <a href="tel:+16193208364" className="text-white hover:text-emerald-300 transition">
                  (619) 320-8364
                </a>
                <span className="block text-xs text-slate-500">Call or text</span>
              </li>
            </ul>
          </div>

          {/* Social / Reviews */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Follow & Reviews
            </h3>
            <p className="mt-4 text-sm text-slate-400">
              Stay connected and see what others are saying.
            </p>
            <div className="mt-4 flex items-center justify-center gap-6 text-xl text-emerald-400 md:justify-start">
              <a
                href="https://instagram.com/engineeredtennis"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-emerald-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.yelp.com/biz/engineered-tennis-san-diego?utm_medium=copy_link&utm_source=(direct)"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-emerald-300"
                aria-label="Yelp"
              >
                <FaYelp />
              </a>
              <a
                href="https://share.google/K6WwDZtzsoXDFfDls"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-emerald-300"
                aria-label="Google Reviews"
              >
                <FaGoogle />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">Engineered Tennis</span>. All rights reserved.
          </p>
          <p>
            Website built by{" "}
            <span className="text-white font-medium">Brandon Tran</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
