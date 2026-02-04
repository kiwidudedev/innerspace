"use client";

import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    title: "Websites",
    desc: "High-end marketing sites with clarity and intent.",
  },
  {
    title: "Web Apps",
    desc: "Product-grade builds for speed and reliability.",
  },
  {
    title: "Mobile Apps",
    desc: "Native-feel iOS & Android from one codebase.",
  },
  {
    title: "UI Systems",
    desc: "Design systems that scale across teams.",
  },
  {
    title: "Performance / SEO",
    desc: "Clean architecture, fast delivery, measurable results.",
  },
  {
    title: "Ongoing Support",
    desc: "Iterate quickly with a studio close to your roadmap.",
  },
];

export default function ServicesBento() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="font-display text-2xl tracking-tight text-white sm:text-3xl">
          Services
        </h2>
        <p className="text-sm text-[var(--light)]">
          Modular support — from discovery to launch.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={shouldReduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="rounded-[64px] border border-white/10 bg-[var(--dark)] p-10 transition-transform transition-colors duration-200 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
          >
            <h3 className="font-display text-xl tracking-tight text-white">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--light)]">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
