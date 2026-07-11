import en from "./dictionaries/en";
import de from "./dictionaries/de";
import es from "./dictionaries/es";
import zh from "./dictionaries/zh";

// The four supported locales. Order = order of the switcher pills.
export const locales = ["en", "de", "es", "zh"];

// Short labels for the language switcher in the nav.
export const localeLabels = { en: "EN", de: "DE", es: "ES", zh: "中文" };

const dicts = { en, de, es, zh };

// Falls back to English for anything unknown (defensive; unknown
// locales already 404 via dynamicParams=false in the layout).
export function getDict(lang) {
  return dicts[lang] || dicts.en;
}
