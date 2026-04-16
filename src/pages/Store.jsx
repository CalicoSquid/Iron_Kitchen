import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import imgPress from '../assets/press.png';
import imgSmash from '../assets/smash.png';
import imgSlim from '../assets/burger-board.png';
import imgSlider from '../assets/slider-board.png';
import imgHeart from '../assets/heart-board.png';
import imgBundle from '../assets/board-bundle.png';

const C = {
  white:     '#FFFFFF',
  offwhite:  '#F8F8F6',
  tile:      '#F2F2EE',
  steel:     '#E4E4DF',
  mid:       '#B0AFA8',
  muted:     '#7A7972',
  ink:       '#1A1A18',
  inkLight:  '#2C2C28',
  black:     '#0D0D0B',
  red:       '#C41E1E',
  redHover:  '#A01818',
};

function Label({ children, style = {}, color = C.muted }) {
  return (
    <span style={{ fontFamily: "'DM Mono', 'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color, ...style }}>
      {children}
    </span>
  );
}

const PRODUCTS = [
  {
    id: 'IKX-1',
    name: 'IKX-1',
    sub: 'Lever-Action Hand Press',
    status: 'Flagship',
    price: '$949',
    priceNum: 949,
    img: imgPress,
    featured: true,
    desc: 'One smooth pull delivers serious, consistent force — shift after shift, burger after burger. Built for kitchens running volume without cutting corners.',
    specs: [
      { k: 'Material', v: '304 SS' },
      { k: 'Output Force', v: '147 lbs' },
      { k: 'Plate', v: '6.0″ × 3.0″' },
      { k: 'Weight', v: '3.52 lbs' },
      { k: 'Made in', v: 'USA' },
    ],
  },
  {
    id: 'IKX-3',
    name: 'IKX-3',
    sub: 'Manual Smash Press',
    status: 'Entry',
    price: '$29',
    priceNum: 29,
    img: imgSmash,
    featured: false,
    desc: 'No moving parts, no fuss. Heavy spring handle, solid stainless plate. Pick it up and press — the right way to smash a burger.',
    specs: [
      { k: 'Material', v: '304 SS' },
      { k: 'Handle', v: 'Spring coil' },
      { k: 'Operation', v: 'Manual' },
      { k: 'Made in', v: 'USA' },
    ],
  },
];

const ACCESSORIES = [
  {
    id: 'SLIM',
    name: 'SlimPress Board',
    sub: 'Single 4oz patty — IKX-1 rail fit',
    price: 65,
    priceNum: 65,
    img: imgSlim,
  },
  {
    id: 'SLIDER',
    name: 'SliderPress Board',
    sub: '4× simultaneous slider array',
    price: 65,
    priceNum: 65,
    img: imgSlider,
  },
  {
    id: 'HEART',
    name: 'HeartPress Board',
    sub: 'Heart-form cutout — same rail fit',
    price: 65,
    priceNum: 65,
    img: imgHeart,
  },
  {
    id: 'BUNDLE',
    name: 'Full Board Bundle',
    sub: 'All three boards — save $46',
    price: 149,
    priceNum: 149,
    img: imgBundle,
    badge: 'Best Value',
  },
];

// ── Nav ───────────────────────────────────────────────────────────────────────
function StoreNav({ view }) {
  const steps = ['Select', 'Accessories', 'Confirm'];
  const stepIndex = view === 'storefront' ? 0 : view === 'upsell' ? 1 : 2;

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 999,
      height: 64, background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(16px)',
      borderBottom: `1px solid ${C.steel}`,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 40px',
    }}>
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        <img src={logo} alt="Iron Kitchen Inc." style={{ height: 34 }} />
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0 }} className="step-indicator">
        {steps.map((step, i) => (
          <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 14px' }}>
              <div style={{ width: 20, height: 20, background: i <= stepIndex ? C.ink : 'transparent', border: `1px solid ${i <= stepIndex ? C.ink : C.steel}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s', flexShrink: 0 }}>
                {i < stepIndex
                  ? <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={C.white} strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                  : <Label style={{ fontSize: 9, color: i <= stepIndex ? C.white : C.mid }}>{i + 1}</Label>
                }
              </div>
              <Label color={i <= stepIndex ? C.ink : C.mid}>{step}</Label>
            </div>
            {i < steps.length - 1 && <div style={{ width: 20, height: 1, background: i < stepIndex ? C.ink : C.steel, transition: 'background 0.3s' }} />}
          </div>
        ))}
      </div>
      <Link to="/" style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.mid, textDecoration: 'none', flexShrink: 0 }}>← Home</Link>
      <style>{`@media (max-width: 640px) { .step-indicator { display: none !important; } }`}</style>
    </nav>
  );
}

// ── Shared button ─────────────────────────────────────────────────────────────
function SelectBtn({ onClick, featured, children, style = {} }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        padding: '13px 24px',
        background: featured ? (hov ? C.redHover : C.red) : (hov ? C.inkLight : C.ink),
        color: C.white, border: 'none', cursor: 'pointer',
        fontFamily: "'DM Mono', 'IBM Plex Mono', monospace",
        fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
        transition: 'background 0.2s', flexShrink: 0, minHeight: 44, ...style,
      }}
    >{children}</button>
  );
}

// ── View 1: Storefront ────────────────────────────────────────────────────────
function StorefrontView({ onSelect, onSelectAccessory }) {
  return (
    <div style={{ background: C.offwhite, minHeight: '100vh', padding: '80px 40px' }} className="store-pad">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 64, paddingBottom: 40, borderBottom: `1px solid ${C.steel}` }} className="store-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 2, height: 16, background: C.red }} />
            <Label>What We Make</Label>
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, fontSize: 'clamp(48px, 8vw, 96px)', color: C.ink, lineHeight: 0.88, margin: 0, letterSpacing: '0.01em' }}>
            The Equipment.
          </h1>
        </div>

        {/* Main products */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, background: C.steel, marginBottom: 2 }} className="prod-grid">
          {PRODUCTS.map(p => <StorefrontCard key={p.id} product={p} onSelect={onSelect} />)}
        </div>

        {/* Accessories strip */}
        <div style={{ marginTop: 48, marginBottom: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 2, height: 14, background: C.red }} />
              <Label>IKX-1 Rail Accessories</Label>
            </div>
            <Label color={C.mid}>Compatible with IKX-1 — ships separately</Label>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, background: C.steel }} className="acc-grid">
            {ACCESSORIES.map(acc => <AccessoryCard key={acc.id} acc={acc} onSelect={onSelectAccessory} />)}
          </div>
        </div>

        {/* Batch note */}
        <div style={{ marginTop: 2, background: C.white, padding: '20px 28px', borderLeft: `3px solid ${C.red}`, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <Label color={C.red}>Batch 01</Label>
          <div style={{ width: 1, height: 14, background: C.steel }} />
          <Label color={C.muted}>Limited to 50 units — Clemmons, North Carolina</Label>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .store-pad { padding: 48px 20px !important; }
          .store-header { margin-bottom: 40px !important; padding-bottom: 32px !important; }
          .prod-grid { grid-template-columns: 1fr !important; }
          .acc-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .acc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function StorefrontCard({ product, onSelect }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: product.featured ? C.ink : C.white, display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.3s', boxShadow: hov ? '0 24px 48px rgba(0,0,0,0.12)' : 'none', outline: product.featured ? `2px solid ${C.red}` : 'none', outlineOffset: -2 }}
    >
      <div style={{ height: 280, background: product.featured ? '#181816' : C.tile, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, position: 'relative' }}>
        <div style={{ position: 'absolute', top: 16, left: 20 }}><Label color={product.featured ? 'rgba(255,255,255,0.25)' : C.mid}>{product.id}</Label></div>
        <div style={{ position: 'absolute', top: 16, right: 20 }}>
          <span style={{ background: product.featured ? C.red : C.steel, color: product.featured ? C.white : C.muted, fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '3px 10px' }}>{product.status}</span>
        </div>
        {product.featured && <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 60%, rgba(196,30,30,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />}
        <img src={product.img} alt={product.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', filter: product.featured ? 'brightness(0.9) contrast(1.1)' : 'none', transition: 'transform 0.4s', transform: hov ? 'scale(1.04)' : 'scale(1)' }} />
      </div>
      <div style={{ padding: '32px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, fontSize: 52, color: product.featured ? C.white : C.ink, margin: '0 0 2px', letterSpacing: '0.02em', lineHeight: 1 }}>{product.name}</h2>
        <Label color={product.featured ? 'rgba(255,255,255,0.3)' : C.mid} style={{ display: 'block', marginBottom: 16 }}>{product.sub}</Label>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: product.featured ? 'rgba(255,255,255,0.45)' : C.muted, lineHeight: 1.8, margin: '0 0 28px', flex: 1 }}>{product.desc}</p>
        <div style={{ marginBottom: 28 }}>
          {product.specs.map((s, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderTop: `1px solid ${product.featured ? 'rgba(255,255,255,0.07)' : C.steel}` }}>
              <Label color={product.featured ? 'rgba(255,255,255,0.2)' : C.mid}>{s.k}</Label>
              <Label color={product.featured ? 'rgba(255,255,255,0.6)' : C.inkLight} style={{ fontSize: 11 }}>{s.v}</Label>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 24, borderTop: `1px solid ${product.featured ? 'rgba(255,255,255,0.1)' : C.steel}`, gap: 12, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, color: product.featured ? C.white : C.ink, lineHeight: 1, letterSpacing: '0.02em' }}>{product.price}</span>
          <SelectBtn onClick={() => onSelect(product)} featured={product.featured}>
            {product.id === 'IKX-1' ? 'Configure & Order' : 'Order Now'} →
          </SelectBtn>
        </div>
      </div>
    </div>
  );
}

function AccessoryCard({ acc, onSelect }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: hov ? C.white : C.tile, display: 'flex', flexDirection: 'column', transition: 'background 0.2s', cursor: 'pointer' }}
    >
      {/* Image */}
      <div style={{ height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px 20px', position: 'relative', background: hov ? C.offwhite : C.tile, transition: 'background 0.2s' }}>
        {acc.badge && (
          <div style={{ position: 'absolute', top: 10, right: 10 }}>
            <span style={{ background: C.red, color: C.white, fontFamily: "'DM Mono', monospace", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '2px 8px' }}>{acc.badge}</span>
          </div>
        )}
        <img src={acc.img} alt={acc.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', filter: 'grayscale(0.15)', transition: 'transform 0.3s', transform: hov ? 'scale(1.06)' : 'scale(1)' }} />
      </div>

      {/* Info */}
      <div style={{ padding: '16px 18px 20px', flex: 1, display: 'flex', flexDirection: 'column', borderTop: `1px solid ${C.steel}` }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, fontSize: 22, color: C.ink, letterSpacing: '0.02em', lineHeight: 1, marginBottom: 4 }}>{acc.name}</div>
        <Label color={C.muted} style={{ fontSize: 9, marginBottom: 16, flex: 1 }}>{acc.sub}</Label>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTop: `1px solid ${C.steel}` }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, color: C.ink, letterSpacing: '0.02em', lineHeight: 1 }}>${acc.price}</span>
          <button onClick={() => onSelect(acc)}
            style={{ padding: '8px 14px', background: hov ? C.ink : 'transparent', border: `1px solid ${hov ? C.ink : C.steel}`, color: hov ? C.white : C.ink, fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s' }}
          >Order →</button>
        </div>
      </div>
    </div>
  );
}

// ── View 2: Upsell ────────────────────────────────────────────────────────────
function UpsellView({ baseProduct, selected, onToggle, onContinue, onBack }) {
  const selectedTotal = selected.reduce((sum, id) => {
    const acc = ACCESSORIES.find(a => a.id === id);
    return sum + (acc ? acc.price : 0);
  }, 0);

  return (
    <div style={{ background: C.offwhite, minHeight: '100vh' }}>
      <div style={{ background: C.ink, padding: '28px 40px', borderBottom: `2px solid ${C.red}` }} className="upsell-banner">
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 44, height: 44, background: C.red, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.white} strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, color: C.white, lineHeight: 1, letterSpacing: '0.02em' }}>IKX-1 Added to Your Order</div>
              <Label color="rgba(255,255,255,0.35)">Complete your press system before checkout</Label>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Label color="rgba(255,255,255,0.3)" style={{ display: 'block', marginBottom: 4 }}>Press subtotal</Label>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, color: C.white, lineHeight: 1, letterSpacing: '0.02em' }}>{baseProduct.price}</div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '64px 40px' }} className="upsell-pad">
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 2, height: 16, background: C.red }} />
            <Label>Complete Your System</Label>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, fontSize: 'clamp(44px, 6vw, 72px)', color: C.ink, lineHeight: 0.88, margin: '0 0 16px', letterSpacing: '0.01em' }}>Add Rail Boards.</h2>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 15, color: C.muted, lineHeight: 1.7, maxWidth: 520, margin: 0 }}>
            The IKX-1 rail system accepts precision-fit boards for consistent patty forming before the press. Ships with your order.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 32 }}>
          {ACCESSORIES.map(acc => {
            const isSelected = selected.includes(acc.id);
            return (
              <div key={acc.id} onClick={() => onToggle(acc.id)}
                style={{ background: isSelected ? C.white : C.tile, border: `1px solid ${isSelected ? C.ink : C.steel}`, padding: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16, transition: 'all 0.2s', outline: isSelected ? `2px solid ${C.red}` : 'none', outlineOffset: -2, minHeight: 80 }}
              >
                <div style={{ width: 22, height: 22, minWidth: 22, background: isSelected ? C.red : 'transparent', border: `1px solid ${isSelected ? C.red : C.steel}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                  {isSelected && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={C.white} strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
                </div>
                <div style={{ width: 52, height: 52, minWidth: 52, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={acc.img} alt={acc.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'grayscale(0.2)' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, color: C.ink, letterSpacing: '0.02em', lineHeight: 1 }}>{acc.name}</span>
                    {acc.badge && <span style={{ background: C.red, color: C.white, fontFamily: "'DM Mono', monospace", fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '2px 8px', flexShrink: 0 }}>{acc.badge}</span>}
                  </div>
                  <Label color={C.muted} style={{ fontSize: 9 }}>{acc.sub}</Label>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, color: isSelected ? C.red : C.ink, letterSpacing: '0.02em', lineHeight: 1, transition: 'color 0.2s' }}>+${acc.price}</div>
                  <Label color={isSelected ? C.red : C.mid} style={{ fontSize: 9 }}>{isSelected ? 'Selected ✓' : 'Add'}</Label>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ background: C.white, border: `1px solid ${C.steel}`, padding: '24px 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              {selected.length === 0
                ? <Label color={C.mid}>No accessories selected</Label>
                : <div>
                    <Label color={C.muted} style={{ display: 'block', marginBottom: 4 }}>{selected.length} accessory{selected.length > 1 ? 's' : ''} added</Label>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: C.ink, letterSpacing: '0.02em', lineHeight: 1 }}>Total: ${baseProduct.priceNum + selectedTotal}</div>
                  </div>
              }
            </div>
            <div style={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
              <button onClick={onBack}
                style={{ padding: '13px 18px', background: 'none', border: `1px solid ${C.steel}`, color: C.muted, fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s', minHeight: 44 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.ink; e.currentTarget.style.color = C.ink; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.steel; e.currentTarget.style.color = C.muted; }}
              >← Back</button>
              <SelectBtn onClick={onContinue} featured>
                {selected.length === 0 ? 'Skip Accessories' : 'Continue'} →
              </SelectBtn>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .upsell-banner { padding: 20px !important; }
          .upsell-pad { padding: 40px 20px !important; }
        }
      `}</style>
    </div>
  );
}

// ── View 3: Confirmation ──────────────────────────────────────────────────────
function ConfirmView({ baseProduct, selected, onBack }) {
  const [submitted, setSubmitted] = useState(false);
  const selectedAccs = ACCESSORIES.filter(a => selected.includes(a.id));
  const total = baseProduct.priceNum + selectedAccs.reduce((s, a) => s + a.price, 0);

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', background: C.offwhite, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
        <div style={{ maxWidth: 560, width: '100%', textAlign: 'center' }}>
          <div style={{ width: 72, height: 72, background: C.red, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.white} strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(48px, 10vw, 64px)', color: C.ink, margin: '0 0 12px', letterSpacing: '0.02em', lineHeight: 0.9 }}>Order Received.</h2>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 15, color: C.muted, lineHeight: 1.8, marginBottom: 40 }}>
            Thanks for your order. The team at Iron Kitchen Inc. will be in touch within 24 hours to confirm your Batch 01 unit and arrange shipping.
          </p>
          <div style={{ background: C.white, border: `1px solid ${C.steel}`, padding: '24px', textAlign: 'left', marginBottom: 32 }}>
            <Label style={{ display: 'block', marginBottom: 16 }}>Order Summary</Label>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 12, borderBottom: `1px solid ${C.steel}`, marginBottom: 12 }}>
              <span style={{ fontFamily: 'system-ui', fontSize: 14, color: C.ink, fontWeight: 500 }}>{baseProduct.name}</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: C.ink }}>{baseProduct.price}</span>
            </div>
            {selectedAccs.map(a => (
              <div key={a.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontFamily: 'system-ui', fontSize: 13, color: C.muted }}>{a.name}</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: C.muted }}>${a.price}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 16, borderTop: `1px solid ${C.steel}`, marginTop: 8 }}>
              <Label>Total</Label>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: C.ink, letterSpacing: '0.02em' }}>${total}</span>
            </div>
          </div>
          <Link to="/" style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.mid, textDecoration: 'none' }}>← Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: C.offwhite, minHeight: '100vh', padding: '80px 40px' }} className="confirm-pad">
      <div style={{ maxWidth: 660, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 2, height: 16, background: C.red }} />
            <Label>Batch 01 — Reserve Your Unit</Label>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, fontSize: 'clamp(44px, 6vw, 72px)', color: C.ink, lineHeight: 0.88, margin: 0, letterSpacing: '0.01em' }}>
            Confirm Order.
          </h2>
        </div>

        <div style={{ background: C.white, border: `1px solid ${C.steel}`, marginBottom: 32 }}>
          <div style={{ padding: '20px 24px', borderBottom: `1px solid ${C.steel}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Label>Order Summary</Label>
            <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.mid, textDecoration: 'underline', padding: 0, minHeight: 32 }}>Edit</button>
          </div>
          <div style={{ padding: '20px 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 16, borderBottom: `1px solid ${C.steel}`, marginBottom: 12 }}>
              <div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: C.ink, letterSpacing: '0.02em', lineHeight: 1 }}>{baseProduct.name}</div>
                <Label color={C.muted}>{baseProduct.sub}</Label>
              </div>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: C.ink, letterSpacing: '0.02em' }}>{baseProduct.price}</span>
            </div>
            {selectedAccs.map(a => (
              <div key={a.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: `1px solid ${C.tile}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <img src={a.img} alt={a.name} style={{ height: 32, width: 32, objectFit: 'contain' }} />
                  <span style={{ fontFamily: 'system-ui', fontSize: 13, color: C.ink }}>{a.name}</span>
                </div>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: C.ink }}>${a.price}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, marginTop: 8 }}>
              <Label>Total</Label>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: C.ink, letterSpacing: '0.02em' }}>${total}</span>
            </div>
          </div>
        </div>

        <div style={{ background: C.white, border: `1px solid ${C.steel}`, padding: '28px 24px', marginBottom: 16 }}>
          <Label style={{ display: 'block', marginBottom: 20 }}>Your Details</Label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }} className="form-grid">
            {['First Name', 'Last Name'].map(p => (
              <div key={p}>
                <Label color={C.mid} style={{ display: 'block', marginBottom: 6 }}>{p}</Label>
                <input placeholder={p} style={{ width: '100%', padding: '12px 14px', border: `1px solid ${C.steel}`, background: C.offwhite, fontFamily: 'system-ui', fontSize: 15, color: C.ink, outline: 'none', boxSizing: 'border-box', minHeight: 48 }} onFocus={e => e.target.style.borderColor = C.ink} onBlur={e => e.target.style.borderColor = C.steel} />
              </div>
            ))}
          </div>
          {[{ p: 'Email Address', type: 'email' }, { p: 'Business / Restaurant (optional)', type: 'text' }].map(f => (
            <div key={f.p} style={{ marginBottom: 12 }}>
              <Label color={C.mid} style={{ display: 'block', marginBottom: 6 }}>{f.p}</Label>
              <input type={f.type} placeholder={f.p} style={{ width: '100%', padding: '12px 14px', border: `1px solid ${C.steel}`, background: C.offwhite, fontFamily: 'system-ui', fontSize: 15, color: C.ink, outline: 'none', boxSizing: 'border-box', minHeight: 48 }} onFocus={e => e.target.style.borderColor = C.ink} onBlur={e => e.target.style.borderColor = C.steel} />
            </div>
          ))}
        </div>

        <div style={{ background: C.tile, border: `1px solid ${C.steel}`, padding: '14px 20px', marginBottom: 24, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.mid} strokeWidth="1.5" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          <Label color={C.muted} style={{ lineHeight: 1.9 }}>This is a reservation inquiry for Batch 01. The IKI team will contact you within 24 hours to confirm your unit and arrange payment.</Label>
        </div>

        <div style={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <button onClick={onBack}
            style={{ padding: '15px 24px', background: 'none', border: `1px solid ${C.steel}`, color: C.muted, fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s', minHeight: 52 }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.ink; e.currentTarget.style.color = C.ink; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.steel; e.currentTarget.style.color = C.muted; }}
          >← Back</button>
          <button onClick={() => setSubmitted(true)}
            style={{ flex: 1, padding: '15px 32px', background: C.red, color: C.white, border: 'none', cursor: 'pointer', fontFamily: "'DM Mono', 'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', transition: 'background 0.2s', minHeight: 52 }}
            onMouseEnter={e => e.currentTarget.style.background = C.redHover}
            onMouseLeave={e => e.currentTarget.style.background = C.red}
          >Reserve My Unit →</button>
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .confirm-pad { padding: 48px 20px !important; }
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────
export default function Store() {
  const [view, setView] = useState('storefront');
  const [baseProduct, setBaseProduct] = useState(null);
  const [selected, setSelected] = useState([]);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [view]);

  const handleSelect = (product) => {
    setBaseProduct(product);
    setSelected([]);
    setView(product.id === 'IKX-1' ? 'upsell' : 'confirm');
  };

  // Accessory purchased standalone — skip upsell, go straight to confirm
  const handleSelectAccessory = (acc) => {
    setBaseProduct({ ...acc, price: `$${acc.price}`, sub: acc.sub });
    setSelected([]);
    setView('confirm');
  };

  const handleToggle = (id) => {
    if (id === 'BUNDLE') {
      setSelected(prev => prev.includes('BUNDLE') ? [] : ['BUNDLE']);
    } else {
      setSelected(prev => {
        const withoutBundle = prev.filter(i => i !== 'BUNDLE');
        return withoutBundle.includes(id) ? withoutBundle.filter(i => i !== id) : [...withoutBundle, id];
      });
    }
  };

  return (
    <div>
      <StoreNav view={view} />
      {view === 'storefront' && <StorefrontView onSelect={handleSelect} onSelectAccessory={handleSelectAccessory} />}
      {view === 'upsell' && <UpsellView baseProduct={baseProduct} selected={selected} onToggle={handleToggle} onContinue={() => setView('confirm')} onBack={() => setView('storefront')} />}
      {view === 'confirm' && <ConfirmView baseProduct={baseProduct} selected={selected} onBack={() => baseProduct?.id === 'IKX-1' ? setView('upsell') : setView('storefront')} />}
    </div>
  );
}