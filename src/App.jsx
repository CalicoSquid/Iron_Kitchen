import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

// Store is temporarily unwired — all product CTAs route to email inquiry
function ComingSoon() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0D0D0B',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 24,
    }}>
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
        Iron Kitchen Inc.
      </span>
      <h1 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(52px, 10vw, 96px)',
        color: '#FFFFFF',
        margin: 0,
        letterSpacing: '0.02em',
        lineHeight: 1,
      }}>
        Store Coming Soon.
      </h1>
      <a href="/" style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 10,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.4)',
        textDecoration: 'none',
        marginTop: 8,
        transition: 'color 0.2s',
      }}
        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
      >← Back to Home</a>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{ background: '#F8F8F6', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<ComingSoon />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
