import { motion } from "motion/react";
import type { FormEvent } from "react";
import { useState } from "react";

function Field({
  label,
  type = "text",
  as = "input",
  name,
}: {
  label: string;
  type?: string;
  as?: "input" | "textarea";
  name: string;
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value.length > 0;
  const Comp = as;

  return (
    <label className="group relative block border-b border-border/50 pt-7 pb-3 transition-colors duration-500 focus-within:border-champagne md:pt-8 md:pb-4">
      <span
        className={`pointer-events-none absolute left-0 origin-left font-mono uppercase transition-all duration-500 ${
          active
            ? "top-0 text-[10px] tracking-[0.28em] text-champagne"
            : "top-7 text-[13px] tracking-[0.05em] text-silver/70 md:top-8"
        }`}
      >
        {label}
      </span>
      <Comp
        name={name}
        type={type}
        rows={as === "textarea" ? 4 : undefined}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="w-full resize-none bg-transparent text-[16px] text-foreground outline-none placeholder:text-transparent"
      />
    </label>
  );
}

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const entries = Object.fromEntries(form.entries());
    const subject = encodeURIComponent(
      `Cerere proiect — ${entries.company || entries.name || "site nou"}`,
    );
    const body = encodeURIComponent(
      [
        `Nume: ${entries.name || "-"}`,
        `Companie: ${entries.company || "-"}`,
        `Email: ${entries.email || "-"}`,
        `Buget estimativ: ${entries.budget || "-"}`,
        "",
        "Detalii proiect:",
        `${entries.message || "-"}`,
      ].join("\n"),
    );
    window.location.href = `mailto:studio@maisonnoir.ro?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-cv relative px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 flex items-center justify-between md:mb-16">
          <span className="label-champagne">04 — Contact</span>
        </div>

        <div className="grid grid-cols-12 gap-x-8 gap-y-16">
          {/* Left — invitation */}
          <div className="col-span-12 md:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[0.96] tracking-[-0.04em]"
            >
              Hai să facem <br />
              <span className="italic-serif text-champagne">ceva</span>{" "}
              <span className="text-silver/55">care să nu mai aibă</span>{" "}
              <span className="italic-serif">nevoie de scuze.</span>
            </motion.h2>

            <p className="mt-10 max-w-md text-[16.5px] leading-[1.7] text-bone/85">
              Lucrez cu oameni care au deja ceva bun de oferit, dar simt că online nu se vede încă
              pe măsură. Dacă te regăsești, scrie-mi.
            </p>

            <div className="mt-12 space-y-5 border-t border-border/40 pt-8">
              {[
                ["Potrivit dacă", "vrei să arăți altfel — mai clar, mai coerent, mai serios"],
                ["Tipuri de proiect", "site de prezentare, landing, portofoliu"],
                ["Buget de la", "€200 / proiect"],
                ["Disponibilitate", "ferestre limitate · Q2–Q3 2026"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-8">
                  <span className="label w-36 flex-shrink-0">{k}</span>
                  <span className="text-[15.5px] leading-snug text-bone/85">{v}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3">
              <a
                href="mailto:studio@maisonnoir.ro"
                className="font-display text-3xl tracking-tight md:text-4xl"
              >
                <span className="link-reveal">studio@maisonnoir.ro</span>
              </a>
              <a
                href="tel:+40727000000"
                className="font-mono text-[12px] uppercase tracking-[0.22em] text-silver hover:text-champagne"
              >
                <span className="link-reveal">+40 727 ··· ··· · WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="col-span-12 md:col-span-5 md:col-start-8"
          >
            <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
              <Field label="Numele tău" name="name" />
              <Field label="Companie / proiect" name="company" />
            </div>
            <Field label="Email" type="email" name="email" />
            <Field label="Buget estimativ" name="budget" />
            <Field label="Spune-mi pe scurt despre proiect" as="textarea" name="message" />

            <div className="mt-12 flex flex-col gap-5">
              <button type="submit" className="btn-primary w-full justify-center">
                Trimite mesajul <span className="btn-arrow">↗</span>
              </button>
              <p className="text-[12.5px] leading-relaxed text-silver/70">
                Răspund personal fiecărui mesaj. Nimic automat, nimic copy-paste.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
