"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="relative z-40">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-6 pt-6 sm:flex-row sm:justify-end sm:gap-0 sm:pt-8">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.28em] text-[#7A7A7A] sm:gap-10 sm:text-[11px] sm:tracking-[0.32em]">
          <Link
            href="/"
            className="hero-underline hover:text-[#1C1C1C] hover:no-underline"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="hero-underline hover:text-[#1C1C1C] hover:no-underline"
          >
            Projects
          </Link>
          <Link
            href="/about-us"
            className="hero-underline hover:text-[#1C1C1C] hover:no-underline"
          >
            About us
          </Link>
          <Link
            href="/contact"
            className="hero-underline hover:text-[#1C1C1C] hover:no-underline"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
