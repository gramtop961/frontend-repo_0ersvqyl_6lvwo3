export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="font-black tracking-tight text-xl">VAULTX</div>
          <p className="mt-1 text-xs text-black/60">A monochrome community for creators and builders.</p>
        </div>
        <div className="text-xs text-black/60">
          © {new Date().getFullYear()} Vaultx Community. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
