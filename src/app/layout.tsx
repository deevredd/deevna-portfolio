import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GenZProvider } from "@/context/GenZContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://deevnareddy.dev"),
  title: "Deevna Reddy | Software Development Engineer",
  description:
    "Software Development Engineer specializing in backend systems, compliance infrastructure (50M+ Alexa users), and applied ML / RAG. IEEE ICCDS 2025 & Springer Nature published author.",
  keywords: [
    "Deevna Reddy",
    "Software Development Engineer",
    "Backend",
    "Amazon",
    "Alexa",
    "Machine Learning",
    "RAG",
    "FastAPI",
    "Java",
    "Python",
    "Portfolio",
    "IEEE",
    "Springer Nature",
  ],
  authors: [{ name: "Deevna Reddy", url: "https://deevnareddy.dev" }],
  creator: "Deevna Reddy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deevnareddy.dev",
    siteName: "Deevna Reddy Portfolio",
    title: "Deevna Reddy | Software Development Engineer",
    description:
      "Software Development Engineer specializing in backend systems, compliance infrastructure, and applied ML / RAG. IEEE & Springer Nature published author.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Deevna Reddy | Software Development Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deevna Reddy | Software Development Engineer",
    description:
      "Backend systems, compliance infrastructure for 50M+ users, and applied ML pipelines. IEEE ICCDS 2025 & Springer Nature published author.",
    images: ["/og-image.svg"],
    creator: "@deevredd",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0614",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee&family=Caveat:wght@600;700&family=Fredoka:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex h-full flex-col font-sans bg-crust text-text selection:bg-mauve selection:text-crust">
        <GenZProvider>{children}</GenZProvider>
      </body>
    </html>
  );
}
