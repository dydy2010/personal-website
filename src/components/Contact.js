import Reveal from "@/components/Reveal";
import { profile, links } from "@/data/content";

const email = `${links.emailUser}@${links.emailDomain}`;

const channels = [
  { label: "Email", value: email, href: `mailto:${email}` },
  { label: "LinkedIn", value: "in/dongyuan-gao", href: links.linkedin },
  { label: "GitHub", value: "dydy2010", href: links.github },
  { label: "Location", value: profile.location, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-wrap px-7 py-24">
      <Reveal>
        <p className="text-sm uppercase tracking-[4px] text-muted">Contact</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Let&apos;s build something that thinks
        </h2>
        <p className="mt-4 max-w-xl text-muted">{profile.availability}</p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((c, i) => (
          <Reveal key={c.label} delay={0.05 * i}>
            {c.href ? (
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass-card block h-full rounded-2xl p-5 hover:text-cen"
              >
                <p className="text-xs uppercase tracking-wider text-muted">{c.label}</p>
                <p className="mt-2 break-all text-sm font-medium">{c.value}</p>
              </a>
            ) : (
              <div className="glass h-full rounded-2xl p-5">
                <p className="text-xs uppercase tracking-wider text-muted">{c.label}</p>
                <p className="mt-2 font-medium">{c.value}</p>
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
