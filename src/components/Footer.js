import Link from "next/link";
import { links } from "@/data/links";

const email = `${links.emailUser}@${links.emailDomain}`;
const year = new Date().getFullYear();

export default function Footer({ dict, lang }) {
  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-wrap flex-col items-center justify-between gap-4 px-7 text-sm text-muted sm:flex-row">
        <p>
          © {year} {dict.profile.name}. {dict.ui.footerBuilt}
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
          <Link href={`/${lang}/legal`} className="hover:text-ink">
            {dict.ui.legalLink}
          </Link>
        </div>
      </div>
    </footer>
  );
}
