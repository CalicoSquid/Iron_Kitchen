// src/components/Footer.jsx
import ikLogo from '../assets/logo.png';
import savorLogo from '../assets/Savor_white.png';

export default function Footer() {
  const SHOP_URL = "https://ironkitcheninc.com/collections/all";

  return (
    <footer className="bg-background-charcoal border-t border-zinc-900 relative overflow-hidden">

      {/* Blueprint grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Tangerine top rule */}
      <div className="h-px w-full bg-gradient-to-r from-savor-tangerine via-savor-tangerine-warm to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-10">

        {/* Brand marks */}
        <div className="flex flex-col items-center gap-6 mb-10">
          <div className="flex items-center gap-6">
            <img src={ikLogo} alt="Iron Kitchen Inc." className="h-16 opacity-90" />
            <span className="font-mono text-zinc-700 text-lg">&times;</span>
            <img src={savorLogo} alt="Savor" className="h-10 opacity-90" />
          </div>

          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-zinc-900"></div>
            <span className="font-mono text-[8px] uppercase tracking-[0.5em] text-zinc-700">
              A Precision Collab // S-A01
            </span>
            <div className="h-px w-12 bg-zinc-900"></div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="text-center mb-10">
          <p className="font-black uppercase text-[clamp(1.4rem,5vw,3rem)] tracking-tighter leading-tight text-white">
            Engineered to Cook.<br />
            <span className="text-zinc-700 italic">Built to Last.</span>
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center mb-16">
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 bg-savor-tangerine text-white font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all duration-300 hover:bg-savor-tangerine-warm"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700"></span>
            <span className="relative z-10 flex items-center gap-2">
              Reserve — Batch 01
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </span>
          </a>
        </div>

        {/* Bottom meta */}
        <div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-mono text-[7px] uppercase tracking-[0.4em] text-zinc-800">
            © MMXXVI Iron Kitchen Inc. — All rights reserved
          </span>
          <span className="font-mono text-[7px] uppercase tracking-[0.4em] text-zinc-800">
            Powered by Savor // Cook in Color ◆
          </span>
        </div>

      </div>
    </footer>
  );
}