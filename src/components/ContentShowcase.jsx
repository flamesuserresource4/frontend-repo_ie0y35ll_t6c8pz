import { Code2, BookOpen, Router } from 'lucide-react';

export default function ContentShowcase() {
  return (
    <section id="guides" className="bg-neutral-950 text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="col-span-1 lg:col-span-2 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Code2 className="h-4 w-4" />
              DX-first examples
            </div>
            <h3 className="mt-5 text-2xl font-semibold">Copy-ready snippets for every core workflow</h3>
            <p className="mt-2 text-white/70 max-w-2xl">Auth, databases, storage, edge functions — with tabs for JS, TS, and server frameworks. Minimal ceremony, maximum utility.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Auth with magic links","Row Level Security","Realtime subscriptions","Edge Functions"] .map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition">
                  <div className="text-sm font-medium">{item}</div>
                  <div className="mt-1 text-xs text-white/60">View snippet →</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <BookOpen className="h-4 w-4" />
              Guided learning
            </div>
            <h3 className="mt-5 text-xl font-semibold">Opinionated paths for common goals</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>• Build a SaaS with auth in 10 minutes</li>
              <li>• Secure your tables with RLS</li>
              <li>• Launch a production Postgres</li>
              <li>• Storage rules done right</li>
            </ul>
            <a href="#" className="mt-6 inline-block px-4 py-2 rounded-lg bg-white text-black font-medium">Browse paths</a>
          </div>
        </div>
      </div>
    </section>
  );
}
