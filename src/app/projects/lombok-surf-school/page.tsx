import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lombok Surf School Case Study",
  description:
    "Case study for the Lombok Surf School website experience and booking journey.",
};

export default function LombokSurfSchoolCaseStudyPage() {
  const galleryCards = [
    {
      alt: "Lombok Surf School website gallery image 1",
      src: "/lomboksurfhero1.jpg",
    },
    {
      alt: "Lombok Surf School website gallery image 2",
      src: "/lomboksurfbook.jpg",
    },
    {
      alt: "Lombok Surf School website gallery image 3",
      src: "/lombokcontact.png",
    },
    {
      alt: "Lombok Surf School website gallery image 4",
      src: "/lombokabout.png",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-[1440px] px-3 pb-14 pt-7 sm:px-6 sm:pb-16 sm:pt-10">
      <div className="mb-6 flex flex-col items-center justify-center text-center sm:mb-10">
        <h1 className="display text-[30px] uppercase tracking-[0.02em] text-[#1C1C1C] sm:text-[52px] md:text-[64px] lg:text-[78px]">
          <span className="hero-underline">Case Study</span>
        </h1>
      </div>

      <article className="mx-auto max-w-[1160px] overflow-hidden border border-[#A9A9A9] bg-[var(--bg)]">
        <div className="grid md:grid-cols-[1fr_1.35fr]">
          <div className="border-b border-[#A9A9A9] px-4 py-5 sm:px-8 sm:py-8 md:border-b-0 md:border-r">
            <h1 className="display text-[34px] uppercase leading-[0.9] tracking-[0.01em] text-[#1C1C1C] sm:text-[56px] md:text-[64px]">
              Lombok Surf
              <br />
              School
            </h1>
          </div>

          <div className="px-4 py-5 sm:px-8 sm:py-8">
            <p className="max-w-[64ch] text-[12px] leading-[1.7] text-[#4C4C4C] sm:text-[14px]">
              Lombok Surf School is a booking-focused website built to help new
              and returning surfers quickly find lesson options, compare
              packages, and secure sessions with confidence. The experience is
              designed to be clear and mobile-first, so users can move from
              discovery to booking without friction.
            </p>
            <p className="mt-3 max-w-[64ch] text-[12px] leading-[1.7] text-[#4C4C4C] sm:text-[14px]">
              The site combines bold visual storytelling with practical
              conversion structure, including clear calls to action, simplified
              navigation, and a streamlined path to reservation. The result is
              a modern surf-school presence that supports trust, clarity, and
              stronger booking intent.
            </p>
          </div>
        </div>
      </article>

      {galleryCards.map((card) => (
        <article
          key={card.alt}
          className="mx-auto mt-5 max-w-[1160px] overflow-hidden border border-[#A9A9A9] bg-[var(--bg)] sm:mt-8"
        >
          <div className="relative aspect-[16/7] w-full">
            <Image
              src={card.src}
              alt={card.alt}
              fill
              sizes="(min-width: 1160px) 1160px, (min-width: 640px) calc(100vw - 3rem), calc(100vw - 1.5rem)"
              className="object-contain bg-[#ECECEC]"
            />
          </div>
        </article>
      ))}

    </section>
  );
}
