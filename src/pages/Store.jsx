// src/pages/Store.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import imgPress from '../assets/press.png';
import imgSmash from '../assets/smash.png';
import imgSlim from '../assets/burger-board.png';
import imgSlider from '../assets/slider-board.png';
import imgHeart from '../assets/heart-board.png';
import imgBundle from '../assets/board-bundle.png';

const IKX1_URL = 'https://ironkitcheninc.com/products/burger-patty-hand-press';
const IKX3_URL = 'https://ironkitcheninc.com/products/smash-burger-press';
const BUNDLE_URL = 'https://ironkitcheninc.com/products/patty-board-bundle-press-accessories';
const SLIM_URL = 'https://ironkitcheninc.com/products/slimpress-patty';
const SLIDER_URL = 'https://ironkitcheninc.com/products/sliderpress-patty-board';
const HEART_URL = 'https://ironkitcheninc.com/products/heartpress-patty-board';

const C = {
  cream: '#F5F0E8',
  creamDark: '#EDE6D6',
  creamDeep: '#E2D9C8',
  charcoal: '#1C1C1A',
  charcoalMid: '#2E2E2B',
  charcoalSoft: '#3D3D39',
  amber: '#B8722A',
  amberLight: '#D4893A',
  muted: '#7A7468',
  faint: '#C4BDB0',
  border: '#D0C8B8',
  white: '#FDFAF4',
};

function Mono({ children, style = {} }) {
  return (
    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.amber, ...style }}>
      {children}
    </span>
  );
}

function OrderBtn({ href, primary = true, children = 'Order Now' }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px',
        background: primary ? (hov ? C.amberLight : C.amber) : (hov ? C.charcoalMid : 'transparent'),
        border: `2px solid ${primary ? (hov ? C.amberLight : C.amber) : (hov ? C.charcoalMid : 'rgba(28,28,26,0.25)')}`,
        color: primary ? C.white : C.charcoal,
        fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
        fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.15em',
        textDecoration: 'none', transition: 'all 0.25s', flexShrink: 0,
      }}
    >{children} →</a>
  );
}

function SpecRow({ label, value, dark = false }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '10px 0', borderBottom: `1px solid ${dark ? '#252522' : C.border}` }}>
      <Mono style={{ color: dark ? '#555' : C.faint, fontSize: 8 }}>{label}</Mono>
      <Mono style={{ fontSize: 9, color: dark ? '#ccc' : C.charcoal }}>{value}</Mono>
    </div>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────
function StoreNav() {
  return (
    <nav className="responsive-nav">
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={logo} alt="Iron Kitchen Inc." style={{ height: 32 }} />
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <Link to="/" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, color: C.muted, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em' }}>← Home</Link>
        <div className="nav-divider" />
        <Mono className="nav-mono" style={{ color: C.charcoal, fontSize: 9 }}>Lineup // Batch 01</Mono>
      </div>
    </nav>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Store() {
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); }, []);

  return (
    <div style={{ background: C.white, minHeight: '100vh' }}>
      <StoreNav />

      {/* ── Page Header ── */}
      <section className="section-padding" style={{ background: C.charcoal, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 15% 60%, rgba(184,114,42,0.14) 0%, transparent 55%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Mono style={{ marginBottom: 20, display: 'block' }}>The Lineup // Batch 01 — 50 Units</Mono>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(52px, 9vw, 112px)', color: C.white, lineHeight: 0.87, textTransform: 'uppercase', margin: '0 0 28px', letterSpacing: '-0.01em' }}>
            What<br /><span style={{ color: C.amber, fontStyle: 'italic' }}>We Make.</span>
          </h1>
          <p style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(245,240,232,0.6)', fontSize: 17, maxWidth: 480, margin: 0, lineHeight: 1.7 }}>
            Industrial-grade culinary tools. 304 stainless steel. Engineered in Clemmons, NC for high-volume performance.
          </p>
        </div>
      </section>

      {/* ── IKX1 Flagship ── */}
      <section className="section-padding" style={{ background: C.white }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 2, background: C.border, outline: `2px solid ${C.amber}`, outlineOffset: -2 }} className="store-grid">

            {/* Image */}
            <div className="product-image-container" style={{ background: C.charcoal, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 20, left: 24 }}><Mono style={{ color: '#3a3a37' }}>SKU: IKX1-V1</Mono></div>
              <div style={{ position: 'absolute', top: 20, right: 24 }}>
                <span style={{ background: C.amber, color: C.white, fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.3em', padding: '4px 10px' }}>★ Flagship</span>
              </div>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 60%, rgba(184,114,42,0.13) 0%, transparent 65%)', pointerEvents: 'none' }} />
              <img src={imgPress} alt="IKX1" style={{ width: '80%', height: 'auto', maxHeight: 350, objectFit: 'contain', position: 'relative', zIndex: 1, filter: 'brightness(0.92) contrast(1.08)' }} />
            </div>

            {/* Info */}
            <div className="product-info-padding" style={{ background: C.white, display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1 }}>
                <Mono style={{ marginBottom: 10, display: 'block' }}>Lever-Action Hand Press</Mono>
                <h2 className="product-title" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: C.charcoal, lineHeight: 0.9, margin: '0 0 8px', textTransform: 'uppercase' }}>IKX1</h2>
                <div style={{ width: 36, height: 3, background: C.amber, margin: '0 0 28px' }} />
                <p style={{ fontFamily: 'Barlow, sans-serif', color: C.muted, lineHeight: 1.8, fontSize: 15, marginBottom: 36 }}>
                  A precision pivot system delivers 147 lbs of force with a single smooth pull — designed for production environments where consistency is the only metric.
                </p>
                <div style={{ marginBottom: 40 }}>
                  <SpecRow label="Mechanical Advantage" value="4.2×" />
                  <SpecRow label="Output Force" value="147 lbs" />
                  <SpecRow label="Material" value="304 Stainless" />
                  <SpecRow label="Tolerance" value='+/- 0.005"' />
                  <SpecRow label="Total Mass" value="3.52 lbs" />
                </div>
              </div>
              <div className="product-price-row responsive-price-row">
                <span className="price-tag">$949</span>
                <OrderBtn href={IKX1_URL}>Order Now</OrderBtn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IKX3 ── */}
      <section className="section-padding" style={{ background: C.cream, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 2, background: C.border }} className="store-grid reverse-mobile">

            {/* Info */}
            <div className="product-info-padding" style={{ background: C.white, display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1 }}>
                <Mono style={{ marginBottom: 10, display: 'block' }}>Manual Smash Press</Mono>
                <h2 className="product-title" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: C.charcoal, lineHeight: 0.9, margin: '0 0 8px', textTransform: 'uppercase' }}>IKX3</h2>
                <div style={{ width: 36, height: 3, background: C.amber, margin: '0 0 28px' }} />
                <p style={{ fontFamily: 'Barlow, sans-serif', color: C.muted, lineHeight: 1.8, fontSize: 15, marginBottom: 36 }}>
                  Heavy-duty manual smash press. Heat-dissipating spring coil handle, high-mass stainless plate. Built to sustain Maillard temps across consecutive smashes.
                </p>
                <div style={{ marginBottom: 40 }}>
                  <SpecRow label="Handle" value="Spring Coil" />
                  <SpecRow label="Base Plate" value="Full Round" />
                  <SpecRow label="Material" value="304 Stainless" />
                  <SpecRow label="Finish" value="CNC Machined" />
                </div>
              </div>
              <div className="product-price-row responsive-price-row">
                <span className="price-tag">$29</span>
                <OrderBtn href={IKX3_URL} primary={false}>Order Now</OrderBtn>
              </div>
            </div>

            {/* Image */}
            <div className="product-image-container" style={{ background: C.creamDark, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={imgSmash} alt="IKX3" style={{ width: '75%', height: 'auto', maxHeight: 300, objectFit: 'contain', filter: 'brightness(0.9)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Patty Boards ── */}
      <section className="section-padding">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <Mono style={{ display: 'block', marginBottom: 14 }}>Press Accessories</Mono>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(40px, 5vw, 64px)', textTransform: 'uppercase', color: C.charcoal, lineHeight: 0.92, margin: 0 }}>
              The Board<br /><span style={{ color: C.amber, fontStyle: 'italic' }}>System.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, background: C.border, marginBottom: 2 }} className="board-grid">
            {[
              { name: 'SlimPress', tag: 'Single Patty', img: imgSlim, desc: 'Single circular cutout. Precision fit for standard 4oz puck. Slots into IKX1.', price: '$65', url: SLIM_URL },
              { name: 'SliderPress', tag: '4× Array', img: imgSlider, desc: 'Four-cutout array for simultaneous slider production. Full rail compatibility.', price: '$65', url: SLIDER_URL },
              { name: 'HeartPress', tag: 'Heart Form', img: imgHeart, desc: 'Heart-form cutout. Same tolerances, same rail fit. For when the occasion calls.', price: '$65', url: HEART_URL },
            ].map(board => (
              <BoardCard key={board.name} board={board} />
            ))}
          </div>

          {/* Bundle */}
          <div className="bundle-container" style={{ background: C.charcoal, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', borderTop: `3px solid ${C.amber}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }} className="bundle-header">
              <img src={imgBundle} alt="Board Bundle" style={{ height: 80, objectFit: 'contain', filter: 'brightness(1.1)' }} />
              <div>
                <Mono style={{ display: 'block', marginBottom: 6 }}>System Bundle — Save $46</Mono>
                <h3 className="bundle-title" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: C.white, margin: '0 0 4px', textTransform: 'uppercase' }}>Complete Arsenal</h3>
                <p className="bundle-desc" style={{ fontFamily: 'Barlow, sans-serif', color: C.muted, margin: 0 }}>Slim + Slider + Heart Boards.</p>
              </div>
            </div>
            {/* Bundle Pricing Container */}
            <div className="bundle-pricing responsive-bundle-pricing" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <div style={{ textAlign: 'left' }}> {/* Explicitly left-aligned */}
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#444', textDecoration: 'line-through', letterSpacing: '0.2em', marginBottom: 2 }}>$195</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 36, color: C.white, lineHeight: 1 }}>$149</div>
              </div>
              <OrderBtn href={BUNDLE_URL}>Order</OrderBtn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer Logistics ── */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px', borderLeft: `4px solid ${C.amber}`, background: C.creamDark }}>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: 13, color: C.muted, margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: C.charcoal, fontWeight: 700 }}>Ordering: </strong>
            Batch 01 fulfilled via ironkitcheninc.com. Limited to 50 units. Native checkout coming at launch.
          </p>
        </div>
      </section>

      <style>{`
  .section-padding { padding: 80px 40px; }
  .product-info-padding { padding: 56px; }
  .product-image-container { min-height: 480px; }
  .product-title { font-size: 72px; }
  .price-tag { font-size: 52px; }
  .product-price-row { 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    padding-top: 24px; 
    border-top: 1px solid ${C.border}; 
  }
  
  .responsive-nav { 
    position: sticky; top: 0; z-index: 999; 
    background: rgba(245,240,232,0.97); backdrop-filter: blur(10px); 
    border-bottom: 1px solid ${C.border}; padding: 0 40px; height: 68px; 
    display: flex; align-items: center; justify-content: space-between; 
  }

  @media (max-width: 900px) {
    .section-padding { padding: 60px 24px; }
    .product-info-padding { padding: 32px; }
    
    .responsive-price-row {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 20px;
    }
    
    .responsive-price-row a {
      width: 100%;
      justify-content: center;
    }

    .product-image-container { min-height: 320px; padding: 40px !important; }
    .product-title { font-size: 48px !important; }
    .price-tag { font-size: 38px !important; }
    .store-grid { grid-template-columns: 1fr !important; }
    .reverse-mobile { display: flex !important; flex-direction: column-reverse !important; }
    .board-grid { grid-template-columns: 1fr !important; }
    .responsive-nav { padding: 0 20px; }
    
    .bundle-container { padding: 40px 24px; justify-content: flex-start; text-align: left; }
    
    /* Audit Fix: Left-shifting the bundle pricing to match the cards */
    .responsive-bundle-pricing {
      flex-direction: column !important;
      align-items: flex-start !important; 
      gap: 20px;
      width: 100%;
    }

    .responsive-bundle-pricing a {
      width: 100%;
      justify-content: center;
    }

    .bundle-header {
      text-align: left;
      width: 100%;
      flex-direction: row !important; /* Keep icon and text side-by-side even on mobile */
    }
    
    .bundle-title {
      font-size: 26px !important;
    }
    
    .bundle-desc {
      font-size: 13px !important;
    }
  }
`}</style>
    </div>
  );
}

function BoardCard({ board }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{ background: C.creamDark, padding: '40px 32px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
        <img src={board.img} alt={board.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', filter: 'grayscale(0.3) contrast(1.1)' }} />
      </div>
      <Mono style={{ fontSize: 9, marginBottom: 8 }}>{board.tag}</Mono>
      <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 26, color: C.charcoal, margin: '0 0 10px', textTransform: 'uppercase' }}>{board.name}</h3>
      <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: 13, color: C.muted, lineHeight: 1.6, margin: '0 0 24px', flex: 1 }}>{board.desc}</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, borderTop: `1px solid ${C.border}` }}>
        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 24, color: C.charcoal }}>{board.price}</span>
        <a href={board.url} target="_blank" rel="noopener noreferrer"
          onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', color: hov ? C.amber : C.charcoal, textDecoration: 'none', transition: 'color 0.2s', borderBottom: `2px solid ${hov ? C.amber : C.border}`, paddingBottom: 2 }}
        >Order →</a>
      </div>
    </div>
  );
}