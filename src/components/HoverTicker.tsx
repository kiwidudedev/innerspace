"use client";

interface HoverTickerProps {
  text: string;
  className?: string;
  duration?: number;
  textClassName?: string;
}

export default function HoverTicker({
  text,
  className = "",
  duration = 12,
  textClassName = "",
}: HoverTickerProps) {
  const segments = Array.from({ length: 6 }, () => text);

  return (
    <div className={`ticker-wrapper overflow-hidden ${className}`.trim()}>
      <div
        className={`ticker-track flex w-max whitespace-nowrap display ${textClassName}`.trim()}
        style={{ animationDuration: `${duration}s` }}
      >
        {segments.map((segment, index) => (
          <span key={`a-${index}`} className="mr-8">
            {segment}
          </span>
        ))}
        {segments.map((segment, index) => (
          <span key={`b-${index}`} className="mr-8">
            {segment}
          </span>
        ))}
      </div>
    </div>
  );
}
