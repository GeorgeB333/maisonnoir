import { motion } from "motion/react";

const services = [
  {
    n: "01",
    title: "Strategie & Conținut",
    sub: "Punem ordine.",
    duration: "1–2 zile",
    suited: "Înainte de design",
    desc: "Înainte de orice ecran, decidem ce vinde site-ul, cui și cum. Mesajul, structura și fluxul prin pagini — la punct.",
    items: ["Audit", "Structură de pagini", "Wireframe", "Direcție de copy"],
  },
  {
    n: "02",
    title: "Design",
    sub: "Dăm formă.",
    duration: "3–4 zile",
    suited: "Inima proiectului",
    desc: "Un sistem vizual coerent, cu caracter, dar nu zgomotos. Făcut să țină ani — nu doar până la următoarea modă.",
    items: ["Direcție vizuală", "Tipografie", "UI Kit", "Microinteracțiuni"],
  },
  {
    n: "03",
    title: "Build & Lansare",
    sub: "Punem online.",
    duration: "2–3 zile",
    suited: "Etapa finală",
    desc: "Transformăm designul în cod curat și rapid. Pregătit pentru conținut real, modificări ulterioare și un trafic care va crește.",
    items: ["React + Vite", "Responsive complet", "Performanță", "Predare clară"],
  },
];

export function Services() {
  return (
    <section id="services" className="section-cv relative px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        {/* Head */}
        <div className="grid grid-cols-12 gap-x-8">
          <div className="col-span-12 flex items-center justify-between">
            <span className="label-champagne">02 — Servicii</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 mt-10 md:col-span-10"
          >
            <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] tracking-[-0.035em]">
              Nu facem doar design frumos.{" "}
              <span className="text-silver/55">
                Construim o prezență care îți aduce
              </span>{" "}
              <span className="italic-serif text-champagne">oamenii potriviți la masă.</span>
            </h2>

            <p className="mt-10 max-w-[58ch] text-[16.5px] leading-[1.7] text-bone/85">
              Pachet complet — de la strategie la lansare. Le poți lua pe toate trei, sau doar
              etapa de care ai nevoie. Total: <span className="text-bone">1–2 săptămâni</span>,
              de la <span className="text-bone">€200 / proiect</span>.
            </p>
          </motion.div>
        </div>

        {/* Services — vertical editorial list */}
        <div className="mt-20 md:mt-24">
          {services.map((service, index) => (
            <motion.article
              key={service.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid grid-cols-12 gap-x-8 gap-y-8 border-t border-border/40 py-14 transition-colors duration-700 hover:border-champagne/30 md:py-20"
            >
              <div className="col-span-12 md:col-span-2">
                <span className="index-num">{service.n} / 03</span>
                <div className="mt-4 hidden flex-col gap-2 md:flex">
                  <span className="label">{service.suited}</span>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-bone/80">
                    ⏱ {service.duration}
                  </span>
                </div>
              </div>

              <div className="col-span-12 md:col-span-5">
                <h3 className="font-display tracking-display text-[clamp(2rem,4.5vw,3.6rem)] leading-[0.98] transition-all duration-[800ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-2">
                  {service.title}
                  <span className="ml-3 inline-block translate-x-[-6px] opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-0 group-hover:opacity-100 italic-serif text-champagne">
                    ↗
                  </span>
                </h3>
                <p className="mt-3 italic-serif text-2xl text-champagne md:text-3xl">
                  {service.sub}
                </p>
              </div>

              <div className="col-span-12 md:col-span-5">
                <p className="max-w-[52ch] text-[16px] leading-[1.75] text-bone/85 md:text-[17px]">
                  {service.desc}
                </p>

                <div className="mt-10 space-y-3">
                  {service.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border-b border-border/30 pb-2.5"
                    >
                      <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/85">
                        <span className="dot-mark" />
                        {item}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-silver/55">
                        inclus
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-border/40" />
        </div>

        {/* Closing CTA — clear next step */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mt-16 grid grid-cols-12 items-center gap-x-8 gap-y-6"
        >
          <div className="col-span-12 md:col-span-7">
            <p className="font-display text-2xl leading-snug tracking-tight text-bone md:text-[1.75rem]">
              Nu ești sigur de unde să începi?{" "}
              <span className="italic-serif text-champagne">Scrie-ne două rânduri.</span>
            </p>
            <p className="mt-3 text-[14.5px] text-silver/80">
              Îți spunem gratuit ce ar avea sens pentru tine — fără presiune să cumperi ceva.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:text-right">
            <a href="#contact" className="btn-primary">
              Cere o conversație <span className="btn-arrow">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
