"use client";

import { motion, useReducedMotion } from "framer-motion";
import HoverTicker from "./HoverTicker";

const labelClass =
  "display text-[22px] leading-none tracking-[-0.02em] text-white";

const supportClass =
  "mt-3 max-w-[26ch] text-sm leading-relaxed text-[var(--light)]";

const hoverEase = "ease-[cubic-bezier(0.22,1,0.36,1)]";

export default function BentoServicesGrid() {
  const shouldReduce = useReducedMotion();
  const initial = shouldReduce
    ? undefined
    : { opacity: 0, y: 8, filter: "blur(8px)" };
  const animate = shouldReduce
    ? undefined
    : { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-20">
      <div className="bento-grid">
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0 }}
          className="bento-tile bento-main radius-lg bg-[var(--dark)] bento-hover"
        >
          <div className="absolute left-6 top-6 text-xs uppercase tracking-[0.35em] text-[var(--light)] lg:left-10 lg:top-10">
            Studio
          </div>
          <div className="absolute left-6 bottom-6 lg:left-10 lg:bottom-10">
            <span className="display text-3xl text-white sm:text-4xl">
              InnerSpace
            </span>
            <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-[var(--light)]">
              Calm, durable digital products shaped with care and precision.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={initial}
          animate={animate}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className={`bento-tile bento-work radius-md bg-[var(--mid)] bento-hover group`}
        >
          <div
            className={`absolute left-6 bottom-6 transition-opacity duration-[350ms] ${hoverEase} group-hover:opacity-0 lg:left-10 lg:bottom-10`}
          >
            <span className={labelClass}>Work</span>
            <p className={supportClass}>
              A few recent builds and product launches.
            </p>
          </div>
          <HoverTicker
            text="See what we’ve shipped —"
            duration={12}
            className={`absolute left-6 right-6 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-[450ms] ${hoverEase} group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 lg:left-10 lg:right-10`}
            textClassName="text-[34px] text-white sm:text-[40px]"
          />
        </motion.div>

        <motion.div
          initial={initial}
          animate={animate}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className={`bento-tile bento-learn radius-md bg-[var(--dark)] bento-hover group`}
        >
          <div
            className={`absolute left-6 bottom-6 transition-opacity duration-[350ms] ${hoverEase} group-hover:opacity-0 lg:left-10 lg:bottom-10`}
          >
            <span className={labelClass}>Learn</span>
            <p className={supportClass}>How we think, design, and deliver.</p>
          </div>
          <HoverTicker
            text="Learn how we work —"
            duration={13}
            className={`absolute left-6 right-6 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-[450ms] ${hoverEase} group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 lg:left-10 lg:right-10`}
            textClassName="text-[34px] text-white sm:text-[40px]"
          />
        </motion.div>

        <motion.div
          initial={initial}
          animate={animate}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className={`bento-tile bento-contact radius-lg bg-[var(--mid)] bento-hover group`}
          id="contact"
        >
          <div
            className={`absolute left-6 bottom-6 transition-opacity duration-[350ms] ${hoverEase} group-hover:opacity-0 lg:left-10 lg:bottom-10`}
          >
            <span className={labelClass}>Contact us</span>
            <p className={supportClass}>Have a project? Let’s chat.</p>
          </div>
          <HoverTicker
            text="Let’s talk business —"
            duration={14}
            className={`absolute left-6 right-6 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-[450ms] ${hoverEase} group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 lg:left-10 lg:right-10`}
            textClassName="text-[36px] text-white sm:text-[42px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
