// src/components/Specs.jsx
import pressImage from '../assets/schematics22.png';

export default function Specs() {
  const specs = [
    { id: "MAT-304", label: "Core Material",       value: "304 SS",         detail: "Non-reactive // Lifetime rated" },
    { id: "WGT-3.5", label: "Effective Mass",      value: "3.52 lbs",       detail: "Thermal inertia optimized" },
    { id: "TOL-005", label: "Machining Tolerance", value: "+/- 0.005\"",    detail: "CNC finished // Zero warping" },
    { id: "HET-940", label: "Thermal Conductivity",value: "Hi-Sat",         detail: "Maillard threshold: 140°C" },
    { id: "DIM-600", label: "Press Plate",         value: "6.0\" × 3.0\"", detail: "Full smash coverage" },
    { id: "ARC-180", label: "Lever Arc",           value: "180° Travel",    detail: "Mechanical advantage: 4.2×" },
  ];

  const certifications = ["NSF Certified", "FDA Compliant", "BPA Free", "ISO 9001"];

  return (
    <section id="specs" className="py-16 md:py-32 bg-black border-y border-zinc-900 relative overflow-hidden">

      {/* Blueprint grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="mb-8 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-zinc-700"></div>
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-zinc-600">Engineering Spec Sheet // Rev 1.04</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-4">
            Mechanical<br/>
            <span className="text-zinc-700 italic">Integrity.</span>
          </h2>
          <div className="flex items-center gap-4 mt-5">
            <div className="h-px w-8 bg-savor-tangerine"></div>
            <div className="h-px w-32 bg-zinc-900"></div>
          </div>
        </div>

        {/* MOBILE: image as full-width banner above specs */}
        <div className="block md:hidden relative w-full mb-6 overflow-hidden rounded-sm" style={{ height: '56vw', maxHeight: '260px' }}>
          <img
            src={pressImage}
            alt="IKI Press — Exploded Parts Schematic"
            className="w-full h-full object-cover"
            style={{ objectPosition: '50% 30%' }}
          />
          {/* Top + bottom fades — no side fades that cause the curve artifact */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>

        {/* DESKTOP: two-column grid */}
        <div className="grid md:grid-cols-2 gap-px bg-zinc-900">

          {/* Spec rows */}
          <div className="bg-black">
            {specs.map((s, i) => (
              <div
                key={s.id}
                className="group flex items-center justify-between px-4 sm:px-6 py-4 border-b border-zinc-900 hover:bg-zinc-950 transition-all duration-200 cursor-default"
              >
                <div className="flex items-start gap-3 sm:gap-5 min-w-0">
                  <span className="font-mono text-[9px] text-zinc-800 mt-0.5 w-4 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[7px] uppercase tracking-[0.4em] text-zinc-700 mb-0.5">{s.id}</p>
                    <h3 className="text-sm font-black uppercase tracking-tight text-white leading-none mb-0.5">{s.label}</h3>
                    <p className="font-mono text-[7px] uppercase tracking-widest text-zinc-700 group-hover:text-zinc-500 transition-colors truncate">{s.detail}</p>
                  </div>
                </div>
                <div className="text-right shrink-0 ml-3">
                  <span className="font-mono text-[10px] sm:text-xs text-zinc-400 group-hover:text-white transition-colors whitespace-nowrap">{s.value}</span>
                </div>
              </div>
            ))}

            {/* Certifications */}
            <div className="px-4 sm:px-6 py-4 border-b border-zinc-900">
              <p className="font-mono text-[7px] uppercase tracking-[0.4em] text-zinc-700 mb-3">CERT-ALL // Certifications</p>
              <div className="flex flex-wrap gap-2">
                {certifications.map(c => (
                  <span key={c} className="px-2 py-1 border border-zinc-800 font-mono text-[7px] uppercase tracking-widest text-zinc-600">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* DESKTOP image panel — clean, no side fade */}
          <div className="hidden md:block bg-black relative overflow-hidden">
            <img
              src={pressImage}
              alt="IKI Press — Exploded Parts Schematic"
              className="w-full h-full object-cover object-center"
            />
            {/* Only top + bottom fades — no left fade that causes the curve */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
          </div>

        </div>

        {/* Bottom meta bar */}
        <div className="border border-zinc-900 border-t-0 bg-zinc-950 px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-[7px] uppercase tracking-[0.4em] text-zinc-700">
            IKI // Spec Sheet v1.04 // {specs.length} Parameters
          </span>
          <a
            href="/blueprints/press-blueprint.pdf"
            download="IronKitchen_Schematic_SKU-IKI-01.pdf"
            className="font-mono text-[9px] uppercase tracking-widest text-zinc-600 hover:text-savor-tangerine transition-colors border-b border-zinc-900 pb-0.5"
          >
            Download Schematics →
          </a>
        </div>

      </div>
    </section>
  );
}