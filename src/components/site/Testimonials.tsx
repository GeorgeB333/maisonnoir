import { motion } from "motion/react";

// — Custom step visuals (minimal editorial blueprints) —

const VisualDesign = () => (
  <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
    <defs>
      <pattern id="dot-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.6" fill="currentColor" opacity="0.25" />
      </pattern>
    </defs>
    <rect width="400" height="400" fill="url(#dot-grid)" className="text-silver" />
    {/* Figma-like frame */}
    <rect x="60" y="80" width="280" height="240" stroke="currentColor" strokeWidth="0.8" className="text-bone/40" />
    <rect x="60" y="80" width="280" height="22" fill="currentColor" className="text-bone/8" />
    <circle cx="74" cy="91" r="2.5" className="fill-champagne" />
    <circle cx="86" cy="91" r="2.5" className="fill-bone/30" />
    <circle cx="98" cy="91" r="2.5" className="fill-bone/30" />
    {/* Inside */}
    <rect x="80" y="124" width="160" height="14" className="fill-bone/85" />
    <rect x="80" y="148" width="100" height="6" className="fill-bone/30" />
    <rect x="80" y="162" width="140" height="6" className="fill-bone/30" />
    <rect x="80" y="200" width="80" height="80" className="fill-champagne/85" />
    <rect x="172" y="200" width="148" height="80" stroke="currentColor" strokeWidth="0.6" className="text-bone/40" />
    {/* Cursor */}
    <g transform="translate(248 218)">
      <path d="M0 0 L0 16 L4 12 L7 19 L10 18 L7 11 L13 11 Z" className="fill-champagne stroke-ink" strokeWidth="0.6" />
    </g>
    {/* Annotation lines */}
    <line x1="60" y1="80" x2="40" y2="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="text-champagne/60" />
    <circle cx="40" cy="60" r="2" className="fill-champagne" />
    <text x="20" y="50" className="fill-champagne" fontSize="8" fontFamily="JetBrains Mono">01.A</text>
  </svg>
);

const VisualFrontend = () => (
  <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
    {/* Code lines on left */}
    <g transform="translate(40 90)">
      {[
        { w: 60, indent: 0 },
        { w: 110, indent: 12 },
        { w: 80, indent: 24 },
        { w: 130, indent: 24 },
        { w: 70, indent: 12 },
        { w: 50, indent: 12 },
        { w: 100, indent: 0 },
        { w: 90, indent: 12 },
      ].map((line, i) => (
        <g key={i} transform={`translate(0 ${i * 22})`}>
          <text x="-12" y="6" className="fill-silver/40" fontSize="7" fontFamily="JetBrains Mono">
            {String(i + 1).padStart(2, "0")}
          </text>
          <rect x={line.indent} y="0" width={line.w} height="7" className="fill-bone/65" rx="1" />
        </g>
      ))}
    </g>
    {/* Browser preview right */}
    <rect x="220" y="80" width="160" height="120" stroke="currentColor" strokeWidth="0.6" className="text-bone/40" />
    <rect x="220" y="80" width="160" height="14" className="fill-bone/8" />
    <circle cx="230" cy="87" r="1.6" className="fill-champagne" />
    <circle cx="237" cy="87" r="1.6" className="fill-bone/30" />
    <rect x="232" y="108" width="80" height="8" className="fill-bone/85" />
    <rect x="232" y="122" width="60" height="3" className="fill-bone/30" />
    <rect x="232" y="130" width="100" height="3" className="fill-bone/30" />
    <rect x="232" y="148" width="40" height="40" className="fill-champagne/80" />
    <rect x="278" y="148" width="80" height="40" stroke="currentColor" strokeWidth="0.4" className="text-bone/30" />
    {/* Mobile preview */}
    <rect x="240" y="220" width="64" height="120" stroke="currentColor" strokeWidth="0.6" className="text-bone/40" rx="6" />
    <rect x="240" y="220" width="64" height="10" className="fill-bone/8" />
    <rect x="248" y="240" width="48" height="6" className="fill-bone/65" />
    <rect x="248" y="252" width="32" height="3" className="fill-bone/30" />
    <rect x="248" y="262" width="48" height="30" className="fill-champagne/70" />
    {/* Arrow from code to preview */}
    <path d="M180 130 Q 200 130 215 130" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" className="text-champagne" markerEnd="url(#arr)" />
    <defs>
      <marker id="arr" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto">
        <path d="M0 0 L8 4 L0 8 Z" className="fill-champagne" />
      </marker>
    </defs>
  </svg>
);

const VisualBackend = () => (
  <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
    {/* Central node */}
    <g transform="translate(200 200)">
      <circle r="44" stroke="currentColor" strokeWidth="0.6" className="text-bone/50" />
      <circle r="32" className="fill-bone/8" />
      <circle r="32" stroke="currentColor" strokeWidth="0.5" className="text-champagne/70" />
      <text textAnchor="middle" y="-3" className="fill-bone" fontSize="10" fontFamily="Fraunces">core</text>
      <text textAnchor="middle" y="12" className="fill-silver/70" fontSize="7" fontFamily="JetBrains Mono">SYSTEM</text>
    </g>
    {/* Surrounding nodes */}
    {[
      { x: 80, y: 90, label: "Forms" },
      { x: 320, y: 100, label: "WhatsApp" },
      { x: 70, y: 280, label: "CMS" },
      { x: 330, y: 290, label: "Analytics" },
      { x: 200, y: 60, label: "Auth" },
      { x: 200, y: 340, label: "DB" },
    ].map((n) => (
      <g key={n.label}>
        <line
          x1={n.x}
          y1={n.y}
          x2="200"
          y2="200"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 3"
          className="text-bone/30"
        />
        <circle cx={n.x} cy={n.y} r="14" className="fill-background" />
        <circle cx={n.x} cy={n.y} r="14" stroke="currentColor" strokeWidth="0.6" className="text-champagne/60" />
        <circle cx={n.x} cy={n.y} r="3" className="fill-champagne" />
        <text
          x={n.x}
          y={n.y + 28}
          textAnchor="middle"
          className="fill-bone/80"
          fontSize="8"
          fontFamily="JetBrains Mono"
        >
          {n.label.toUpperCase()}
        </text>
      </g>
    ))}
    {/* Pulse circles */}
    <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.4" className="text-champagne/30" />
    <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="0.3" className="text-champagne/20" />
  </svg>
);

const VisualLaunch = () => (
  <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
    {/* Horizon line */}
    <line x1="0" y1="280" x2="400" y2="280" stroke="currentColor" strokeWidth="0.6" className="text-bone/30" />
    {/* Trajectory arc */}
    <path
      d="M 50 280 Q 200 50 350 130"
      stroke="currentColor"
      strokeWidth="0.7"
      strokeDasharray="3 4"
      className="text-champagne/70"
      fill="none"
    />
    {/* Milestones */}
    {[
      { x: 50, y: 280, l: "Build" },
      { x: 145, y: 175, l: "Deploy" },
      { x: 245, y: 110, l: "DNS" },
      { x: 350, y: 130, l: "Live" },
    ].map((m, i) => (
      <g key={m.l}>
        <circle cx={m.x} cy={m.y} r="5" className={i === 3 ? "fill-champagne" : "fill-bone/85"} />
        <circle cx={m.x} cy={m.y} r="10" stroke="currentColor" strokeWidth="0.4" className={i === 3 ? "text-champagne" : "text-bone/40"} />
        <text x={m.x} y={m.y - 18} textAnchor="middle" className="fill-bone/85" fontSize="9" fontFamily="JetBrains Mono">
          {m.l.toUpperCase()}
        </text>
      </g>
    ))}
    {/* Final pulse on Live */}
    <circle cx="350" cy="130" r="18" stroke="currentColor" strokeWidth="0.4" className="text-champagne/40" />
    <circle cx="350" cy="130" r="26" stroke="currentColor" strokeWidth="0.3" className="text-champagne/25" />
    {/* SEO/Google indicator */}
    <g transform="translate(60 330)">
      <text className="fill-silver/60" fontSize="8" fontFamily="JetBrains Mono">google.com/search</text>
      <rect x="0" y="6" width="280" height="22" stroke="currentColor" strokeWidth="0.5" className="text-bone/30" />
      <rect x="6" y="12" width="50" height="4" className="fill-champagne" />
      <rect x="6" y="20" width="120" height="3" className="fill-bone/50" />
      <text x="240" y="22" className="fill-champagne" fontSize="7" fontFamily="JetBrains Mono">#1</text>
    </g>
  </svg>
);

// — Step icons —
const IconA = () => (
  <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.1">
    <rect x="5" y="5" width="22" height="22" />
    <line x1="5" y1="13" x2="27" y2="13" />
    <line x1="13" y1="13" x2="13" y2="27" />
    <circle cx="20" cy="20" r="3.5" />
  </svg>
);
const IconB = () => (
  <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.1">
    <path d="M11 9 L4 16 L11 23" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 9 L28 16 L21 23" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="18.5" y1="6" x2="13.5" y2="26" strokeLinecap="round" />
  </svg>
);
const IconC = () => (
  <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.1">
    <ellipse cx="16" cy="8" rx="10" ry="3.5" />
    <path d="M6 8 V16 C 6 18, 10.5 19.5, 16 19.5 S 26 18, 26 16 V8" />
    <path d="M6 16 V24 C 6 26, 10.5 27.5, 16 27.5 S 26 26, 26 24 V16" />
  </svg>
);
const IconD = () => (
  <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.1">
    <circle cx="16" cy="16" r="11" />
    <ellipse cx="16" cy="16" rx="11" ry="4.5" />
    <line x1="5" y1="16" x2="27" y2="16" />
    <path d="M16 5 C 12 9, 12 23, 16 27 M16 5 C 20 9, 20 23, 16 27" />
  </svg>
);

const steps = [
  {
    n: "01",
    label: "Etapa unu",
    title: "Design & Strategie",
    tagline: "Punem ordine.",
    summary:
      "Începem în Figma, dar nu de la culori. Întâi structura, ierarhia și mesajul. Apoi forma — făcută pe măsura ta, nu pe șablon.",
    bullets: [
      "Audit și direcție creativă",
      "Wireframe și flux prin pagini",
      "Sistem vizual și tipografie",
      "Machete finale în Figma",
    ],
    duration: "1–2 zile",
    deliverable: "Fișier Figma · design system",
    icon: <IconA />,
    visual: <VisualDesign />,
  },
  {
    n: "02",
    label: "Etapa doi",
    title: "Frontend Development",
    tagline: "Le punem să se miște.",
    summary:
      "Transform designul în cod. Rapid, responsive, fluid pe mobil ca pe desktop. Animații cât trebuie, nu efecte pentru efecte.",
    bullets: [
      "React + Vite · cod curat",
      "Animații Motion · 60 fps",
      "Responsive pixel-perfect",
      "Lighthouse 95+ la lansare",
    ],
    duration: "3–5 zile",
    deliverable: "Site funcțional · cod predat",
    icon: <IconB />,
    visual: <VisualFrontend />,
  },
  {
    n: "03",
    label: "Etapa trei",
    title: "Backend & Funcționalități",
    tagline: "Punem motorul.",
    summary:
      "Conectăm partea tehnică: formulare, WhatsApp, analytics, administrarea conținutului. Totul stabil și ușor de operat după predare.",
    bullets: [
      "Formulare și automatizări email",
      "WhatsApp · Analytics · SEO de bază",
      "CMS pentru administrarea conținutului",
      "Securitate și viteză",
    ],
    duration: "1–2 zile",
    deliverable: "Sisteme integrate · documentate",
    icon: <IconC />,
    visual: <VisualBackend />,
  },
  {
    n: "04",
    label: "Etapa finală",
    title: "Lansare & Vizibilitate",
    tagline: "Ieși în lume.",
    summary:
      "Punem site-ul online și îl pregătim să fie găsit. Domeniu, hosting, SEO și măsurarea rezultatelor — ca să nu ratezi oamenii care te caută.",
    bullets: [
      "Domeniu și hosting",
      "SEO tehnic și metadata",
      "Search Console și Analytics",
      "Predare și instructaj pentru echipă",
    ],
    duration: "1–2 zile",
    deliverable: "Site live · manual de operare",
    icon: <IconD />,
    visual: <VisualLaunch />,
  },
];

export function Testimonials() {
  return (
    <section id="process" className="section-cv relative px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
          <div className="col-span-12 flex items-center justify-between">
            <span className="label-champagne">03 — Proces</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 mt-6 md:col-span-10"
          >
            <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.035em]">
              De la{" "}
              <span className="italic-serif text-champagne">pagină albă</span>{" "}
              <span className="text-silver/55">la site live.</span>{" "}
              <span className="text-silver/55">Patru pași clari.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="col-span-12 md:col-span-7"
          >
            <p className="max-w-[60ch] text-[16.5px] leading-[1.75] text-bone/85">
              Fiecare proiect urmează același traseu. Patru etape, livrabile concrete, fără
              surprize. Știi mereu unde suntem și ce urmează — total: <span className="text-bone">1–2 săptămâni</span>.
            </p>
          </motion.div>
        </div>

        {/* Blueprint connector */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="mt-16 hidden md:block"
        >
          <div className="relative">
            <svg viewBox="0 0 1200 60" className="w-full" preserveAspectRatio="none">
              <line
                x1="60"
                y1="30"
                x2="1140"
                y2="30"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="3 4"
                className="text-bone/30"
              />
            </svg>
            <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-[5%]">
              {steps.map((s) => (
                <div key={s.n} className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <div className="h-2 w-2 rounded-full bg-background" />
                    <div className="absolute inset-0 -m-1 rounded-full border border-champagne/50" />
                    <div className="absolute inset-0 rounded-full bg-champagne" />
                  </div>
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.24em] text-silver/70">
                    {s.n}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Steps — zigzag editorial */}
        <div className="mt-20 space-y-24 md:mt-20 md:space-y-28">
          {steps.map((step, index) => {
            const reverse = index % 2 === 1;
            return (
              <motion.article
                key={step.n}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="group grid grid-cols-12 gap-x-8 gap-y-12"
              >
                {/* Visual side */}
                <div
                  className={`col-span-12 md:col-span-6 ${
                    reverse ? "md:col-start-7 md:row-start-1" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border/40 bg-[oklch(0.13_0.005_85)]">
                    {/* Inner padding frame */}
                    <div className="absolute inset-0 p-4">
                      <div className="relative h-full w-full overflow-hidden">
                        <div className="absolute inset-0 transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.025]">
                          {step.visual}
                        </div>
                      </div>
                    </div>
                    {/* Corner ticks */}
                    <span className="absolute left-2 top-2 h-3 w-3 border-l border-t border-champagne/60" />
                    <span className="absolute right-2 top-2 h-3 w-3 border-r border-t border-champagne/60" />
                    <span className="absolute left-2 bottom-2 h-3 w-3 border-l border-b border-champagne/60" />
                    <span className="absolute right-2 bottom-2 h-3 w-3 border-r border-b border-champagne/60" />
                    {/* Step badge */}
                    <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-bone/20 bg-background/70 px-3 py-1 backdrop-blur-md">
                      <span className="dot-mark" />
                      <span className="font-mono text-[9.5px] uppercase tracking-[0.24em] text-bone">
                        Etapa {step.n}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div
                  className={`col-span-12 md:col-span-5 ${
                    reverse ? "md:col-start-1 md:row-start-1" : "md:col-start-8"
                  }`}
                >
                  <div className="flex h-full flex-col justify-center">
                    <div className="flex items-center gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-full border border-champagne/40 text-champagne transition-all duration-700 group-hover:border-champagne group-hover:bg-champagne/5">
                        {step.icon}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-mono text-[9.5px] uppercase tracking-[0.28em] text-champagne/80">
                          {step.label}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-silver/55">
                          {step.n} / 04
                        </span>
                      </div>
                    </div>

                    <h3 className="mt-8 font-display text-[clamp(2rem,4.5vw,3.6rem)] leading-[0.98] tracking-[-0.03em]">
                      {step.title}
                    </h3>
                    <p className="mt-2 italic-serif text-2xl text-champagne/90 md:text-[1.7rem]">
                      {step.tagline}
                    </p>

                    <div className="hairline mt-8 w-12" />

                    <p className="mt-8 max-w-[48ch] text-[15.5px] leading-[1.75] text-bone/85">
                      {step.summary}
                    </p>

                    <ul className="mt-10 space-y-3">
                      {step.bullets.map((b) => (
                        <li
                          key={b}
                          className="group/item flex items-center gap-4 border-b border-border/30 pb-2.5 text-[13.5px] text-foreground/90"
                        >
                          <span className="font-mono text-[10px] tracking-[0.18em] text-champagne/70">
                            ↳
                          </span>
                          <span className="transition-transform duration-500 group-hover/item:translate-x-1">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10 grid grid-cols-2 gap-6">
                      <div>
                        <div className="label mb-1.5">Durată</div>
                        <div className="font-display text-lg leading-snug tracking-tight text-bone">
                          {step.duration}
                        </div>
                      </div>
                      <div>
                        <div className="label mb-1.5">Livrabil</div>
                        <div className="font-display text-lg leading-snug tracking-tight text-bone">
                          {step.deliverable}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Outro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1 }}
          className="mt-24 grid grid-cols-12 items-end gap-x-8 gap-y-8 border-t border-border/40 pt-12 md:mt-28"
        >
          <div className="col-span-12 md:col-span-8">
            <span className="label-champagne">Rezultatul final</span>
            <p className="mt-5 max-w-[36ch] font-display text-3xl leading-[1.1] tracking-[-0.02em] text-bone md:text-[2.4rem]">
              Un site live, făcut bine,{" "}
              <span className="italic-serif text-champagne">gata să-și facă treaba.</span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <a href="#contact" className="btn-ghost">
              Începe un proiect <span className="btn-arrow">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
