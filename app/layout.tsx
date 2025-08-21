// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";

export const metadata = {
  title: "Engineered Tennis",
  description: "High-performance, mechanics-based tennis coaching in San Diego",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* flex layout ensures footer sits at bottom even on short pages */}
      <body className="min-h-screen antialiased flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>

        {/* Contact section appears below every page */}
        <Contact />

        {/* Thin copyright strip at the very bottom */}
        <Copyright />
      </body>
    </html>
  );
}