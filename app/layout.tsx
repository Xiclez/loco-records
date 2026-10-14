import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const displaySans = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const description =
  "Sello y colectivo de música electrónica desde Chihuahua, México. Techno, tech house, melodic y psytrance. Antes Loading Collective.";

export const metadata: Metadata = {
  title: "LOCO Records",
  description,
  openGraph: {
    title: "LOCO Records",
    description,
    siteName: "LOCO Records",
    locale: "es_MX",
    type: "website",
    // images: [{ url: "https://…/og.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "LOCO Records", description },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" data-scroll-behavior="smooth" className={`${displaySans.variable} ${mono.variable} h-full antialiased`}>
      <body className="min-h-full bg-bg text-fg font-mono">{children}</body>
    </html>
  );
}
