// app/page.tsx
import Hero from "./components/Hero"; 
import About from "./components/About";


export default function Home() {
  return (
    <main>
      <Hero /> {/* Show the Hero section */}
      <About />
    </main>
  );
}