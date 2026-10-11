import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Mono, Manrope, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  alternates: { canonical: "/" },
  title: "David Atakpa | Software Developer & Product Builder",
  description:
    "David Atakpa is a software developer and product builder in Ghana, building practical web, mobile, backend, and AI-powered software.",
  openGraph: {
    url: "/",
    title: "David Atakpa | Software Developer & Product Builder",
    description:
      "Software projects in development by David Atakpa, a developer based in Ghana.",
    type: "website",
    locale: "en_GH",
    siteName: "David Atakpa",
  },
  twitter: {
    card: "summary",
    title: "David Atakpa | Software Developer & Product Builder",
    description:
      "Software projects in development by David Atakpa, a developer based in Ghana.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <div className="site-main">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
