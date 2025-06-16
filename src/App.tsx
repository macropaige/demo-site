import React, { useEffect, useState } from 'react';
import './Main.scss';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`background-layer ${scrolled ? 'scrolled' : ''}`} />
      <header className={`main-header ${scrolled ? 'shrink' : ''}`}>
        <div className="logo">🌟</div>
        <div className="header-container">
          <nav className="nav-center">
            <a href="#hero">Home</a>
            <a href="#info">Info</a>
          </nav>
        </div>
      </header>

      <main className="app-container">
        <div className="content">
          <section className="hero" id="hero">
            <h2>Welcome to the Landing Page</h2>
            <p>This is a modern landing page built with Vite + React + TypeScript.</p>
          </section>

          <section className="info" id="info">
            <div className="info-wrapper">
              <h3>Details</h3>
              <p>Some info about your product or service goes here.</p>
            </div>
          </section>
        </div>
      </main>

      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑ Top
      </button>
    </>
  );
};

export default App;

