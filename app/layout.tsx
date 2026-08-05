import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import DayRail from "@/components/DayRail";
import Footer from "@/components/Footer";
import DayCycle from "@/components/DayCycle";
import ClockCursor from "@/components/ClockCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const DESCRIPTION =
  "Platform technical PM at SAP Concur. Automated translation delivery for 33 languages and 5M+ users — 250+ hrs/month of manual work removed, 1,260+ pull requests reviewed, 3 AI skills shipped.";

export const metadata: Metadata = {
  title: "Flinda Shi — Platform Technical PM",
  description: DESCRIPTION,
  authors: [{ name: "Flinda Shi" }],
  keywords: [
    "platform product manager",
    "technical product manager",
    "developer experience",
    "localization infrastructure",
    "internal tooling",
    "AI tooling",
    "SAP Concur",
  ],
  openGraph: {
    title: "Flinda Shi — Platform Technical PM",
    description: DESCRIPTION,
    url: "https://sjfjawe.github.io",
    siteName: "Flinda Shi",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Flinda Shi — Platform Technical PM",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body>
        <Header />
        <DayRail />
        <main>{children}</main>
        <Footer />
        <DayCycle />
        <ClockCursor />
      </body>
    </html>
  );
}
