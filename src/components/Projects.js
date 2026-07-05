"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectFilters } from "@/data/content";

function matches(project, filter) {
  if (filter === "All") return true;
  const f = filter.toLowerCase();
  return project.tags.some((t) => t.toLowerCase().includes(f));
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = projects.filter((p) => matches(p, filter));

  return (
    <section id="projects" className="relative z-10 mx-auto max-w-wrap px-7 py-24">
      <p className="text-sm uppercase tracking-[4px] text-muted">Projects</p>
      <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
        Things I&apos;ve built (and am building)
      </h2>

      {/* filter pills */}
      <div className="mt-8 flex flex-wrap gap-2">
        {projectFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`glass-btn rounded-full px-4 py-1.5 text-sm font-medium ${
              filter === f ? "is-active" : "text-muted"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* card grid */}
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className={`flex h-full flex-col rounded-2xl p-6 ${
                p.placeholder
                  ? "border border-dashed border-white/15 bg-white/[0.02] backdrop-blur"
                  : "glass-card"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <span className="shrink-0 rounded-full bg-white/5 px-2.5 py-1 text-xs text-muted">
                  {p.badge}
                </span>
              </div>

              <dl className="mt-4 space-y-2 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-sal">Problem</dt>
                  <dd className="text-ink/80">{p.problem}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-dmn">Approach</dt>
                  <dd className="text-ink/80">{p.approach}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-cen">Result</dt>
                  <dd className="text-ink/80">{p.result}</dd>
                </div>
              </dl>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.links.length > 0 && (
                <div className="mt-4 flex gap-3 pt-1">
                  {p.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-cen hover:underline"
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
