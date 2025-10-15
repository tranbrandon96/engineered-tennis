// app/layout.tsx
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.engineeredtennis.com"),
  title: "Engineered Tennis",
  description:
    "High-performance, mechanics-based tennis coaching in San Diego — founded by Brandon Tran. Learn smarter, move better, and train with purpose.",
  icons: {
    icon: [
      { url: "/icon.svg?v=5", type: "image/svg+xml" },
      { url: "/favicon-48x48.png?v=5", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png?v=5", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=5", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      "/apple-touch-icon.png?v=5",
      { url: "/apple-touch-icon-180x180.png?v=5", sizes: "180x180" },
      "/apple-touch-icon-precomposed.png?v=5",
    ],
    shortcut: "/favicon.ico?v=5",
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg?v=5", color: "#10b981" }],
  },
  manifest: "/site.webmanifest",
  alternates: { canonical: "https://www.engineeredtennis.com" },
  openGraph: {
    title: "Engineered Tennis — Mechanics-Driven Coaching in San Diego",
    description:
      "Transform your game through biomechanics and system-driven coaching. Precision. Tempo. Timing. Engineered.",
    url: "https://www.engineeredtennis.com",
    siteName: "Engineered Tennis",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Engineered Tennis — Mechanics-Driven Coaching" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineered Tennis",
    description: "Mechanics-driven tennis coaching in San Diego — precision meets performance.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Extra explicit links for iOS Safari */}
        <link rel="apple-touch-icon" href="/apple-touch-icon-v5.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-v5.png" />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-precomposed.png?v=5" />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
