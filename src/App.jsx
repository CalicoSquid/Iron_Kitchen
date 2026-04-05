// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specs from './components/Specs';
import Recipes from './components/Recipes';
import BuildLog from './components/BuildLog';

function App() {
  return (
    <div className="bg-background-charcoal text-text-light min-h-screen selection:bg-savor-tangerine selection:text-white">
      
      {/* 1. Integrated Navigation (Logo & Theming) */}
      <Navbar />

      <main>
        
        {/* 2. Hero Section: The "Cook in Color" Statement */}
        <section id="home">
          <Hero />
        </section>

        {/* 3. Specs Section: "Engineered Heat" - where we schematic */}
        <section id="specs" className="border-t border-zinc-neutral/10">
          <Specs />
        </section>

        <section id="engineering" className="border-t border-zinc-neutral/10">
          <BuildLog />
        </section>

        {/* 4. Recipes Section: "The Flavor Lab" - The Savor Bridge */}
        <section id="recipes" className="bg-black border-t border-zinc-neutral/10">
          <Recipes />
        </section>

      </main>

      {/* 5. Integrated Footer */}
      <footer className="py-20 border-t border-zinc-neutral/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-[10px] text-zinc-neutral font-mono uppercase tracking-widest text-center">
          © 2026 Iron Kitchen Inc. // Savor Co. // Engineered in America
        </div>
      </footer>

    </div>
  );
}

export default App;