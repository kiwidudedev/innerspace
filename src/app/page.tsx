export default function Home() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-140px)] max-w-[1440px] flex-col px-6 pb-16 pt-6">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-[#7A7A7A]">
          We Are
        </p>
        <h1 className="display mt-6 text-[72px] uppercase tracking-[0.02em] text-[#1C1C1C] sm:text-[110px] md:text-[140px] lg:text-[180px]">
          <span className="hero-underline">Innerspace</span>
        </h1>
        <p className="mt-6 text-xs uppercase tracking-[0.45em] text-[#7A7A7A]">
          A Progressive Web Development Studio
        </p>
      </div>
    </section>
  );
}
