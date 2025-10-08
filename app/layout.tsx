// app/layout.tsx
import './globals.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

export const metadata = {
  title: 'Engineered Tennis',
  description: 'High-performance, mechanics-based tennis coaching in San Diego',
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
