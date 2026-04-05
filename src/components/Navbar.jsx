// src/components/Navbar.jsx
import React, { useState } from 'react';
import logoLGB from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/[0.04] bg-background-charcoal/95 backdrop-blur-md h-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">

        {/* Logo + wordmark */}
        <div className="flex items-center gap-3">
          <img
            src={logoLGB}
            alt="Iron Kitchen Inc."
            className="h-14 w-auto object-contain hover:scale-105 transition-transform duration-500"
          />
          <div className="hidden sm:flex flex-col leading-tight border-l border-zinc-800 pl-3">
            <span className="font-black uppercase tracking-[-0.02em] text-[11px] text-white leading-none">Iron Kitchen</span>
            <span className="font-mono text-[7px] uppercase tracking-[0.5em] text-zinc-600 mt-0.5">Inc. // S-A01</span>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 font-bold uppercase tracking-[0.25em] text-[9px]">
          <a href="#specs" className="text-zinc-500 hover:text-white transition-colors duration-200">Specs</a>
          <a href="#engineering" className="text-zinc-500 hover:text-white transition-colors duration-200">Build Log</a>
          <div className="w-px h-4 bg-zinc-800"></div>
          <div className="group relative flex items-center gap-2">
            <a href="#recipes" className="text-savor-tangerine hover:text-white transition-colors duration-200 whitespace-nowrap">
              Cook in Color
            </a>
            <div className="flex items-center gap-0.5">
              {[
                { color: '#FF6D00', delay: '0ms' },
                { color: '#E91E8C', delay: '30ms' },
                { color: '#8BC34A', delay: '60ms' },
                { color: '#3B82F6', delay: '90ms' },
                { color: '#E53935', delay: '120ms' },
              ].map(({ color, delay }, i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"
                  style={{ backgroundColor: color, transitionDelay: delay }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA + burger */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block bg-white text-black px-4 py-2.5 text-[8px] font-black uppercase tracking-widest hover:bg-savor-tangerine hover:text-white transition-all duration-200">
            Order Press
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className={`h-px w-6 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></div>
            <div className={`h-px w-6 bg-savor-tangerine transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`}></div>
            <div className={`h-px w-6 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`absolute top-24 left-0 w-full bg-background-charcoal border-b border-zinc-900 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="flex flex-col px-6 py-6 gap-5">
          <a href="#specs" onClick={() => setIsOpen(false)} className="font-black uppercase tracking-[0.3em] text-sm text-zinc-400 hover:text-white transition-colors">Specs</a>
          <a href="#engineering" onClick={() => setIsOpen(false)} className="font-black uppercase tracking-[0.3em] text-sm text-zinc-400 hover:text-white transition-colors">Build Log</a>
          <div className="h-px bg-zinc-900"></div>
          <a href="#recipes" onClick={() => setIsOpen(false)} className="font-black uppercase tracking-[0.3em] text-sm text-savor-tangerine flex items-center justify-between">
            <span>Cook in Color</span>
            <div className="flex gap-1.5">
              {['#FF6D00','#E91E8C','#8BC34A','#3B82F6','#E53935'].map(c => (
                <div key={c} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }}></div>
              ))}
            </div>
          </a>
          <button className="w-full py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-savor-tangerine hover:text-white transition-all mt-1">
            Order Press
          </button>
        </div>
      </div>
    </nav>
  );
}