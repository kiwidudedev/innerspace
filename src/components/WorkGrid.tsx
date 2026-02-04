"use client";

import { motion, useReducedMotion } from "framer-motion";

const work = [
  {
    name: "Aether Studio",
    outcome: "Shipped an MVP in 8 weeks with a scalable data layer.",
    stack: ["Next.js", "Supabase", "Stripe"],
  },
  {
    name: "Driftline",
    outcome: "Improved conversion with a streamlined checkout flow.",
    stack: ["React", "UX", "Payments"],
  },
  {
    name: "Lumen Health",
    outcome: "Unified patient journeys across web and mobile.",
    stack: ["React Native", "API", "Design System"],
  },
];

export default function WorkGrid() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="font-display text-2xl tracking-tight text-white sm:text-3xl">
          Selected Work
        </h2>
        <p className="text-sm text-[var(--light)]">Case studies and launches.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {work.map((item, index) => (
          <motion.div
            key={item.name}
            initial={shouldReduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="rounded-[64px] border border-white/10 bg-[var(--dark)] p-10 transition-transform transition-colors duration-200 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
          >
            <h3 className="font-display text-2xl tracking-tight text-white">
              {item.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--light)]">
              {item.outcome}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
