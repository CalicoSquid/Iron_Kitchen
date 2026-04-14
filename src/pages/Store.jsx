import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import imgPress from '../assets/press.png';
import imgSmash from '../assets/smash.png';
import imgSlim from '../assets/burger-board.png';
import imgSlider from '../assets/slider-board.png';
import imgHeart from '../assets/heart-board.png';
import imgBundle from '../assets/board-bundle.png';

const IKX1_URL   = 'https://ironkitcheninc.com/products/burger-patty-hand-press';
const IKX3_URL   = 'https://ironkitcheninc.com/products/smash-burger-press';
const BUNDLE_URL = 'https://ironkitcheninc.com/products/patty-board-bundle-press-accessories';
const SLIM_URL   = 'https://ironkitcheninc.com/products/slimpress-patty';
const SLIDER_URL = 'https://ironkitcheninc.com/products/sliderpress-patty-board';
const HEART_URL  = 'https://ironkitcheninc.com/products/heartpress-patty-board';

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

function SpecRow({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '10px 0', borderBottom: `1px solid ${C.border}` }}>
      <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: 13, color: C.muted }}>{label}</span>
      <Mono style={{ fontSize: 10, color: C.charcoal }}>{value}</Mono>
    </div>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────
function StoreNav() {
  return (
    <nav className="responsive-nav">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img src={logo} alt="Iron Kitchen Inc." style={{ height: 34 }} />
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <Link to="/" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, color: C.muted, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em' }}>← Home</Link>
        <div className="nav-divider" style={{ width: 1, height: 18, background: C.border }} />
        <Mono style={{ color: C.charcoal, fontSize: 9 }}>What We Make // Batch 01</Mono>
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
          <div style={{ width: 40, height: 4, background: C.amber, marginBottom: 24 }} />
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(52px, 9vw, 112px)', color: C.white, lineHeight: 0.87, textTransform: 'uppercase', margin: '0 0 28px', letterSpacing: '-0.01em' }}>
            What<br /><span style={{ color: C.amber, fontStyle: 'italic' }}>We Make.</span>
          </h1>
          <p style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(245,240,232,0.6)', fontSize: 17, maxWidth: 460, margin: 0, lineHeight: 1.75 }}>
            Tools built to last. Every piece made from food-grade stainless steel, designed in North Carolina, and built to the same standard we'd want in our own kitchen.
          </p>
        </div>
      </section>

      {/* ── IKX1 Flagship ── */}
      <section className="section-padding" style={{ background: C.white }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 2, background: C.border, outline: `2px solid ${C.amber}`, outlineOffset: -2 }} className="store-grid">

            <div className="product-image-container" style={{ background: C.charcoal, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 20, left: 24 }}><Mono style={{ color: '#3a3a37' }}>SKU: IKX1-V1</Mono></div>
              <div style={{ position: 'absolute', top: 20, right: 24 }}>
                <span style={{ background: C.amber, color: C.white, fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.3em', padding: '4px 10px' }}>★ Flagship</span>
              </div>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 60%, rgba(184,114,42,0.13) 0%, transparent 65%)', pointerEvents: 'none' }} />
              <img src={imgPress} alt="IKX1" style={{ width: '80%', height: 'auto', maxHeight: 350, objectFit: 'contain', position: 'relative', zIndex: 1, filter: 'brightness(0.92) contrast(1.08)' }} />
            </div>

            <div className="product-info-padding" style={{ background: C.white, display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1 }}>
                <Mono style={{ marginBottom: 10, display: 'block' }}>Lever-Action Hand Press</Mono>
                <h2 className="product-title" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: C.charcoal, lineHeight: 0.9, margin: '0 0 8px', textTransform: 'uppercase' }}>IKX1</h2>
                <div style={{ width: 36, height: 3, background: C.amber, margin: '0 0 28px' }} />
                <p style={{ fontFamily: 'Barlow, sans-serif', color: C.muted, lineHeight: 1.8, fontSize: 15, marginBottom: 36 }}>
                  Our flagship press. One smooth pull delivers serious, consistent force — shift after shift, burger after burger. Built for kitchens that run volume without cutting corners.
                </p>
                <div style={{ marginBottom: 40 }}>
                  <SpecRow label="Force output" value="147 lbs" />
                  <SpecRow label="Material" value="304 Stainless" />
                  <SpecRow label="Press plate" value='6.0" × 3.0"' />
                  <SpecRow label="Weight" value="3.52 lbs" />
                  <SpecRow label="Made in" value="USA" />
                </div>
              </div>
              <div className="product-price-row responsive-price-row">
                <span className="price-tag" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: C.charcoal, lineHeight: 1 }}>$949</span>
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

            <div className="product-info-padding" style={{ background: C.white, display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1 }}>
                <Mono style={{ marginBottom: 10, display: 'block' }}>Manual Smash Press</Mono>
                <h2 className="product-title" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: C.charcoal, lineHeight: 0.9, margin: '0 0 8px', textTransform: 'uppercase' }}>IKX3</h2>
                <div style={{ width: 36, height: 3, background: C.amber, margin: '0 0 28px' }} />
                <p style={{ fontFamily: 'Barlow, sans-serif', color: C.muted, lineHeight: 1.8, fontSize: 15, marginBottom: 36 }}>
                  No moving parts, no fuss. Heavy spring handle, solid stainless plate. Pick it up and press — the right way to smash a burger, at a price that makes sense to start.
                </p>
                <div style={{ marginBottom: 40 }}>
                  <SpecRow label="Operation" value="Manual" />
                  <SpecRow label="Handle" value="Spring coil" />
                  <SpecRow label="Plate" value="Full round" />
                  <SpecRow label="Material" value="304 Stainless" />
                  <SpecRow label="Made in" value="USA" />
                </div>
              </div>
              <div className="product-price-row responsive-price-row">
                <span className="price-tag" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: C.charcoal, lineHeight: 1 }}>$29</span>
                <OrderBtn href={IKX3_URL} primary={false}>Order Now</OrderBtn>
              </div>
            </div>

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
            <div style={{ width: 40, height: 4, background: C.amber, marginBottom: 20 }} />
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(40px, 5vw, 64px)', textTransform: 'uppercase', color: C.charcoal, lineHeight: 0.92, margin: 0 }}>
              The Board<br /><span style={{ color: C.amber, fontStyle: 'italic' }}>System.</span>
            </h2>
            <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: 15, color: C.muted, lineHeight: 1.7, maxWidth: 480, marginTop: 20, marginBottom: 0 }}>
              Precision-fit boards for the IKX1 rail. Shape your patty before it ever hits the heat — consistent weight, consistent size, every time.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, background: C.border, marginBottom: 2 }} className="board-grid">
            {[
              { name: 'SlimPress', tag: 'Single Patty', img: imgSlim, desc: 'Single circular cutout. Precision fit for a standard 4oz patty. Slots straight into the IKX1 rail.', price: '$65', url: SLIM_URL },
              { name: 'SliderPress', tag: '4× Array', img: imgSlider, desc: 'Press four sliders in one motion. Great for high-volume service or catering runs.', price: '$65', url: SLIDER_URL },
              { name: 'HeartPress', tag: 'Heart Form', img: imgHeart, desc: 'Same tolerances, same rail fit — just a different shape. For when the occasion calls for it.', price: '$65', url: HEART_URL },
            ].map(board => (
              <BoardCard key={board.name} board={board} />
            ))}
          </div>

          {/* Bundle */}
          <div className="bundle-container" style={{ background: C.charcoal, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', borderTop: `3px solid ${C.amber}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }} className="bundle-header">
              <img src={imgBundle} alt="Board Bundle" style={{ height: 80, objectFit: 'contain', filter: 'brightness(1.1)', flexShrink: 0 }} />
              <div>
                <Mono style={{ display: 'block', marginBottom: 6 }}>Bundle — Save $46</Mono>
                <h3 className="bundle-title" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, color: C.white, margin: '0 0 4px', textTransform: 'uppercase' }}>All Three Boards</h3>
                <p className="bundle-desc" style={{ fontFamily: 'Barlow, sans-serif', color: C.muted, margin: 0, fontSize: 14 }}>SlimPress + SliderPress + HeartPress. One order, full coverage.</p>
              </div>
            </div>
            <div className="bundle-pricing responsive-bundle-pricing" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#444', textDecoration: 'line-through', letterSpacing: '0.2em', marginBottom: 2 }}>$195</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 36, color: C.white, lineHeight: 1 }}>$149</div>
              </div>
              <OrderBtn href={BUNDLE_URL}>Order Bundle</OrderBtn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer note ── */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 28px', borderLeft: `4px solid ${C.amber}`, background: C.creamDark }}>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: 14, color: C.muted, margin: 0, lineHeight: 1.7 }}>
            <strong style={{ color: C.charcoal, fontWeight: 700 }}>Ordering: </strong>
            All orders are currently fulfilled via ironkitcheninc.com — every button on this page takes you there. Batch 01 is limited to 50 units. Native checkout coming to this site at launch.
          </p>
        </div>
      </section>

      <style>{`
        .section-padding { padding: 80px 40px; }
        .product-info-padding { padding: 56px; }
        .product-image-container { min-height: 480px; padding: 64px; }
        .product-title { font-size: 72px; }
        .price-tag { font-size: 52px; }
        .product-price-row { display: flex; align-items: center; justify-content: space-between; padding-top: 24px; border-top: 1px solid ${C.border}; }
        .bundle-container { padding: 48px 56px; gap: 32px; }
        .bundle-title { font-size: 28px; }
        .bundle-desc { font-size: 14px; }
        .responsive-nav {
          position: sticky; top: 0; z-index: 999;
          background: rgba(245,240,232,0.97); backdrop-filter: blur(10px);
          border-bottom: 1px solid ${C.border}; padding: 0 40px; height: 68px;
          display: flex; align-items: center; justify-content: space-between;
        }
        @media (max-width: 900px) {
          .section-padding { padding: 60px 20px; }
          .product-info-padding { padding: 28px; }
          .product-image-container { min-height: 280px; padding: 40px !important; }
          .product-title { font-size: 48px !important; }
          .price-tag { font-size: 38px !important; }
          .store-grid { grid-template-columns: 1fr !important; }
          .reverse-mobile { display: flex !important; flex-direction: column-reverse !important; }
          .board-grid { grid-template-columns: 1fr !important; }
          .responsive-nav { padding: 0 20px; }
          .bundle-container { padding: 32px 24px !important; }
          .bundle-title { font-size: 22px !important; }
          .responsive-price-row { flex-direction: column !important; align-items: flex-start !important; gap: 16px; }
          .responsive-price-row a { width: 100%; justify-content: center; }
          .responsive-bundle-pricing { flex-direction: column !important; align-items: flex-start !important; gap: 16px; width: 100%; }
          .responsive-bundle-pricing a { width: 100%; justify-content: center; }
        }
      `}</style>
    </div>
  );
}

function BoardCard({ board }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{ background: C.creamDark, padding: '36px 32px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
        <img src={board.img} alt={board.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', filter: 'grayscale(0.2) contrast(1.1)' }} />
      </div>
      <Mono style={{ fontSize: 9, marginBottom: 8 }}>{board.tag}</Mono>
      <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 26, color: C.charcoal, margin: '0 0 10px', textTransform: 'uppercase' }}>{board.name}</h3>
      <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: 13, color: C.muted, lineHeight: 1.7, margin: '0 0 24px', flex: 1 }}>{board.desc}</p>
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