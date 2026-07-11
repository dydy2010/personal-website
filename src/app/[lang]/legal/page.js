import { getDict } from "@/data/dictionary";
import { links } from "@/data/links";

// Assemble the email at render time (same spam-scraper deterrent as elsewhere).
const email = `${links.emailUser}@${links.emailDomain}`;

export function generateMetadata({ params }) {
  const dict = getDict(params.lang);
  return {
    title: dict.meta.legalTitle,
    // keep this page out of search results; it stays reachable via the footer
    robots: { index: false, follow: false },
  };
}

export default function LegalPage({ params }) {
  const { legal, ui } = getDict(params.lang);
  return (
    <main className="relative z-10 mx-auto max-w-wrap px-7 pb-24 pt-32">
      <h1 className="font-display text-4xl font-bold tracking-tight">
        {legal.title}
      </h1>
      <p className="mt-2 text-sm text-muted">
        {ui.lastUpdated}: {legal.updated}
      </p>
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

      {/* remaining sections from the dictionary */}
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
