import Reveal from "@/components/Reveal";
import { skills } from "@/data/content";

// Tint the first (AI/LLM) group so the AI focus reads first.
const accents = ["border-cen/40 text-cen", "border-sal/40 text-sal", "border-dmn/40 text-dmn", "border-white/10 text-muted"];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-wrap px-7 py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[4px] text-muted">Skills</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          The toolkit
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {skills.map((group, gi) => (
          <Reveal key={group.group} delay={0.05 * gi}>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold">{group.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border bg-white/[0.03] px-3 py-1 text-sm ${accents[gi] || accents[3]}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
