export function Footer() {
  return (
    <footer className="section-cv relative overflow-hidden px-5 pt-16 pb-24 md:px-10 md:pt-20 md:pb-10">
      <div className="mx-auto max-w-[1600px]">
        {/* Meta row */}
        <div className="grid grid-cols-12 gap-x-8 gap-y-12 border-t border-border/40 pt-12">
          <div className="col-span-6 md:col-span-2">
            <span className="label">Navigare</span>
            <ul className="mt-5 space-y-3 text-[14px] text-bone/85">
              <li><a className="link-reveal" href="#studio">Studio</a></li>
              <li><a className="link-reveal" href="#services">Servicii</a></li>
              <li><a className="link-reveal" href="#process">Proces</a></li>
              <li><a className="link-reveal" href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <span className="label">Contact direct</span>
            <ul className="mt-5 space-y-3 text-[14px] text-bone/85">
              <li>
                <a className="link-reveal" href="mailto:studio@maisonnoir.ro">
                  studio@maisonnoir.ro
                </a>
              </li>
              <li><a className="link-reveal" href="tel:+40757608679">+40 757 608 679</a></li>
              <li><a className="link-reveal" href="https://wa.me/40757608679" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li className="text-silver/70">Bucuresti, RO · GMT+2</li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <span className="label">Disponibilitate</span>
            <div className="mt-5 flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-champagne/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-champagne" />
              </span>
              <span className="text-[14px] text-bone">Liber pentru 2 proiecte · Q2 2026</span>
            </div>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="relative mt-16 overflow-hidden md:mt-20">
          <div className="font-display text-[clamp(4rem,17vw,20rem)] leading-[0.82] tracking-[-0.055em] text-foreground/95 select-none">
            Maison <span className="italic-serif text-champagne">Noir.</span>
          </div>
          {/* Soft glow under wordmark */}
          <div className="pointer-events-none absolute inset-x-[10%] -bottom-10 h-32 rounded-full bg-champagne/8 blur-3xl" />
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-border/40 pt-6 font-mono text-[10.5px] uppercase tracking-[0.22em] text-silver/70 md:flex-row md:items-center">
          <span>© 2026 · Maison Noir · Toate drepturile rezervate</span>
          <span>Bucureşti · România</span>
        </div>
      </div>
    </footer>
  );
}
