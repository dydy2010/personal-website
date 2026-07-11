import Storyline from "@/components/Storyline";
import { getDict } from "@/data/dictionary";

export function generateMetadata({ params }) {
  const dict = getDict(params.lang);
  return {
    title: dict.meta.storyTitle,
    description: dict.meta.storyDescription,
  };
}

export default function StoryPage({ params }) {
  const dict = getDict(params.lang);
  return (
    <main className="relative z-10 mx-auto max-w-wrap px-7 pb-24 pt-32">
      <a
        href={`/${params.lang}`}
        className="text-sm text-muted transition-colors hover:text-ink"
      >
        {dict.ui.backHome}
      </a>

      <header className="mt-6">
        <p className="text-xs uppercase tracking-[4px] text-muted">
          {dict.ui.storyKicker}
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
          {dict.ui.storyHeading}
        </h1>
        <p className="mt-4 max-w-xl text-muted">{dict.ui.storyIntro}</p>
      </header>

      <Storyline timeline={dict.timeline} />
    </main>
  );
}
