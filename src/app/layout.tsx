import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFF9F0",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rulebook.app"),
  title: "Rulebook — Learn Any Board Game in 60 Seconds | AI-Powered Rules",
  description:
    "Stop reading rulebooks. Scan any board game box with your phone and get instant, easy-to-follow rules. Start playing in under 60 seconds. Free to try.",
  keywords: [
    "board game rules app",
    "learn board games fast",
    "board game rule scanner",
    "instant game rules",
    "AI board game helper",
    "game night app",
    "board game tutorial app",
    "scan board game box",
    "quick game rules",
    "board game companion app",
  ],
  authors: [{ name: "Rulebook" }],
  creator: "Rulebook",
  publisher: "Rulebook",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rulebook.app",
    siteName: "Rulebook",
    title: "Rulebook — Learn Any Board Game in 60 Seconds",
    description:
      "AI-powered app that turns any game box photo into instant, digestible rules. From box to playing in 60 seconds.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rulebook - Learn Any Board Game in 60 Seconds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rulebook — Learn Any Board Game in 60 Seconds",
    description:
      "AI-powered app that turns any game box photo into instant, digestible rules.",
    images: ["/twitter-card.png"],
    creator: "@rulebookapp",
    site: "@rulebookapp",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://rulebook.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Plausible Analytics (privacy-friendly) */}
        <script
          defer
          data-domain="rulebook.app"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
