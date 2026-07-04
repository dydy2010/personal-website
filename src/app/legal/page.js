import { legal, links } from "@/data/content";

// Assemble the email at render time (same spam-scraper deterrent as elsewhere).
const email = `${links.emailUser}@${links.emailDomain}`;

export const metadata = {
  title: "Legal & Privacy — Dongyuan Gao",
  // keep this page out of search results; it stays reachable via the footer
  robots: { index: false, follow: false },
};

export default function LegalPage() {
  return (
    <main className="relative z-10 mx-auto max-w-wrap px-7 pb-24 pt-32">
      <h1 className="font-display text-4xl font-bold tracking-tight">
        {legal.title}
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated: {legal.updated}</p>
      <p className="mt-4 max-w-2xl text-muted">{legal.intro}</p>

      {/* Impressum block with contact */}
      <section className="glass mt-10 max-w-2xl rounded-2xl p-6">
        <h2 className="font-display text-xl font-semibold">
          {legal.owner.heading}
        </h2>
        <p className="mt-3 text-muted">
          {legal.owner.name}
          <br />
          {legal.owner.place}
          <br />
          <a href={`mailto:${email}`} className="text-cen hover:underline">
            {email}
          </a>
        </p>
      </section>

      {/* remaining sections from content.js */}
      {legal.sections.map((s) => (
        <section key={s.heading} className="glass mt-6 max-w-2xl rounded-2xl p-6">
          <h2 className="font-display text-xl font-semibold">{s.heading}</h2>
          {s.body.map((paragraph, i) => (
            <p key={i} className="mt-3 text-muted">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </main>
  );
}
