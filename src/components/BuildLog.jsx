// src/components/BuildLog.jsx
import { useState } from 'react';
import pressImage from '../assets/hero2.png';

const logs = [
  {
    id: "LOG-001",
    date: "2025-11-03",
    title: "Material Selection: 304 vs 316 SS",
    status: "CLOSED",
    summary: "304 food-grade stainless selected over 316 marine-grade after thermal cycling tests.",
    detail: [
      { label: "Candidates tested", value: "304 SS, 316 SS, 430 SS" },
      { label: "Test cycles",       value: "48hr thermal soak @ 500°F" },
      { label: "Result",            value: "304 SS optimal — lower cost, equal food-safe performance" },
      { label: "Rejected",          value: "316 SS: 22% cost premium, no measurable gain" },
      { label: "Decision",          value: "LOCKED // MAT-304" },
    ]
  },
  {
    id: "LOG-002",
    date: "2025-12-18",
    title: "Lever Arc Geometry: 180° Travel",
    status: "CLOSED",
    summary: "180° lever arc finalized after 6 prototype iterations. Mechanical advantage: 4.2×.",
    detail: [
      { label: "Prototypes",   value: "6 iterations — 90°, 120°, 150°, 180° (×3)" },
      { label: "Target MA",    value: "4.0× minimum" },
      { label: "Achieved",     value: "4.2× @ 180° travel" },
      { label: "Press force",  value: "35 lbs input → 147 lbs at plate" },
      { label: "Decision",     value: "LOCKED // ARC-180" },
    ]
  },
  {
    id: "LOG-003",
    date: "2026-01-09",
    title: "Press Plate Dimensions: 6.0\" × 3.0\"",
    status: "CLOSED",
    summary: "Plate geometry optimized for full smash coverage on standard 80/20 blend patties.",
    detail: [
      { label: "Coverage test", value: "4oz / 6oz / 8oz — all within bounds" },
      { label: "Edge relief",   value: "0.08\" radius — no meat blowout" },
      { label: "Tolerance",     value: "+/- 0.005\" CNC finished" },
      { label: "Surface",       value: "320-grit brushed — non-stick, non-porous" },
      { label: "Decision",      value: "LOCKED // DIM-600" },
    ]
  },
  {
    id: "LOG-004",
    date: "2026-01-28",
    title: "Thermal Mass Optimization",
    status: "CLOSED",
    summary: "3.52 lbs total mass validated for sustained Maillard temps across consecutive smashes.",
    detail: [
      { label: "Target temp",    value: "450°F surface // 140°C Maillard threshold" },
      { label: "Recovery time",  value: "< 90s between smashes" },
      { label: "Test protocol",  value: "10 consecutive smashes, thermocouple logged" },
      { label: "Drop per smash", value: "≤ 18°F — within tolerance" },
      { label: "Decision",       value: "LOCKED // HET-940" },
    ]
  },
  {
    id: "LOG-005",
    date: "2026-03-01",
    title: "Savor Integration Protocol",
    status: "ACTIVE",
    summary: "Deep-link protocol and recipe formula format under active development with Savor.",
    detail: [
      { label: "Integration",  value: "Deep link // source=ironkitchen param" },
      { label: "Focus Mode",   value: "App launches directly into recipe" },
      { label: "Format",       value: "Temp / Press / Time — engineered recipe schema" },
      { label: "Themes",       value: "12 Cook in Color variants mapped to formulas" },
      { label: "Status",       value: "IN PROGRESS // ETA: Launch" },
    ]
  },
  {
    id: "LOG-006",
    date: "2026-Q2",
    title: "Small Batch Run #1: 50 Units",
    status: "QUEUED",
    summary: "First production run. CNC vendor confirmed. Material stock ordered.",
    detail: [
      { label: "Batch size",   value: "50 units" },
      { label: "Vendor",       value: "[REDACTED] // NDA active" },
      { label: "Lead time",    value: "6–8 weeks post-approval" },
      { label: "QC protocol",  value: "100% tolerance check — no sampling" },
      { label: "Status",       value: "QUEUED // Pending LOG-005 close" },
    ]
  },
  {
    id: "LOG-007",
    date: "2026-Q2",
    title: "Press Kit + Distribution",
    status: "QUEUED",
    summary: "Retail packaging, shipping spec, and fulfillment partner selection.",
    detail: [
      { label: "Packaging",    value: "Industrial kraft — no plastic" },
      { label: "Includes",     value: "Press, schematic card, Savor QR deep-link" },
      { label: "Fulfillment",  value: "TBD" },
      { label: "Status",       value: "QUEUED" },
    ]
  },
];

const statusConfig = {
  CLOSED: { dot: "bg-zinc-600",                          text: "text-zinc-600",       label: "Closed",  border: "border-zinc-900" },
  ACTIVE: { dot: "bg-savor-tangerine animate-pulse",     text: "text-savor-tangerine",label: "Active",  border: "border-savor-tangerine/30" },
  QUEUED: { dot: "bg-zinc-800",                          text: "text-zinc-700",       label: "Queued",  border: "border-zinc-900" },
};

export default function BuildLog() {
  const [open, setOpen] = useState(null);
  const toggle = (id) => setOpen(open === id ? null : id);

  return (
    <section id="engineering" className="py-16 md:py-28 bg-background-charcoal border-t border-zinc-900 relative overflow-hidden">

      {/* Blueprint grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Atmospheric image strip — top, very subtle */}
      <div className="absolute top-0 left-0 right-0 h-40 overflow-hidden pointer-events-none">
        <img
          src={pressImage}
          alt=""
          className="w-full h-full object-cover object-top opacity-[0.07] brightness-50"
          style={{ objectPosition: '50% 20%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-charcoal"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-savor-tangerine animate-pulse"></div>
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-zinc-600">
              Engineering Log // {logs.filter(l => l.status === 'CLOSED').length} Closed · 1 Active · {logs.filter(l => l.status === 'QUEUED').length} Queued
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-4">
            Build<br/>
            <span className="text-zinc-700 italic">Log.</span>
          </h2>
          <div className="flex items-center gap-4 mt-5">
            <div className="h-px w-8 bg-savor-tangerine"></div>
            <div className="h-px w-32 bg-zinc-900"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-zinc-900"></div>

          <div className="flex flex-col">
            {logs.map((log) => {
              const cfg = statusConfig[log.status];
              const isOpen = open === log.id;
              const isQueued = log.status === 'QUEUED';

              return (
                <div key={log.id} className={`relative pl-8 ${isQueued ? 'opacity-40' : ''}`}>

                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-5 w-[23px] h-[23px] rounded-full border ${cfg.border} bg-background-charcoal flex items-center justify-center`}>
                    <div className={`w-2 h-2 rounded-full ${cfg.dot}`}></div>
                  </div>

                  {/* Entry */}
                  <div
                    className={`border-b border-zinc-900 transition-colors duration-200 ${!isQueued ? 'cursor-pointer active:bg-zinc-950/80 hover:bg-zinc-950/50' : ''}`}
                    onClick={() => !isQueued && toggle(log.id)}
                  >
                    {/* Header row */}
                    <div className="py-4 flex items-start justify-between gap-3">
                      <div className="flex flex-col gap-1 flex-1 min-w-0">
                        {/* Meta row — wraps naturally on mobile */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
                          <span className="font-mono text-[7px] uppercase tracking-[0.4em] text-zinc-700">{log.id}</span>
                          <span className="font-mono text-[7px] uppercase tracking-widest text-zinc-800">{log.date}</span>
                          <span className={`font-mono text-[7px] uppercase tracking-widest ${cfg.text} flex items-center gap-1`}>
                            <span className={`inline-block w-1.5 h-1.5 rounded-full ${cfg.dot}`}></span>
                            {cfg.label}
                          </span>
                        </div>
                        <h3 className="font-black uppercase tracking-tight text-sm leading-tight">{log.title}</h3>
                        <p className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest leading-relaxed">{log.summary}</p>
                      </div>
                      {!isQueued && (
                        <div className={`shrink-0 w-5 h-5 border border-zinc-800 flex items-center justify-center font-mono text-[9px] text-zinc-600 transition-transform duration-300 mt-1 ${isOpen ? 'rotate-45' : ''}`}>
                          +
                        </div>
                      )}
                    </div>

                    {/* Expanded detail */}
                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-5' : 'max-h-0'}`}>
                      <div className="border border-zinc-900 bg-zinc-950">
                        <div className="h-px w-full" style={{
                          background: log.status === 'ACTIVE'
                            ? 'linear-gradient(to right, #FF6D00, transparent)'
                            : 'linear-gradient(to right, #27272a, transparent)'
                        }}></div>
                        {/* Single column on mobile, 2 col on sm+ */}
                        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {log.detail.map(d => (
                            <div key={d.label} className="flex flex-col gap-0.5">
                              <span className="font-mono text-[7px] uppercase tracking-[0.4em] text-zinc-700">{d.label}</span>
                              <span className="font-mono text-[9px] text-zinc-300 uppercase tracking-wide leading-snug">{d.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border border-zinc-900 bg-zinc-950 px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[7px] uppercase tracking-[0.4em] text-zinc-700">IKI Engineering // Rev 1.04</span>
            <div className="flex gap-1">
              <span className="px-2 py-0.5 bg-zinc-900 font-mono text-[7px] uppercase tracking-widest text-zinc-600">{logs.filter(l=>l.status==='CLOSED').length} closed</span>
              <span className="px-2 py-0.5 bg-savor-tangerine/10 border border-savor-tangerine/20 font-mono text-[7px] uppercase tracking-widest text-savor-tangerine">1 active</span>
              <span className="px-2 py-0.5 bg-zinc-900 font-mono text-[7px] uppercase tracking-widest text-zinc-700">{logs.filter(l=>l.status==='QUEUED').length} queued</span>
            </div>
          </div>
          <button className="font-mono text-[8px] uppercase tracking-widest text-zinc-600 hover:text-savor-tangerine transition-colors border-b border-zinc-900 pb-0.5 whitespace-nowrap">
            Download Spec Sheet →
          </button>
        </div>

      </div>
    </section>
  );
}