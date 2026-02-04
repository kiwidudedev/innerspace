"use client";

interface MarqueeProps {
  text: string;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export default function Marquee({
  text,
  speed = 22,
  direction = "left",
  className = "",
}: MarqueeProps) {
  const directionClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className={`overflow-hidden ${className}`.trim()}>
      <div
        className={`flex w-max whitespace-nowrap ${directionClass} font-display tracking-tight`.trim()}
        style={{ animationDuration: `${speed}s` }}
      >
        <span className="mr-12">{text}</span>
        <span className="mr-12">{text}</span>
        <span className="mr-12">{text}</span>
      </div>
    </div>
  );
}
