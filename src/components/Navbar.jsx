import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Challenges', href: '#challenges' },
    { label: 'Events', href: '#events' },
    { label: 'Channels', href: '#channels' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#home" className="font-black tracking-tight text-2xl">VAULTX</a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-black/80 hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#join"
            className="border border-black px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white transition-colors"
          >
            Sign In
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-black/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-black/80 hover:text-black"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit border border-black px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white transition-colors"
            >
              Sign In
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
