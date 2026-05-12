import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

const links = [
  { href: "#studio", label: "Studio", num: "01" },
  { href: "#services", label: "Servicii", num: "02" },
  { href: "#process", label: "Proces", num: "03" },
  { href: "#contact", label: "Contact", num: "04" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function Nav() {
  const [isCompact, setIsCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");
  const [active, setActive] = useState<string>(links[0].href);
  const [hovered, setHovered] = useState<string | null>(null);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setIsCompact(v > 24));
  const stripHeight = useTransform(scrollY, [0, 120], [34, 0]);
  const stripOpacity = useTransform(scrollY, [0, 60, 120], [1, 0.4, 0]);

  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleTimeString("en-GB", {
        timeZone: "Europe/Bucharest",
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(t);
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  // Active section observer
  useEffect(() => {
    if (typeof window === "undefined") return;
    const ids = links.map((l) => l.href.slice(1));
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!targets.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.15 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        {/* — Edition strip — collapses elegantly on scroll — */}
        <motion.div
          style={{ height: stripHeight, opacity: stripOpacity }}
          className="overflow-hidden border-b border-champagne/[0.08]"
          aria-hidden="true"
        >
          <div className="mx-auto flex h-[34px] max-w-[1600px] items-center justify-between px-5 md:px-10">
            <div className="flex items-center gap-3 font-mono text-[9.5px] uppercase tracking-[0.32em] text-silver/70">
              <span>Edition Nº 01</span>
              <span className="hidden h-[1px] w-6 bg-champagne/30 md:block" />
              <span className="hidden md:inline">MMXXVI · Bucuresti</span>
            </div>
            <div className="hidden items-center gap-3 font-mono text-[9.5px] uppercase tracking-[0.32em] text-silver/70 md:flex">
              <span className="relative flex h-1 w-1">
                <span className="absolute inset-0 animate-ping rounded-full bg-champagne/60" />
                <span className="relative inline-flex h-1 w-1 rounded-full bg-champagne" />
              </span>
              <span>Studio deschis · Q3 / Q4 — 2 locuri</span>
            </div>
            <div className="font-mono text-[9.5px] uppercase tracking-[0.32em] text-silver/70">
              <span className="md:hidden">BUC</span>
              <span className="hidden md:inline">Index — 04 capitole</span>
            </div>
          </div>
        </motion.div>

        {/* — Main bar — */}
        <motion.div
          animate={{
            paddingTop: isCompact ? 12 : 18,
            paddingBottom: isCompact ? 12 : 18,
          }}
          transition={{ duration: 0.7, ease: EASE }}
          className={`relative transition-[background,border] duration-700 ${
            isCompact
              ? "border-b border-champagne/[0.09] bg-background/80 backdrop-blur-2xl"
              : "border-b border-transparent"
          }`}
        >
          {/* Hairline glow when compact */}
          <div
            className={`pointer-events-none absolute inset-x-0 -bottom-px h-px transition-opacity duration-700 ${
              isCompact ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(214,190,146,0.45) 50%, transparent)",
            }}
          />

          <div className="mx-auto grid max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-5 md:px-10">
            {/* Logo / brand */}
            <a
              href="#top"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3.5"
            >
              {/* Monogram mark */}
              <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-champagne/35 bg-gradient-to-b from-champagne/[0.07] to-transparent transition-all duration-700 group-hover:border-champagne/70">
                <span className="absolute inset-[2px] rounded-full border border-champagne/10" />
                <span className="font-display text-[14px] font-medium leading-none tracking-[-0.04em] text-foreground">
                  M
                  <span className="italic-serif text-champagne">n</span>
                </span>
              </span>

              <span className="flex flex-col leading-none">
                <span className="font-display text-[19px] font-medium tracking-[-0.03em] text-foreground md:text-[21px]">
                  Maison Noir
                  <span className="italic-serif text-champagne">,</span>
                </span>
                <span className="mt-[5px] hidden font-mono text-[8.5px] uppercase tracking-[0.34em] text-silver/65 md:inline">
                  Studio · Est. Bucuresti
                </span>
              </span>
            </a>

            {/* Center nav — magnetic sliding indicator */}
            <nav
              onMouseLeave={() => setHovered(null)}
              className="hidden items-center md:flex"
            >
              <ul className="relative flex items-center gap-1 rounded-full border border-border/40 bg-background/30 px-1.5 py-1.5 backdrop-blur-xl">
                {links.map((link) => {
                  const isActive = active === link.href;
                  const isHovered = hovered === link.href;
                  return (
                    <li key={link.href} className="relative">
                      <a
                        href={link.href}
                        onMouseEnter={() => setHovered(link.href)}
                        className="relative z-10 flex items-baseline gap-2 rounded-full px-4 py-2"
                      >
                        {isHovered && (
                          <motion.span
                            layoutId="nav-pill"
                            transition={{ duration: 0.5, ease: EASE }}
                            className="absolute inset-0 -z-10 rounded-full bg-champagne/[0.08]"
                          />
                        )}
                        <span
                          className={`font-mono text-[9px] tracking-[0.28em] transition-colors duration-500 ${
                            isActive ? "text-champagne" : "text-champagne/40"
                          }`}
                        >
                          {link.num}
                        </span>
                        <span
                          className={`font-mono text-[10.5px] uppercase tracking-[0.26em] transition-colors duration-500 ${
                            isActive
                              ? "text-foreground"
                              : "text-foreground/55 hover:text-foreground/90"
                          }`}
                        >
                          {link.label}
                        </span>
                        {isActive && (
                          <motion.span
                            layoutId="nav-active-dot"
                            transition={{ duration: 0.6, ease: EASE }}
                            className="ml-1 h-[3px] w-[3px] rounded-full bg-champagne shadow-[0_0_8px_rgba(214,190,146,0.7)]"
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Right cluster */}
            <div className="flex items-center justify-end gap-4 md:gap-5">
              <div className="hidden items-center gap-2.5 md:flex">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-champagne/70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-champagne" />
                </span>
                <span className="font-mono text-[9.5px] uppercase tracking-[0.3em] text-silver/80">
                  BUC · {time}
                </span>
              </div>

              {/* Premium CTA — sculpted, mask-reveal label, champagne medallion */}
              <a
                href="#contact"
                className="nav-cta group hidden items-center md:inline-flex"
              >
                <span className="nav-cta-dot" aria-hidden="true">
                  <span className="nav-cta-dot-core" />
                </span>
                <span className="nav-cta-label" aria-label="Incepe un proiect">
                  <span className="nav-cta-label-track">
                    <span className="nav-cta-label-line">Incepe un proiect</span>
                    <span className="nav-cta-label-line" aria-hidden="true">
                      Incepe un proiect
                    </span>
                  </span>
                </span>
                <span className="nav-cta-rule" aria-hidden="true" />
                <span className="nav-cta-arrow" aria-hidden="true">
                  <span className="nav-cta-arrow-shine" />
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 9L9 2M9 2H3.5M9 2V7.5"
                      stroke="currentColor"
                      strokeWidth="1.1"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </a>

              {/* Mobile trigger */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Inchide meniul" : "Deschide meniul"}
                aria-expanded={open}
                className="group relative inline-flex h-11 items-center gap-3 rounded-full border border-champagne/30 bg-background/60 pl-4 pr-1.5 backdrop-blur-xl md:hidden"
              >
                <span className="font-mono text-[9.5px] uppercase tracking-[0.3em] text-foreground/90">
                  {open ? "Inchide" : "Meniu"}
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-champagne/10">
                  <span className="relative block h-2.5 w-3.5">
                    <motion.span
                      animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="absolute left-0 top-0 block h-px w-3.5 bg-champagne"
                    />
                    <motion.span
                      animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="absolute bottom-0 left-0 block h-px w-3.5 bg-champagne"
                    />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* ————————————————— Mobile drawer ————————————————— */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Layered backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-background/97 backdrop-blur-2xl"
            />

            {/* Diagonal sweep panel */}
            <motion.div
              initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              exit={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
              transition={{ duration: 0.75, ease: EASE }}
              className="relative flex h-full w-full flex-col px-6 pb-10 pt-24"
            >
              {/* Ambient glow */}
              <div className="pointer-events-none absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-champagne/[0.12] blur-[90px]" />
              <div className="pointer-events-none absolute -left-32 bottom-1/4 h-80 w-80 rounded-full bg-champagne/[0.06] blur-[100px]" />

              {/* Top meta row */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mb-8 flex items-center justify-between"
              >
                <span className="font-mono text-[9.5px] uppercase tracking-[0.32em] text-champagne/80">
                  Index — Nº 01 / 04
                </span>
                <span className="font-mono text-[9.5px] uppercase tracking-[0.32em] text-silver/70">
                  BUC · {time}
                </span>
              </motion.div>

              {/* Hairline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
                style={{
                  transformOrigin: "left",
                  background:
                    "linear-gradient(90deg, transparent, rgba(214,190,146,0.45) 50%, transparent)",
                }}
                className="h-px"
              />

              {/* Links */}
              <ul className="mt-8 flex flex-col">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.65,
                      delay: 0.35 + i * 0.08,
                      ease: EASE,
                    }}
                    className="border-b border-border/30"
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between py-6"
                    >
                      <span className="flex items-baseline gap-5">
                        <span className="font-mono text-[10px] tracking-[0.3em] text-champagne/70">
                          {link.num}
                        </span>
                        <span className="font-display text-[2.6rem] font-medium leading-none tracking-[-0.035em] text-foreground">
                          {link.label}
                          <span className="italic-serif ml-0.5 text-champagne/80">.</span>
                        </span>
                      </span>
                      <span className="italic-serif text-xl text-champagne/60 transition-transform duration-500 group-active:translate-x-1">
                        ↗
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom CTA + contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.65, delay: 0.7, ease: EASE }}
                className="mt-auto pt-12"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="nav-cta nav-cta--mobile group flex items-center justify-center"
                >
                  <span className="nav-cta-dot" aria-hidden="true">
                    <span className="nav-cta-dot-core" />
                  </span>
                  <span className="nav-cta-label" aria-label="Incepe un proiect">
                    <span className="nav-cta-label-track">
                      <span className="nav-cta-label-line">Incepe un proiect</span>
                      <span className="nav-cta-label-line" aria-hidden="true">
                        Incepe un proiect
                      </span>
                    </span>
                  </span>
                  <span className="nav-cta-rule" aria-hidden="true" />
                  <span className="nav-cta-arrow" aria-hidden="true">
                    <span className="nav-cta-arrow-shine" />
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path
                        d="M2 9L9 2M9 2H3.5M9 2V7.5"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>
                </a>

                <div className="mt-10 grid grid-cols-2 gap-y-3 border-t border-border/40 pt-7">
                  <span className="font-mono text-[8.5px] uppercase tracking-[0.32em] text-silver/60">
                    Studio
                  </span>
                  <span className="text-right font-mono text-[8.5px] uppercase tracking-[0.32em] text-silver/60">
                    Contact
                  </span>
                  <a
                    href="mailto:studio@maisonnoir.ro"
                    className="font-mono text-[11px] tracking-[0.04em] text-bone/90"
                  >
                    studio@maisonnoir.ro
                  </a>
                  <a
                    href="tel:+40727000000"
                    className="text-right font-mono text-[11px] tracking-[0.04em] text-bone/90"
                  >
                    +40 727 ··· ···
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
