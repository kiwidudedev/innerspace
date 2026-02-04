export default function AboutUsPage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-140px)] max-w-[1440px] flex-col px-6 pb-16 pt-8 sm:pt-6">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="display text-[48px] uppercase tracking-[0.02em] text-[#1C1C1C] sm:text-[96px] md:text-[120px] lg:text-[150px]">
          Our Approach
        </h1>
        <p className="mt-4 max-w-[60ch] text-[10px] uppercase tracking-[0.28em] text-[#7A7A7A] sm:mt-6 sm:text-xs sm:tracking-[0.45em]">
          A studio focused on thoughtful design, clean code, and durable digital
          products.
        </p>
      </div>
    </section>
  );
}
