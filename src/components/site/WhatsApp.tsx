export function WhatsApp() {
  return (
    <a
      href="https://wa.me/40757608679?text=Salut%2C%20a%C8%99%20vrea%20s%C4%83%20discut%C4%83m%20despre%20un%20proiect%20de%20site."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrie-ne pe WhatsApp"
      className="group fixed bottom-5 right-4 z-40 inline-flex items-center gap-2.5 rounded-full border border-border/50 bg-background/85 py-1.5 pl-1.5 pr-4 text-foreground backdrop-blur-md transition-all duration-500 hover:border-champagne hover:bg-background/95 md:bottom-6 md:right-6 md:gap-3 md:py-2 md:pl-2 md:pr-5"
    >
      <span className="grid h-9 w-9 place-items-center rounded-full bg-champagne text-ink transition-transform duration-700 group-hover:rotate-45">
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
          <path
            d="M4 12L12 4M6 4h6v6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-mono text-[10.5px] uppercase tracking-[0.22em]">Scrie-ne pe WhatsApp</span>
    </a>
  );
}
