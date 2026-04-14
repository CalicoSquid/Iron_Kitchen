import { useState } from 'react';
import logo from '../assets/logo.png';
import savorLogo from '../assets/Savor_white.png';
import imgPress from '../assets/press.png';
import imgSmash from '../assets/smash.png';
import imgSlim from '../assets/burger-board.png';
import imgHero from '../assets/hero2.png';

const STORE_URL = '/store';
const IKX1_URL  = 'https://ironkitcheninc.com/products/burger-patty-hand-press';
const IKX3_URL  = 'https://ironkitcheninc.com/products/smash-burger-press';

const C = {
  cream:       '#F5F0E8',
  creamDark:   '#EDE6D6',
  creamDeep:   '#E2D9C8',
  charcoal:    '#1C1C1A',
  charcoalMid: '#2E2E2B',
  charcoalSoft:'#3D3D39',
  amber:       '#B8722A',
  amberLight:  '#D4893A',
  muted:       '#7A7468',
  faint:       '#C4BDB0',
  border:      '#D0C8B8',
  white:       '#FDFAF4',
};

function Mono({ children, style = {} }) {
  return (
    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.amber, ...style }}>
      {children}
    </span>
  );
}

function IndustrialBtn({ href, children, primary = true, small = false }) {
  const [hov, setHov] = useState(false);
  const isExt = href.startsWith('http') || href.startsWith('mailto');
  return (
    <a href={href} target={isExt ? '_blank' : undefined} rel={isExt ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: small ? '10px 20px' : '14px 32px',
        background: primary ? (hov ? C.amberLight : C.amber) : 'transparent',
        border: `2px solid ${primary ? (hov ? C.amberLight : C.amber) : (hov ? C.faint : 'rgba(255,255,255,0.35)')}`,
        color: C.white,
        fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
        fontSize: small ? 11 : 13, textTransform: 'uppercase', letterSpacing: '0.15em',
        textDecoration: 'none', transition: 'all 0.25s',
      }}
    >{children}</a>
  );
}

function DarkBtn({ href, children }) {
  const [hov, setHov] = useState(false);
  const isExt = href.startsWith('http') || href.startsWith('mailto');
  return (
    <a href={href} target={isExt ? '_blank' : undefined} rel={isExt ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px',
        background: hov ? C.charcoalMid : C.charcoal, color: C.cream,
        fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
        fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.15em',
        textDecoration: 'none', transition: 'all 0.25s',
      }}
    >{children}</a>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ];
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: 'rgba(15,15,12,0.88)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      padding: '0 40px', height: 68,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <a href="/" style={{ textDecoration: 'none' }}>
        <img src={logo} alt="Iron Kitchen Inc." style={{ height: 42, }} />
      </a>
      <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="nav-desktop">
        {links.map(l => <NavLink key={l.label} href={l.href}>{l.label}</NavLink>)}
        <IndustrialBtn href={STORE_URL} small>Shop Now</IndustrialBtn>
      </div>
      <button onClick={() => setOpen(!open)} className="nav-mobile-btn" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none', flexDirection: 'column', gap: 5 }}>
        {[0,1,2].map(i => (
          <div key={i} style={{ width: 24, height: 1.5, background: C.white, transform: open ? (i===0?'rotate(45deg) translate(4px,4px)':i===2?'rotate(-45deg) translate(4px,-4px)':'scaleX(0)'):'none', transition: 'all 0.25s' }} />
        ))}
      </button>
      {open && (
        <div style={{ position: 'absolute', top: 68, left: 0, right: 0, background: C.charcoal, borderTop: `2px solid ${C.amber}`, padding: '20px 40px 28px' }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{ display: 'block', padding: '13px 0', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 20, color: C.white, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: `1px solid ${C.charcoalMid}` }}>{l.label}</a>
          ))}
          <div style={{ marginTop: 20 }}><IndustrialBtn href={STORE_URL}>Shop Now</IndustrialBtn></div>
        </div>
      )}
      <style>{`
        @media (max-width: 768px) { .nav-desktop { display: none !important; } .nav-mobile-btn { display: flex !important; } }
      `}</style>
    </nav>
  );
}

function NavLink({ href, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ color: hov ? C.amber : 'rgba(255,255,255,0.65)', textDecoration: 'none', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.1em', transition: 'color 0.2s' }}
    >{children}</a>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ minHeight: '100vh', paddingTop: 68, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#000' }}>
      <img src={imgHero} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.45 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.85) 100%)' }} />

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: 860, padding: '60px 32px 120px', width: '100%' }}>
        <Mono style={{ marginBottom: 20, display: 'block', color: C.amber }}>Clemmons, North Carolina — Est. MMXXV</Mono>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(48px, 10vw, 128px)', color: C.white, lineHeight: 0.87, textTransform: 'uppercase', letterSpacing: '-0.01em', margin: '0 0 28px' }}>
          Engineered<br />to Cook.<br /><span style={{ color: C.amber, fontStyle: 'italic' }}>Built to Last.</span>
        </h1>
        <p style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(245,240,232,0.7)', fontSize: 'clamp(15px, 2vw, 18px)', maxWidth: 520, margin: '0 auto 44px', lineHeight: 1.75 }}>
          Two brothers from North Carolina making kitchen tools the way they should be — overbuilt, American-made, and built to outlast you.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <IndustrialBtn href={STORE_URL}>Visit Our Shop</IndustrialBtn>
          <IndustrialBtn href="#about" primary={false}>Our Story</IndustrialBtn>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(15,15,12,0.72)', backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '16px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        {['Made in America', 'Family Owned', 'Batch 01 — 50 Units', 'Built to Last Generations'].map((item, i) => (
          <Mono key={i} style={{ color: 'rgba(245,240,232,0.4)' }}>{item}</Mono>
        ))}
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" style={{ background: C.cream, padding: '120px 24px', borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="grid-collapse">
        <div>
          <div style={{ width: 40, height: 4, background: C.amber, marginBottom: 28 }} />
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(42px, 5vw, 72px)', textTransform: 'uppercase', lineHeight: 0.9, color: C.charcoal, margin: '0 0 36px' }}>
            Two Brothers.<br /><span style={{ color: C.amber, fontStyle: 'italic' }}>One Standard.</span>
          </h2>
          <div style={{ fontFamily: 'Barlow, sans-serif', fontSize: 16, color: '#4A4640', lineHeight: 1.85 }}>
            <p style={{ marginTop: 0 }}>Founded in <strong style={{ color: C.charcoal }}>Clemmons, North Carolina</strong>, Iron Kitchen Inc. is a family-run company built by two brothers with a shared background in mechanical engineering, automation, and a genuine love for cooking.</p>
            <p>After years designing precision mechanical systems, we noticed a problem: too many kitchen tools are imported, built to hit a low price point, and designed to be replaced — not relied on. We believed those tools could be better.</p>
            <p style={{ marginBottom: 0 }}>Iron Kitchen Inc. was created to bring that same standard into the kitchen. Thoughtful design, quality materials, and tools built to perform the same way on day one as they do ten years later. This is just the beginning.</p>
          </div>
          <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <DarkBtn href={STORE_URL}>Visit Our Shop</DarkBtn>
            <a href="#products" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.muted, textDecoration: 'none', padding: '14px 4px', borderBottom: `2px solid ${C.border}` }}>See Products ↓</a>
          </div>
        </div>
        <div style={{ background: C.charcoal, padding: '48px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: C.amber }} />
          <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 22, color: C.white, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 28px' }}>The IK Promise</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { icon: '◈', label: 'Made in the USA', body: 'Designed and manufactured in Clemmons, NC. Not just a sticker — a commitment.' },
              { icon: '◉', label: 'Serious Materials', body: 'Food-grade stainless steel, machined to tight tolerances. Nothing cheap, nothing that wears out.' },
              { icon: '⌂', label: 'Family Owned', body: 'No investors, no shortcuts. Two brothers who put their name on everything they ship.' },
              { icon: '⚙', label: 'Built to Last Generations', body: 'The kind of tool you hand down. Made to outlast trends, kitchens, and careers.' },
            ].map((item, i, arr) => (
              <div key={item.label} style={{ display: 'flex', gap: 16, padding: '20px 0', borderBottom: i < arr.length - 1 ? `1px solid ${C.charcoalMid}` : 'none' }}>
                <span style={{ color: C.amber, fontSize: 16, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 15, color: C.white, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontFamily: 'Barlow, sans-serif', fontSize: 13, color: C.muted, lineHeight: 1.65 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28, paddingTop: 24, borderTop: `1px solid ${C.charcoalMid}` }}>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700, fontSize: 17, color: C.amber }}>"Made in America. Built to Last Generations."</span>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .grid-collapse { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </section>
  );
}

// ── Products ──────────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    name: 'IKX3', sub: 'Manual Smash Press', price: '$29', badge: 'Entry Level',
    img: imgSmash, url: IKX3_URL, dark: false,
    desc: 'Heavy-duty spring handle, full stainless plate. No moving parts, no fuss. Pick it up and press — the right way to smash a burger.',
    specs: [{ k: 'Operation', v: 'Manual' }, { k: 'Material', v: '304 SS' }, { k: 'Handle', v: 'Spring coil' }],
  },
  {
    name: 'IKX1', sub: 'Lever-Action Hand Press', price: '$949', badge: '★ Flagship',
    img: imgPress, url: IKX1_URL, dark: true,
    desc: 'Our flagship press. A lever system that turns a single smooth pull into serious, consistent force — built for kitchens that run volume without cutting corners.',
    specs: [{ k: 'Material', v: '304 SS' }, { k: 'Output', v: '147 lbs force' }, { k: 'Plate', v: '6.0" × 3.0"' }, { k: 'Weight', v: '3.52 lbs' }],
  },
  {
    name: 'Boards', sub: 'Patty Rail Accessories', price: 'From $65', badge: 'System',
    img: imgSlim, url: STORE_URL, dark: false,
    desc: 'SlimPress, SliderPress, HeartPress. Precision-fit boards for the IKX1 rail system. Bundle all three and save $46.',
    specs: [{ k: 'Slim', v: 'Single patty' }, { k: 'Slider', v: '4× array' }, { k: 'Bundle', v: '$149' }],
  },
];

function Products() {
  return (
    <section id="products" style={{ background: C.white, padding: '120px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ width: 40, height: 4, background: C.amber, marginBottom: 20 }} />
        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(42px, 6vw, 68px)', textTransform: 'uppercase', color: C.charcoal, margin: '0 0 60px', lineHeight: 0.92 }}>
          What We<br /><span style={{ color: C.amber, fontStyle: 'italic' }}>Make.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, background: C.border }} className="product-grid">
          {PRODUCTS.map(p => <ProductCard key={p.name} p={p} />)}
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .product-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function ProductCard({ p }) {
  return (
    <div style={{ background: p.dark ? C.charcoal : C.creamDark, display: 'flex', flexDirection: 'column', outline: p.dark ? `2px solid ${C.amber}` : 'none', outlineOffset: -2 }}>
      <div style={{ height: 280, display: 'flex', alignItems: 'center', justifyContent: 'center', background: p.dark ? C.charcoalMid : C.creamDeep, padding: '32px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 14, left: 14 }}>
          <Mono style={{ background: p.dark ? C.amber : C.creamDark, color: p.dark ? C.white : C.muted, padding: '3px 10px', fontSize: 9 }}>{p.badge}</Mono>
        </div>
        {p.dark && <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 60%, rgba(184,114,42,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />}
        <img src={p.img} alt={p.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', filter: p.dark ? 'brightness(0.95)' : 'brightness(0.9)' }} />
      </div>
      <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 40, textTransform: 'uppercase', color: p.dark ? C.white : C.charcoal, margin: '0 0 2px', lineHeight: 1 }}>{p.name}</h3>
        <div style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 500, fontSize: 12, color: p.dark ? '#888' : C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>{p.sub}</div>
        <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: 14, color: p.dark ? '#999' : C.muted, lineHeight: 1.75, margin: '0 0 24px', flex: 1 }}>{p.desc}</p>
        <div style={{ borderTop: `1px solid ${p.dark ? C.charcoalMid : C.border}`, paddingTop: 18, marginBottom: 28 }}>
          {p.specs.map(s => (
            <div key={s.k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: `1px solid ${p.dark ? '#252522' : C.creamDark}` }}>
              <Mono style={{ color: p.dark ? '#555' : C.faint }}>{s.k}</Mono>
              <Mono style={{ fontSize: 11, color: p.dark ? '#bbb' : C.charcoal }}>{s.v}</Mono>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 40, color: p.dark ? C.amber : C.charcoal, lineHeight: 1 }}>{p.price}</span>
          <ProdBtn href={p.url} dark={p.dark} />
        </div>
      </div>
    </div>
  );
}

function ProdBtn({ href, dark }) {
  const [hov, setHov] = useState(false);
  const isExt = href.startsWith('http');
  return (
    <a href={href} target={isExt ? '_blank' : undefined} rel={isExt ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '12px 22px', background: dark ? (hov ? C.amberLight : C.amber) : (hov ? C.charcoal : 'transparent'), border: dark ? 'none' : `1px solid ${hov ? C.charcoal : C.border}`, color: dark ? C.white : (hov ? C.white : C.charcoal), fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', textDecoration: 'none', transition: 'all 0.2s', flexShrink: 0 }}
    >Order →</a>
  );
}

// ── How It Works ──────────────────────────────────────────────────────────────
function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: C.charcoal, padding: '120px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div style={{ width: 40, height: 4, background: C.amber, marginBottom: 20 }} />
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(42px, 5vw, 68px)', color: C.white, textTransform: 'uppercase', lineHeight: 0.9, margin: 0 }}>
              Built for the<br /><span style={{ color: C.amber, fontStyle: 'italic' }}>Long Haul.</span>
            </h2>
          </div>
          <IndustrialBtn href={STORE_URL} small>Shop Now</IndustrialBtn>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, background: C.charcoalMid }} className="steps-grid">
          {[
            { n: '01', t: 'Load & Press', d: 'Place your puck, pull the lever. One smooth motion delivers serious, consistent force across the full plate — every single time.' },
            { n: '02', t: 'Real Force, No Fatigue', d: 'The lever does the work. Your cooks stay fresh through a full service, producing the same quality press on burger one as on burger one hundred.' },
            { n: '03', t: 'Holds Its Heat', d: 'The weight of the press retains heat between smashes, keeping surface temperatures exactly where they need to be — no recovery time, no inconsistency.' },
          ].map((s, i) => (
            <div key={s.n} style={{ padding: '40px 36px', background: C.charcoal, borderLeft: i > 0 ? `1px solid ${C.charcoalMid}` : 'none' }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 52, color: C.charcoalMid, lineHeight: 1, marginBottom: 16 }}>{s.n}</div>
              <div style={{ width: 28, height: 3, background: C.amber, marginBottom: 20 }} />
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 22, color: C.white, textTransform: 'uppercase', letterSpacing: '0.04em', margin: '0 0 12px' }}>{s.t}</h4>
              <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: 15, color: C.muted, lineHeight: 1.7, margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 2, background: C.charcoalMid, aspectRatio: '21/6', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(184,114,42,0.07) 0%, transparent 65%)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, zIndex: 1 }}>
            <div style={{ width: 64, height: 64, background: C.amber, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 22, color: C.white, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Watch It Work</div>
              <Mono style={{ color: '#555' }}>Demo video coming soon</Mono>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .steps-grid > div { border-left: none !important; border-top: 1px solid #2E2E2B; }
        }
      `}</style>
    </section>
  );
}

// ── Reviews ───────────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    name: 'Danny Kowalski',
    role: 'Owner, Kowalski\'s Burger Bar — Pittsburgh, PA',
    stars: 5,
    text: 'We run about 300 covers on a Friday night. Before the IKX1 my guys were burnt out by 9pm just from pressing. Now it\'s effortless — and the crust is more consistent than anything we were getting before. It paid for itself inside two months.',
  },
  {
    name: 'Lena Marsh',
    role: 'Head Chef, The Grill Room — Nashville, TN',
    stars: 5,
    text: 'I\'ve gone through more cheap presses than I can count. This one feels like it was made by people who actually cook. Solid, heavy, easy to clean. It sits on my line like it belongs there. Genuinely the best piece of kit we\'ve bought in years.',
  },
  {
    name: 'Tom Reyes',
    role: 'Food Truck Operator — Austin, TX',
    stars: 5,
    text: 'Small operation, so everything has to earn its spot. The IKX3 is simple but it\'s exactly right — proper weight, cleans in seconds, and my smash burgers actually look like smash burgers now. Ordered the IKX1 last week. These guys know what they\'re doing.',
  },
];

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={C.amber}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function Reviews() {
  return (
    <section id="reviews" style={{ background: C.creamDark, padding: '120px 24px', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ width: 40, height: 4, background: C.amber, marginBottom: 20 }} />
        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(42px, 6vw, 68px)', textTransform: 'uppercase', color: C.charcoal, margin: '0 0 64px', lineHeight: 0.92 }}>
          From the<br /><span style={{ color: C.amber, fontStyle: 'italic' }}>Kitchen.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, background: C.border }} className="review-grid">
          {REVIEWS.map((r, i) => (
            <div key={i} style={{ background: C.white, padding: '40px 36px', display: 'flex', flexDirection: 'column' }}>
              <Stars />
              <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: 15, color: '#4A4640', lineHeight: 1.8, margin: '0 0 32px', flex: 1, fontStyle: 'italic' }}>
                "{r.text}"
              </p>
              <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 20 }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 16, color: C.charcoal, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{r.name}</div>
                <div style={{ fontFamily: 'Barlow, sans-serif', fontSize: 13, color: C.muted, marginTop: 3 }}>{r.role}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 2, background: C.charcoal, padding: '24px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', gap: 3 }}>
              {[...Array(5)].map((_, i) => <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={C.amber}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
            </div>
            <Mono style={{ color: C.faint }}>5.0 average · Batch 01 customers</Mono>
          </div>
          {['NSF Certified', 'FDA Compliant', 'Made in USA'].map(b => (
            <Mono key={b} style={{ color: '#444', border: '1px solid #333', padding: '5px 12px' }}>{b}</Mono>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .review-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  { q: "What's the difference between the IKX1 and IKX3?", a: "The IKX1 is our flagship lever-action press — designed for kitchens running real volume. A single pull delivers serious, consistent force with no fatigue. The IKX3 is our manual smash press: simpler, lighter, and a great starting point. Both are made from the same 304 stainless steel to the same standard." },
  { q: "Where is it made?", a: "Designed and manufactured in Clemmons, North Carolina. We're committed to American manufacturing — not just on the label, but in how every component is sourced and built." },
  { q: "What's it made from?", a: "304 food-grade stainless steel throughout. It won't react with food, it won't warp under heat, and it cleans in seconds. No coatings to chip, no plastic where it counts." },
  { q: "What are the patty boards?", a: "Accessories for the IKX1 rail system. SlimPress fits a single 4oz patty, SliderPress presses four sliders at once, HeartPress is for heart-shaped patties. Bundle all three for $149 and save $46." },
  { q: "How do I order?", a: "Through our Shopify store at ironkitcheninc.com — every button on this site takes you there. Batch 01 is limited to 50 units. We'll have native checkout here at launch." },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ background: C.cream, padding: '120px 24px' }}>
      <div style={{ maxWidth: 780, margin: '0 auto' }}>
        <div style={{ width: 40, height: 4, background: C.amber, marginBottom: 20 }} />
        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(42px, 5vw, 64px)', textTransform: 'uppercase', color: C.charcoal, lineHeight: 0.92, margin: '0 0 56px' }}>
          Questions?<br /><span style={{ color: C.amber, fontStyle: 'italic' }}>Answered.</span>
        </h2>
        {FAQS.map((item, i) => (
          <div key={i} style={{ borderBottom: `1px solid ${C.border}` }}>
            <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '22px 0', textAlign: 'left' }}>
              <span style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: 17, color: open === i ? C.amber : C.charcoal, lineHeight: 1.4, transition: 'color 0.2s' }}>{item.q}</span>
              <div style={{ width: 30, height: 30, border: `1px solid ${open === i ? C.amber : C.border}`, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.25s', transform: open === i ? 'rotate(45deg)' : 'none' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={open === i ? C.amber : C.faint} strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
              </div>
            </button>
            <div style={{ overflow: 'hidden', maxHeight: open === i ? 400 : 0, transition: 'max-height 0.35s ease' }}>
              <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: 15, color: C.muted, lineHeight: 1.8, paddingBottom: 24, margin: 0 }}>{item.a}</p>
            </div>
          </div>
        ))}
        <div style={{ marginTop: 56, display: 'flex', gap: 3, background: C.border }} className="faq-cta">
          <div style={{ flex: 1, background: C.creamDark, padding: '36px 32px', borderLeft: `4px solid ${C.amber}` }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 22, color: C.charcoal, textTransform: 'uppercase', marginBottom: 6 }}>Still have questions?</div>
            <div style={{ fontFamily: 'Barlow, sans-serif', fontSize: 14, color: C.muted }}>You're talking to the guys who built it.</div>
          </div>
          <a href="mailto:hello@ironkitcheninc.com" onMouseEnter={e => e.currentTarget.style.background = C.charcoalMid} onMouseLeave={e => e.currentTarget.style.background = C.charcoal}
            style={{ background: C.charcoal, color: C.cream, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.12em', textDecoration: 'none', padding: '36px 32px', display: 'flex', alignItems: 'center', transition: 'background 0.2s', flexShrink: 0 }}
          >Get in Touch →</a>
        </div>
      </div>
      <style>{`@media (max-width: 600px) { .faq-cta { flex-direction: column !important; } }`}</style>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: '#0D0D0B', borderTop: `4px solid ${C.amber}`, padding: '72px 40px 36px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 60, marginBottom: 64 }} className="footer-grid">
          <div>
            <img src={logo} alt="Iron Kitchen Inc." style={{ height: 44, opacity: 0.85, marginBottom: 20 }} />
            <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: 14, color: '#555', lineHeight: 1.8, maxWidth: 280, margin: '0 0 20px' }}>Professional kitchen tools. Made in America. Built to last generations.</p>
            <Mono style={{ color: '#444' }}>Clemmons, North Carolina</Mono>
          </div>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.white, marginBottom: 20 }}>Navigate</div>
            {[{ label: 'About', href: '#about' }, { label: 'Products', href: '#products' }, { label: 'How It Works', href: '#how-it-works' }, { label: 'FAQ', href: '#faq' }, { label: 'Shop', href: STORE_URL }].map(l => <FootLink key={l.label} {...l} />)}
          </div>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.white, marginBottom: 20 }}>Powered By</div>
            <img src={savorLogo} alt="Savor" style={{ height: 24, opacity: 0.4, marginBottom: 14 }} />
            <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: 12, color: '#444', lineHeight: 1.7, margin: 0 }}>Recipe management app by our technology partner. IKX1 ships with a Savor QR code for in-kitchen use.</p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1a1a17', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <Mono style={{ color: '#333' }}>© MMXXVI Iron Kitchen Inc. — All rights reserved</Mono>
          <Mono style={{ color: '#333' }}>Batch 01 // 50 Units // Made in USA</Mono>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </footer>
  );
}

function FootLink({ href, label }) {
  const [hov, setHov] = useState(false);
  const isExt = href.startsWith('http');
  return (
    <a href={href} target={isExt ? '_blank' : undefined} rel={isExt ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: 'block', fontFamily: 'Barlow, sans-serif', fontSize: 14, color: hov ? C.cream : '#555', textDecoration: 'none', marginBottom: 10, transition: 'color 0.2s' }}
    >{label}</a>
  );
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
}