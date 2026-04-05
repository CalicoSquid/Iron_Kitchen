// src/components/Recipes.jsx  —  The Test Kitchen
import ikLogo from '../assets/logo.png';
import savorIcon from '../assets/icon-Tangerine.png';
import { Link } from 'react-router-dom';

export default function Recipes() {
    const formulas = [
        {
            id: "TK-001",
            name: "Tangerine",
            color: "#FF6D00",
            recipe: "Classic Smash Burger",
            temp: "450°F",
            press: "35 lbs",
            time: "45s",
            notes: "Max Maillard crust. Single smash, no flip until release.",
        },
        {
            id: "TK-002",
            name: "Dragonfruit",
            color: "#E91E8C",
            recipe: "Bacon & Swiss Smash",
            temp: "435°F",
            press: "32 lbs",
            time: "40s",
            notes: "Fat render priority. Swiss added at 30s for full melt.",
        },
        {
            id: "TK-003",
            name: "Lime",
            color: "#8BC34A",
            recipe: "Green Chile Smash",
            temp: "425°F",
            press: "28 lbs",
            time: "50s",
            notes: "Hatch chile moisture controlled. Medium press, slow release.",
        },
        {
            id: "TK-004",
            name: "Blueberry",
            color: "#3B82F6",
            recipe: "Truffle Smash",
            temp: "440°F",
            press: "30 lbs",
            time: "42s",
            notes: "Truffle oil applied post-press. Umami saturation protocol.",
        },
    ];

    return (
        <section id="recipes" className="py-16 md:py-28 bg-black border-t border-zinc-900 relative overflow-hidden">

            {/* Subtle grid */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Section header */}
                <div className="mb-10 md:mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-savor-tangerine animate-pulse"></div>
                        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-zinc-600">Savor Integration // Active</span>
                    </div>
                    <div className="flex items-end justify-between gap-4">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                            The Test<br />
                            <span className="text-zinc-700 italic">Kitchen.</span>
                        </h2>
                        <div className="flex flex-col items-end gap-1.5 shrink-0">
                            <div className="flex gap-1">
                                {formulas.map(f => (
                                    <div key={f.id} className="w-5 h-1 md:w-6" style={{ backgroundColor: f.color }}></div>
                                ))}
                            </div>
                            <span className="font-mono text-[7px] text-zinc-800 uppercase tracking-widest">{formulas.length} protocols</span>
                        </div>
                    </div>
                    <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest leading-loose mt-4">
                        Heat. Pressure. Time. Every formula replicated in Savor.
                    </p>
                </div>

                {/* Formula cards */}
                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-900">
                    {formulas.map((formula) => (
                        <div
                            key={formula.id}
                            className="relative bg-zinc-950 overflow-hidden group"
                            style={{ borderLeft: `2px solid ${formula.color}` }}
                        >
                            {/* Resting color tint — always visible */}
                            <div
                                className="absolute inset-0 pointer-events-none opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500"
                                style={{ backgroundColor: formula.color }}
                            ></div>

                            {/* MOBILE: horizontal compact row */}
                            <div className="flex md:hidden items-center gap-4 px-4 py-4 relative z-10">
                                <div
                                    className="w-8 h-8 rounded-sm shrink-0"
                                    style={{ backgroundColor: formula.color, opacity: 0.85 }}
                                ></div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="font-mono text-[7px] uppercase tracking-[0.4em] text-zinc-700">{formula.id}</span>
                                    </div>
                                    <h3 className="text-sm font-black uppercase tracking-tight leading-tight">{formula.recipe}</h3>
                                    <p className="font-mono text-[8px] text-zinc-600 uppercase tracking-wide mt-0.5 leading-relaxed">{formula.notes}</p>
                                </div>
                                <div className="flex flex-col gap-1 shrink-0 text-right">
                                    <div className="flex items-center gap-1.5 justify-end">
                                        <span className="font-mono text-[7px] text-zinc-700 uppercase">T</span>
                                        <span className="font-mono text-[9px] font-bold text-zinc-300">{formula.temp}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 justify-end">
                                        <span className="font-mono text-[7px] text-zinc-700 uppercase">P</span>
                                        <span className="font-mono text-[9px] font-bold text-zinc-300">{formula.press}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 justify-end">
                                        <span className="font-mono text-[7px] text-zinc-700 uppercase">t</span>
                                        <span className="font-mono text-[9px] font-bold text-zinc-300">{formula.time}</span>
                                    </div>
                                </div>
                            </div>

                            {/* DESKTOP: tall card */}
                            <div className="hidden md:flex flex-col h-full min-h-[380px] p-6 relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-zinc-700">{formula.id}</span>
                                    <div className="w-3.5 h-3.5 rounded-sm" style={{ backgroundColor: formula.color, opacity: 0.8 }}></div>
                                </div>
                                <div
                                    className="text-[4.5rem] font-black leading-none mb-4 opacity-[0.15] group-hover:opacity-25 transition-opacity duration-500"
                                    style={{ color: formula.color }}
                                >
                                    {formula.name[0]}
                                </div>
                                <h3 className="text-base font-black uppercase tracking-tight leading-tight mb-1 mt-auto">{formula.recipe}</h3>
                                <span className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest mb-5">Theme: {formula.name}</span>
                                <div className="grid grid-cols-3 gap-1 mb-4 border-t border-zinc-900 pt-4">
                                    {[
                                        { label: "Temp", val: formula.temp },
                                        { label: "Press", val: formula.press },
                                        { label: "Time", val: formula.time },
                                    ].map(({ label, val }) => (
                                        <div key={label} className="text-center">
                                            <div className="font-mono text-[7px] text-zinc-700 uppercase tracking-widest mb-1">{label}</div>
                                            <div className="font-mono text-[10px] font-bold text-zinc-300 group-hover:text-white transition-colors">{val}</div>
                                        </div>
                                    ))}
                                </div>
                                <p
                                    className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest leading-loose mb-5 border-l-2 pl-3"
                                    style={{ borderColor: formula.color + '70' }}
                                >
                                    {formula.notes}
                                </p>
                                <Link
                                    to={`/protocol/${formula.id.toLowerCase().replace("-", "")}`}
                                    className="w-full py-3 border border-zinc-800 group-hover:border-zinc-600 text-[8px] font-black uppercase tracking-widest transition-all duration-300 text-zinc-600 group-hover:text-white font-mono text-center block"
                                >
                                    Open in Savor →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="md:hidden mt-px">
                    <Link
                        to="/test-kitchen"
                        className="w-full py-4 border border-zinc-800 bg-zinc-950 text-[9px] font-black uppercase tracking-widest text-zinc-500 font-mono hover:text-white hover:border-zinc-600 transition-all block text-center"
                    >
                        Open All in Savor →
                    </Link>
                </div>

                {/* Co-brand bar */}
                <div className="mt-px bg-zinc-950 border border-zinc-900 border-t-0">
                    <div className="flex h-px">
                        {formulas.map(f => (
                            <div key={f.id} className="flex-1" style={{ backgroundColor: f.color }}></div>
                        ))}
                    </div>
                    <div className="px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <img src={ikLogo} alt="Iron Kitchen Inc." className="w-10 h-10 object-contain rounded-full opacity-90" />
                            <div className="flex flex-col items-center gap-0.5">
                                <div className="h-px w-3 bg-zinc-800"></div>
                                <span className="font-mono text-[8px] text-zinc-700">×</span>
                                <div className="h-px w-3 bg-zinc-800"></div>
                            </div>
                            <img src={savorIcon} alt="Savor" className="w-10 h-10 object-contain rounded-full opacity-90" />
                            <div className="flex flex-col ml-1">
                                <span className="font-mono text-[7px] uppercase tracking-[0.4em] text-zinc-600">Official Integration</span>
                                <span className="font-black uppercase text-[9px] tracking-tight text-zinc-300 leading-tight mt-0.5">
                                    Iron Kitchen <span className="text-zinc-700">×</span> Savor
                                </span>
                                <span className="font-mono text-[7px] uppercase tracking-widest text-zinc-700 mt-0.5">12 themes // Cook in Color</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                            <div className="flex gap-1">
                                {formulas.map(f => (
                                    <div key={f.id} className="w-1.5 h-1.5 rounded-full opacity-60" style={{ backgroundColor: f.color }}></div>
                                ))}
                            </div>
                            <Link
                                to="/test-kitchen"
                                className="font-mono text-[8px] uppercase tracking-widest text-zinc-600 hover:text-savor-tangerine transition-colors border-b border-zinc-900 pb-0.5 whitespace-nowrap"
                            >
                                Browse all →
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}