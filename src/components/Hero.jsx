import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-400 to-amber-500" />
            Interactive 3D hero • Fintech • Travel
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
            Supabase Docs, redesigned for clarity and speed
          </h1>
          <p className="mt-5 text-lg text-white/80">
            A modern, immersive documentation experience with crisp typography, delightful motion, and a focus on developer productivity.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-black font-medium hover:shadow-lg hover:shadow-orange-500/20 transition">Get started</a>
            <a href="#guides" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 text-white border border-white/15 hover:bg-white/15 transition">Explore guides</a>
          </div>
        </div>
      </div>
    </section>
  );
}
