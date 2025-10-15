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
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Engineered Tennis — Mechanics-Driven Coaching in San Diego",
    description:
      "Transform your game through biomechanics and system-driven coaching. Precision. Tempo. Timing. Engineered.",
    url: "https://engineeredtennis.com", // update when live
    siteName: "Engineered Tennis",
    images: [
      {
        url: "/og-image.png", // your Open Graph preview image
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
      {/* flex layout ensures footer sits at bottom even on short pages */}
      <body className="flex min-h-screen flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        {/* Thin copyright strip at the very bottom */}
        <Footer />
      </body>
    </html>
  );
}
