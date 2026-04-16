import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import logoW from '../assets/logo_W.png';
import imgPress from '../assets/press.png';
import imgSmash from '../assets/smash.png';
import imgSlim from '../assets/burger-board.png';
import imgHero from '../assets/hero4.png';
import imgSchematics from '../assets/schematics2.png';

const C = {
  white: '#FFFFFF',
  offwhite: '#F8F8F6',
  tile: '#F2F2EE',
  steel: '#E4E4DF',
  mid: '#B0AFA8',
  muted: '#7A7972',
  ink: '#1A1A18',
  inkLight: '#2C2C28',
  black: '#0D0D0B',
  red: '#C41E1E',
  redHover: '#A01818',
};

function Label({ children, style = {}, color = C.muted }) {
  return (
    <span
      style={{
        fontFamily: "'DM Mono', 'IBM Plex Mono', monospace",
        fontSize: 10,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { label: 'Products', href: '#products' },
    { label: 'Specs', href: '#specs' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];
  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 64,
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0)',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? `1px solid ${C.steel}` : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 40px',
        }}
      >
        <a
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            marginRight: 'auto',
          }}
        >
          <img
            src={scrolled ? logo : logoW}
            alt="Iron Kitchen Inc."
            style={{ height: 36, transition: 'opacity 0.3s' }}
          />
        </a>
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontFamily: "'DM Mono', 'IBM Plex Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: scrolled ? C.inkLight : 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = scrolled ? C.ink : '#fff')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled ? C.inkLight : 'rgba(255,255,255,0.7)')
              }
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:hello@ironkitcheninc.com"
            style={{
              fontFamily: "'DM Mono', 'IBM Plex Mono', monospace",
              fontSize: 10,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              padding: '9px 20px',
              background: C.ink,
              color: C.white,
              textDecoration: 'none',
              transition: 'background 0.2s',
              marginLeft: 8,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = C.red)}
            onMouseLeave={(e) => (e.currentTarget.style.background = C.ink)}
          >
            Inquire
          </a>
        </div>
        <button
          className="nav-mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            display: 'none',
            flexDirection: 'column',
            gap: 5,
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 22,
                height: 1,
                background: scrolled ? C.ink : C.white,
                transform: mobileOpen
                  ? i === 0
                    ? 'rotate(45deg) translate(4px,4px)'
                    : i === 2
                    ? 'rotate(-45deg) translate(4px,-4px)'
                    : 'scaleX(0)'
                  : 'none',
                transition: 'all 0.25s',
              }}
            />
          ))}
        </button>
      </nav>
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: 64,
            left: 0,
            right: 0,
            zIndex: 999,
            background: C.white,
            borderBottom: `1px solid ${C.steel}`,
            padding: '24px 40px 32px',
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '14px 0',
                fontFamily: "'DM Mono', monospace",
                fontSize: 12,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: C.ink,
                textDecoration: 'none',
                borderBottom: `1px solid ${C.steel}`,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:hello@ironkitcheninc.com"
            style={{
              display: 'inline-block',
              marginTop: 20,
              padding: '12px 24px',
              background: C.ink,
              color: C.white,
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Inquire
          </a>
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          nav { padding: 0 20px !important; }
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: C.black,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
    >
      <img
        src={imgHero}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 30%',
          opacity: 0.28,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 64,
          left: 0,
          right: 0,
          padding: '10px 40px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 8,
        }}
        className="hero-top-bar"
      >
        {['Clemmons, NC', 'Est. MMXXV', 'Batch 01 — 50 Units', 'Made in USA'].map((t, i) => (
          <Label key={i} color="rgba(255,255,255,0.25)">
            {t}
          </Label>
        ))}
      </div>
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '0 40px 80px',
          maxWidth: 1200,
          width: '100%',
          alignSelf: 'flex-start',
          marginTop: 'auto',
        }}
        className="hero-content"
      >
        <div style={{ marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 24, height: 1, background: C.red }} />
          <Label color="rgba(255,255,255,0.4)">Iron Kitchen Inc. — Premium Kitchen Equipment</Label>
        </div>
        <h1
          style={{
            fontFamily: "'Bebas Neue', 'Barlow Condensed', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(72px, 13vw, 180px)',
            color: C.white,
            lineHeight: 0.88,
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
            margin: '0 0 40px',
          }}
        >
          Built for<br />the Line.
        </h1>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 32,
          }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', 'IBM Plex Mono', monospace",
              fontSize: 13,
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.9,
              maxWidth: 400,
              margin: 0,
              letterSpacing: '0.04em',
            }}
          >
            Professional kitchen tools designed by engineers,<br />made in North Carolina, built
            to outlast careers.
          </p>
          <div style={{ display: 'flex', gap: 2 }}>
            <a
              href="#products"
              style={{
                padding: '14px 32px',
                background: C.white,
                color: C.ink,
                fontFamily: "'DM Mono', 'IBM Plex Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = C.red;
                e.currentTarget.style.color = C.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = C.white;
                e.currentTarget.style.color = C.ink;
              }}
            >
              See Products
            </a>
            <a
              href="#about"
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: 'rgba(255,255,255,0.5)',
                border: '1px solid rgba(255,255,255,0.15)',
                fontFamily: "'DM Mono', 'IBM Plex Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                e.currentTarget.style.color = C.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
              }}
            >
              Our Story
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          right: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
        }}
        className="hero-scroll"
      >
        <Label color="rgba(255,255,255,0.2)" style={{ writingMode: 'vertical-rl', letterSpacing: '0.3em' }}>
          Scroll
        </Label>
        <div style={{ width: 1, height: 48, background: 'rgba(255,255,255,0.15)' }} />
      </div>
      <style>{`
        @media (max-width: 768px) {
          .hero-top-bar { padding: 10px 20px !important; }
          .hero-content { padding: 0 20px 60px !important; }
          .hero-scroll { display: none !important; }
        }
      `}</style>
    </section>
  );
}

function CutBar() {
  const desktopItems = [
    'Made in America',
    'Family Owned',
    'Batch 01 — 50 Units',
    'Clemmons, NC',
    '304 Stainless Steel',
    'NSF Certified',
    'FDA Compliant',
  ];
  const mobileItems = ['Made in America', 'Family Owned'];

  return (
    <>
      <div
        className="cutbar-desktop"
        style={{
          background: C.ink,
          padding: '0 40px',
          display: 'flex',
          alignItems: 'center',
          borderTop: `2px solid ${C.red}`,
          overflowX: 'auto',
        }}
      >
        {desktopItems.map((item, i) => (
          <div
            key={i}
            style={{
              padding: '18px 32px',
              borderRight: '1px solid rgba(255,255,255,0.07)',
              flexShrink: 0,
            }}
          >
            <Label color="rgba(255,255,255,0.35)">{item}</Label>
          </div>
        ))}
      </div>
      <div
        className="cutbar-mobile"
        style={{
          background: C.ink,
          display: 'none',
          alignItems: 'center',
          borderTop: `2px solid ${C.red}`,
        }}
      >
        {mobileItems.map((item, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              padding: '18px 0',
              textAlign: 'center',
              borderRight: i === 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
            }}
          >
            <Label color="rgba(255,255,255,0.35)">{item}</Label>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .cutbar-desktop { display: none !important; }
          .cutbar-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}

const PRODUCTS = [
  {
    id: 'IKX-1',
    name: 'IKX-1',
    sub: 'Lever-Action Hand Press',
    status: 'Flagship',
    price: '$949',
    img: imgPress,
    featured: true,
    desc: 'A lever system that converts a single smooth pull into serious, consistent force. Designed for kitchens running volume without cutting corners.',
    specs: [
      { k: 'Material', v: '304 SS' },
      { k: 'Output Force', v: '147 lbs' },
      { k: 'Plate', v: '6.0″ × 3.0″' },
      { k: 'Weight', v: '3.52 lbs' },
      { k: 'Origin', v: 'USA' },
    ],
  },
  {
    id: 'IKX-3',
    name: 'IKX-3',
    sub: 'Manual Smash Press',
    status: 'Entry',
    price: '$29',
    img: imgSmash,
    featured: false,
    desc: 'Heavy-duty spring handle, full stainless plate. No moving parts. Pick it up and press — the right way to smash a burger.',
    specs: [
      { k: 'Material', v: '304 SS' },
      { k: 'Handle', v: 'Spring coil' },
      { k: 'Operation', v: 'Manual' },
      { k: 'Origin', v: 'USA' },
    ],
  },
  {
    id: 'BOARDS',
    name: 'Rail Boards',
    sub: 'IKX-1 Accessory System',
    status: 'System',
    price: 'From $65',
    img: imgSlim,
    featured: false,
    desc: 'Precision-fit boards for the IKX-1 rail system. Slim, Slider, and Heart configurations. Bundle all three.',
    specs: [
      { k: 'SlimPress', v: 'Single 4 oz' },
      { k: 'SliderPress', v: '4× array' },
      { k: 'HeartPress', v: 'Custom shape' },
      { k: 'Bundle', v: '$149 (save $46)' },
    ],
  },
];

function ProductCard({ product }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: product.featured ? C.ink : C.white,
        border: `1px solid ${product.featured ? 'transparent' : C.steel}`,
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s',
        transform: hov ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hov ? '0 24px 48px rgba(0,0,0,0.1)' : '0 0 0 rgba(0,0,0,0)',
      }}
    >
      <div
        style={{
          padding: '16px 24px',
          borderBottom: `1px solid ${product.featured ? 'rgba(255,255,255,0.07)' : C.steel}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Label color={product.featured ? 'rgba(255,255,255,0.3)' : C.muted}>{product.id}</Label>
        <Label
          style={{
            background: product.featured ? C.red : C.steel,
            color: product.featured ? C.white : C.muted,
            padding: '3px 10px',
            fontSize: 9,
          }}
        >
          {product.status}
        </Label>
      </div>
      <div
        style={{
          height: 260,
          background: product.featured ? '#181816' : C.tile,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 32,
        }}
      >
        <img
          src={product.img}
          alt={product.name}
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain',
            transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
            transform: hov ? 'scale(1.04)' : 'scale(1)',
            filter: product.featured ? 'brightness(0.9) contrast(1.1)' : 'none',
          }}
        />
      </div>
      <div style={{ padding: '28px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3
          style={{
            fontFamily: "'Bebas Neue', 'Barlow Condensed', sans-serif",
            fontWeight: 400,
            fontSize: 48,
            color: product.featured ? C.white : C.ink,
            margin: '0 0 2px',
            letterSpacing: '0.02em',
            lineHeight: 1,
          }}
        >
          {product.name}
        </h3>
        <Label
          color={product.featured ? 'rgba(255,255,255,0.3)' : C.muted}
          style={{ display: 'block', marginBottom: 16 }}
        >
          {product.sub}
        </Label>
        <p
          style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 13,
            color: product.featured ? 'rgba(255,255,255,0.5)' : C.muted,
            lineHeight: 1.75,
            margin: '0 0 24px',
            flex: 1,
          }}
        >
          {product.desc}
        </p>
        <div style={{ marginBottom: 24 }}>
          {product.specs.map((s, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '7px 0',
                borderTop: `1px solid ${
                  product.featured ? 'rgba(255,255,255,0.06)' : C.steel
                }`,
              }}
            >
              <Label color={product.featured ? 'rgba(255,255,255,0.2)' : C.mid}>{s.k}</Label>
              <Label color={product.featured ? 'rgba(255,255,255,0.6)' : C.inkLight} style={{ fontSize: 11 }}>
                {s.v}
              </Label>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <span
            style={{
              fontFamily: "'Bebas Neue', 'Barlow Condensed', sans-serif",
              fontSize: 44,
              color: product.featured ? C.white : C.ink,
              lineHeight: 1,
              letterSpacing: '0.02em',
            }}
          >
            {product.price}
          </span>
          <a
            href="mailto:hello@ironkitcheninc.com"
            style={{
              padding: '11px 20px',
              background: product.featured ? C.red : C.ink,
              color: C.white,
              fontFamily: "'DM Mono', 'IBM Plex Mono', monospace",
              fontSize: 10,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background 0.2s',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = product.featured ? C.redHover : '#333')}
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = product.featured ? C.red : C.ink)
            }
          >
            Inquire →
          </a>
        </div>
      </div>
    </div>
  );
}

function Products() {
  return (
    <section id="products" style={{ background: C.offwhite, padding: '120px 40px' }} className="products-section">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 64,
            flexWrap: 'wrap',
            gap: 24,
            paddingBottom: 40,
            borderBottom: `1px solid ${C.steel}`,
          }}
          className="products-header"
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 2, height: 16, background: C.red }} />
              <Label>Product Line</Label>
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', 'Barlow Condensed', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(52px, 7vw, 88px)',
                color: C.ink,
                margin: 0,
                lineHeight: 0.88,
                letterSpacing: '0.01em',
              }}
            >
              The Equipment.
            </h2>
          </div>
          <Label
            color={C.muted}
            style={{ maxWidth: 280, lineHeight: 2.1, textAlign: 'right' }}
            className="products-sub"
          >
            Three products. One standard.<br />Every piece made in Clemmons, North Carolina.
          </Label>
        </div>
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}
          className="product-grid"
        >
          {PRODUCTS.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .product-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 768px) {
          .products-section { padding: 80px 20px !important; }
          .products-header { margin-bottom: 40px !important; padding-bottom: 32px !important; }
          .products-sub { text-align: left !important; margin-top: 16px; }
        }
      `}</style>
    </section>
  );
}

function Specs() {
  return (
    <section id="specs" style={{ background: C.white, padding: '120px 40px', borderTop: `1px solid ${C.steel}` }} className="specs-section">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}
          className="specs-grid"
        >
          <div
            style={{
              background: C.tile,
              border: `1px solid ${C.steel}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '48px',
              position: 'relative',
              overflow: 'hidden',
            }}
            className="specs-img-container"
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `linear-gradient(${C.steel} 1px, transparent 1px), linear-gradient(90deg, ${C.steel} 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
                opacity: 0.6,
              }}
            />
            <img
              src={imgSchematics}
              alt="IKX-1 Schematics"
              style={{ maxWidth: '100%', position: 'relative', filter: 'contrast(1.1)' }}
            />
            <div style={{ position: 'absolute', bottom: 16, left: 16 }}>
              <Label color={C.mid}>Technical Drawing — IKX-1</Label>
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 2, height: 16, background: C.red }} />
              <Label>IKX-1 Specifications</Label>
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', 'Barlow Condensed', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(48px, 5vw, 72px)',
                color: C.ink,
                margin: '0 0 40px',
                lineHeight: 0.9,
                letterSpacing: '0.01em',
              }}
            >
              Precision<br />Engineered.
            </h2>
            <div style={{ marginBottom: 40 }}>
              {[
                { k: 'Construction', v: '304 Food-Grade Stainless Steel' },
                { k: 'Press Output', v: '147 lbs of consistent force' },
                { k: 'Plate Dimensions', v: '6.0″ × 3.0″' },
                { k: 'Total Weight', v: '3.52 lbs' },
                { k: 'Mechanism', v: 'Lever-action, single pull' },
                { k: 'Surface Finish', v: 'Brushed, food-safe' },
                { k: 'Certifications', v: 'NSF Certified, FDA Compliant' },
                { k: 'Origin', v: 'Clemmons, North Carolina, USA' },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '13px 0',
                    borderBottom: `1px solid ${C.steel}`,
                  }}
                >
                  <Label color={C.mid}>{s.k}</Label>
                  <span
                    style={{
                      fontFamily: 'system-ui, sans-serif',
                      fontSize: 13,
                      color: C.ink,
                      textAlign: 'right',
                      maxWidth: '55%',
                    }}
                  >
                    {s.v}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="/blueprints/press-blueprint.pdf"
              target="_blank"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '13px 24px',
                border: `1px solid ${C.steel}`,
                color: C.ink,
                fontFamily: "'DM Mono', 'IBM Plex Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = C.ink;
                e.currentTarget.style.color = C.white;
                e.currentTarget.style.borderColor = C.ink;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = C.ink;
                e.currentTarget.style.borderColor = C.steel;
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
              </svg>
              Download Blueprint PDF
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .specs-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 768px) {
          .specs-section { padding: 80px 20px !important; }
          .specs-img-container { padding: 24px !important; }
        }
      `}</style>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ background: C.ink, padding: '120px 40px', position: 'relative', overflow: 'hidden' }} className="about-section">
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}
          className="about-grid"
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 2, height: 16, background: C.red }} />
              <Label color="rgba(255,255,255,0.3)">Iron Kitchen Inc.</Label>
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', 'Barlow Condensed', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(52px, 6vw, 80px)',
                color: C.white,
                margin: '0 0 40px',
                lineHeight: 0.9,
                letterSpacing: '0.01em',
              }}
            >
              Two Brothers.<br />One Standard.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }} className="about-text">
              {[
                'Founded in Clemmons, North Carolina by two brothers with backgrounds in mechanical engineering and automation.',
                'After years designing precision systems, we saw a problem: too many kitchen tools are imported, built to a price point, and designed to be replaced. We believed they could be better.',
                'Iron Kitchen Inc. is our answer. Thoughtful design, quality materials, and tools built to perform the same way on day one as they do ten years later.',
              ].map((text, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: 15,
                    color: 'rgba(255,255,255,0.45)',
                    lineHeight: 1.8,
                    margin: 0,
                    paddingLeft: 20,
                    borderLeft: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }} className="about-cards">
            {[
              {
                n: '01',
                title: 'Made in America',
                body: 'Designed and manufactured in Clemmons, NC. Not a marketing claim — a commitment.',
              },
              {
                n: '02',
                title: 'Serious Materials',
                body: 'Food-grade stainless steel, machined to tight tolerances. Nothing cheap, nothing that wears out.',
              },
              {
                n: '03',
                title: 'Family Owned',
                body: 'No investors, no shortcuts. Two brothers who put their name on everything they ship.',
              },
              {
                n: '04',
                title: 'Built to Last Generations',
                body: 'The kind of tool you hand down. Made to outlast trends, kitchens, and careers.',
              },
            ].map((item) => (
              <div
                key={item.n}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  padding: '28px',
                  display: 'flex',
                  gap: 24,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
              >
                <Label
                  color="rgba(255,255,255,0.15)"
                  style={{ fontSize: 13, flexShrink: 0, marginTop: 2 }}
                >
                  {item.n}
                </Label>
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', 'IBM Plex Mono', monospace",
                      fontSize: 11,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.7)',
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </div>
                  <p
                    style={{
                      fontFamily: 'system-ui, sans-serif',
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.35)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 768px) {
          .about-section { padding: 80px 20px !important; }
          .about-text p { padding-left: 16px !important; font-size: 14px !important; }
          .about-cards div { padding: 20px !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}

const FAQS = [
  {
    q: "What's the difference between the IKX-1 and IKX-3?",
    a: "The IKX-1 is our flagship lever-action press — designed for kitchens running real volume. A single pull delivers consistent force with no fatigue. The IKX-3 is our manual smash press: simpler, lighter, a great starting point. Both are 304 stainless to the same standard.",
  },
  {
    q: "Where is it made?",
    a: "Designed and manufactured in Clemmons, North Carolina. American manufacturing is not just on the label — it's how every component is sourced and built.",
  },
  {
    q: "What's it made from?",
    a: "304 food-grade stainless steel throughout. It won't react with food, won't warp under heat, and cleans in seconds. No coatings to chip, no plastic where it counts.",
  },
  {
    q: "What are the patty boards?",
    a: "Accessories for the IKX-1 rail system. SlimPress fits a single 4oz patty, SliderPress presses four sliders at once, HeartPress is for heart-shaped patties. Bundle all three for $149 and save $46.",
  },
  {
    q: "How do I order?",
    a: "We're currently taking inquiries directly. Email hello@ironkitcheninc.com. Batch 01 is limited to 50 units.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ background: C.white, padding: '120px 40px', borderTop: `1px solid ${C.steel}` }} className="faq-section">
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ width: 2, height: 16, background: C.red }} />
          <Label>FAQ</Label>
        </div>
        <h2
          style={{
            fontFamily: "'Bebas Neue', 'Barlow Condensed', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(52px, 6vw, 76px)',
            color: C.ink,
            margin: '0 0 64px',
            lineHeight: 0.9,
            letterSpacing: '0.01em',
          }}
          className="faq-title"
        >
          Questions<br />Answered.
        </h2>
        {FAQS.map((item, i) => (
          <div key={i} style={{ borderBottom: `1px solid ${C.steel}` }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                padding: '22px 0',
                textAlign: 'left',
              }}
            >
              <span
                style={{
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: 15,
                  fontWeight: 500,
                  color: open === i ? C.red : C.ink,
                  lineHeight: 1.4,
                  transition: 'color 0.2s',
                }}
              >
                {item.q}
              </span>
              <div
                style={{
                  width: 28,
                  height: 28,
                  border: `1px solid ${open === i ? C.red : C.steel}`,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s',
                  transform: open === i ? 'rotate(45deg)' : 'none',
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={open === i ? C.red : C.mid} strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </button>
            <div
              style={{
                overflow: 'hidden',
                maxHeight: open === i ? 300 : 0,
                transition: 'max-height 0.3s ease',
              }}
            >
              <p
                style={{
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: 14,
                  color: C.muted,
                  lineHeight: 1.85,
                  paddingBottom: 24,
                  margin: 0,
                }}
              >
                {item.a}
              </p>
            </div>
          </div>
        ))}
        <div
          style={{
            marginTop: 64,
            background: C.ink,
            padding: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap',
          }}
          className="faq-cta"
        >
          <div>
            <div
              style={{
                fontFamily: "'DM Mono', 'IBM Plex Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: 8,
              }}
            >
              Still have questions?
            </div>
            <div
              style={{
                fontFamily: "'Bebas Neue', 'Barlow Condensed', sans-serif",
                fontSize: 28,
                color: C.white,
                letterSpacing: '0.02em',
              }}
            >
              You're talking to the builders.
            </div>
          </div>
          <a
            href="mailto:hello@ironkitcheninc.com"
            style={{
              padding: '13px 28px',
              background: C.red,
              color: C.white,
              fontFamily: "'DM Mono', 'IBM Plex Mono', monospace",
              fontSize: 10,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background 0.2s',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = C.redHover)}
            onMouseLeave={(e) => (e.currentTarget.style.background = C.red)}
          >
            Get in Touch →
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .faq-section { padding: 80px 20px !important; }
          .faq-title { margin-bottom: 40px !important; }
          .faq-cta { padding: 24px !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: C.black, padding: '64px 40px 32px', borderTop: '1px solid #1a1a18' }} className="footer-section">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: 60,
            marginBottom: 56,
            paddingBottom: 56,
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
          className="footer-grid"
        >
          <div>
            <img src={logo} alt="Iron Kitchen Inc." style={{ height: 36, opacity: 0.7, marginBottom: 24 }} />
            <p
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: 13,
                color: 'rgba(255,255,255,0.25)',
                lineHeight: 1.8,
                maxWidth: 260,
                margin: '0 0 24px',
              }}
            >
              Professional kitchen equipment.<br />Made in America. Built to last generations.
            </p>
            <Label color="rgba(255,255,255,0.15)">Clemmons, North Carolina</Label>
          </div>
          <div>
            <Label color="rgba(255,255,255,0.3)" style={{ display: 'block', marginBottom: 20 }}>
              Navigate
            </Label>
            {[
              { label: 'Products', href: '#products' },
              { label: 'Specifications', href: '#specs' },
              { label: 'About', href: '#about' },
              { label: 'FAQ', href: '#faq' },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  display: 'block',
                  marginBottom: 12,
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.3)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div>
            <Label color="rgba(255,255,255,0.3)" style={{ display: 'block', marginBottom: 20 }}>
              Contact
            </Label>
            <a
              href="mailto:hello@ironkitcheninc.com"
              style={{
                display: 'block',
                marginBottom: 12,
                fontFamily: 'system-ui, sans-serif',
                fontSize: 13,
                color: 'rgba(255,255,255,0.3)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
            >
              hello@ironkitcheninc.com
            </a>
            <div style={{ marginTop: 24, display: 'flex', gap: 4 }}>
              {['NSF', 'FDA', 'USA'].map((b) => (
                <span
                  key={b}
                  style={{
                    padding: '4px 10px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontFamily: "'DM Mono', 'IBM Plex Mono', monospace",
                    fontSize: 9,
                    letterSpacing: '0.15em',
                    color: 'rgba(255,255,255,0.2)',
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <Label color="rgba(255,255,255,0.12)">© MMXXVI Iron Kitchen Inc. — All rights reserved</Label>
          <Label color="rgba(255,255,255,0.12)">Batch 01 · 50 Units · Made in USA</Label>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-section { padding: 48px 20px 24px !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; margin-bottom: 40px !important; padding-bottom: 40px !important; }
        }
      `}</style>
    </footer>
  );
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CutBar />
      <Products />
      <Specs />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}