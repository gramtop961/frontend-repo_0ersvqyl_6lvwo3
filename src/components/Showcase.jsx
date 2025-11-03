import { ArrowRight, Calendar, Trophy, Users } from 'lucide-react';

const challenges = [
  {
    id: 'c1',
    title: '30-Day Content Sprint',
    date: 'Nov 10 - Dec 10',
    tag: 'Free',
    participants: 842,
  },
  {
    id: 'c2',
    title: 'Startup MVP in 7 Days',
    date: 'Nov 15 - Nov 22',
    tag: 'Paid',
    participants: 312,
  },
  {
    id: 'c3',
    title: 'Personal Brand Revamp',
    date: 'Dec 1 - Dec 21',
    tag: 'Free',
    participants: 516,
  },
];

const events = [
  {
    id: 'e1',
    title: 'Hustlers Meet: Delhi',
    date: 'Dec 05, 6 PM',
    mode: 'Offline',
  },
  {
    id: 'e2',
    title: 'Creator Ops 101',
    date: 'Nov 28, 8 PM',
    mode: 'Online',
  },
  {
    id: 'e3',
    title: 'Funding Playbook',
    date: 'Dec 12, 7 PM',
    mode: 'Online',
  },
];

export default function Showcase() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section id="challenges" className="py-12 md:py-16">
        <header className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Trending Challenges</h2>
            <p className="text-sm text-black/60">Pick one. Commit. Rise with the crew.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold hover:underline">
            View all <ArrowRight size={16} />
          </a>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {challenges.map((c) => (
            <article key={c.id} className="group border border-black bg-white p-5 shadow-[0_2px_0_#000] transition-transform hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] uppercase tracking-wide px-2 py-1 border border-black ${c.tag === 'Paid' ? 'bg-black text-white' : ''}`}>
                  {c.tag}
                </span>
                <div className="inline-flex items-center gap-1 text-xs text-black/60"><Users size={14} /> {c.participants}</div>
              </div>
              <h3 className="mt-3 text-lg font-bold leading-tight">{c.title}</h3>
              <div className="mt-1 inline-flex items-center gap-2 text-xs text-black/60">
                <Calendar size={14} /> {c.date}
              </div>
              <button className="mt-4 inline-flex items-center gap-2 border border-black px-3 py-2 text-xs font-semibold hover:bg-black hover:text-white transition-colors">
                <Trophy size={14} /> Join Challenge
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="events" className="py-12 md:py-16 border-t border-black/10">
        <header className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Upcoming Events</h2>
            <p className="text-sm text-black/60">Free and paid, online and offline — pick your vibe.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold hover:underline">
            Explore calendar <ArrowRight size={16} />
          </a>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {events.map((e) => (
            <article key={e.id} className="border border-black bg-white p-5 shadow-[0_2px_0_#000]">
              <div className="flex items-center justify-between text-xs text-black/60">
                <div className="inline-flex items-center gap-2"><Calendar size={14} /> {e.date}</div>
                <span className="uppercase tracking-wide">{e.mode}</span>
              </div>
              <h3 className="mt-3 text-lg font-bold leading-tight">{e.title}</h3>
              <button className="mt-4 inline-flex items-center gap-2 border border-black px-3 py-2 text-xs font-semibold hover:bg-black hover:text-white transition-colors">
                Join Now <ArrowRight size={14} />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="channels" className="py-12 md:py-16 border-t border-black/10">
        <header className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Creator Channels</h2>
            <p className="text-sm text-black/60">Startup Talks, Content Creators, Hustlers Meet, and more.</p>
          </div>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {['Startup Talks', 'Content Creators', 'Hustlers Meet', 'Design Sprints', 'AI Builders', 'No-Code Lab'].map((name) => (
            <article key={name} className="group border border-black bg-white p-5 shadow-[0_2px_0_#000]">
              <h3 className="text-lg font-bold">{name}</h3>
              <p className="mt-1 text-sm text-black/60">Learn, network, and build with peers.</p>
              <button className="mt-4 inline-flex items-center gap-2 border border-black px-3 py-2 text-xs font-semibold hover:bg-black hover:text-white transition-colors">
                Enter Channel <ArrowRight size={14} />
              </button>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <a
            href="#join"
            className="inline-flex items-center gap-2 border border-black px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white transition-colors"
          >
            Create your channel
          </a>
        </div>
      </section>
    </div>
  );
}
