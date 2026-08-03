import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import DepthGauge from "@/components/DepthGauge";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";

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

export const metadata: Metadata = {
  title: "Flinda Shi - Platform PM | AI Tools & Infrastructure",
  description:
    "Platform Product Manager building AI-powered tools and infrastructure. 1,260+ GitHub PRs reviewed, 623-line AI skill, €50K annual savings.",
  authors: [{ name: "Flinda Shi" }],
  openGraph: {
    title: "Flinda Shi - Platform PM",
    description: "Building AI-powered infrastructure for global product delivery",
    url: "https://sjfjawe.github.io",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Flinda Shi - Platform PM",
    description: "Building AI-powered infrastructure for global product delivery",
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
      <body>
        <Header />
        <DepthGauge />
        <main>{children}</main>
        <Footer />
        <ScrollEffects />
      </body>
    </html>
  );
}
