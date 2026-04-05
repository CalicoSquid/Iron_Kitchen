// src/components/Hero.jsx
import { useState } from 'react';
import schematicAsset from '../assets/hero2.png';

export default function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row md:items-center bg-background-charcoal overflow-hidden pt-24">

      {/* Blueprint grid */}
      <div className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Corner crosshairs — desktop only */}
      <div className="hidden md:block absolute top-32 left-6 w-8 h-8 border-l border-t border-zinc-800 opacity-60 z-10"></div>
      <div className="hidden md:block absolute top-32 right-6 w-8 h-8 border-r border-t border-zinc-800 opacity-60 z-10"></div>
      <div className="hidden md:block absolute bottom-6 left-6 w-8 h-8 border-l border-b border-zinc-800 opacity-60 z-10"></div>
      <div className="hidden md:block absolute bottom-6 right-6 w-8 h-8 border-r border-b border-zinc-800 opacity-60 z-10"></div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 z-10 relative flex flex-col md:grid md:grid-cols-2 md:gap-12 lg:gap-20 md:items-center md:py-20">

        {/* ── IMAGE FIRST ON MOBILE ── */}
        <div
          className="order-1 md:order-2 relative w-full"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Mobile: banner crop — shows just the press body, no wasted square */}
          <div className="block md:hidden relative w-full overflow-hidden" style={{ height: '52vw', maxHeight: '280px' }}>
            <img
              src={schematicAsset}
              alt="Iron Kitchen Industrial Press"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
              style={{
                objectPosition: '50% 30%',
                filter: 'brightness(0.9)',
              }}
            />
            {/* Bottom fade into content below */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background-charcoal to-transparent pointer-events-none"></div>
            {/* Top fade from navbar */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background-charcoal to-transparent pointer-events-none"></div>
          </div>

          {/* Desktop: full aspect-square with border + glow */}
          <div className="hidden md:block relative aspect-square">
            <div className="absolute inset-0 border border-zinc-900 z-20 pointer-events-none">
              <div className="absolute -top-px -left-px w-4 h-4 border-l-2 border-t-2 border-zinc-700"></div>
              <div className="absolute -top-px -right-px w-4 h-4 border-r-2 border-t-2 border-zinc-700"></div>
              <div className="absolute -bottom-px -left-px w-4 h-4 border-l-2 border-b-2 border-zinc-700"></div>
              <div className="absolute -bottom-px -right-px w-4 h-4 border-r-2 border-b-2 border-zinc-700"></div>
            </div>
            {/* Glow */}
            <div
              className="absolute z-0 pointer-events-none transition-opacity duration-700"
              style={{
                width: '60%', height: '60%', left: '10%', top: '28%',
                background: 'radial-gradient(circle, rgba(255,109,0,0.7) 0%, rgba(255,87,34,0.4) 35%, transparent 72%)',
                filter: 'blur(38px)',
                opacity: hovered ? 0.9 : 0.45,
              }}
            ></div>
            <div
              className="absolute z-0 pointer-events-none transition-opacity duration-700"
              style={{
                width: '75%', height: '35%', left: '8%', top: '60%',
                background: 'radial-gradient(ellipse, rgba(255,152,0,0.5) 0%, transparent 70%)',
                filter: 'blur(28px)',
                opacity: hovered ? 0.7 : 0.3,
              }}
            ></div>
            <img
              src={schematicAsset}
              alt="Iron Kitchen Industrial Press — SKU-IKI-01"
              className="relative w-full h-full object-contain transition-all duration-1000 z-10"
              style={{ filter: hovered ? 'brightness(1)' : 'brightness(0.8)' }}
            />
            <span className="absolute bottom-3 right-3 text-zinc-700 font-mono text-[8px] uppercase tracking-widest z-20">CAD REV_1.0 // SKU-IKI-01</span>
            <span className="absolute top-3 left-3 text-zinc-800 font-mono text-[8px] uppercase tracking-widest z-20">⊕ VIEW: ISO_01</span>
          </div>
        </div>

        {/* ── TEXT CONTENT — SECOND ON MOBILE ── */}
        <div className="order-2 md:order-1 text-left pt-4 pb-10 md:py-0">

          {/* Badges */}
          <div className="mb-5 flex flex-wrap gap-2">
            <span className="px-3 py-1 border border-zinc-800 text-[8px] uppercase tracking-[0.4em] text-zinc-600 font-mono bg-zinc-950/50">
              S-A01 // Small Batch
            </span>
            <span className="px-3 py-1 border border-savor-tangerine/50 text-[8px] uppercase tracking-[0.3em] text-savor-tangerine font-mono bg-savor-tangerine/5">
              Cook in Color ◆
            </span>
          </div>

          {/* Title */}
          <h1 className="font-black uppercase leading-[0.88] mb-6 text-white">
            <span className="block text-[clamp(3.5rem,12vw,7rem)] tracking-[-0.04em]">Iron</span>
            <span className="block text-[clamp(2.8rem,9.5vw,5.8rem)] tracking-[-0.04em] text-zinc-400 italic">Kitchen</span>
            <span className="block text-[clamp(0.6rem,2.5vw,1.1rem)] tracking-[0.5em] font-mono text-zinc-600 mt-2 not-italic">
              INC. — EST. MMXXV
            </span>
          </h1>

          {/* Rule */}
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-savor-tangerine"></div>
            <div className="h-px flex-1 bg-zinc-900"></div>
          </div>

          <p className="text-zinc-400 text-[10px] font-mono uppercase tracking-[0.15em] leading-[2] mb-8">
            Engineered. Overbuilt.<br/>
            3.52 lbs of Thermal Mass —<br/>
            Optimized for the Maillard Reaction.
          </p>

          {/* CTAs — full width on mobile */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-[10px] hover:bg-savor-tangerine hover:text-white transition-all duration-300">
              Reserve Now
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border border-zinc-800 text-zinc-400 font-bold uppercase tracking-widest text-[10px] hover:border-zinc-500 hover:text-white transition-all duration-300 font-mono">
              Download Schematics →
            </button>
          </div>

          {/* Spec pills — scrollable row on mobile */}
          <div className="flex gap-4 mt-8 overflow-x-auto pb-1 scrollbar-none">
            {["304 SS", "3.52 lbs", "+/- 0.005\"", "450°F"].map(spec => (
              <span key={spec} className="text-[8px] font-mono uppercase tracking-widest text-zinc-700 border-b border-zinc-900 pb-1 shrink-0">{spec}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}