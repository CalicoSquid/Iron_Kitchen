// src/pages/Store.jsx
import { useEffect, useState } from 'react';
import imgPress from '../assets/press.png';
import imgSmash from '../assets/smash.png';
import imgSlim from '../assets/burger-board.png';
import imgSlider from '../assets/slider-board.png';
import imgHeart from '../assets/heart-board.png';
import imgBundle from '../assets/board-bundle.png';

const SHOP_BASE = 'https://ironkitcheninc.com/collections/all'; // fallback

// ── Product data ──────────────────────────────────────────────────────────────

const HERO_PRODUCT = {
  sku: 'IKX1',
  name: 'Hamburger Patty Hand Press',
  price: '$949.00',
  badge: 'Flagship',
  tag: 'IKX1 // Professional Grade',
  description: 'The full mechanical system. Lever-actuated, 304 stainless steel construction. 180° travel arc, 4.2× mechanical advantage. Built for consecutive production runs.',
  specs: [
    { label: 'Material',   value: '304 SS' },
    { label: 'Mass',       value: '3.52 lbs' },
    { label: 'Tolerance',  value: '+/- 0.005"' },
    { label: 'Lever Arc',  value: '180°' },
    { label: 'Press Force','value': '147 lbs output' },
    { label: 'Press Plate','value': '6.0" × 3.0"' },
  ],
  url: 'https://ironkitcheninc.com/products/burger-patty-hand-press',
};

const SECONDARY_PRODUCT = {
  sku: 'IKX3',
  name: 'Smash Burger Press',
  price: '$29.00',
  badge: 'Entry',
  tag: 'IKX3 // Manual Press',
  description: 'Coiled spring handle. Full stainless plate. Designed for single-smash technique on any flat-top surface. No mechanical advantage — raw force, full contact.',
  specs: [
    { label: 'Material',   value: '304 SS' },
    { label: 'Handle',     value: 'Spring coil' },
    { label: 'Plate',      value: 'Full round' },
    { label: 'Technique',  value: 'Manual smash' },
  ],
  url: 'https://ironkitcheninc.com/products/smash-burger-press',
};

const BOARD_PRODUCTS = [
  {
    sku: 'SPB-SLIM',
    name: 'SlimPress',
    sub: 'Patty Board',
    price: '$65.00',
    tag: 'Single patty',
    image: imgSlim,
    description: 'Single circular cutout. Precision fit for standard 4oz puck. Slots into IKX1 rail system.',
    url: 'https://ironkitcheninc.com/products/slimpress-patty',
  },
  {
    sku: 'SPB-SLD',
    name: 'SliderPress',
    sub: 'Patty Board',
    price: '$65.00',
    tag: '4× slider',
    image: imgSlider,
    description: 'Four-cutout array for simultaneous slider production. Full rail compatibility.',
    url: 'https://ironkitcheninc.com/products/sliderpress-patty-board',
  },
  {
    sku: 'SPB-HRT',
    name: 'HeartPress',
    sub: 'Patty Board',
    price: '$65.00',
    tag: 'Heart form',
    image: imgHeart,
    description: 'Heart-form cutout. Same tolerances, same rail fit. For when the occasion calls for it.',
    url: 'https://ironkitcheninc.com/products/heartpress-patty-board',
  },
];

const BUNDLE = {
  sku: 'SPB-BDL',
  name: 'Patty Board Bundle',
  price: '$149.00',
  saving: 'Save $46',
  tag: 'All three boards',
  description: 'SlimPress + SliderPress + HeartPress. Complete patty board system. One SKU, full coverage.',
  url: 'https://ironkitcheninc.com/products/patty-board-bundle-press-accessories',
};

// ── Sub-components ────────────────────────────────────────────────────────────

function AddToCartBtn({ url, label = 'Place Order', accent = false }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden font-black uppercase tracking-widest text-[9px] px-6 py-3 transition-all duration-300 flex items-center justify-center gap-2 ${
        accent
          ? 'bg-savor-tangerine text-white hover:bg-savor-tangerine-warm'
          : 'border border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white'
      }`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700" />
      <span className="relative z-10">{label}</span>
      <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-200">→</span>
    </a>
  );
}

function SpecRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-zinc-900 last:border-0">
      <span className="font-mono text-[7px] uppercase tracking-[0.4em] text-zinc-700">{label}</span>
      <span className="font-mono text-[9px] text-zinc-400">{value}</span>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function Store() {
  const [hoveredBoard, setHoveredBoard] = useState(null);

  useEffect(() => {
          // This specifically forces the window to the top 
          // only when this component mounts
          window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'instant' // 'instant' prevents the weird halfway-up "sliding" look
          });
      }, []); // Empty dependency array means "only run on page load"

  return (
    <div className="bg-background-charcoal min-h-screen pt-24">

      {/* Blueprint grid */}
      <div className="fixed inset-0 opacity-[0.018] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-24">

        {/* ── Page Header ── */}
        <div className="py-12 md:py-16 border-b border-zinc-900 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-savor-tangerine" />
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-zinc-600">
              IKI Store // {new Date().getFullYear()} Collection // Shopify Integration Pending
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            The<br />
            <span className="text-zinc-700 italic">Arsenal.</span>
          </h1>
          <div className="flex items-center gap-4 mt-5">
            <div className="h-px w-8 bg-savor-tangerine" />
            <div className="h-px w-48 bg-zinc-900" />
          </div>
        </div>

        {/* ── IKX1 Hero Product ── */}
        <div className="mb-1 grid md:grid-cols-2 gap-px bg-zinc-900">

          {/* Image panel */}
          <div className="bg-zinc-950 relative overflow-hidden flex items-center justify-center min-h-[380px] md:min-h-[520px]">
            {/* Orange glow */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(ellipse at 40% 60%, rgba(255,109,0,0.18) 0%, transparent 65%)',
            }} />
            {/* Corner marks */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-zinc-800 z-10" />
            <div className="absolute top-4 right-4 w-6 h-6 border-r border-t border-zinc-800 z-10" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l border-b border-zinc-800 z-10" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-zinc-800 z-10" />
            <img
              src={imgPress}
              alt="IKX1 Hamburger Patty Hand Press"
              className="relative z-10 w-full h-full object-contain p-8"
              style={{ filter: 'brightness(0.85) contrast(1.05) grayscale(0.15)' }}
            />
            {/* Badge */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
              <span className="px-3 py-1 bg-savor-tangerine font-mono text-[7px] uppercase tracking-[0.4em] text-white">
                Flagship
              </span>
            </div>
          </div>

          {/* Info panel */}
          <div className="bg-black p-6 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[7px] uppercase tracking-[0.5em] text-zinc-700">{HERO_PRODUCT.tag}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-2">
                {HERO_PRODUCT.sku}
              </h2>
              <h3 className="text-lg md:text-2xl font-black uppercase tracking-tight text-zinc-400 mb-6">
                {HERO_PRODUCT.name}
              </h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-savor-tangerine" />
                <div className="h-px flex-1 bg-zinc-900" />
              </div>
              <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-500 leading-[2] mb-8">
                {HERO_PRODUCT.description}
              </p>
              <div className="mb-8">
                {HERO_PRODUCT.specs.map(s => <SpecRow key={s.label} {...s} />)}
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <span className="font-mono text-2xl font-black text-white">{HERO_PRODUCT.price}</span>
              <AddToCartBtn url={HERO_PRODUCT.url} label="Place Order" accent />
            </div>
          </div>
        </div>

        {/* ── IKX3 Secondary ── */}
        <div className="mb-12 grid md:grid-cols-3 gap-px bg-zinc-900">

          {/* Image */}
          <div className="bg-zinc-950 relative overflow-hidden flex items-center justify-center min-h-[240px]">
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(ellipse at 50% 60%, rgba(255,109,0,0.1) 0%, transparent 65%)',
            }} />
            <img
              src={imgSmash}
              alt="IKX3 Smash Burger Press"
              className="relative z-10 w-full h-full object-contain p-6"
              style={{ filter: 'brightness(0.85) contrast(1.05) grayscale(0.15)' }}
            />
          </div>

          {/* Info */}
          <div className="md:col-span-2 bg-black p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[7px] uppercase tracking-[0.5em] text-zinc-700 block mb-3">{SECONDARY_PRODUCT.tag}</span>
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-[0.9] mb-1">{SECONDARY_PRODUCT.sku}</h2>
              <h3 className="text-base md:text-xl font-black uppercase tracking-tight text-zinc-400 mb-4">{SECONDARY_PRODUCT.name}</h3>
              <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-500 leading-[2] mb-5">{SECONDARY_PRODUCT.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-900 mb-5">
                {SECONDARY_PRODUCT.specs.map(s => (
                  <div key={s.label} className="bg-black px-3 py-3">
                    <div className="font-mono text-[7px] uppercase tracking-[0.3em] text-zinc-700 mb-1">{s.label}</div>
                    <div className="font-mono text-[9px] text-zinc-400">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <span className="font-mono text-xl font-black text-white">{SECONDARY_PRODUCT.price}</span>
              <AddToCartBtn url={SECONDARY_PRODUCT.url} label="Place Order" />
            </div>
          </div>
        </div>

        {/* ── Patty Boards Header ── */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1.5 h-1.5 bg-zinc-700" />
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-zinc-600">Press Accessories // Patty Boards</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            The Boards.<br />
          </h2>
          <div className="flex items-center gap-4 mt-4">
            <div className="h-px w-8 bg-zinc-800" />
            <div className="h-px w-32 bg-zinc-900" />
          </div>
        </div>

        {/* ── 3 Boards Grid ── */}
        <div className="mb-1 grid md:grid-cols-3 gap-px bg-zinc-900">
          {BOARD_PRODUCTS.map((board, i) => (
            <div
              key={board.sku}
              className="bg-zinc-950 flex flex-col relative overflow-hidden group"
              onMouseEnter={() => setHoveredBoard(i)}
              onMouseLeave={() => setHoveredBoard(null)}
            >
              {/* Color tint on hover */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(ellipse at 50% 50%, rgba(255,109,0,0.08) 0%, transparent 70%)',
                  opacity: hoveredBoard === i ? 1 : 0,
                }}
              />

              {/* Image area */}
              <div className="relative h-48 flex items-center justify-center border-b border-zinc-900 overflow-hidden">
                <img
                  src={board.image}
                  alt={`${board.name} ${board.sub}`}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'brightness(0.85) contrast(1.05) grayscale(0.15)' }}
                />
                <span className="absolute top-3 left-3 font-mono text-[7px] uppercase tracking-[0.4em] text-zinc-800">{board.sku}</span>
                <span className="absolute bottom-3 right-3 font-mono text-[7px] uppercase tracking-[0.3em] text-zinc-800">{board.tag}</span>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-1 justify-between relative z-10">
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight leading-none mb-0.5">{board.name}</h3>
                  <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-600 block mb-4">{board.sub}</span>
                  <p className="font-mono text-[8px] uppercase tracking-[0.1em] text-zinc-600 leading-[1.8] mb-5">{board.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-base font-black">{board.price}</span>
                  <AddToCartBtn url={board.url} label="Order" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bundle CTA ── */}
        <div className="mb-16 bg-zinc-950 border border-zinc-900 border-t-0">
          {/* Tangerine top accent */}
          <div className="h-px bg-gradient-to-r from-savor-tangerine via-savor-tangerine-warm to-transparent" />

          <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Bundle image */}
            <div className="shrink-0 w-24 h-24 flex items-center justify-center">
              <img src={imgBundle} alt="Patty Board Bundle" className="w-full h-full object-contain" style={{ filter: 'brightness(0.85) contrast(1.05) grayscale(0.15)' }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-[7px] uppercase tracking-[0.4em] text-zinc-700">{BUNDLE.tag}</span>
                <span className="px-2 py-0.5 bg-savor-tangerine/10 border border-savor-tangerine/30 font-mono text-[7px] uppercase tracking-widest text-savor-tangerine">
                  {BUNDLE.saving}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none mb-2">
                {BUNDLE.name}
              </h3>
              <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-zinc-600 leading-[2]">
                {BUNDLE.description}
              </p>
            </div>
            <div className="flex items-center gap-6 shrink-0">
              <span className="font-mono text-2xl font-black text-white">{BUNDLE.price}</span>
              <AddToCartBtn url={BUNDLE.url} label="Order Bundle" accent />
            </div>
          </div>
        </div>

        {/* ── Shopify note ── */}
        <div className="border border-zinc-900 bg-zinc-950/50 px-5 py-4 flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-zinc-700 shrink-0" />
          <p className="font-mono text-[7px] uppercase tracking-[0.3em] text-zinc-700">
            Shopify integration pending // All orders currently fulfilled via ironkitcheninc.com // Native cart + checkout coming at launch
          </p>
        </div>

      </div>
    </div>
  );
}