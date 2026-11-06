import type { Metadata } from "next";
import { Syne, Manrope, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppSticky } from "@/components/layout/WhatsAppSticky";
import { pageMeta } from "@/content/site";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const meta = JetBrains_Mono({
  variable: "--font-meta",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: pageMeta.home.title,
    template: "%s · Beyond Fitness Manjeri",
  },
  description: pageMeta.home.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${display.variable} ${body.variable} ${meta.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppSticky />
      </body>
    </html>
  );
}
