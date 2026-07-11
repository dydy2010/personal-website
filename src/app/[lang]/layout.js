import "../globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { locales, getDict } from "@/data/dictionary";

// Fonts are downloaded at build time and served from our own domain
// (next/font) — the visitor's browser never contacts Google. This matters
// for privacy law (no IP transfer to a third party just to render text).
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Pre-render all four locales; anything else (e.g. /fr) is a 404.
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}
export const dynamicParams = false;

export function generateMetadata({ params }) {
  const dict = getDict(params.lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: [
      "Dongyuan Gao",
      "Data Scientist",
      "AI Engineer",
      "LLM",
      "Agentic AI",
      "RAG",
      "LangGraph",
      "Switzerland",
    ],
    authors: [{ name: "Dongyuan Gao" }],
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
      locale: params.lang,
    },
    // hreflang alternates so search engines serve the right language
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  };
}

export default function RootLayout({ children, params }) {
  const dict = getDict(params.lang);
  return (
    <html lang={params.lang} className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased">
        {/* fixed aurora background layers (shared by every page) */}
        <div className="fluid">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
          <div className="blob b4" />
        </div>
        <div className="grain" />

        <Nav dict={dict} lang={params.lang} />
        {children}
        <Footer dict={dict} lang={params.lang} />
      </body>
    </html>
  );
}
