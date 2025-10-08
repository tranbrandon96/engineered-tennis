// app/page.tsx
import Hero from './components/Hero';
import EngineeredApproach from "@/app/components/EngineeredApproach";
import Programs from "@/app/components/Programs";
import MeetTheCoach from "@/app/components/MeetTheCoach";

import FinalCTA from "@/app/components/FinalCTA";



export default function Home() {
  return (
    <main>
      <Hero /> {/* Show the Hero section */}
      <EngineeredApproach />
      <Programs />
      <MeetTheCoach /> 
      <FinalCTA />
    </main>
  );
}
