export default function ProjectsPage() {
  const projects = [
    {
      id: "straightline",
      title: "Straightline Construction - Construction Company",
      image: "/straightlineconstruction.jpg",
      isPlaceholder: false,
      fitClass: "object-cover object-[2%_center]",
    },
    {
      id: "placeholder-1",
      title: "Stirling & Stone - Architecture Firm",
      image: "/Stirling%20%26%20Stone.jpg",
      isPlaceholder: false,
      fitClass: "object-contain inset-0",
    },
    {
      id: "placeholder-2",
      title: "Floatly - Ecommerce website",
      image: "/Floatly.jpg",
      isPlaceholder: false,
      fitClass: "object-contain inset-0",
    },
    {
      id: "placeholder-5",
      title: "Social Sundee - Marketing Agency",
      image: "/Social%20Sundee.jpg",
      isPlaceholder: false,
      fitClass: "object-contain inset-0",
    },
    {
      id: "placeholder-6",
      title: "Project Placeholder",
      image: "",
      isPlaceholder: true,
    },
    {
      id: "placeholder-7",
      title: "Project Placeholder",
      image: "",
      isPlaceholder: true,
    },
    {
      id: "placeholder-8",
      title: "Project Placeholder",
      image: "",
      isPlaceholder: true,
    },
    {
      id: "placeholder-9",
      title: "Project Placeholder",
      image: "",
      isPlaceholder: true,
    },
  ];

  return (
    <section className="mx-auto flex min-h-[calc(100vh-140px)] max-w-[1440px] flex-col px-4 pb-16 pt-8 sm:px-6 sm:pt-6">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="display text-[48px] uppercase tracking-[0.02em] text-[#1C1C1C] sm:text-[96px] md:text-[120px] lg:text-[150px]">
          <span className="hero-underline">Projects</span>
        </h1>
        <p className="mt-4 max-w-[48ch] text-[10px] uppercase tracking-[0.28em] text-[#7A7A7A] sm:mt-6 sm:text-xs sm:tracking-[0.45em]">
          A curated view of recent builds and launches.
        </p>
      </div>

      <div className="mx-auto mt-10 grid w-full max-w-[1100px] grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:mt-20 lg:gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-lg bg-[var(--bg)] shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:rounded-2xl"
          >
            {project.isPlaceholder ? (
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
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent px-4 pb-3 pt-8 text-left sm:px-5 sm:pb-4 sm:pt-10">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-white/90 sm:text-xs sm:tracking-[0.35em]">
                    {project.title}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
