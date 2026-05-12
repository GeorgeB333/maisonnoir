import { motion } from "motion/react";

const principles = [
  {
    n: "i.",
    title: "Claritate",
    copy: "Înainte să desenăm ceva, vrem să fie clar ce vinde site-ul, pentru cine și ce trebuie să facă omul mai departe. Restul vine de aici.",
  },
  {
    n: "ii.",
    title: "Poziționare",
    copy: "Felul cum arăți online schimbă cum ești perceput, cât de repede ești ales și ce preț poți cere fără să negociezi.",
  },
  {
    n: "iii.",
    title: "Execuție",
    copy: "Site-ul trebuie să fie curat, rapid și ușor de continuat — nu doar de impact în ziua lansării.",
  },
];

export function About() {
  return (
    <section id="studio" className="section-cv relative overflow-hidden px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        {/* Section head */}
        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          <div className="col-span-12 flex items-center justify-between md:col-span-12">
            <span className="label-champagne">01 — Studio</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-11 md:col-start-2"
          >
            <h2 className="font-display tracking-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02]">
              <span className="block">Un site bun nu doar arată bine.</span>
              <span className="block text-silver/55 md:pl-[6%]">
                Face oferta ușor de înțeles,
              </span>
              <span className="block text-silver/55 md:pl-[3%]">
                brandul greu de uitat{" "}
                <span className="italic-serif text-champagne">și decizia</span>
              </span>
              <span className="block italic-serif text-champagne md:pl-[10%]">simplă.</span>
            </h2>

            <p className="mt-10 max-w-[60ch] text-[15.5px] leading-[1.7] text-silver md:pl-[6%] md:text-[16.5px]">
              Pe scurt: design-ul nu e despre culori și fonturi. E despre cum te face oamenii să te
              vadă — și ce decid ei să facă mai departe.
            </p>
          </motion.div>
        </div>

        {/* Body — editorial two-column */}
        <div className="mt-20 grid grid-cols-12 gap-x-8 gap-y-12 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="col-span-12 md:col-span-4"
          >
            <div className="hairline-soft mb-9 w-16" />
            <p className="label mb-10">Cum lucrăm</p>
            <p className="drop-cap text-[17px] leading-[1.75] text-bone/88">
              Nu facem pagini umplute doar ca să pară pline. Preferăm mai puțin, dar mai bine —
              secțiuni clare, scrise cu intenție, așezate cu răbdare. Dacă faci lucruri bune,
              site-ul trebuie să le susțină, nu să le acopere.
            </p>
          </motion.div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <div className="space-y-px">
              {principles.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.95, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative grid grid-cols-12 gap-6 border-t border-border/40 py-8 transition-colors duration-500 hover:border-champagne/40 md:py-12"
                >
                  <div className="col-span-2 italic-serif text-[28px] text-champagne md:text-[32px]">
                    {item.n}
                  </div>
                  <div className="col-span-10">
                    <h3 className="font-display text-3xl leading-tight tracking-[-0.02em] transition-transform duration-700 group-hover:translate-x-2 md:text-[2.6rem]">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-[52ch] text-[15.5px] leading-[1.75] text-silver">
                      {item.copy}
                    </p>
                  </div>
                </motion.article>
              ))}
              <div className="border-t border-border/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
