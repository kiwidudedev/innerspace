export default function Home() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-140px)] max-w-[1440px] flex-col px-6 pb-16 pt-8 sm:pt-6">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#7A7A7A] sm:text-xs sm:tracking-[0.5em]">
          We Are
        </p>
        <h1 className="display mt-4 text-[52px] uppercase tracking-[0.02em] text-[#1C1C1C] sm:mt-6 sm:text-[110px] md:text-[140px] lg:text-[180px]">
          <span className="hero-underline">Innerspace</span>
        </h1>
        <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-[#7A7A7A] sm:mt-6 sm:text-xs sm:tracking-[0.45em]">
          A Progressive Web Development Studio
        </p>
      </div>
    </section>
  );
}
