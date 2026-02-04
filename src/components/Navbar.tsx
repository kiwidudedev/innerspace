"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="relative z-40">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 pt-8">
        <Link
          href="/"
          className="display text-[20px] uppercase tracking-[0.2em] text-[#1C1C1C] hover:no-underline"
        >
          INNERSPACE
        </Link>
        <nav className="flex items-center gap-10 text-[11px] uppercase tracking-[0.32em] text-[#7A7A7A]">
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
