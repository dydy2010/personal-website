// Compares the 4 language dictionaries against en.js as reference.
// Checks: identical key structure, identical tags/links/filter values,
// identical numeric facts (language pct, project count, timeline years).
// Run: node scripts/check_dicts.mjs
import en from "../src/data/dictionaries/en.js";
import de from "../src/data/dictionaries/de.js";
import es from "../src/data/dictionaries/es.js";
import zh from "../src/data/dictionaries/zh.js";

const dicts = { de, es, zh };
let problems = 0;

// walk the reference object and make sure every key exists everywhere
function compareShape(ref, other, path, name) {
  for (const key of Object.keys(ref)) {
    const p = `${path}.${key}`;
    if (!(key in other)) {
      console.log(`MISSING [${name}] ${p}`);
      problems++;
    } else if (typeof ref[key] === "object" && ref[key] !== null) {
      if (Array.isArray(ref[key]) && ref[key].length !== other[key].length) {
        console.log(`LENGTH  [${name}] ${p}: en=${ref[key].length} ${name}=${other[key].length}`);
        problems++;
      } else {
        compareShape(ref[key], other[key], p, name);
      }
    }
  }
}

for (const [name, d] of Object.entries(dicts)) {
  compareShape(en, d, "", name);

  // facts that must be IDENTICAL in every locale
  d.projects.forEach((proj, i) => {
    const ref = en.projects[i];
    if (JSON.stringify(proj.tags) !== JSON.stringify(ref.tags)) {
      console.log(`TAGS    [${name}] projects[${i}]`);
      problems++;
    }
    const urls = (l) => l.map((x) => x.url).join();
    if (urls(proj.links) !== urls(ref.links)) {
      console.log(`LINKS   [${name}] projects[${i}]`);
      problems++;
    }
  });
  d.projectFilters.forEach((f, i) => {
    if (f.value !== en.projectFilters[i].value) {
      console.log(`FILTER  [${name}] projectFilters[${i}]: ${f.value}`);
      problems++;
    }
  });
  d.languages.items.forEach((l, i) => {
    const ref = en.languages.items[i];
    // pct always identical; level only when it's a CEFR code (words like
    // "Native" are legitimately translated)
    const cefr = /^[ABC][12]$/.test(ref.level);
    if (l.pct !== ref.pct || (cefr && l.level !== ref.level)) {
      console.log(`LEVELS  [${name}] languages[${i}]`);
      problems++;
    }
  });
  d.timeline.forEach((t, i) => {
    // compare digits only — "2025 – heute" vs "2025 – present" is fine
    const digits = (s) => s.replace(/\D/g, "");
    if (digits(t.year) !== digits(en.timeline[i].year)) {
      console.log(`YEAR    [${name}] timeline[${i}]: "${t.year}" vs "${en.timeline[i].year}"`);
      problems++;
    }
  });
  if (d.profile.photo !== en.profile.photo) {
    console.log(`PHOTO   [${name}]`);
    problems++;
  }
}

console.log(problems === 0 ? "ALL CHECKS PASSED" : `${problems} PROBLEM(S) FOUND`);
