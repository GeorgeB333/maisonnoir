const items = [
  "Strategie",
  "Design",
  "Identitate",
  "Frontend",
  "Copywriting",
  "Animație",
  "Lansare",
  "Mentenanță",
];

export function Marquee() {
  return (
    <section className="group relative overflow-hidden border-y border-border/40 py-7 md:py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-48 bg-gradient-to-r from-[#0a0a09] via-[#0a0a09]/85 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-48 bg-gradient-to-l from-[#0a0a09] via-[#0a0a09]/85 to-transparent" />
      <div className="marquee-track flex whitespace-nowrap will-change-transform [animation-play-state:running] hover:[animation-play-state:paused]">
        {[...items, ...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-12 px-8 font-display text-[clamp(1.4rem,3vw,2.4rem)] font-light tracking-[-0.02em]"
          >
            <span className="text-foreground/90">{item}</span>
            <span className="italic-serif text-champagne">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}
