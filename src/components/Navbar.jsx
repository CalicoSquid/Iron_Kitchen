import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

// Logo Assets
import logoLGB from '../assets/logo.png';
import iconTangerine from '../assets/icon-Tangerine.png';
import iconDragonfruit from '../assets/icon-Dragonfruit.png';
import iconLime from '../assets/icon-Lime.png';
import iconBerry from '../assets/icon-Blueberry.png';
import iconSavor from '../assets/icon-Cranberry.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === '/';
    const isStore = location.pathname === '/store';
    const isLabMode = location.pathname.includes('kitchen') || location.pathname.includes('protocol');

    const getNavIdentity = () => {
        const path = location.pathname;
        const pathSegments = path.split('/').filter(Boolean);
        const manualId = pathSegments[0] === 'protocol' ? pathSegments[1] : null;

        if (manualId) {
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

        if (path === '/test-kitchen') {
            return { logo: iconSavor, label: 'Savor Kitchen', sub: 'S-A01 // LAB' };
        }

        if (path === '/store') {
            return { logo: logoLGB, label: 'IKI Store', sub: 'S-A01 // Shop' };
        }

        return { logo: logoLGB, label: 'Iron Kitchen', sub: 'Inc. // S-A01' };
    };

    const { logo, label, sub } = getNavIdentity();

    return (
        <nav className="fixed top-0 w-full z-[999] border-b border-white/[0.04] bg-background-charcoal h-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">

                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-3 group transition-opacity hover:opacity-80"
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={logo}
                        alt={label}
                        className={`h-14 transition-all duration-500 ${isLabMode ? 'scale-110' : 'group-hover:scale-105'}`}
                    />
                    <div className="hidden sm:flex flex-col border-l border-zinc-800 pl-3">
                        <span className="font-black uppercase tracking-[-0.02em] text-[11px] text-white">
                            {label}
                        </span>
                        <span className="font-mono text-[7px] uppercase tracking-[0.5em] text-zinc-600">
                            {sub}
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 font-bold uppercase tracking-[0.25em] text-[9px]">

                    {isHome ? (
                        <>
                            <NavHashLink smooth to="/#specs" className="text-zinc-500 hover:text-white transition">Specs</NavHashLink>
                            <NavHashLink smooth to="/#engineering" className="text-zinc-500 hover:text-white transition">Build Log</NavHashLink>
                            <Link to="/store" className="text-zinc-500 hover:text-white transition">Store</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/" className="text-zinc-500 hover:text-white transition flex items-center gap-1.5">
                                <span className="text-zinc-700">←</span> Home
                            </Link>
                            {!isStore && (
                                <Link to="/store" className="text-zinc-500 hover:text-white transition">Store</Link>
                            )}
                            {isStore && (
                                <NavHashLink smooth to="/#engineering" className="text-zinc-500 hover:text-white transition">Build Log</NavHashLink>
                            )}
                        </>
                    )}

                    <div className="w-px h-4 bg-zinc-800"></div>

                    <NavHashLink smooth to="/#recipes" className="text-savor-tangerine hover:text-white transition">
                        Cook in Color
                    </NavHashLink>
                </div>

                {/* Mobile burger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col gap-[5px] p-2"
                    aria-label="Toggle menu"
                >
                    <div className={`h-px w-6 bg-flavor-dragonfruit transition ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                    <div className={`h-px w-6 bg-savor-tangerine transition ${isOpen ? 'opacity-0' : ''}`} />
                    <div className={`h-px w-6 bg-flavor-lime transition ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-24 left-0 w-full bg-background-charcoal z-[999] border-b border-zinc-900 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="flex flex-col px-6 py-6 gap-5">

                    {isHome ? (
                        <>
                            <NavHashLink to="/#specs" smooth onClick={() => setIsOpen(false)} className="font-black uppercase tracking-[0.3em] text-sm text-zinc-400 hover:text-white">
                                Specs
                            </NavHashLink>
                            <NavHashLink to="/#engineering" smooth onClick={() => setIsOpen(false)} className="font-black uppercase tracking-[0.3em] text-sm text-zinc-400 hover:text-white">
                                Build Log
                            </NavHashLink>
                            <Link to="/store" onClick={() => setIsOpen(false)} className="font-black uppercase tracking-[0.3em] text-sm text-zinc-400 hover:text-white">
                                Store
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/" onClick={() => setIsOpen(false)} className="font-black uppercase tracking-[0.3em] text-sm text-zinc-400 hover:text-white flex items-center gap-2">
                                <span className="text-zinc-600">←</span> Home
                            </Link>
                            {!isStore && (
                                <Link to="/store" onClick={() => setIsOpen(false)} className="font-black uppercase tracking-[0.3em] text-sm text-zinc-400 hover:text-white">
                                    Store
                                </Link>
                            )}
                            {isStore && (
                                <NavHashLink to="/#engineering" smooth onClick={() => setIsOpen(false)} className="font-black uppercase tracking-[0.3em] text-sm text-zinc-400 hover:text-white">
                                    Build Log
                                </NavHashLink>
                            )}
                        </>
                    )}

                    <div className="h-px bg-zinc-900"></div>

                    <NavHashLink to="/#recipes" smooth onClick={() => setIsOpen(false)} className="font-black uppercase tracking-[0.3em] text-sm text-savor-tangerine">
                        Cook in Color ◆
                    </NavHashLink>

                </div>
            </div>
        </nav>
    );
}