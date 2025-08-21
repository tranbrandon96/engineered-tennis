// app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-12 text-center">
      {/* Profile Photo */}
      <div className="mb-6">
        <Image
          src="/me.jpg" // 👈 replace with your photo in /public
          alt="Brandon Tran"
          width={160}
          height={160}
          className="rounded-full border-4 border-gray-300 shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-2xl space-y-6">
        <p>
          At <span className="font-bold">Engineered Tennis</span>, I combine biomechanics, 
          system design principles, and years of coaching experience to help players unlock 
          their highest potential. My philosophy is that tennis improvement isn’t random — it’s engineered.
        </p>

        <p>
          I’ve coached across all levels: from USTA juniors and high school athletes to college players. 
          My approach focuses on mechanics, discipline, and building a strong technical foundation that lasts.
        </p>

        <p>
          Tennis has been a lifelong passion, and this project is about giving players access to high-performance 
          training at an affordable price. Whether your goal is competition or personal growth, I’ll help you 
          develop the tools to succeed.
        </p>
      </div>
    </main>
  );
}