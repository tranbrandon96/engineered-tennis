// app/layout.tsx
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Engineered Tennis",
  description:
    "High-performance, mechanics-based tennis coaching in San Diego — founded by Brandon Tran. Learn smarter, move better, and train with purpose.",
  icons: {
    icon: [
      { url: "/icon.svg?v=3", type: "image/svg+xml" },
      { url: "/favicon-48x48.png?v=3", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=3", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      "/apple-touch-icon.png?v=3",
      { url: "/apple-touch-icon-180x180.png?v=3", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico?v=3",
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg?v=3", color: "#10b981" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Engineered Tennis — Mechanics-Driven Coaching in San Diego",
    description:
      "Transform your game through biomechanics and system-driven coaching. Precision. Tempo. Timing. Engineered.",
    url: "https://engineeredtennis.com",
    siteName: "Engineered Tennis",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Engineered Tennis — Mechanics-Driven Coaching",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineered Tennis",
    description:
      "Mechanics-driven tennis coaching in San Diego — precision meets performance.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
