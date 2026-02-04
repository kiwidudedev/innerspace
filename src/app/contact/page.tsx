export default function ContactPage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-140px)] max-w-[1440px] flex-col px-6 pb-16 pt-6">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-[#7A7A7A]">
          Contact
        </p>
        <h1 className="display mt-6 text-[64px] uppercase tracking-[0.02em] text-[#1C1C1C] sm:text-[96px] md:text-[120px] lg:text-[150px]">
          Let’s Talk
        </h1>
        <p className="mt-6 max-w-[46ch] text-xs uppercase tracking-[0.45em] text-[#7A7A7A]">
          Tell us about your project and we’ll respond shortly.
        </p>
        <a
          href="mailto:hello@innerspace.studio"
          className="mt-10 text-sm uppercase tracking-[0.35em] text-[#1C1C1C] hero-underline"
        >
          hello@innerspace.studio
        </a>
      </div>
    </section>
  );
}
