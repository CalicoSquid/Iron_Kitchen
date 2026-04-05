import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

// Logo Assets
import logoLGB from '../assets/logo.png';
import iconTangerine from '../assets/icon-Tangerine.png';
import iconDragonfruit from '../assets/icon-Dragonfruit.png';
import iconLime from '../assets/icon-Lime.png';
import iconBerry from '../assets/icon-Blueberry.png';
import iconSavor from '../assets/icon-Tangerine.png'; // General Savor logo

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { id } = useParams(); // This grabs 'TK001' directly from /protocol/TK001

    const getNavIdentity = () => {
        const path = location.pathname; // This will be "/protocol/tk005"

        // 1. Manually extract the ID from the path string
        // We split by "/" and grab the last piece of the URL
        const pathSegments = path.split('/').filter(Boolean);
        const manualId = pathSegments[0] === 'protocol' ? pathSegments[1] : null;

        if (manualId) {
            // Convert to uppercase to match your switch cases (tk005 -> TK005)
            const upperId = manualId.toUpperCase();

            switch (upperId) {
                case 'TK001': return { logo: iconTangerine, label: 'Tangerine Protocol', sub: 'TK-001 // ACTIVE' };
                case 'TK002': return { logo: iconDragonfruit, label: 'Dragonfruit Protocol', sub: 'TK-002 // ACTIVE' };
                case 'TK003': return { logo: iconLime, label: 'Lime Protocol', sub: 'TK-003 // ACTIVE' };
                case 'TK004': return { logo: iconBerry, label: 'Berry Protocol', sub: 'TK-004 // ACTIVE' };
                case 'TK005': return { logo: iconSavor, label: 'Standard Protocol', sub: 'TK-005 // ACTIVE' };
                default: break;
            }
        }

        // 2. Fallback for general Test Kitchen
        if (path === '/test-kitchen') {
            return { logo: iconSavor, label: 'Savor Kitchen', sub: 'S-A01 // LAB' };
        }

        // 3. Default Home Identity
        return { logo: logoLGB, label: 'Iron Kitchen', sub: 'Inc. // S-A01' };
    };

    const { logo, label, sub } = getNavIdentity();
    const isLabMode = location.pathname.includes('kitchen') || location.pathname.includes('protocol');

    return (
        <nav className="fixed top-0 w-full z-[100] border-b border-white/[0.04] bg-background-charcoal h-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">

                {/* Logo + Dynamic Wordmark */}
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt={label}
                        className={`h-14 w-auto object-contain transition-all duration-500 ${isLabMode ? 'scale-110' : 'hover:scale-105'}`}
                    />
                    <div className="hidden sm:flex flex-col leading-tight border-l border-zinc-800 pl-3">
                        <span className="font-black uppercase tracking-[-0.02em] text-[11px] text-white leading-none">
                            {label}
                        </span>
                        <span className="font-mono text-[7px] uppercase tracking-[0.5em] text-zinc-600 mt-0.5">
                            {sub}
                        </span>
                    </div>
                </div>

                {/* Desktop Nav - Using NavHashLink for cross-page scrolling */}
                <div className="hidden md:flex items-center gap-8 font-bold uppercase tracking-[0.25em] text-[9px]">
                    <NavHashLink smooth to="/#specs" className="text-zinc-500 hover:text-white transition-colors duration-200">Specs</NavHashLink>
                    <NavHashLink smooth to="/#engineering" className="text-zinc-500 hover:text-white transition-colors duration-200">Build Log</NavHashLink>
                    <div className="w-px h-4 bg-zinc-800"></div>

                    <div className="group relative flex items-center gap-2">
                        <NavHashLink smooth to="/#recipes" className="text-savor-tangerine hover:text-white transition-colors duration-200 whitespace-nowrap">
                            Cook in Color
                        </NavHashLink>
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

                {/* CTA + Burger */}
                <div className="flex items-center gap-3">
                    <button className="hidden sm:block bg-white text-black px-4 py-2.5 text-[8px] font-black uppercase tracking-widest hover:bg-savor-tangerine hover:text-white transition-all duration-200">
                        Place an Order
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

            {/* Mobile menu - Now Solid and Z-indexed */}
            <div className={`fixed top-24 left-0 w-full bg-background-charcoal z-[101] border-b border-zinc-900 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="flex flex-col px-6 py-6 gap-5">
                    <NavHashLink to="/#specs" smooth onClick={() => setIsOpen(false)} className="font-black uppercase tracking-[0.3em] text-sm text-zinc-400 hover:text-white transition-colors">Specs</NavHashLink>
                    <NavHashLink to="/#engineering" smooth onClick={() => setIsOpen(false)} className="font-black uppercase tracking-[0.3em] text-sm text-zinc-400 hover:text-white transition-colors">Build Log</NavHashLink>
                    <div className="h-px bg-zinc-900"></div>
                    <NavHashLink to="/#recipes" smooth onClick={() => setIsOpen(false)} className="font-black uppercase tracking-[0.3em] text-sm text-savor-tangerine flex items-center justify-between">
                        <span>Cook in Color</span>
                        <div className="flex gap-1.5">
                            {['#FF6D00', '#E91E8C', '#8BC34A', '#3B82F6', '#E53935'].map(c => (
                                <div key={c} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }}></div>
                            ))}
                        </div>
                    </NavHashLink>
                    <button className="w-full py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-savor-tangerine hover:text-white transition-all mt-1">
                        Place an Order
                    </button>
                </div>
            </div>
        </nav>
    );
}