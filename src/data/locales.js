// Tiny, dependency-free locale list.
// Kept separate from dictionary.js so client components (like Nav)
// can import it WITHOUT pulling all four dictionaries into the bundle.
export const locales = ["en", "de", "es", "zh"];

// Short labels for the language switcher pills.
export const localeLabels = { en: "EN", de: "DE", es: "ES", zh: "中文" };
