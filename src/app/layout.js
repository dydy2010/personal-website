import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Dongyuan Gao — Data Scientist & AI Engineer",
  description:
    "Data Scientist and AI Engineer based in Switzerland, building LLM-powered and agentic systems. I think in four languages and build machines that think in one.",
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
    title: "Dongyuan Gao — Data Scientist & AI Engineer",
    description:
      "Building LLM-powered and agentic systems. I think in four languages and build machines that think in one.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {/* fixed aurora background layers (shared by every page) */}
        <div className="fluid">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
          <div className="blob b4" />
        </div>
        <div className="grain" />

        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
