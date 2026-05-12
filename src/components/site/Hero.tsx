import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsMobile(typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches);
    check();
    const mq = window.matchMedia("(max-width: 767px)");
    mq.addEventListener("change", check);
    return () => mq.removeEventListener("change", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Subtle parallax — disabled on mobile for performance
  const yHeadline = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -60]);
  const yBlobA = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 140]);
  const yBlobB = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -90]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.85], [1, isMobile ? 0.7 : 0.4]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative overflow-hidden px-5 pt-28 pb-20 md:px-10 md:pt-40 md:pb-28"
    >
      {/* Atmospheric blobs */}
      <motion.div
        style={{ y: yBlobA }}
        className="blob will-parallax -left-32 top-20 h-[280px] w-[280px] bg-champagne/20 md:-left-40 md:h-[420px] md:w-[420px]"
      />
      <motion.div
        style={{ y: yBlobB }}
        className="blob will-parallax right-[-120px] top-[40%] h-[320px] w-[320px] bg-champagne/10 md:right-[-180px] md:h-[520px] md:w-[520px]"
      />

      {/* Diagonal hairline ornament */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[6%] top-[18%] hidden h-[1px] w-40 origin-right rotate-[28deg] bg-gradient-to-l from-champagne/45 to-transparent md:block"
      />

      <div className="mx-auto max-w-[1600px]">
        {/* Headline — asymmetric editorial composition */}
        <motion.div
          style={{ y: yHeadline, opacity: opacityFade }}
          className="relative will-parallax"
        >
          <h1 className="font-display tracking-display-tight text-[13.5vw] leading-[0.92] md:text-[10.8vw] md:leading-[0.9]">
            <span className="block">
              <span className="word-mask">
                <span style={{ animationDelay: "0.15s" }}>Site-uri care</span>
              </span>{" "}
              <span className="word-mask">
                <span
                  style={{ animationDelay: "0.32s" }}
                  className="italic-serif text-champagne"
                >
                  arată
                </span>
              </span>
            </span>
            <span className="block md:pl-[8%]">
              <span className="word-mask">
                <span style={{ animationDelay: "0.5s" }} className="text-silver/55">
                  la fel de bine
                </span>
              </span>
            </span>
            <span className="block md:pl-[2%]">
              <span className="word-mask">
                <span style={{ animationDelay: "0.7s" }} className="text-silver/55">
                  ca
                </span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "0.85s" }} className="italic-serif">
                  munca din spate.
                </span>
              </span>
            </span>
          </h1>

          {/* Headline corner caption */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="absolute -right-2 -top-3 hidden flex-col items-end gap-1 md:flex"
          >
            <span className="font-mono text-[9.5px] uppercase tracking-[0.3em] text-champagne/70">
              ’26
            </span>
            <span className="h-8 w-px bg-gradient-to-b from-champagne/60 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Sub grid — asymmetric */}
        <div className="mt-20 grid grid-cols-12 gap-x-8 gap-y-12 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-5 md:col-start-1"
          >
            <div className="hairline-soft mb-9 w-20 draw-in" style={{ animationDelay: "1.2s" }} />
            <p className="max-w-[44ch] text-[17px] leading-[1.7] text-bone/90 md:text-[19px]">
              <span className="text-bone">Construim site-uri de prezentare</span> pentru
              ateliere, businessuri mici și profesioniști. Strategie, design și cod — făcute de
              aceeași mână, livrate în 1–2 săptămâni.
            </p>

            {/* Quick-scan service pills */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {["Strategie", "Design", "Frontend", "Lansare"].map((s, i) => (
                <span key={s} className="pill">
                  <span className="text-champagne">0{i + 1}</span>
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a href="#contact" className="btn-primary w-full justify-center sm:w-auto">
                Începe un proiect <span className="btn-arrow">↗</span>
              </a>
              <a href="#services" className="btn-ghost w-full justify-center sm:w-auto">
                Vezi cum lucrăm
              </a>
            </div>

            <p className="mt-6 font-mono text-[10.5px] uppercase tracking-[0.22em] text-silver/60">
              Buget de la €200 / proiect · Răspuns în 1–2 zile
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-5 md:col-start-8"
          >
            <div className="space-y-7">
              {[
                {
                  k: "Pentru cine",
                  v: "Ateliere, businessuri mici și profesioniști care vor să arate la nivelul muncii lor.",
                },
                {
                  k: "Cum lucrăm",
                  v: "Strategie, design și cod, făcute de același om. Fără ping-pong între echipe.",
                },
                {
                  k: "Disponibilitate",
                  v: "Două proiecte deodată. Locurile pentru Q2–Q3 2026 se închid din timp.",
                },
              ].map((s, i) => (
                <motion.div
                  key={s.k}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 1.45 + i * 0.1 }}
                  className="border-t border-border/40 pt-4"
                >
                  <div className="label mb-2">{s.k}</div>
                  <p className="text-[14.5px] leading-[1.65] text-bone/85">{s.v}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
      </div>
    </section>
  );
}
