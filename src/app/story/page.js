import Storyline from "@/components/Storyline";
import { profile } from "@/data/content";

export const metadata = {
  title: "My Storyline — Dongyuan Gao",
  description:
    "From Spanish literature and freight routes across Europe and Asia to LLM and agentic AI systems — the path that shaped how I think.",
};

export default function StoryPage() {
  return (
    <main className="relative z-10 mx-auto max-w-wrap px-7 pb-24 pt-32">
      <a
        href="/"
        className="text-sm text-muted transition-colors hover:text-ink"
      >
        {"<-"} Back home
      </a>

      <header className="mt-6">
        <p className="text-xs uppercase tracking-[4px] text-muted">My Storyline</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
          From freight routes to neural ones
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          {profile.name}&apos;s path — languages, logistics, and the pivot into AI.
          Scroll to follow the line.
        </p>
      </header>

      <Storyline />
    </main>
  );
}
