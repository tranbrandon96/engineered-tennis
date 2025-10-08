// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Engineered Tennis",
  description:
    "High-performance, mechanics-based tennis coaching in San Diego — founded by Brandon Tran. Learn smarter, move better, and train with purpose.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Engineered Tennis — Mechanics-Driven Coaching in San Diego",
    description:
      "Transform your game through biomechanics and system-driven coaching. Precision. Tempo. Timing. Engineered.",
    url: "https://engineeredtennis.com", // ← update this to your actual domain when live
    siteName: "Engineered Tennis",
    images: [
      {
        url: "/og-image.png", // 👈 this is your screenshot banner in /public
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
