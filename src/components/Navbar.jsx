import { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-black/60 backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-400 to-amber-600 grid place-items-center shadow-lg shadow-orange-500/30">
            <Rocket className="h-5 w-5 text-black" />
          </div>
          <span className="font-semibold tracking-tight">Supabase Docs — Reimagined</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#guides" className="hover:text-white transition-colors">Guides</a>
          <a href="#api" className="hover:text-white transition-colors">API</a>
          <a href="#examples" className="hover:text-white transition-colors">Examples</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#get-started" className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:shadow-lg hover:shadow-orange-500/20 transition">Get started</a>
        </div>

        <button aria-label="Toggle menu" className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-3 text-white/90">
            <a href="#features" className="block py-2">Features</a>
            <a href="#guides" className="block py-2">Guides</a>
            <a href="#api" className="block py-2">API</a>
            <a href="#examples" className="block py-2">Examples</a>
            <a href="#get-started" className="block py-2 font-medium text-black bg-white rounded-lg text-center">Get started</a>
          </div>
        </div>
      )}
    </header>
  );
}
