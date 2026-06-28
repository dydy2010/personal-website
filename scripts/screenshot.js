// Visual verification: capture screenshots of the running dev site.
// Usage: node scripts/screenshot.js   (dev server must be running on :3000)
const { chromium } = require("playwright");
const fs = require("fs");

const OUT = "screenshots";
const BASE = "http://localhost:3000";

async function shoot(page, name) {
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: false });
  console.log("saved", name);
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();

  // --- Desktop ---
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await desktop.newPage();

  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(2500); // let the hero animation assemble
  await shoot(page, "home-hero-desktop");

  // scroll through home sections
  await page.evaluate(() => document.querySelector("#about")?.scrollIntoView());
  await page.waitForTimeout(1200);
  await shoot(page, "home-about");

  await page.evaluate(() => document.querySelector("#projects")?.scrollIntoView());
  await page.waitForTimeout(1200);
  await shoot(page, "home-projects");

  await page.evaluate(() => document.querySelector("#skills")?.scrollIntoView());
  await page.waitForTimeout(800);
  await shoot(page, "home-skills");

  await page.evaluate(() => document.querySelector("#languages")?.scrollIntoView());
  await page.waitForTimeout(1200);
  await shoot(page, "home-languages");

  await page.evaluate(() => document.querySelector("#contact")?.scrollIntoView());
  await page.waitForTimeout(800);
  await shoot(page, "home-contact");

  // hover a CTA to show the glass hover state
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);
  const btn = page.getByText("Download Resume", { exact: true });
  await btn.hover();
  await page.waitForTimeout(500);
  await shoot(page, "home-cta-hover");

  // --- Story page (desktop) ---
  await page.goto(`${BASE}/story`, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  await shoot(page, "story-top");
  await page.evaluate(() => window.scrollTo(0, 700));
  await page.waitForTimeout(1000);
  await shoot(page, "story-mid");
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1200);
  await shoot(page, "story-bottom");

  // --- Mobile ---
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const m = await mobile.newPage();
  await m.goto(BASE, { waitUntil: "networkidle" });
  await m.waitForTimeout(2500);
  await m.screenshot({ path: `${OUT}/mobile-hero.png` });
  console.log("saved mobile-hero");
  await m.evaluate(() => document.querySelector("#projects")?.scrollIntoView());
  await m.waitForTimeout(1000);
  await m.screenshot({ path: `${OUT}/mobile-projects.png` });
  console.log("saved mobile-projects");

  await browser.close();
  console.log("done");
})();
