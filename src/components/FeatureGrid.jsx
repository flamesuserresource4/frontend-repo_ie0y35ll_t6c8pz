import { Rocket, Database, Shield, Puzzle } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Blazing fast onboarding',
    desc: 'Jump from zero to productive with clear guides, code snippets, and DX-first patterns.'
  },
  {
    icon: Database,
    title: 'Real-time data examples',
    desc: 'Copy-paste samples for Auth, Storage, and Postgres that actually run.'
  },
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'Best practices surfaced throughout to keep your app safe and robust.'
  },
  {
    icon: Puzzle,
    title: 'Composable structure',
    desc: 'Navigate docs that mirror how you build: auth, data, edge, functions, and more.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative bg-black text-white py-20">
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-orange-500/10 to-transparent blur-2xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What’s new in this redesign</h2>
          <p className="mt-3 text-white/70">A polished visual system centered on readability and speed, with thoughtfully organized content.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-400 to-amber-600 grid place-items-center shadow-lg shadow-orange-500/30">
                <Icon className="h-5 w-5 text-black" />
              </div>
              <h3 className="mt-4 font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
