"use client";

import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

const barColors = ["bg-dmn", "bg-cen", "bg-sal", "bg-dmn"];

export default function Languages({ dict }) {
  const { languages, ui } = dict;
  return (
    <section id="languages" className="relative z-10 mx-auto max-w-wrap px-7 py-24">
      <Reveal>
        <p className="text-sm uppercase tracking-[4px] text-muted">{ui.languagesKicker}</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          {ui.languagesHeading}
        </h2>
        <p className="mt-4 max-w-2xl text-muted">{languages.intro}</p>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {languages.items.map((l, i) => (
          <div key={l.lang}>
            <div className="flex items-baseline justify-between">
              <span className="font-display font-semibold">{l.lang}</span>
              <span className="text-sm text-muted">{l.level}</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className={`h-full rounded-full ${barColors[i] || "bg-cen"}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${l.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 * i, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
