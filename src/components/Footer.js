import { profile, links } from "@/data/content";

const email = `${links.emailUser}@${links.emailDomain}`;
const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-wrap flex-col items-center justify-between gap-4 px-7 text-sm text-muted sm:flex-row">
        <p>
          © {year} {profile.name}. Built with Next.js & Tailwind.
        </p>
        <div className="flex gap-5">
          <a href={`mailto:${email}`} className="hover:text-ink">
            Email
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
