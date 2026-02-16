export default function ProjectsPage() {
  const projects = [
    {
      id: "placeholder-2",
      title: "Lombok Surf School - Booking Engine",
      image: "/Lombok%20Surf%20School.jpg",
      url: "https://lombok-surf-school.vercel.app/",
      isPlaceholder: false,
      fitClass: "object-contain inset-0",
    },
    {
      id: "placeholder-1",
      title: "Stirling & Stone - Architecture Firm",
      image: "/Stirling%20%26%20Stone.jpg",
      url: "https://sterling-stone-two.vercel.app/",
      isPlaceholder: false,
      fitClass: "object-contain inset-0",
    },
    {
      id: "straightline",
      title: "Straightline Construction - Construction Company",
      image: "/straightlineconstruction.jpg",
      isPlaceholder: false,
      fitClass: "object-cover object-[2%_center]",
    },
    {
      id: "placeholder-5",
      title: "Salty Beast - Ecommerce website",
      image: "/Salty%20Beast.jpg",
      isPlaceholder: false,
      fitClass: "object-contain inset-0",
    },
    {
      id: "placeholder-6",
      title: "Floatly - Ecommerce website",
      image: "/Floatly.jpg",
      isPlaceholder: false,
      fitClass: "object-contain inset-0",
    },
    {
      id: "placeholder-7",
      title: "Social Sundee - Marketing Agency",
      image: "/Social%20Sundee.jpg",
      isPlaceholder: false,
      fitClass: "object-contain inset-0",
    },
  ];
  const visibleProjects = projects.slice(0, 4);

  return (
    <section className="flex min-h-[calc(100vh-140px)] w-full flex-col pb-16 pt-8 sm:pt-6">
      <div className="flex flex-1 translate-y-[35px] flex-col items-center justify-center px-4 text-center sm:px-6">
        <h1 className="display text-[48px] uppercase tracking-[0.02em] text-[#1C1C1C] sm:text-[96px] md:text-[120px] lg:text-[150px]">
          <span className="hero-underline">Projects</span>
        </h1>
        <p className="mt-4 max-w-[48ch] text-[10px] uppercase tracking-[0.28em] text-[#7A7A7A] sm:mt-6 sm:text-xs sm:tracking-[0.45em]">
          A curated view of recent builds and launches.
        </p>
      </div>

      <div className="mt-10 grid w-full grid-cols-1 gap-4 px-[50px] sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:mt-20 lg:gap-6">
        {visibleProjects.map((project) => {
          const cardContent = project.isPlaceholder ? (
            <div className="flex aspect-[16/9] w-full items-center justify-center bg-[var(--bg)]">
              <div className="text-[9px] uppercase tracking-[0.3em] text-[#9A9A9A] sm:text-[10px] sm:tracking-[0.35em]">
                Coming Soon
              </div>
            </div>
          ) : (
            <div className="relative aspect-[16/9] w-full bg-[var(--bg)]">
              <img
                src={project.image}
                alt={project.title}
                className={`absolute inset-0 h-full w-full grayscale-[85%] opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 ${project.fitClass ?? "object-cover object-center"}`}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent px-4 pb-3 pt-8 text-left sm:px-5 sm:pb-4 sm:pt-10" />
            </div>
          );

          if (project.url) {
            return (
              <a
                key={project.id}
                href={project.url}
                className="group relative overflow-hidden rounded-lg bg-[var(--bg)] shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:rounded-2xl"
              >
                {cardContent}
              </a>
            );
          }

          return (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-[var(--bg)] shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:rounded-2xl"
            >
              {cardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}
