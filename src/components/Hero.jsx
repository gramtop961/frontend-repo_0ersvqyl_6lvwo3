import { Rocket, Calendar, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-black tracking-tight text-5xl md:text-7xl leading-none">
            VAULTX
          </h1>
          <p className="mt-3 text-base md:text-lg text-black/70">
            Where Hustlers Rise.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#challenges"
              className="inline-flex items-center justify-center gap-2 border border-black px-5 py-3 text-sm font-semibold hover:bg-black hover:text-white transition-colors"
            >
              <Trophy size={16} /> Explore Challenges
            </a>
            <a
              href="#events"
              className="inline-flex items-center justify-center gap-2 border border-black px-5 py-3 text-sm font-semibold hover:bg-black hover:text-white transition-colors"
            >
              <Calendar size={16} /> Join Events
            </a>
          </div>

          <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
            <Stat title="Creators" value="5k+" />
            <Stat title="Challenges" value="250+" />
            <Stat title="Events" value="120+" />
          </div>

          <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-xs text-black/60">
            <Rocket size={14} /> Premium. Minimal. Monochrome.
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ title, value }) {
  return (
    <div className="border border-black p-6 text-center shadow-[0_2px_0_#000]">
      <div className="text-3xl font-extrabold">{value}</div>
      <div className="mt-1 text-xs tracking-wide uppercase text-black/60">{title}</div>
    </div>
  );
}
