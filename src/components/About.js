import Reveal from "@/components/Reveal";
import { profile, about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-wrap px-7 py-24">
      <Reveal>
        <p className="text-sm uppercase tracking-[4px] text-muted">About</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">
          {about.lead}
        </h2>
      </Reveal>

      {/* AI capability one-liner */}
      <Reveal delay={0.1}>
        <p className="mt-5 max-w-2xl text-lg text-ink/90">{profile.capability}</p>
      </Reveal>

      {/* data lifecycle pipeline */}
      <Reveal delay={0.15}>
        <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
          {about.pipeline.map((stage, i) => (
            <span key={stage} className="flex items-center gap-2">
              <span className="rounded-full border border-cen/30 bg-cen/10 px-3 py-1 font-medium text-cen">
                {stage}
              </span>
              {i < about.pipeline.length - 1 && (
                <span className="text-muted">{"->"}</span>
              )}
            </span>
          ))}
        </div>
      </Reveal>

      {/* three networks */}
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {about.networks.map((n, i) => (
          <Reveal key={n.key} delay={0.1 * i}>
            <div className="glass-card h-full rounded-2xl p-6">
              <div className="flex items-baseline gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: n.color }}
                />
                <span className="font-display font-semibold" style={{ color: n.color }}>
                  {n.pillar}
                </span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                {n.network} Network
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{n.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="mt-8 text-sm italic text-muted">{profile.metaphorNote}</p>
      </Reveal>
    </section>
  );
}
