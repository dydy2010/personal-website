"use client";

import { useState } from "react";
import { profile, links } from "@/data/content";

// Absolute anchors (with leading "/") so they work from any page, e.g. /story.
const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Story", href: "/story" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

const email = `${links.emailUser}@${links.emailDomain}`;

export default function Nav() {
  // controls the mobile dropdown menu (open/closed)
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-bg/50 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-wrap items-center justify-between px-7">
        <a
          href="/"
          onClick={() => setOpen(false)}
          className="font-display text-base font-bold tracking-wide"
        >
          <span className="text-cen">◆</span> {profile.name}
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
            Get in touch
          </a>
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
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
