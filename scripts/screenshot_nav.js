// Targeted re-check: mobile nav (closed + open) and the fixed contact card.
const { chromium } = require("playwright");
const fs = require("fs");

const OUT = "screenshots";
const BASE = "http://localhost:3000";

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();

  // mobile
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const m = await mobile.newPage();
  await m.goto(BASE, { waitUntil: "networkidle" });
  await m.waitForTimeout(1500);
  await m.screenshot({ path: `${OUT}/mobile-nav-closed.png` });
  console.log("saved mobile-nav-closed");

  await m.getByLabel("Toggle menu").click();
  await m.waitForTimeout(500);
  await m.screenshot({ path: `${OUT}/mobile-nav-open.png` });
  console.log("saved mobile-nav-open");

  // desktop contact card (email wrap)
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const d = await desktop.newPage();
  await d.goto(BASE, { waitUntil: "networkidle" });
  await d.getByText("Switzerland", { exact: true }).scrollIntoViewIfNeeded();
  await d.waitForTimeout(900);
  await d.screenshot({ path: `${OUT}/contact-fixed.png` });
  console.log("saved contact-fixed");

  await browser.close();
  console.log("done");
})();
