"use client";

import { useEffect, useRef } from "react";
import { heroNets } from "@/data/content";

// Triple Network Model "Thinking Brain" hero animation.
// Ported from the locked aurora mockup into a self-contained React client component.
// Features: drift -> assemble brain -> cycle Default Mode / Salience switch / Central Executive.
// Beginner notes:
//  - All drawing happens on a <canvas> via requestAnimationFrame.
//  - We pause the loop when off-screen (IntersectionObserver) to save battery.
//  - We honor prefers-reduced-motion by drawing one calm static frame.
//  - After a one-time intro (drift → assemble), the three networks cycle
//    automatically: Humanistic → Creative → AI-Driven, ~5s each, with a
//    short animated "hand-over" between them. The mouse only adds parallax.
export default function BrainCanvas() {
  const canvasRef = useRef(null);
  const tintRef = useRef(null);
  const capRef = useRef(null);
  const capDotRef = useRef(null);
  const capValRef = useRef(null);
  const capMetaRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const tintEl = tintRef.current;
    const capEl = capRef.current;
    const capDot = capDotRef.current;
    const capVal = capValRef.current;
    const capMeta = capMetaRef.current;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // next/font gives the display font a generated family name,
    // so read it from the CSS variable instead of hard-coding "Space Grotesk"
    const displayFont =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--font-display")
        .trim() || '"Space Grotesk"';

    // ---- configuration ----
    const OW = 420;
    const OH = 330;
    const N = 300;
    const LINK = 72;
    const GLYPHS = [
      "智", "思", "创", "学", "译", "数", "脑", "言", "心", "通", "梦", "念",
      "ñ", "ü", "é", "ç", "è", "ß", "D", "G", "A", "M", "S", "i", "o", "n",
    ];

    let w, h, dpr, scale = 1, cx = 0, cy = 0;
    let particles = [];
    let brainPts = [];
    let NETS = {};
    let parX = 0, parY = 0, parTX = 0, parTY = 0;
    let tintAt = "50% 55%"; // glow position, updated in resize()
    let running = true; // off-screen pause for the whole loop
    let rafId = 0;
    const mouse = { x: -9999, y: -9999 };

    const hexA = (hex, a) => {
      const n = parseInt(hex.slice(1), 16);
      return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
    };

    function brainPath(c) {
      c.beginPath();
      c.moveTo(120, 206);
      c.bezierCurveTo(152, 230, 262, 232, 296, 208);
      c.bezierCurveTo(330, 200, 350, 178, 344, 150);
      c.bezierCurveTo(362, 118, 332, 84, 286, 86);
      c.bezierCurveTo(250, 62, 168, 62, 132, 86);
      c.bezierCurveTo(90, 84, 68, 118, 86, 150);
      c.bezierCurveTo(70, 174, 90, 198, 120, 206);
      c.closePath();
    }

    const map = (px, py) => ({
      x: cx + (px - OW / 2) * scale,
      y: cy + (py - OH / 2) * scale,
    });

    function buildBrain() {
      const off = document.createElement("canvas");
      off.width = OW;
      off.height = OH;
      const o = off.getContext("2d");
      o.fillStyle = "#fff";
      brainPath(o);
      o.fill();
      const img = o.getImageData(0, 0, OW, OH).data;
      const pts = [];
      for (let y = 0; y < OH; y += 3)
        for (let x = 0; x < OW; x += 3)
          if (img[(y * OW + x) * 4 + 3] > 128) pts.push({ x, y });
      for (let i = pts.length - 1; i > 0; i--) {
        const j = (Math.random() * (i + 1)) | 0;
        [pts[i], pts[j]] = [pts[j], pts[i]];
      }
      brainPts = pts.slice(0, N).map((p) => map(p.x, p.y));

      const bx = 70, by = 70, bw = 282, bh = 188;
      const H = (fx, fy) => map(bx + fx * bw, by + fy * bh);
      // label text (val/name/desc) lives in src/data/content.js
      NETS = {
        dmn: {
          color: "#6ee7b7", ...heroNets.dmn, speed: 0.4,
          hubs: [H(0.12, 0.62), H(0.82, 0.32), H(0.7, 0.55)], edges: [[0, 1], [1, 2], [0, 2]],
        },
        cen: {
          color: "#38bdf8", ...heroNets.cen, speed: 1.0,
          hubs: [H(0.22, 0.28), H(0.74, 0.42), H(0.3, 0.45)], edges: [[0, 1], [0, 2], [2, 1]],
        },
        sal: {
          color: "#a78bfa", ...heroNets.sal, speed: 0.7,
          hubs: [H(0.44, 0.55), H(0.4, 0.38), H(0.52, 0.58)], edges: [[0, 1], [1, 2], [0, 2]],
        },
      };
    }

    const centroid = (net) => {
      let x = 0, y = 0;
      for (const p of net.hubs) { x += p.x; y += p.y; }
      return { x: x / net.hubs.length, y: y / net.hubs.length };
    };

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      // clientWidth/clientHeight are read-only; just read the parent size.
      // The canvas display size comes from its h-full w-full classes.
      w = canvas.parentElement.clientWidth;
      h = canvas.parentElement.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Desktop: brain sits in the lower-right, balancing the text block top-left.
      // Mobile: brain is smaller and centered behind the text.
      if (w < 640) {
        scale = Math.min((w * 0.65) / OW, (h * 0.38) / OH);
        cx = w * 0.5;
        cy = h * 0.65;
      } else {
        scale = Math.min((w * 0.68) / OW, (h * 0.79) / OH);
        cx = w * 0.74;
        cy = h * 0.62;
      }
      // keep the colored glow centered on wherever the brain actually is
      tintAt = Math.round((cx / w) * 100) + "% " + Math.round((cy / h) * 100) + "%";
      buildBrain();
      // pin the caption pill just under the brain's real bottom edge
      // (measured from the mapped particle targets, not the source box,
      // because the brain shape doesn't fill its full 330px height)
      let brainBottom = 0;
      for (const p of brainPts) if (p.y > brainBottom) brainBottom = p.y;
      capEl.style.left = cx + "px";
      capEl.style.top = Math.min(brainBottom + 28, h - 64) + "px";
      for (let i = 0; i < particles.length; i++) {
        const t = brainPts[i % brainPts.length];
        particles[i].tx = t.x;
        particles[i].ty = t.y;
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < N; i++) {
        const depth = Math.random();
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          depth,
          tint: Math.random(),
          ch: GLYPHS[(Math.random() * GLYPHS.length) | 0],
          dx: 0, dy: 0, tx: 0, ty: 0,
          ph: Math.random() * 6.28,
        });
      }
    }

    // Intro plays exactly once: particles drift, then assemble into the brain.
    const INTRO = [
      { n: "flow", d: 3200 },
      { n: "assemble", d: 2400 },
    ];
    // Main loop: each network holds ~5s, with a short hand-over in between.
    const SEQ = [
      { n: "dmn", d: 5000 },
      { n: "toSal", d: 1200 },
      { n: "sal", d: 5000 },
      { n: "toCen", d: 1200 },
      { n: "cen", d: 5000 },
      { n: "toDmn", d: 1200 },
    ];
    // For each hand-over phase: which network we come from and go to.
    const SWITCHES = {
      toSal: ["dmn", "sal"],
      toCen: ["sal", "cen"],
      toDmn: ["cen", "dmn"],
    };
    let phase = "flow", phaseDur = 3200, phaseStart = 0;
    let introIdx = -1, seqIdx = -1;
    let firstNet = true; // gently fade in the very first network

    function setPhase(name, dur, now) {
      phase = name;
      phaseDur = dur;
      phaseStart = now;
      updateCaption(name);
    }
    function nextPhase(now) {
      // walk through the intro once, then loop the network sequence forever
      if (introIdx < INTRO.length - 1) {
        introIdx++;
        const s = INTRO[introIdx];
        setPhase(s.n, s.d, now);
        return;
      }
      seqIdx = (seqIdx + 1) % SEQ.length;
      const s = SEQ[seqIdx];
      setPhase(s.n, s.d, now);
    }
    function updateCaption(name) {
      // during a hand-over, already show the caption of the target network
      const key = SWITCHES[name] ? SWITCHES[name][1] : name;
      const net = NETS[key];
      if (!net) {
        capEl.style.opacity = 0;
        return;
      }
      capDot.style.background = net.color;
      capDot.style.boxShadow = "0 0 8px " + net.color;
      capVal.textContent = net.val;
      capVal.style.color = net.color;
      capMeta.textContent = net.name + " · " + net.desc;
      capEl.style.opacity = 1;
    }
    // NETS keys are "dmn" / "sal" / "cen", same as the hold-phase names.
    const activeNet = () => NETS[phase] || null;

    function step(now) {
      const t = now * 0.001;
      parX += (parTX - parX) * 0.05;
      parY += (parTY - parY) * 0.05;
      const el = now - phaseStart;
      if (el > phaseDur) nextPhase(now);
      const flowing = phase === "flow";
      for (const p of particles) {
        if (flowing) {
          const a =
            Math.sin(p.x * 0.0018 + t * 0.6) *
            Math.cos(p.y * 0.0018 - t * 0.5) *
            Math.PI;
          p.vx += Math.cos(a) * 0.025;
          p.vy += Math.sin(a) * 0.025;
          const dx = p.x - mouse.x, dy = p.y - mouse.y, md = Math.hypot(dx, dy);
          if (md < 130) {
            p.vx += (dx / md) * 0.6;
            p.vy += (dy / md) * 0.6;
          }
          p.vx *= 0.95;
          p.vy *= 0.95;
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -20) p.x = w + 20;
          if (p.x > w + 20) p.x = -20;
          if (p.y < -20) p.y = h + 20;
          if (p.y > h + 20) p.y = -20;
        } else {
          p.ph += 0.04;
          p.x += (p.tx + Math.cos(p.ph) * 1.1 - p.x) * 0.07;
          p.y += (p.ty + Math.sin(p.ph) * 1.1 - p.y) * 0.07;
        }
      }
    }

    function drawReticle(x, y, now) {
      ctx.save();
      ctx.strokeStyle = "rgba(160,205,255,0.5)";
      ctx.fillStyle = "rgba(160,205,255,0.55)";
      ctx.lineWidth = 1;
      const rot = now * 0.0012, R = 15;
      ctx.beginPath();
      ctx.arc(x, y, R, 0, 6.283);
      ctx.stroke();
      for (let i = 0; i < 4; i++) {
        const ang = rot + (i * Math.PI) / 2;
        ctx.beginPath();
        ctx.moveTo(x + Math.cos(ang) * (R - 4), y + Math.sin(ang) * (R - 4));
        ctx.lineTo(x + Math.cos(ang) * (R + 5), y + Math.sin(ang) * (R + 5));
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, 6.283);
      ctx.fill();
      ctx.restore();
    }

    function drawNet(net, k, now) {
      ctx.save();
      ctx.translate(parX * 13, parY * 13);
      ctx.globalAlpha = k;
      for (const e of net.edges) {
        const a = net.hubs[e[0]], b = net.hubs[e[1]];
        ctx.strokeStyle = net.color;
        ctx.lineWidth = 1.6;
        ctx.shadowColor = net.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        const tt = (now * 0.001 * net.speed) % 1;
        ctx.beginPath();
        ctx.arc(a.x + (b.x - a.x) * tt, a.y + (b.y - a.y) * tt, 2.6, 0, 6.283);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }
      for (const hb of net.hubs) {
        ctx.beginPath();
        ctx.arc(hb.x, hb.y, 5.5, 0, 6.283);
        ctx.fillStyle = net.color;
        ctx.shadowColor = net.color;
        ctx.shadowBlur = 18;
        ctx.fill();
      }
      ctx.restore();
    }

    function drawSwitch(from, to, k, now) {
      const a = centroid(from), b = centroid(to);
      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2 - 46;
      const qp = (tt) => ({
        x: (1 - tt) * (1 - tt) * a.x + 2 * (1 - tt) * tt * mx + tt * tt * b.x,
        y: (1 - tt) * (1 - tt) * a.y + 2 * (1 - tt) * tt * my + tt * tt * b.y,
      });
      ctx.save();
      ctx.translate(parX * 13, parY * 13);
      ctx.globalAlpha = k;
      ctx.lineCap = "round";
      ctx.strokeStyle = from.color;
      ctx.lineWidth = 2.4;
      ctx.shadowColor = from.color;
      ctx.shadowBlur = 16;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.quadraticCurveTo(mx, my, b.x, b.y);
      ctx.stroke();
      for (let i = 0; i < 3; i++) {
        const tt = (now * 0.0016 + i / 3) % 1, pt = qp(tt);
        for (let s = 0; s < 6; s++) {
          const ps = qp(Math.max(0, tt - s * 0.03));
          ctx.beginPath();
          ctx.arc(ps.x, ps.y, 3 - s * 0.4, 0, 6.283);
          ctx.fillStyle = hexA(to.color, 0.5 * (1 - s / 6));
          ctx.shadowBlur = 0;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 3.4, 0, 6.283);
        ctx.fillStyle = "#fff";
        ctx.shadowColor = to.color;
        ctx.shadowBlur = 18;
        ctx.fill();
      }
      const flash = 0.5 + 0.5 * Math.sin(now * 0.006);
      ctx.beginPath();
      ctx.arc(b.x, b.y, 6 + flash * 4, 0, 6.283);
      ctx.fillStyle = hexA(to.color, 0.25 + 0.25 * flash);
      ctx.shadowColor = to.color;
      ctx.shadowBlur = 22;
      ctx.fill();
      ctx.restore();
    }

    function render(now) {
      ctx.clearRect(0, 0, w, h);
      const amp = 26;
      for (const p of particles) {
        p.dx = p.x + parX * amp * p.depth;
        p.dy = p.y + parY * amp * p.depth;
      }
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j], dx = a.dx - b.dx, dy = a.dy - b.dy, d2 = dx * dx + dy * dy;
          if (d2 < LINK * LINK) {
            ctx.strokeStyle = "rgba(120,180,220," + (1 - Math.sqrt(d2) / LINK) * 0.2 + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.dx, a.dy);
            ctx.lineTo(b.dx, b.dy);
            ctx.stroke();
          }
        }
      }
      const mActive = mouse.x > -9000;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (const p of particles) {
        const r = Math.round(52 + 115 * p.tint),
          g = Math.round(189 - 50 * p.tint),
          b = Math.round(235 + 15 * p.tint);
        let a = 0.4 + p.depth * 0.5, size = 7 + p.depth * 7;
        if (mActive) {
          const dm = Math.hypot(p.dx - mouse.x, p.dy - mouse.y);
          if (dm < 150) {
            const boost = 1 - dm / 150;
            a = Math.min(1, a + boost * 0.6);
            size += boost * 5;
            ctx.strokeStyle = "rgba(150,200,255," + (boost * 0.25).toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.dx, p.dy);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
        ctx.font = size.toFixed(1) + "px " + displayFont + ',"PingFang SC","Hiragino Sans",sans-serif';
        ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a.toFixed(2) + ")";
        ctx.fillText(p.ch, p.dx, p.dy);
      }
      if (mActive) drawReticle(mouse.x, mouse.y, now);

      const net = activeNet();
      const sw = SWITCHES[phase];
      if (net) {
        // holding one network: draw it at full strength
        let k = 1;
        if (firstNet) {
          k = Math.min((now - phaseStart) / 800, 1);
          if (k >= 1) firstNet = false;
        }
        drawNet(net, k, now);
        tintEl.style.background =
          "radial-gradient(60% 55% at " + tintAt + ", " + hexA(net.color, 0.18) + " 0%, rgba(0,0,0,0) 70%)";
        tintEl.style.opacity = 1;
      } else if (sw) {
        // hand-over: cross-fade the two networks and animate the switch arc
        const prog = Math.min((now - phaseStart) / phaseDur, 1);
        const from = NETS[sw[0]], to = NETS[sw[1]];
        drawNet(from, 1 - prog, now);
        drawNet(to, prog, now);
        drawSwitch(from, to, Math.sin(prog * Math.PI), now);
        tintEl.style.background =
          "radial-gradient(60% 55% at " + tintAt + ", " + hexA(to.color, 0.18) + " 0%, rgba(0,0,0,0) 70%)";
        tintEl.style.opacity = 1;
      } else {
        tintEl.style.opacity = 0;
      }
    }

    function loop(now) {
      if (!running) return;
      step(now);
      render(now);
      rafId = requestAnimationFrame(loop);
    }

    // ---- static fallback for reduced motion ----
    function drawStatic() {
      resize();
      // freeze particles onto the brain shape
      for (let i = 0; i < particles.length; i++) {
        const t = brainPts[i % brainPts.length];
        particles[i].x = t.x;
        particles[i].y = t.y;
      }
      firstNet = false; // skip the fade-in so the static frame is fully visible
      setPhase("dmn", 1, performance.now());
      render(performance.now());
    }

    // ---- event handlers ----
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      parTX = (mouse.x / w - 0.5) * 2;
      parTY = (mouse.y / h - 0.5) * 2;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
      parTX = 0;
      parTY = 0;
    };

    // ---- boot ----
    initParticles();
    resize();

    if (reduceMotion) {
      drawStatic();
      window.addEventListener("resize", drawStatic);
      return () => window.removeEventListener("resize", drawStatic);
    }

    nextPhase(performance.now()); // starts the intro (drift → assemble)
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", resize);

    // pause the loop when the hero scrolls off-screen
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries[0].isIntersecting;
        if (visible && !running) {
          running = true;
          phaseStart = performance.now(); // resume cleanly
          rafId = requestAnimationFrame(loop);
        } else if (!visible) {
          running = false;
          cancelAnimationFrame(rafId);
        }
      },
      { threshold: 0.05 }
    );
    io.observe(canvas);

    rafId = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      io.disconnect();
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div
        ref={tintRef}
        className="pointer-events-none absolute inset-0 z-[1] opacity-0 mix-blend-screen transition-opacity duration-1000"
      />
      <canvas ref={canvasRef} className="absolute inset-0 z-[2] block h-full w-full" />
      {/* compact one-line pill; left/top are set in resize() to hug the brain */}
      <div
        ref={capRef}
        className="absolute z-[4] flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-full border border-white/10 bg-[rgba(20,28,48,0.4)] px-4 py-2 opacity-0 backdrop-blur-md transition-opacity duration-700"
      >
        <span ref={capDotRef} className="h-2 w-2 shrink-0 rounded-full" />
        <span ref={capValRef} className="font-display text-sm font-bold tracking-wide sm:text-base" />
        <span ref={capMetaRef} className="hidden text-[11px] uppercase tracking-[1.5px] text-muted sm:block" />
      </div>
    </>
  );
}
