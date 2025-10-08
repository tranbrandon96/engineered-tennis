// app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center bg-white px-6 py-20 text-center text-slate-800">
      {/* Profile Photo */}
      <div className="mb-8">
        <Image
          src="/me.jpg" // replace with your photo in /public
          alt="Brandon Tran"
          width={180}
          height={180}
          className="rounded-full border-4 border-emerald-500/20 shadow-lg"
          priority
        />
      </div>

      {/* Header */}
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-emerald-600">
        The Story Behind Engineered Tennis
      </h1>

      {/* Story Section */}
      <div className="max-w-2xl space-y-6 text-base leading-relaxed sm:text-lg">
        <p>
          My name is <span className="font-semibold text-slate-900">Brandon Tran</span> — founder and coach of{" "}
          <span className="font-semibold text-emerald-600">Engineered Tennis</span>. I’ve always believed that mastery in tennis
          isn’t built on endless repetition, but through understanding — the mechanics, timing, and flow behind every movement.
        </p>

        <p>
          I currently work as a <span className="font-semibold">Software Engineer</span>, and that technical mindset is the
          foundation of how I coach. The same principles that make great systems — clarity, structure, and efficiency — are what
          make great athletes. I see tennis as a network of connected parts: footwork, tempo, racquet path, and timing, all
          engineered to work in harmony.
        </p>

        <p>
          What makes my coaching different is my commitment to{" "}
          <span className="font-semibold text-emerald-600">problem solving through mechanics</span>. Most players — and even many
          coaches — stop at general instruction. I go deeper, identifying the root cause of breakdowns in timing, energy transfer,
          and body coordination. I do the heavy lifting — analyzing, refining, and rebuilding so players can finally feel what
          efficient, effortless tennis should be.
        </p>

        <p>
          Over the years, I’ve coached players of all levels — from young juniors developing strong technical habits to advanced
          athletes refining elite-level mechanics. What started as a passion for understanding motion evolved into a structured
          method that merges engineering logic with human performance.
        </p>

        <p>
          <span className="font-semibold text-emerald-600">Engineered Tennis</span> is built on one principle: improvement isn’t
          random — it’s designed. Every lesson is structured around precision, feedback, and cause-and-effect learning so players
          understand <em>why</em> their strokes work — not just how to hit them.
        </p>

        <p>
          My goal is to help players build a complete foundation — not just stronger shots, but smarter decisions, deeper
          confidence, and mechanical awareness that lasts. Whether you’re a beginner building your first rally or a competitor
          chasing the next level, I’ll help you develop a blueprint for your best tennis — one that’s engineered, tested, and
          entirely your own.
        </p>
      </div>

      {/* Highlights Section */}
      <section className="mt-16 w-full max-w-5xl text-left">
        <h2 className="mb-8 text-center text-2xl font-bold text-emerald-600">Highlights</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Credentials & Certifications */}
          <div className="rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm transition hover:shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-emerald-600">
              Credentials & Certifications
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li>• USTA Safe Play Certified</li>
              <li>• CPR Certified</li>
              <li>• Fully Liability Insured</li>
            </ul>
            <p className="mt-4 text-slate-600">
              I maintain active certifications to ensure a professional, safe, and trusted coaching environment.
              These credentials reflect my commitment to athlete safety, professionalism, and integrity on and off the court.
            </p>
          </div>

          {/* Coaching & Playing Experience */}
          <div className="rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm transition hover:shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-emerald-600">
              Coaching & Playing Experience
            </h3>
            <p className="text-slate-700">
              I’ve worked with athletes across every level of the game — from developing juniors to advanced collegiate and professional players.
            </p>
            <p className="mt-3 text-slate-700">
              As a <span className="font-semibold">former college tennis player</span> and <span className="font-semibold">assistant college coach</span>, I’ve helped athletes refine their mechanics, improve efficiency, and translate technical precision into high-performance results.
            </p>
            <p className="mt-3 text-slate-700">
              I’ve been <span className="font-semibold">recruited to work with tennis academies across Southern California</span>, and currently <span className="font-semibold">coach a professional athlete competing at the ITF level</span>, along with <span className="font-semibold">students competing in San Diego Section Division 1 programs</span>.
            </p>
          </div>

        {/* Fun Facts Card */}
<div className="rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm transition hover:shadow-md sm:col-span-2">
  <h3 className="mb-4 text-xl font-semibold text-emerald-600">Fun Facts</h3>
  <ul className="space-y-5 text-slate-700">

    <li>
      • <span className="font-semibold">Tennis GOATs:</span> Roger Federer, Rafael Nadal, and Novak Djokovic — can’t pick just one.
      Federer’s smoothness, Nadal’s intensity, and Djokovic’s precision all influence how I teach balance, rhythm, and purpose in every swing.
    </li>

    <li>
      • <span className="font-semibold">Dream Goal:</span> One reason I started Engineered Tennis was to one day meet Roger Federer —
      not to talk technique, but to understand his mindset, calm under pressure, and on-court mentality.
    </li>

    <li>
      • <span className="font-semibold">Huge Warriors Fan:</span>{' '}
      <span
        className="bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-600
                   bg-[length:200%_200%] bg-clip-text text-transparent font-semibold
                   animate-[gradient-shift_4s_ease_infinite] coarse-disable-anim"
      >
        GO DUBS!
      </span>{' '}
Steph Curry is my GOAT — he represents hard work, discipline, and the quiet confidence that comes from relentless consistency.  
      Another one of my idols is Kobe Bryant — his Mamba Mentality taught me that success isn’t about talent; it’s about outworking your opponent in every way.  
      Those two mindsets shape how I coach: stay disciplined, stay humble, and always put in the work.
    </li>

    <li>
      • <span className="font-semibold">Dog Person:</span> My German Shepherd{' '}
      <span
        className="bg-gradient-to-r from-pink-400 via-rose-500 to-pink-400
                   bg-[length:200%_200%] bg-clip-text text-transparent font-semibold
                   animate-[gradient-shift_4s_ease_infinite] coarse-disable-anim"
      >
        Rosie
      </span>{' '}
      is basically the Engineered Tennis mascot — loyal, curious, and always ready to chase a ball. She reminds me to bring the same energy and joy to coaching every day.
    </li>
  </ul>

  {/* Rosie Photo */}
  <div className="mt-6 flex flex-col items-center">
    <Image
      src="/rosie.jpeg"
      alt="Rosie — Engineered Tennis Mascot"
      width={180}
      height={180}
      className="rounded-2xl border border-emerald-100 shadow-md"
    />
    <p className="mt-2 text-sm italic text-slate-500">
      Rosie — the Engineered Tennis mascot 🐾
    </p>
  </div>
</div>


        </div>
      </section>
    </main>
  );
}
