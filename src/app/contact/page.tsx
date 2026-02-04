export default function ContactPage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-140px)] max-w-[1440px] flex-col px-6 pb-16 pt-8 sm:pt-6">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#7A7A7A] sm:text-xs sm:tracking-[0.5em]">
          Contact
        </p>
        <h1 className="display mt-4 text-[48px] uppercase tracking-[0.02em] text-[#1C1C1C] sm:mt-6 sm:text-[96px] md:text-[120px] lg:text-[150px]">
          <span className="hero-underline">Let’s Talk</span>
        </h1>
        <p className="mt-4 max-w-[46ch] text-[10px] uppercase tracking-[0.28em] text-[#7A7A7A] sm:mt-6 sm:text-xs sm:tracking-[0.45em]">
          Tell us about your project and we’ll respond shortly.
        </p>
        <a
          href="mailto:hello@innerspace.studio"
          className="mt-8 text-[11px] uppercase tracking-[0.3em] text-[#1C1C1C] hero-underline sm:mt-10 sm:text-sm sm:tracking-[0.35em]"
        >
          hello@innerspace.studio
        </a>
      </div>
    </section>
  );
}
