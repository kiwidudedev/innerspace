"use client";

import Link from "next/link";
import HoverTicker from "./HoverTicker";

export default function HeroBento() {
  const tileLabelClass =
    "absolute left-10 bottom-10 display text-[22px] leading-none tracking-[-0.02em]";

  return (
    <section className="mx-auto max-w-[1440px] px-6 pt-[48px] pb-[120px]">
      <div className="hero-grid">
        <div className="hero-tile hero-main">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.35em] text-[var(--light)]">
              Inner CMS
            </span>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white">
              ↗
            </button>
          </div>

          <div className="relative mt-12 h-56">
            <div className="absolute left-2 top-4 h-24 w-24 rotate-12 rounded-3xl bg-[var(--stone)]/80 shadow-[0_20px_60px_rgba(0,0,0,0.35)] animate-floatSlow" />
            <div className="absolute left-28 top-20 h-20 w-20 rounded-full bg-white/10 animate-floatSlow2" />
            <div className="absolute left-44 top-6 h-0 w-0 border-b-[46px] border-l-[28px] border-r-[28px] border-b-[var(--light)]/70 border-l-transparent border-r-transparent animate-floatSlow" />
          </div>

          <div className="mt-10">
            <Link
              href="#services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              See our services <span className="text-[var(--light)]">→</span>
            </Link>
          </div>
        </div>

        <div className="col-start-2 row-start-1 row-span-2 grid gap-[28px] lg:grid-cols-[360px_360px] lg:grid-rows-[360px_220px] lg:items-start lg:content-start">
          <div className="hero-tile hero-work group h-[360px] w-full lg:w-[360px] bg-[var(--stone)]">
            <span
              className={`${tileLabelClass} text-[var(--ink)] transition-opacity duration-200 group-hover:opacity-0 group-focus-within:opacity-0`}
            >
              Work
            </span>
            <HoverTicker
              text="showcase our work"
              duration={12}
              className="absolute left-10 right-10 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-focus-within:opacity-100 group-hover:translate-x-0 group-focus-within:translate-x-0 translate-x-8"
              textClassName="text-[64px] text-[var(--ink)]"
            />
            <div className="absolute right-10 bottom-10 text-[var(--ink)]">↗</div>
          </div>

          <div className="hero-tile hero-about group h-[360px] w-full lg:w-[360px] bg-[var(--dark)]">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--light)]">
              ABOUT US
            </p>
            <span
              className={`${tileLabelClass} text-white transition-opacity duration-200 group-hover:opacity-0 group-focus-within:opacity-0`}
            >
              Learn
            </span>
            <HoverTicker
              text="learn more about us"
              duration={13}
              className="absolute left-10 right-10 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-focus-within:opacity-100 group-hover:translate-x-0 group-focus-within:translate-x-0 translate-x-8"
              textClassName="text-[64px] text-[var(--ink)]"
            />
            <div className="absolute right-10 bottom-10 text-white">↗</div>
          </div>

          <a
            href="mailto:hello@innerspace.studio"
            className="hero-tile hero-contact group h-[220px] w-full bg-[var(--mid)] lg:col-span-2"
          >
            <div className="absolute left-10 bottom-10 transition-opacity duration-200 group-hover:opacity-0 group-focus-within:opacity-0">
              <span className="display text-[20px] text-[var(--ink)] underline underline-offset-4">
                Contact us
              </span>
            </div>
            <HoverTicker
              text="lets talk business, get in touch"
              duration={14}
              className="absolute left-10 right-10 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-focus-within:opacity-100 group-hover:translate-x-0 group-focus-within:translate-x-0 translate-x-8"
              textClassName="text-[72px] text-[var(--ink)]"
            />
            <div className="absolute right-10 bottom-10 text-[var(--ink)]">↗</div>
          </a>
        </div>
      </div>
    </section>
  );
}
