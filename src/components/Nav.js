"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { links } from "@/data/links";
import { locales, localeLabels } from "@/data/locales";

const email = `${links.emailUser}@${links.emailDomain}`;

// Swaps the locale segment of the current path, keeping the rest.
// e.g. switchPath("/de/story", "zh") -> "/zh/story"
function switchPath(pathname, target) {
  const rest = pathname.split("/").slice(2).join("/");
  return `/${target}${rest ? `/${rest}` : ""}`;
}

export default function Nav({ dict, lang }) {
  // controls the mobile dropdown menu (open/closed)
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname() || `/${lang}`;

  // Locale-prefixed anchors (absolute, so they work from /de/story etc.)
  const navLinks = [
    { label: dict.ui.nav.about, href: `/${lang}#about` },
    { label: dict.ui.nav.story, href: `/${lang}/story` },
    { label: dict.ui.nav.projects, href: `/${lang}#projects` },
    { label: dict.ui.nav.skills, href: `/${lang}#skills` },
    { label: dict.ui.nav.contact, href: `/${lang}#contact` },
  ];

  // Small pill group: EN | DE | ES | 中文 — the current one is highlighted.
  const switcher = (
    <div className="flex items-center gap-1 rounded-full border border-white/10 p-1" aria-label="Language">
      {locales.map((l) => (
        <a
          key={l}
          href={switchPath(pathname, l)}
          onClick={() => setOpen(false)}
          aria-current={l === lang ? "page" : undefined}
          className={`rounded-full px-2 py-0.5 text-xs font-semibold transition-colors ${
            l === lang ? "bg-white/10 text-ink" : "text-muted hover:text-ink"
          }`}
        >
          {localeLabels[l]}
        </a>
      ))}
    </div>
  );

  // close the mobile menu on Escape or click-outside
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <nav ref={navRef} className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-bg/50 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-wrap items-center justify-between px-7">
        <a
          href={`/${lang}`}
          onClick={() => setOpen(false)}
          className="font-display text-base font-bold tracking-wide"
        >
          <span className="text-cen">◆</span> {dict.profile.name}
        </a>

        {/* desktop links */}
        <div className="hidden items-center gap-6 sm:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${email}`}
            className="glass-btn rounded-full px-4 py-1.5 text-sm font-semibold text-ink"
          >
            {dict.ui.getInTouch}
          </a>
          {switcher}
        </div>

        {/* mobile hamburger button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-ink sm:hidden"
        >
          {/* simple icon: hamburger / close */}
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* mobile dropdown panel */}
      {open && (
        <div className="border-t border-white/10 bg-bg/80 px-7 py-4 backdrop-blur-md sm:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${email}`}
              onClick={() => setOpen(false)}
              className="glass-btn mt-2 rounded-full px-4 py-2.5 text-center text-sm font-semibold text-ink"
            >
              {dict.ui.getInTouch}
            </a>
            <div className="mt-3 flex justify-center">{switcher}</div>
          </div>
        </div>
      )}
    </nav>
  );
}
