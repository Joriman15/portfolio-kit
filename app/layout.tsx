import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { ScrollIndicator } from "./components/scroll-indicator";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Jiro Madrid - Portfolio",
    template: "%s | Jiro Madrid",
  },
  description: "A portfolio of projects, writing, and technical work by Jiro Madrid.",
  openGraph: {
    title: "Jiro Madrid - Portfolio",
    description: "A portfolio of projects, writing, and technical work by Jiro Madrid.",
    url: baseUrl,
    siteName: "Jiro Madrid",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(
        "text-neutral-950 bg-[#f8faff] dark:text-white dark:bg-[#070b16]",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body className="mx-auto mt-5 w-full max-w-3xl px-4 antialiased sm:mt-8 sm:px-6 lg:px-0">
        <ScrollIndicator />
        <main className="mt-4 flex min-w-0 flex-auto flex-col sm:mt-6">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
