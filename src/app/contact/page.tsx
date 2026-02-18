export default function ContactPage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-140px)] w-full max-w-[1440px] flex-col px-5 pb-16 pt-8 sm:px-6 sm:pt-6">
      <div className="flex flex-1 flex-col items-center text-center">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#7A7A7A] sm:text-xs sm:tracking-[0.5em]">
          Contact
        </p>
        <h1 className="display mt-4 text-[54px] uppercase tracking-[0.02em] text-[#1C1C1C] sm:mt-6 sm:text-[96px] md:text-[120px] lg:text-[150px]">
          Let&apos;s Talk
        </h1>
        <p className="mt-[40px] max-w-[90vw] text-[11px] uppercase tracking-[0.22em] text-[#7A7A7A] sm:max-w-[52ch] sm:text-xs sm:tracking-[0.45em]">
          Tell us about your project and we&apos;ll respond shortly.
        </p>

        <a
          href="mailto:hello@innerspace.nz"
          className="mt-8 text-[12px] uppercase tracking-[0.22em] text-[#1C1C1C] hero-underline sm:mt-10 sm:text-sm sm:tracking-[0.35em]"
        >
          hello@innerspace.nz
        </a>
      </div>
    </section>
  );
}
