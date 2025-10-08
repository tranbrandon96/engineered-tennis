// app/components/Navbar.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={`text-slate-700 hover:text-slate-900 transition ${
        isActive ? 'font-semibold text-slate-900 underline underline-offset-8' : ''
      }`}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur ${
        scrolled ? 'shadow-[0_4px_20px_-8px_rgba(0,0,0,0.25)]' : ''
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo = Home */}
<Link
  href="/"
  aria-label="Engineered Tennis – Home"
  className="group inline-flex items-center transition-all duration-300"
>
<div className="relative h-11 w-11 flex items-center justify-center rounded-full bg-black transition-all duration-300 group-hover:scale-[1.05]">
  <Image
    src="/favicon.png"
    alt="Engineered Tennis Logo"
    width={44}
    height={44}
    className="object-contain drop-shadow-sm transition-transform duration-200 group-hover:scale-[1.08]"
    priority
  />
</div>


  <span className="sr-only">Engineered Tennis</span>
</Link>


        {/* Desktop links (Home removed) */}
        <div className="hidden items-center gap-6 md:flex">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/services">Services</NavLink>

          {/* External booking link stays <a> */}
          <a
            href="https://calendar.app.google/zD6V3MMCcvMpuMPL6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700"
          >
            Book Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md p-2 ring-1 ring-slate-300 md:hidden"
        >
          <span className={`block h-0.5 w-5 bg-slate-800 transition ${open ? 'translate-y-1 rotate-45' : ''}`} />
          <span className={`my-1 block h-0.5 w-5 bg-slate-800 transition ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-slate-800 transition ${open ? '-translate-y-1 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col gap-3 px-4 py-3">
            {/* No Home here either; logo is Home */}
            <Link href="/about" className="text-slate-700 hover:text-slate-900" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/services" className="text-slate-700 hover:text-slate-900" onClick={() => setOpen(false)}>
              Services
            </Link>
            <a
              href="https://calendar.app.google/pxjE9UQCSZsQvxrx9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700"
              onClick={() => setOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
