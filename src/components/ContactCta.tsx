"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ContactCta() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <motion.a
        initial={shouldReduce ? undefined : { opacity: 0, y: 24 }}
        whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{ y: -6 }}
        href="mailto:hello@innerspace.studio"
        className="block rounded-[56px] border border-black/10 bg-[var(--beige)] p-10 text-[#0B0B0B] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_40px_120px_rgba(0,0,0,0.3)]"
      >
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em]">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Have an idea worth building?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#0B0B0B]/70">
              Share your vision and we’ll help shape the strategy, design, and
              build plan to make it real.
            </p>
          </div>
          <span className="text-lg font-semibold">hello@innerspace.studio →</span>
        </div>
      </motion.a>
    </section>
  );
}
