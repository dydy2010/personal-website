import en from "./dictionaries/en";
import de from "./dictionaries/de";
import es from "./dictionaries/es";
import zh from "./dictionaries/zh";

// locales/localeLabels live in locales.js (client-safe, no dictionaries)
export { locales, localeLabels } from "./locales";

const dicts = { en, de, es, zh };

// Falls back to English for anything unknown (defensive; unknown
// locales already 404 via dynamicParams=false in the layout).
export function getDict(lang) {
  return dicts[lang] || dicts.en;
}
