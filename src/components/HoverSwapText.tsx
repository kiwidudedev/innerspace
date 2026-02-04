"use client";

interface HoverSwapTextProps {
  primary: string;
  secondary: string;
  className?: string;
  secondaryClassName?: string;
  align?: "left" | "center";
}

export default function HoverSwapText({
  primary,
  secondary,
  className = "",
  secondaryClassName = "",
  align = "left",
}: HoverSwapTextProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div
      className={`hover-swap-wrapper relative overflow-hidden leading-none ${alignClass} ${className}`.trim()}
      style={{ height: "1.1em" }}
    >
      <div className="hover-swap-track flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[100%] group-focus-visible:-translate-y-[100%]">
        <span>{primary}</span>
        <span className={secondaryClassName}>{secondary}</span>
      </div>
    </div>
  );
}
