import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const links = [
  { href: "#studio", label: "Studio", num: "01" },
  { href: "#services", label: "Servicii", num: "02" },
  { href: "#process", label: "Proces", num: "03" },
  { href: "#contact", label: "Contact", num: "04" },
];

export function Nav() {
  const [isCompact, setIsCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setIsCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  // Lock scroll when drawer open
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
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-all duration-700 ${
            isCompact
              ? "border-b border-border/40 bg-background/85 backdrop-blur-xl"
              : "border-b border-transparent"
          }`}
        >
          <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
            <a
              href="#top"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3"
            >
              <span className="font-display text-[20px] font-medium tracking-[-0.02em] md:text-[22px]">
                Maison Noir
                <span className="ml-px italic-serif text-champagne">,</span>
              </span>
            </a>

            <nav className="hidden items-center gap-9 md:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link group flex items-baseline gap-2"
                >
                  <span className="font-mono text-[10px] tracking-[0.22em] text-champagne/60">
                    {link.num}
                  </span>
                  <span className="font-mono text-[11.5px] uppercase tracking-[0.22em] text-foreground/85">
                    {link.label}
                  </span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2.5 md:flex">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-champagne/70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-champagne" />
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-silver">
                  BUC / {time}
                </span>
              </div>
              <a
                href="#contact"
                className="group hidden items-center gap-2.5 rounded-full border border-champagne/40 bg-champagne/[0.04] px-4 py-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground transition-all duration-500 hover:border-champagne hover:bg-champagne hover:text-ink md:inline-flex"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-champagne/70 group-hover:bg-ink/40" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-champagne group-hover:bg-ink" />
                </span>
                Incepe un proiect
                <span className="inline-block transition-transform duration-500 group-hover:rotate-45">
                  ↗
                </span>
              </a>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Inchide meniul" : "Deschide meniul"}
                aria-expanded={open}
                className="relative grid h-11 w-11 place-items-center rounded-full border border-border/50 bg-background/70 md:hidden"
              >
                <span className="relative block h-3 w-5">
                  <motion.span
                    animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 top-0 block h-px w-5 bg-foreground"
                  />
                  <motion.span
                    animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-0 left-0 block h-px w-5 bg-foreground"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
            />

            <div className="relative flex h-full w-full flex-col px-6 pb-10 pt-24">
              {/* Soft ambient glow */}
              <div className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-champagne/15 blur-3xl" />

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="mb-10 flex items-center justify-between"
              >
                <span className="label-champagne">Meniu</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-silver">
                  BUC / {time}
                </span>
              </motion.div>

              {/* Links - staggered */}
              <ul className="flex flex-col gap-2 border-t border-border/40 pt-6">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between border-b border-border/40 py-5 active:bg-champagne/[0.04]"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-[10.5px] tracking-[0.24em] text-champagne/70">
                          {link.num}
                        </span>
                        <span className="font-display text-[2.2rem] leading-none tracking-[-0.02em]">
                          {link.label}
                        </span>
                      </span>
                      <span className="italic-serif text-2xl text-champagne/70 transition-transform duration-500 group-active:translate-x-1">
                        ↗
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom area */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, delay: 0.45 }}
                className="mt-auto pt-12"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Incepe un proiect <span className="btn-arrow">↗</span>
                </a>

                <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-border/40 pt-6">
                  <a
                    href="mailto:studio@maisonnoir.ro"
                    className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone/85"
                  >
                    studio@maisonnoir.ro
                  </a>
                  <a
                    href="tel:+40727000000"
                    className="text-right font-mono text-[11px] uppercase tracking-[0.18em] text-bone/85"
                  >
                    +40 727 / / /
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
