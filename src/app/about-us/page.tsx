export default function AboutUsPage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-140px)] max-w-[1440px] flex-col px-6 pb-16 pt-8 sm:pt-6">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="display text-[48px] uppercase tracking-[0.02em] text-[#1C1C1C] sm:text-[96px] md:text-[120px] lg:text-[150px]">
          <span className="hero-underline">Our Approach</span>
        </h1>
        <div className="mt-4 w-full max-w-[92vw] border-y border-black py-3 sm:mt-6 sm:max-w-[1000px]">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#7A7A7A] sm:text-xs sm:tracking-[0.45em]">
            A studio focused on thoughtful design, clean code, and durable
            digital products.
          </p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-[#7A7A7A] sm:text-xs sm:tracking-[0.45em]">
            Innerspace is a product-focused web and app studio.
            <br />
            <br />
            We design and build digital products with clarity, restraint, and
            long-term durability — from high-end marketing websites to custom
            applications and internal tools.
            <br />
            <br />
            Unlike traditional agencies, we work hands-on from strategy through
            to code, ensuring every detail serves a purpose and nothing is built
            without intent.
          </p>
        </div>
      </div>
    </section>
  );
}
