"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-12 border-t border-white/10"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/innerspace-logo.jpg"
            alt="Innerspace"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="text-sm font-semibold text-[var(--offwhite)]">
            Innerspace Studio
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-[var(--grey)]">
          <Link href="#services" className="hover:text-[var(--offwhite)]">
            Services
          </Link>
          <Link href="#work" className="hover:text-[var(--offwhite)]">
            Work
          </Link>
          <Link href="#contact" className="hover:text-[var(--offwhite)]">
            Contact
          </Link>
        </div>
        <span className="text-xs text-[var(--grey)]">
          © 2026 Innerspace. All rights reserved.
        </span>
      </div>
    </motion.footer>
  );
}
