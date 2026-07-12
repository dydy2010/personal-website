import BrainCanvas from "@/components/BrainCanvas";
import { links } from "@/data/links";

// Assemble the email at render time (small spam-scraper deterrent).
const email = `${links.emailUser}@${links.emailDomain}`;

export default function Hero({ dict, lang }) {
  const { profile, stats, ui } = dict;
  return (
    <header className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <BrainCanvas heroNets={dict.heroNets} />

      {/* scrim for text legibility over the brain/aurora */}
      <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-b from-bg/70 via-bg/40 to-bg/60 sm:bg-gradient-to-r sm:from-bg/60 sm:via-bg/20 sm:to-transparent" />

      {/* text overlay — vertically centered, left-aligned on desktop */}
      <div className="pointer-events-none absolute inset-0 z-[4] flex flex-col items-center justify-center px-7 text-center sm:items-start sm:text-left sm:pl-16">
        <div className="mx-auto w-full max-w-wrap sm:mx-0 sm:max-w-2xl">
          <p className="mb-3.5 text-sm uppercase tracking-[5px] text-muted">
            <span className="text-dmn">{profile.kicker[0]}</span> ·{" "}
            <span className="text-sal">{profile.kicker[1]}</span> ·{" "}
            <span className="text-cen">{profile.kicker[2]}</span>
          </p>

          <h1 className="font-display text-[clamp(34px,6vw,64px)] font-bold leading-[1.04] tracking-tight [text-shadow:0_0_50px_rgba(120,180,255,0.28)]">
            {profile.firstName}
            {profile.lastName && (
              <>
                {lang !== "zh" && " "}
                <span className="bg-gradient-to-r from-dmn to-cen bg-clip-text text-transparent">
                  {profile.lastName}
                </span>
              </>
            )}
          </h1>

          <p className="mt-2.5 font-display text-[clamp(17px,2.6vw,24px)] font-semibold tracking-wide">
            {profile.role}
          </p>

          <p className="mx-auto mt-3.5 max-w-[460px] text-[clamp(15px,2vw,19px)] text-muted sm:mx-0">
            {profile.hook}
          </p>

          {/* 4 CTAs */}
          <div className="pointer-events-auto mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
            <a
              href="#projects"
              className="glass-btn-primary rounded-full bg-gradient-to-r from-dmn to-cen px-5 py-2.5 text-sm font-semibold text-bg"
            >
              {ui.viewProjects}
            </a>
            <a
              href={links.resume}
              download
              className="glass-btn rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              {ui.downloadResume}
            </a>
            <a
              href={`mailto:${email}`}
              className="glass-btn rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              {ui.getInTouch}
            </a>
          </div>

          {/* quick-stats strip */}
          <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted sm:justify-start">
            {stats.map((s, i) => (
              <span key={s.label} className="flex items-center gap-4">
                <span>
                  <b className="font-semibold text-ink">{s.value}</b> {s.label}
                </span>
                {i < stats.length - 1 && (
                  <span className="text-white/20">·</span>
                )}
              </span>
            ))}
          </div>

          <p className="mt-4 text-sm text-dmn/90">{profile.availability}</p>
        </div>
      </div>
    </header>
  );
}
