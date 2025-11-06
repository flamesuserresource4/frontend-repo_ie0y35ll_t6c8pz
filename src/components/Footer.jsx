export default function Footer() {
  return (
    <footer className="bg-black text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-semibold">Supabase Docs</h4>
          <p className="mt-2 text-sm">A refined documentation experience built for speed and clarity.</p>
        </div>
        <div>
          <h5 className="text-white/90 font-medium">Product</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#guides" className="hover:text-white">Guides</a></li>
            <li><a href="#api" className="hover:text-white">API</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white/90 font-medium">Resources</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#examples" className="hover:text-white">Examples</a></li>
            <li><a href="#" className="hover:text-white">Changelog</a></li>
            <li><a href="#" className="hover:text-white">Community</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white/90 font-medium">Company</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Supabase — Unofficial redesign demo</div>
      </div>
    </footer>
  );
}
