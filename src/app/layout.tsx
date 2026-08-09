import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webglow.studio"),
  title: {
    default: "WebGlow Studio — Websites that glow with results",
    template: "%s | WebGlow Studio",
  },
  description:
    "Modern web design studio building fast, high-converting websites for real estate agents and local service businesses. AI-assisted development. Clear packages. Free strategy call.",
  keywords: [
    "web design studio",
    "real estate website",
    "local business website",
    "high-converting websites",
    "WebGlow Studio",
    "AI web design",
  ],
  authors: [{ name: "WebGlow Studio" }],
  creator: "WebGlow Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webglow.studio",
    siteName: "WebGlow Studio",
    title: "WebGlow Studio — Websites that glow with results",
    description:
      "High-converting websites for real estate agents and local businesses — delivered fast with AI-assisted precision.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebGlow Studio — Websites that glow with results",
    description:
      "High-converting websites for real estate agents and local businesses — delivered fast with AI-assisted precision.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://webglow.studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistSans.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
