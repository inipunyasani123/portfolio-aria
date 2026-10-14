import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], weight: ["400", "500", "700"] });

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Aria — Creative Developer & Designer","description":"Portfolio template for Aria, a fictional creative developer: dark, cinematic case studies that link to six live demo sites, plus articles on motion, contrast, and small algorithms.","inLanguage":"en"};

export const metadata = {
  metadataBase: new URL("https://portfolio-aria.pintuweb.id"),
  title: { default: "Aria — Creative Developer & Designer", template: "%s — Aria" },
  description: "Portfolio template for Aria, a fictional creative developer: dark, cinematic case studies that link to six live demo sites, plus articles on motion, contrast, and small algorithms.",
  applicationName: "Aria",
  keywords: ["creative developer", "portfolio", "web designer", "interaction design", "frontend developer"],
  authors: [{ name: "Aria" }],
  creator: "Aria",
  publisher: "Aria",
  alternates: { canonical: "https://portfolio-aria.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-aria.pintuweb.id",
    siteName: "Aria",
    title: "Aria — Creative Developer & Designer",
    description: "Portfolio template for Aria, a fictional creative developer: dark, cinematic case studies that link to six live demo sites, plus articles on motion, contrast, and small algorithms.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Aria — Creative Developer & Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aria — Creative Developer & Designer",
    description: "Portfolio template for Aria, a fictional creative developer: dark, cinematic case studies that link to six live demo sites, plus articles on motion, contrast, and small algorithms.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {/* Ambient aurora background */}
          <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="animate-drift absolute left-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-indigo-700/25 blur-[140px]" />
            <div className="animate-drift-slow absolute right-[-10%] top-[20%] h-[480px] w-[480px] rounded-full bg-fuchsia-700/20 blur-[140px]" />
            <div className="animate-drift absolute bottom-[-10%] left-[30%] h-[480px] w-[480px] rounded-full bg-cyan-700/15 blur-[150px]" />
          </div>
          <div className="grain" aria-hidden="true" />
          <Navbar />
          {children}
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
