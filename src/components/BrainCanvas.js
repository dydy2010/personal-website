"use client";

import { useEffect, useRef } from "react";

// Triple Network Model "Thinking Brain" hero animation.
// Ported from the locked aurora mockup into a self-contained React client component.
// Features: drift -> assemble brain -> cycle Default Mode / Salience switch / Central Executive.
// Beginner notes:
//  - All drawing happens on a <canvas> via requestAnimationFrame.
//  - We pause the loop when off-screen (IntersectionObserver) to save battery.
//  - We honor prefers-reduced-motion by drawing one calm static frame.
//  - Modes auto-rotate on a timer (Humanistic → AI-Driven → Creative → flow).
export default function BrainCanvas() {
  const canvasRef = useRef(null);
  const tintRef = useRef(null);
  const capRef = useRef(null);
  const capValRef = useRef(null);
  const capMetaRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const tintEl = tintRef.current;
    const capEl = capRef.current;
    const capVal = capValRef.current;
    const capMeta = capMetaRef.current;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

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
      NETS = {
        dmn: {
          color: "#6ee7b7", val: "Humanistic", name: "Default Mode Network",
          desc: "rest · reflection · imagination", speed: 0.4,
          hubs: [H(0.12, 0.62), H(0.82, 0.32), H(0.7, 0.55)], edges: [[0, 1], [1, 2], [0, 2]],
        },
        cen: {
          color: "#38bdf8", val: "AI-Driven", name: "Central Executive Network",
          desc: "focus · analysis · goals", speed: 1.0,
          hubs: [H(0.22, 0.28), H(0.74, 0.42), H(0.3, 0.45)], edges: [[0, 1], [0, 2], [2, 1]],
        },
        sal: {
          color: "#a78bfa", val: "Creative", name: "Salience Network",
          desc: "the switch · what matters", speed: 0.7,
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
      // Desktop: brain sits in the bottom-right corner (partially off-screen).
      // Mobile: brain is smaller and centered behind the text.
      if (w < 640) {
        scale = Math.min((w * 0.65) / OW, (h * 0.38) / OH);
        cx = w * 0.5;
        cy = h * 0.65;
      } else {
        scale = Math.min((w * 0.48) / OW, (h * 0.55) / OH);
        cx = w * 0.78;
        cy = h * 0.72;
      }
      buildBrain();
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

    const SEQ = [
      { n: "assemble", d: 2400 },
      { n: "dmn", d: 3600 },
      { n: "toCen", d: 1500 },
      { n: "cen", d: 3600 },
      { n: "toDmn", d: 1500 },
      { n: "flow", d: 3000 },
    ];
    let phase = "flow", phaseDur = 3000, phaseStart = 0, seqIdx = -1;

    function setPhase(name, dur, now) {
      phase = name;
      phaseDur = dur;
      phaseStart = now;
      updateCaption(name);
    }
    function kickParticles() {
      for (const p of particles) {
        const a = Math.random() * 6.283, sp = 2.4 + Math.random() * 3.2;
        p.vx = Math.cos(a) * sp;
        p.vy = Math.sin(a) * sp;
      }
    }
    function nextPhase(now) {
      seqIdx = (seqIdx + 1) % SEQ.length;
      const s = SEQ[seqIdx];
      setPhase(s.n, s.d, now);
      if (s.n === "flow") kickParticles();
    }
    function updateCaption(name) {
      let net = null;
      if (name === "dmn") net = NETS.dmn;
      else if (name === "cen") net = NETS.cen;
      else if (name === "toCen" || name === "toDmn") net = NETS.sal;
      if (!net) {
        capEl.style.opacity = 0;
        return;
      }
      capVal.textContent = net.val;
      capVal.style.color = net.color;
      capMeta.textContent = net.name + " · " + net.desc;
      capEl.style.opacity = 1;
    }
    const envelope = (p) => {
      if (p < 0.22) return p / 0.22;
      if (p > 0.78) return (1 - p) / 0.22;
      return 1;
    };
    const activeNet = () => {
      if (phase === "dmn") return NETS.dmn;
      if (phase === "cen") return NETS.cen;
      if (phase === "toCen" || phase === "toDmn") return NETS.sal;
      return null;
    };

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

    function drawSwitch(sal, target, k, now) {
      const a = centroid(sal), b = centroid(target);
      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2 - 46;
      const qp = (tt) => ({
        x: (1 - tt) * (1 - tt) * a.x + 2 * (1 - tt) * tt * mx + tt * tt * b.x,
        y: (1 - tt) * (1 - tt) * a.y + 2 * (1 - tt) * tt * my + tt * tt * b.y,
      });
      ctx.save();
      ctx.translate(parX * 13, parY * 13);
      ctx.globalAlpha = k;
      ctx.lineCap = "round";
      ctx.strokeStyle = sal.color;
      ctx.lineWidth = 2.4;
      ctx.shadowColor = sal.color;
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
          ctx.fillStyle = hexA(target.color, 0.5 * (1 - s / 6));
          ctx.shadowBlur = 0;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 3.4, 0, 6.283);
        ctx.fillStyle = "#fff";
        ctx.shadowColor = target.color;
        ctx.shadowBlur = 18;
        ctx.fill();
      }
      const flash = 0.5 + 0.5 * Math.sin(now * 0.006);
      ctx.beginPath();
      ctx.arc(b.x, b.y, 6 + flash * 4, 0, 6.283);
      ctx.fillStyle = hexA(target.color, 0.25 + 0.25 * flash);
      ctx.shadowColor = target.color;
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
        ctx.font = size.toFixed(1) + 'px "Space Grotesk","PingFang SC","Hiragino Sans",sans-serif';
        ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a.toFixed(2) + ")";
        ctx.fillText(p.ch, p.dx, p.dy);
      }
      if (mActive) drawReticle(mouse.x, mouse.y, now);

      const net = activeNet();
      if (net) {
        const prog = Math.min((now - phaseStart) / phaseDur, 1), k = envelope(prog);
        drawNet(net, k, now);
        if (phase === "toCen" || phase === "toDmn") {
          drawSwitch(net, phase === "toCen" ? NETS.cen : NETS.dmn, k, now);
        }
        tintEl.style.background =
          "radial-gradient(75% 65% at 50% 55%, " + hexA(net.color, 0.18) + " 0%, rgba(0,0,0,0) 70%)";
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

    setPhase("flow", 3200, performance.now());
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
      <div
        ref={capRef}
        className="absolute bottom-8 left-1/2 z-[4] -translate-x-1/2 rounded-2xl border border-white/10 bg-[rgba(20,28,48,0.35)] px-6 py-3 text-center opacity-0 backdrop-blur-md transition-opacity duration-700 sm:bottom-8 sm:left-auto sm:right-8 sm:translate-x-0"
      >
        <div ref={capValRef} className="font-display text-2xl font-bold tracking-wide sm:text-3xl" />
        <div ref={capMetaRef} className="mt-1 text-xs uppercase tracking-[1.5px] text-muted" />
      </div>
    </>
  );
}
