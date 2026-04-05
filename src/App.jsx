import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specs from './components/Specs';
import BuildLog from './components/BuildLog';
import Recipes from './components/Recipes';
import Footer from './components/Footer';
import TestKitchen from './pages/TestKitchen';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="bg-background-charcoal min-h-screen">
        <Navbar />
        
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={
            <>
              <Hero />
              <Specs />
              <BuildLog />
              <Recipes />
              <Footer />
            </>
          } />

          {/* Test Kitchen Laboratory */}
          <Route path="/test-kitchen" element={<TestKitchen />} />
          
          {/* Optional: Individual Protocol Views */}
          <Route path="/protocol/:id" element={<TestKitchen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;