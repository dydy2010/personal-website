"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Aurora colors cycled across milestones to tie the storyline to the brain theme.
const COLORS = ["#38bdf8", "#a78bfa", "#6ee7b7", "#38bdf8", "#a78bfa"];

// A single milestone. It "ignites" (dot glows, card slides in) as the
// scroll-driven line passes its position.
function Milestone({ item, index, total, progress, color }) {
  const seg = 1 / total;
  const start = index * seg;
  const lit = start + seg * 0.6; // fully lit a bit past its start

  const dotOpacity = useTransform(progress, [start, lit], [0.2, 1]);
  const dotScale = useTransform(progress, [start, lit], [0.4, 1]);
  const cardOpacity = useTransform(progress, [start, lit], [0.25, 1]);
  const cardX = useTransform(progress, [start, lit], [28, 0]);

  return (
    <div className="relative pb-16 pl-20 last:pb-0">
      {/* node on the rail */}
      <span className="absolute left-[14px] top-1.5 flex h-4 w-4 -translate-x-1/2 items-center justify-center">
        {/* faint base ring (always present) */}
        <span className="absolute h-4 w-4 rounded-full border border-white/20" />
        {/* glowing fill that ignites with scroll */}
        <motion.span
          style={{
            opacity: dotOpacity,
            scale: dotScale,
            background: color,
            boxShadow: `0 0 16px ${color}, 0 0 4px ${color}`,
          }}
          className="h-3 w-3 rounded-full"
        />
      </span>

      {/* the milestone card */}
      <motion.div style={{ opacity: cardOpacity, x: cardX }}>
        <p className="font-display text-sm font-semibold" style={{ color }}>
          {item.year}
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold">{item.title}</h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
          {item.place}
        </p>
      </motion.div>
    </div>
  );
}

export default function Storyline({ timeline }) {
  const ref = useRef(null);

  // Track how far we've scrolled THROUGH this section.
  // progress = 0 when the top reaches ~80% down the viewport,
  // progress = 1 when the bottom reaches the middle.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.5"],
  });

  const total = timeline.length;

  return (
    <div ref={ref} className="relative mt-14">
      {/* static faint rail */}
      <div className="absolute left-[14px] top-0 h-full w-px -translate-x-1/2 bg-white/10" />
      {/* animated gradient line that draws downward as you scroll */}
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-[14px] top-0 h-full w-[2px] -translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-cen via-sal to-dmn"
      />

      {timeline.map((item, i) => (
        <Milestone
          key={item.year}
          item={item}
          index={i}
          total={total}
          progress={scrollYProgress}
          color={COLORS[i % COLORS.length]}
        />
      ))}
    </div>
  );
}
